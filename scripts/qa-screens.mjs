/**
 * Full-page screenshots of every route at 375, 768 and 1440, in light and dark,
 * into /qa-screens.
 *
 *   npm run qa:screens              all routes
 *   npm run qa:screens -- /sectors/sector-144-noida /listings
 */
import { chromium } from "playwright";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ensureServer, publicRoutes, routeSlug, BASE } from "./qa-lib.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "qa-screens");

const WIDTHS = [375, 768, 1440];
const THEMES = ["light", "dark"];

const only = process.argv.slice(2).filter((a) => a.startsWith("/"));

const stop = await ensureServer();
const routes = only.length ? only : [...(await publicRoutes()), "/admin/login", "/this-page-does-not-exist"];

if (!only.length) {
  await rm(outDir, { recursive: true, force: true });
}
await mkdir(outDir, { recursive: true });

console.log(`Capturing ${routes.length} routes × ${WIDTHS.length} widths × ${THEMES.length} themes\n`);

const browser = await chromium.launch();
let count = 0;

for (const theme of THEMES) {
  for (const width of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      deviceScaleFactor: 1,
    });
    // next-themes reads this key; setting it before load avoids any flash.
    await context.addInitScript(
      ([key, value]) => {
        try {
          window.localStorage.setItem(key, value);
        } catch {}
      },
      ["shivansh-theme", theme]
    );

    const page = await context.newPage();
    for (const route of routes) {
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
      // Let the fade-up finish so screenshots are not caught mid-animation.
      await page.waitForTimeout(900);
      await page.screenshot({
        path: path.join(outDir, `${routeSlug(route)}__${width}__${theme}.png`),
        fullPage: true,
      });
      count++;
      process.stdout.write(".");
    }
    await context.close();
    process.stdout.write(` ${theme} ${width}\n`);
  }
}

await browser.close();
await stop();

console.log(`\n${count} screenshots written to qa-screens/`);
