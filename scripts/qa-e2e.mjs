/**
 * End-to-end verification against a running production build.
 *
 *   - /admin redirects to the login screen when signed out
 *   - the seeded admin can sign in
 *   - a listing created through the admin form appears on /listings, on its own
 *     page, and in its sector page strip
 *   - a photo upload to Vercel Blob attaches to the listing
 *   - enquiries submitted from three different pages land in the database with
 *     the right sourcePage, and the listing page carries listingSlug
 *
 * Everything it creates is deleted again at the end.
 *
 *   npm run qa:e2e
 */
import { chromium } from "playwright";
import { PrismaClient } from "@prisma/client";
import { appendFileSync, writeFileSync } from "node:fs";
import { ensureServer, BASE } from "./qa-lib.mjs";

// This script talks to the database and signs in as the admin, so it needs the
// same .env the app uses. Next loads it for the server; node does not for us.
try {
  process.loadEnvFile(".env");
} catch {
  console.warn("No .env found — relying on the ambient environment.");
}

const LOG = "qa-e2e.log";
writeFileSync(LOG, "");

const prisma = new PrismaClient();
const results = [];
const say = (line) => {
  // Written straight out so a long run stays visible while it happens.
  appendFileSync(LOG, `${line}\n`);
  console.log(line);
};
const ok = (name, detail = "") => {
  results.push({ pass: true, name, detail });
  say(`  ok   ${name}${detail ? ` — ${detail}` : ""}`);
};
const fail = (name, detail = "") => {
  results.push({ pass: false, name, detail });
  say(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
};
const step = (name) => say(`\n> ${name}`);

const STAMP = `qa-${Date.now()}`;
const TITLE = `QA test listing ${STAMP}`;
const SECTOR = "Sector 144";

// A tiny valid PNG, so the Blob upload path is exercised for real.
const PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAHUlEQVQoU2NkYGD4z0AEYBxVSFeF/6EhRLSJAFEAFRcBAV3F6cQAAAAASUVORK5CYII=";

const stop = await ensureServer();
const browser = await chromium.launch();
// Nothing here should ever take 20 seconds; failing fast beats hanging.
const newPage = async () => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  page.setDefaultTimeout(20_000);
  page.setDefaultNavigationTimeout(30_000);
  return { ctx, page };
};
let createdSlug = null;

try {
  /* ---------------------------------------------- signed-out admin redirect */
  step("signed-out admin routes");
  {
    const { ctx, page } = await newPage();
    await page.goto(`${BASE}/admin`, { waitUntil: "domcontentloaded" });
    const url = page.url();
    if (url.includes("/admin/login")) ok("signed-out /admin redirects to login", url);
    else fail("signed-out /admin redirects to login", `landed on ${url}`);

    await page.goto(`${BASE}/admin/enquiries`, { waitUntil: "domcontentloaded" });
    if (page.url().includes("/admin/login")) ok("signed-out /admin/enquiries redirects to login");
    else fail("signed-out /admin/enquiries redirects to login", `landed on ${page.url()}`);
    await ctx.close();
  }

  /* ------------------------------------------------------------ admin login */
  step("admin login");
  const { ctx: adminCtx, page: admin } = await newPage();
  {
    await admin.goto(`${BASE}/admin/login`, { waitUntil: "domcontentloaded" });
    await admin.fill("#email", process.env.ADMIN_EMAIL ?? "");
    await admin.fill("#password", process.env.ADMIN_PASSWORD ?? "");
    await Promise.all([
      admin.waitForURL((u) => !u.pathname.includes("/admin/login"), { timeout: 30_000 }),
      admin.click('button[type="submit"]'),
    ]).catch(() => {});
    if (admin.url().endsWith("/admin")) ok("admin signs in", admin.url());
    else fail("admin signs in", `landed on ${admin.url()}`);
  }

  /* ------------------------------------------- create a listing with a photo */
  step("create a listing (with a photo)");
  {
    await admin.goto(`${BASE}/admin/listings/new`, { waitUntil: "domcontentloaded" });
    if (!(await admin.locator("#title").count())) {
      fail("admin listing form reachable", `landed on ${admin.url()}`);
      throw new Error("cannot reach the listing form — skipping the rest");
    }
    await admin.fill("#title", TITLE);
    await admin.fill("#sector", SECTOR);
    await admin.selectOption("#propertyType", "FLAT");
    await admin.selectOption("#purpose", "SALE");
    await admin.fill("#price", "₹1.35 Cr");
    await admin.fill("#size", "1,450 sq ft");
    await admin.fill(
      "#description",
      "Temporary listing created by the automated end-to-end check. It is deleted again as soon as the check finishes."
    );

    await admin.setInputFiles("#photo-input", {
      name: "qa-photo.png",
      mimeType: "image/png",
      buffer: Buffer.from(PNG_BASE64, "base64"),
    });
    // Give the browser-to-Blob upload a moment to resolve.
    await admin
      .waitForFunction(() => document.querySelectorAll('input[name="photos"]').length > 0, {
        timeout: 30_000,
      })
      .then(() => ok("photo uploads to Vercel Blob from the browser"))
      .catch(() => fail("photo uploads to Vercel Blob from the browser", "no photo URL appeared"));

    await Promise.all([
      admin.waitForURL((u) => u.pathname === "/admin", { timeout: 30_000 }),
      admin.click('button[type="submit"]'),
    ]).catch(() => {});

    const row = await prisma.listing.findFirst({ where: { title: TITLE } });
    if (row) {
      createdSlug = row.slug;
      ok("listing saved from the admin form", `slug ${row.slug}, ${row.photos.length} photo(s)`);
      if (row.photos.length) ok("photo URL stored against the listing", row.photos[0].slice(0, 60));
      else fail("photo URL stored against the listing", "photos array is empty");
    } else {
      fail("listing saved from the admin form", "no row found");
    }
  }

  /* ------------------------------------ the listing shows up on public pages */
  step("listing appears on the public site");
  if (createdSlug) {
    const { ctx: pub, page } = await newPage();

    await page.goto(`${BASE}/listings`, { waitUntil: "domcontentloaded" });
    const onIndex = await page.locator(`a[href="/listings/${createdSlug}"]`).count();
    onIndex ? ok("listing appears on /listings") : fail("listing appears on /listings");

    const detail = await page.goto(`${BASE}/listings/${createdSlug}`, {
      waitUntil: "domcontentloaded",
    });
    if (detail && detail.status() === 200) {
      const h1 = await page.locator("h1").first().textContent();
      h1?.includes(STAMP)
        ? ok("listing detail page renders", `h1: ${h1.slice(0, 40)}…`)
        : fail("listing detail page renders", `h1 was "${h1}"`);
      const hasLd = await page.locator('script[type="application/ld+json"]').count();
      hasLd ? ok("listing detail carries JSON-LD") : fail("listing detail carries JSON-LD");
    } else {
      fail("listing detail page renders", `status ${detail?.status()}`);
    }

    await page.goto(`${BASE}/sectors/sector-144-noida`, { waitUntil: "domcontentloaded" });
    const onSector = await page.locator(`a[href="/listings/${createdSlug}"]`).count();
    onSector
      ? ok("listing appears in the Sector 144 strip")
      : fail("listing appears in the Sector 144 strip", "strip did not render it");

    await pub.close();
  }

  /* -------------------------------------- enquiries from three distinct pages */
  step("enquiries from three different pages");
  {
    const routes = [
      { path: "/", name: `QA Home ${STAMP}`, listing: null },
      { path: "/sectors/sector-135-noida", name: `QA Sector ${STAMP}`, listing: null },
      ...(createdSlug
        ? [{ path: `/listings/${createdSlug}`, name: `QA Listing ${STAMP}`, listing: createdSlug }]
        : []),
    ];

    const { ctx, page } = await newPage();

    for (const r of routes) {
      await page.goto(`${BASE}${r.path}`, { waitUntil: "domcontentloaded" });
      await page.fill("#f-name", r.name);
      await page.fill("#f-phone", "9911559688");
      await page.fill("#f-sector", "Sector 144");
      await page.fill("#f-msg", "Automated end-to-end check. Please ignore.");
      await page.click('form button[type="submit"]');
      await page
        .waitForSelector(".form-success", { timeout: 30_000 })
        .then(() => ok(`enquiry submitted from ${r.path}`))
        .catch(() => fail(`enquiry submitted from ${r.path}`, "no success state"));
    }
    await ctx.close();

    const rows = await prisma.enquiry.findMany({ where: { name: { contains: STAMP } } });
    if (rows.length === routes.length) ok(`${rows.length} enquiry rows written to the database`);
    else fail("enquiry rows written to the database", `expected ${routes.length}, got ${rows.length}`);

    for (const r of routes) {
      const row = rows.find((x) => x.name === r.name);
      if (!row) {
        fail(`row for ${r.path}`, "missing");
        continue;
      }
      row.sourcePage === r.path
        ? ok(`sourcePage recorded for ${r.path}`)
        : fail(`sourcePage recorded for ${r.path}`, `got "${row.sourcePage}"`);
      if (r.listing) {
        row.listingSlug === r.listing
          ? ok("listing enquiry carries listingSlug")
          : fail("listing enquiry carries listingSlug", `got "${row.listingSlug}"`);
      }
    }
  }

  /* ---------------------------------------------- mark closed removes it live */
  step("closing a listing takes it off the site");
  if (createdSlug) {
    await admin.goto(`${BASE}/admin`, { waitUntil: "domcontentloaded" });
    const row = admin.locator("tr", { hasText: TITLE });
    await row.locator('button:has-text("Mark closed")').click().catch(() => {});
    await admin.waitForTimeout(1500);
    const { ctx, page } = await newPage();
    await page.goto(`${BASE}/listings`, { waitUntil: "domcontentloaded" });
    const stillThere = await page.locator(`a[href="/listings/${createdSlug}"]`).count();
    stillThere === 0
      ? ok("closed listing drops off /listings")
      : fail("closed listing drops off /listings", "still listed");
    await ctx.close();
  }
} catch (error) {
  fail("run completed without throwing", error.message.split("\n")[0]);
} finally {
  /* ------------------------------------------------------------------ clean up */
  step("cleaning up");
  try {
    if (createdSlug) await prisma.listing.deleteMany({ where: { slug: createdSlug } });
    const removed = await prisma.enquiry.deleteMany({ where: { name: { contains: STAMP } } });
    console.log(`\nCleaned up: 1 listing, ${removed.count} enquiries`);
  } catch (error) {
    console.error("cleanup failed:", error);
  }
  await prisma.$disconnect();
  await browser.close();
  await stop();
}

console.log();
for (const r of results) {
  console.log(`  ${r.pass ? "ok  " : "FAIL"} ${r.name}${r.detail ? ` — ${r.detail}` : ""}`);
}
const failed = results.filter((r) => !r.pass).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
if (failed) process.exitCode = 1;
