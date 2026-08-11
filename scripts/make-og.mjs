/**
 * Renders public/og.png (1200x630) with the real brand fonts, by screenshotting
 * a small HTML page in Chromium. Run once; the PNG is committed.
 *
 *   npm run make:og
 */
import { chromium } from "playwright";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const emblem = await readFile(path.join(root, "public", "brand", "emblem.png"));
const emblemUri = `data:image/png;base64,${emblem.toString("base64")}`;

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,400&family=Archivo:wght@500;600&display=block" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#211F19;color:#EFEADC;
       font-family:'Archivo',sans-serif;overflow:hidden;position:relative}
  .frame{position:absolute;inset:34px;border:1px solid rgba(196,162,92,.32)}
  .inner{position:absolute;inset:0;padding:92px 96px;display:flex;flex-direction:column;justify-content:space-between}
  .top{display:flex;align-items:center;gap:22px}
  .top img{width:78px;height:78px;object-fit:contain}
  .eyebrow{font-size:14px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;color:#C4A25C}
  h1{font-family:'Fraunces',serif;font-weight:500;font-size:76px;line-height:1.04;
     letter-spacing:-.015em;max-width:17ch;margin-top:30px}
  h1 em{font-style:italic;color:#C4A25C}
  .tag{font-family:'Fraunces',serif;font-style:italic;font-size:26px;color:#C4A25C}
  .foot{display:flex;justify-content:space-between;align-items:flex-end;gap:30px}
  .nap{font-size:16.5px;line-height:1.7;color:#A69F8C}
  .nap b{color:#EFEADC;font-weight:600}
  .rule{position:absolute;left:96px;right:96px;bottom:196px;height:1px;background:rgba(235,232,224,.16)}
</style></head>
<body>
  <div class="frame"></div>
  <div class="inner">
    <div>
      <div class="top">
        <img src="${emblemUri}" alt="">
        <div>
          <div style="font-family:'Fraunces',serif;font-weight:600;font-size:30px;line-height:1.05">Shivansh</div>
          <div style="font-size:12.5px;letter-spacing:.34em;text-transform:uppercase;color:#A69F8C;font-weight:500;margin-top:3px">Properties</div>
        </div>
      </div>
      <h1>One stop for <em>every property need</em> in Noida.</h1>
    </div>
    <div class="rule"></div>
    <div class="foot">
      <div class="nap">
        <b>CM-52, Sector 144, Noida</b><br>
        Uttar Pradesh 201306 · +91 99115 59688
      </div>
      <div style="text-align:right">
        <div class="eyebrow" style="margin-bottom:10px">Since 2011</div>
        <div class="tag">Building Trust. Creating Futures.</div>
      </div>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const buffer = await page.screenshot({ type: "png" });
await browser.close();

await writeFile(path.join(root, "public", "og.png"), buffer);
console.log(`Wrote public/og.png (${(buffer.length / 1024).toFixed(0)} KB)`);
