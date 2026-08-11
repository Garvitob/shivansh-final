/**
 * Downloads the Noida photographs used across the site into /public/images.
 * Run once after cloning:  npm run fetch:images
 *
 * Every photo is from Unsplash (free for commercial use, attribution not
 * required). We credit the photographer in a caption anyway.
 */
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images");

const IMAGES = [
  { file: "hero-noida-expressway.jpg", id: "photo-1661858435242-ed971767e954", credit: "Bilal Ahmad" },
  { file: "band-noida-highway-night.jpg", id: "photo-1645938374927-d74b9349be51", credit: "Shantanu Goyal" },
  { file: "sector-99-noida.jpg", id: "photo-1610267203075-cea673791658", credit: "Tarupriya Singh" },
  { file: "sector-105-noida.jpg", id: "photo-1564834552305-aea63611ff08", credit: "Pankaj Kumar" },
  { file: "sector-108-noida.jpg", id: "photo-1565600444930-9761b1d1fc01", credit: "Ronit Singh" },
  { file: "sector-130-noida.jpg", id: "photo-1648455288365-ee27a61c95bd", credit: "Shivansh Singh" },
  { file: "sector-132-noida.jpg", id: "photo-1693336347836-25170a39ce0a", credit: "Vinit Kumar Singh" },
  { file: "sector-135-noida.jpg", id: "photo-1592394675778-4239b838fb2c", credit: "Chaitanya Maheshwari" },
  { file: "sector-141-noida.jpg", id: "photo-1584537735924-7427d0d282a5", credit: "The Visual Stories Studio" },
  { file: "sector-143-noida.jpg", id: "photo-1645938374241-7f0e5f520663", credit: "Shantanu Goyal" },
  { file: "sector-144-noida.jpg", id: "photo-1649042964070-8eb14ea4da7d", credit: "Shivansh Singh" },
  { file: "sector-145-noida.jpg", id: "photo-1688978022482-00702c9eb83c", credit: "Prashant" },
  { file: "sector-151-noida.jpg", id: "photo-1658253614194-85603071f903", credit: "Nitesh Solanky" },
];

const url = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2200&q=80`;

async function exists(p) {
  try {
    const s = await stat(p);
    return s.size > 10_000;
  } catch {
    return false;
  }
}

async function download({ file, id, credit }, force) {
  const dest = path.join(outDir, file);
  if (!force && (await exists(dest))) {
    console.log(`  skip  ${file} (already downloaded)`);
    return true;
  }
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url(id), { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 10_000) throw new Error(`suspiciously small (${buf.length} bytes)`);
      await writeFile(dest, buf);
      console.log(`  ok    ${file}  ${(buf.length / 1024).toFixed(0)} KB  — photo: ${credit}`);
      return true;
    } catch (err) {
      if (attempt === 3) {
        console.error(`  FAIL  ${file}: ${err.message}`);
        return false;
      }
      await new Promise((r) => setTimeout(r, attempt * 900));
    }
  }
  return false;
}

const force = process.argv.includes("--force");

await mkdir(outDir, { recursive: true });
console.log(`Downloading ${IMAGES.length} photographs into public/images\n`);

let failed = 0;
for (const img of IMAGES) {
  const ok = await download(img, force);
  if (!ok) failed++;
}

console.log(`\nDone. ${IMAGES.length - failed}/${IMAGES.length} available.`);
if (failed) process.exitCode = 1;
