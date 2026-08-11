/** Reproduces a listing photo upload and prints whatever actually went wrong. */
import { chromium } from "playwright";
import { ensureServer, BASE } from "./qa-lib.mjs";

try {
  process.loadEnvFile(".env");
} catch {}

const PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAHUlEQVQoU2NkYGD4z0AEYBxVSFeF/6EhRLSJAFEAFRcBAV3F6cQAAAAASUVORK5CYII=";

const stop = await ensureServer();
const browser = await chromium.launch();
const page = await browser.newPage();
page.setDefaultTimeout(20_000);

page.on("console", (m) => console.log(`[console.${m.type()}] ${m.text()}`));
page.on("pageerror", (e) => console.log(`[pageerror] ${e.message}`));
page.on("response", async (res) => {
  if (res.url().includes("/api/blob") || res.url().includes("blob.vercel-storage")) {
    let body = "";
    try {
      body = (await res.text()).slice(0, 400);
    } catch {}
    console.log(`[net] ${res.status()} ${res.url()}\n      ${body}`);
  }
});

await page.goto(`${BASE}/admin/login`, { waitUntil: "domcontentloaded" });
await page.fill("#email", process.env.ADMIN_EMAIL ?? "");
await page.fill("#password", process.env.ADMIN_PASSWORD ?? "");
await Promise.all([
  page.waitForURL((u) => !u.pathname.includes("/admin/login")),
  page.click('.form-card button[type="submit"]'),
]);

await page.goto(`${BASE}/admin/listings/new`, { waitUntil: "domcontentloaded" });
await page.setInputFiles("#photo-input", {
  name: "probe.png",
  mimeType: "image/png",
  buffer: Buffer.from(PNG_BASE64, "base64"),
});

await page.waitForTimeout(8000);

const state = await page.evaluate(() => ({
  photoInputs: [...document.querySelectorAll('input[name="photos"]')].map((i) => i.value),
  error: document.querySelector(".form-error")?.textContent ?? null,
  note: document.querySelector(".form-note")?.textContent ?? null,
}));
console.log("\nform state:", JSON.stringify(state, null, 2));

await browser.close();
await stop();
