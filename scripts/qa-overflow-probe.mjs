/** Finds exactly which element makes the document wider than the viewport. */
import { chromium } from "playwright";

const BASE = process.env.QA_BASE_URL || "http://localhost:3000";
const route = process.argv[2] || "/about";
const width = Number(process.argv[3] || 375);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto(`${BASE}${route}`, { waitUntil: "load" });
await page.waitForTimeout(400);

const result = await page.evaluate((vw) => {
  const describe = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      sel: `${el.tagName.toLowerCase()}${el.getAttribute("class") ? "." + el.getAttribute("class").split(" ").join(".") : ""}`,
      left: Math.round(r.left),
      right: Math.round(r.right),
      w: Math.round(r.width),
      scrollW: el.scrollWidth,
      display: cs.display,
      pos: cs.position,
      overflowX: cs.overflowX,
    };
  };

  // Widest leaf that sticks out to the right.
  const leaves = [];
  const walk = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.right > vw + 1 && r.left >= -1) leaves.push(el);
    for (const c of el.children) walk(c);
  };
  walk(document.body);

  const worst = leaves.sort((a, b) => b.getBoundingClientRect().right - a.getBoundingClientRect().right)[0];

  const chain = [];
  let node = worst;
  while (node && node !== document.documentElement) {
    chain.push(describe(node));
    node = node.parentElement;
  }
  chain.push(describe(document.documentElement));

  return {
    docScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    innerWidth: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    offenderCount: leaves.length,
    chainFromOffenderUpwards: chain,
  };
}, width);

console.log(JSON.stringify(result, null, 2));
await browser.close();
