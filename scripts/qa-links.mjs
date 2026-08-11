/**
 * Crawls every public route and reports:
 *   - broken internal links
 *   - failed asset/network requests
 *   - browser console errors and uncaught exceptions
 *   - horizontal overflow at 375, 768 and 1440
 *   - missing, over-long or duplicate title / description / canonical
 *   - pages with no JSON-LD, or JSON-LD that does not parse
 *   - light mode being the default on a first visit
 *
 *   npm run qa:links
 *
 * Progress is appended to qa-report.txt as it goes, so a long run stays visible.
 */
import { chromium } from "playwright";
import { appendFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ensureServer, publicRoutes, BASE } from "./qa-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const reportPath = path.join(root, "qa-report.txt");

writeFileSync(reportPath, "");
const log = (line = "") => {
  appendFileSync(reportPath, `${line}\n`);
  console.log(line);
};

/** Override with QA_WIDTHS=360,390,412,430 to sweep real handset widths. */
const WIDTHS = (process.env.QA_WIDTHS ?? "375,768,1440")
  .split(",")
  .map((w) => Number(w.trim()))
  .filter(Boolean);

const stop = await ensureServer();
const routes = [...(await publicRoutes()), "/admin/login"];

log(`Checking ${routes.length} routes at ${BASE}`);
log();

const browser = await chromium.launch();
const problems = [];
const titles = new Map();
const descriptions = new Map();
const linkTargets = new Set();

const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

for (const [i, route] of routes.entries()) {
  const started = Date.now();
  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(`uncaught: ${err.message}`));
  page.on("response", (res) => {
    if (res.status() >= 400) failedRequests.push(`${res.status()} ${res.url()}`);
  });
  page.on("requestfailed", (req) => {
    const reason = req.failure()?.errorText ?? "unknown";
    // Next prefetches route payloads; closing the page cancels them in flight.
    // A cancellation is not a broken asset.
    if (reason.includes("ERR_ABORTED")) return;
    failedRequests.push(`failed ${req.url()} (${reason})`);
  });

  const found = [];
  let response;
  try {
    response = await page.goto(`${BASE}${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });
    await page.waitForLoadState("load", { timeout: 20_000 }).catch(() => {});
    await page.waitForTimeout(350);
  } catch (error) {
    found.push(`navigation failed: ${error.message.split("\n")[0]}`);
  }

  if (response && response.status() >= 400) found.push(`page returned ${response.status()}`);
  for (const e of consoleErrors) found.push(`console error: ${e}`);
  for (const f of failedRequests) found.push(`failed request: ${f}`);

  const head = await page
    .evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute("content") ?? "",
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
      jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(
        (el) => el.textContent || ""
      ),
      h1: document.querySelectorAll("h1").length,
      noIndex: (document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "").includes(
        "noindex"
      ),
      imgNoAlt: [...document.querySelectorAll("img")].filter((im) => !im.getAttribute("alt") && im.getAttribute("alt") !== "").length,
      brokenImgs: [...document.querySelectorAll("img")]
        .filter((im) => im.complete && im.naturalWidth === 0)
        .map((im) => im.getAttribute("src")),
      hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
    }))
    .catch(() => null);

  if (head) {
    if (!head.title) found.push("no <title>");
    else if (head.title.length > 60) found.push(`title ${head.title.length} chars: "${head.title}"`);
    if (!head.description) found.push("no meta description");
    else if (head.description.length > 155)
      found.push(`description ${head.description.length} chars`);
    // Pages deliberately kept out of the index need neither canonical nor data.
    if (!head.canonical && !head.noIndex) found.push("no canonical");
    if (!head.jsonLd.length && !head.noIndex) found.push("no JSON-LD");
    if (head.h1 !== 1) found.push(`${head.h1} h1 elements (expected 1)`);
    if (head.imgNoAlt) found.push(`${head.imgNoAlt} img without alt attribute`);
    for (const src of head.brokenImgs) found.push(`image did not load: ${src}`);

    head.jsonLd.forEach((raw, idx) => {
      try {
        JSON.parse(raw);
      } catch (e) {
        found.push(`invalid JSON-LD block ${idx}: ${e.message}`);
      }
    });

    if (head.title) {
      if (titles.has(head.title)) found.push(`duplicate title, also on ${titles.get(head.title)}`);
      else titles.set(head.title, route);
    }
    if (head.description) {
      if (descriptions.has(head.description))
        found.push(`duplicate description, also on ${descriptions.get(head.description)}`);
      else descriptions.set(head.description, route);
    }

    for (const href of head.hrefs) {
      if (href && href.startsWith("/") && !href.startsWith("//")) {
        linkTargets.add(href.split("#")[0] || "/");
      }
    }
  }

  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(150);
    const overflow = await page
      .evaluate(() => ({
        doc: document.documentElement.scrollWidth,
        win: window.innerWidth,
        culprits: [...document.querySelectorAll("body *")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.right > window.innerWidth + 2;
          })
          .slice(0, 5)
          .map((el) => {
            const cls = (el.getAttribute("class") || "").split(" ")[0];
            return `${el.tagName.toLowerCase()}${cls ? "." + cls : ""}`;
          }),
      }))
      .catch(() => null);
    if (overflow && overflow.doc > overflow.win + 1) {
      found.push(
        `@${width} horizontal overflow ${overflow.doc}>${overflow.win} (${overflow.culprits.join(", ")})`
      );
    }
  }

  await page.close();

  for (const f of found) problems.push(`${route} — ${f}`);
  log(
    `[${String(i + 1).padStart(3)}/${routes.length}] ${found.length ? "FAIL" : " ok "} ${route}  (${Date.now() - started}ms)` +
      (found.length ? `\n        ${found.join("\n        ")}` : "")
  );
}

log();
log("Checking every internal link target resolves …");

const checked = new Set(routes);
const linkPage = await context.newPage();
for (const target of [...linkTargets].sort()) {
  if (checked.has(target)) continue;
  checked.add(target);
  const res = await linkPage
    .goto(`${BASE}${target}`, { waitUntil: "domcontentloaded", timeout: 30_000 })
    .catch(() => null);
  if (!res || res.status() >= 400) {
    const line = `broken internal link: ${target} → ${res ? res.status() : "no response"}`;
    problems.push(line);
    log(`  FAIL ${line}`);
  } else {
    log(`   ok  ${target}`);
  }
}
await linkPage.close();

// A first visit, with nothing in localStorage, must render light.
const fresh = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const freshPage = await fresh.newPage();
await freshPage.goto(`${BASE}/`, { waitUntil: "load" });
const isDark = await freshPage.evaluate(() =>
  document.documentElement.classList.contains("dark")
);
if (isDark) problems.push("first visit renders in dark mode — light must be the default");
await fresh.close();

await browser.close();
await stop();

log();
log(`Routes checked: ${routes.length}`);
log(`Internal link targets checked: ${checked.size}`);
log(`Unique titles: ${titles.size}   Unique descriptions: ${descriptions.size}`);
log();

if (problems.length) {
  log(`${problems.length} PROBLEM(S):`);
  for (const p of problems) log(`  - ${p}`);
  process.exitCode = 1;
} else {
  log("No problems found.");
}
