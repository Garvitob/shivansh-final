/** One montage of every downloaded photo, so alt text can be checked honestly. */
import sharp from "sharp";
import path from "node:path";
import { readdir, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(root, "public", "images");
const outDir = path.join(root, "qa-screens");

const CELL_W = 400;
const CELL_H = 280;
const COLS = 4;

const files = (await readdir(imagesDir)).filter((f) => f.endsWith(".jpg")).sort();
const rows = Math.ceil(files.length / COLS);

const composites = [];
for (const [i, file] of files.entries()) {
  const buf = await sharp(path.join(imagesDir, file))
    .resize(CELL_W - 8, CELL_H - 8, { fit: "cover" })
    .toBuffer();
  composites.push({
    input: buf,
    left: (i % COLS) * CELL_W + 4,
    top: Math.floor(i / COLS) * CELL_H + 4,
  });
}

await mkdir(outDir, { recursive: true });
await sharp({
  create: {
    width: COLS * CELL_W,
    height: rows * CELL_H,
    channels: 3,
    background: { r: 20, g: 20, b: 18 },
  },
})
  .composite(composites)
  .png()
  .toFile(path.join(outDir, "contact-sheet.png"));

console.log(`Contact sheet: ${files.length} photos, ${COLS} per row, reading order:`);
files.forEach((f, i) => console.log(`  ${Math.floor(i / COLS) + 1}-${(i % COLS) + 1}  ${f}`));
