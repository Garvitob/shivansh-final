/** Reports the min-content width of every descendant of a selector. */
import { chromium } from "playwright";

const BASE = process.env.QA_BASE_URL || "http://localhost:3000";
const route = process.argv[2] || "/about";
const selector = process.argv[3] || ".foot-brand";
const width = Number(process.argv[4] || 375);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(`${BASE}${route}`, { waitUntil: "load" });
await page.waitForTimeout(300);

const rows = await page.evaluate((sel) => {
  const root = document.querySelector(sel);
  if (!root) return [{ error: `no element matches ${sel}` }];
  const out = [];
  const measure = (el, depth) => {
    const prev = el.style.width;
    el.style.width = "min-content";
    const min = Math.round(el.getBoundingClientRect().width);
    el.style.width = prev;
    const now = Math.round(el.getBoundingClientRect().width);
    out.push({
      depth,
      sel: `${"  ".repeat(depth)}${el.tagName.toLowerCase()}${el.getAttribute("class") ? "." + el.getAttribute("class").split(" ").join(".") : ""}`,
      minContent: min,
      actual: now,
      text: (el.textContent || "").trim().slice(0, 40),
    });
    for (const c of el.children) measure(c, depth + 1);
  };
  measure(root, 0);
  return out;
}, selector);

console.table(rows);
await browser.close();
