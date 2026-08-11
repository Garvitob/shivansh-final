/**
 * Viewport-sized screenshots of specific sections, so mobile layouts are
 * actually readable rather than a 7000px-tall strip.
 *
 *   node scripts/qa-spot.mjs <route> <width> <theme> <selector...>
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ensureServer, routeSlug, BASE } from "./qa-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "qa-screens", "spot");

const [route = "/", widthArg = "375", theme = "light", ...selectors] = process.argv.slice(2);
const width = Number(widthArg);

const stop = await ensureServer();
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height: width < 600 ? 780 : 900 },
  deviceScaleFactor: 2,
});
await context.addInitScript(
  ([k, v]) => {
    try {
      window.localStorage.setItem(k, v);
    } catch {}
  },
  ["shivansh-theme", theme]
);

const page = await context.newPage();
await page.goto(`${BASE}${route}`, { waitUntil: "load" });
await page.waitForTimeout(900);

const targets = selectors.length ? selectors : ["body"];
for (const [i, sel] of targets.entries()) {
  const el = page.locator(sel).first();
  if (!(await el.count())) {
    console.log(`  (no match) ${sel}`);
    continue;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(350);
  const file = path.join(
    outDir,
    `${routeSlug(route)}__${width}__${theme}__${i}-${sel.replace(/[^a-z0-9]/gi, "")}.png`
  );
  await page.screenshot({ path: file });
  console.log(`  wrote ${path.basename(file)}`);
}

await browser.close();
await stop();
