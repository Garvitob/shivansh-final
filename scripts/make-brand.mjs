/**
 * Derives the square brand emblem and the app icons from public/brand/logo.png.
 *
 * logo.png is the full gold lockup on a transparent background. The header and
 * favicons need just the circular emblem, square, so we crop the top of the
 * lockup, trim the transparent margin and pad it back to a square.
 *
 *   node scripts/make-brand.mjs
 */
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const brandDir = path.join(root, "public", "brand");
const appDir = path.join(root, "app");

const DEEP = { r: 0x21, g: 0x1f, b: 0x19, alpha: 1 };

const src = path.join(brandDir, "logo.png");
const meta = await sharp(src).metadata();
console.log(`logo.png — ${meta.width}x${meta.height}`);

// The emblem occupies the top ~67% of the lockup, above the wordmark.
const cropped = await sharp(src)
  .extract({
    left: 0,
    top: 0,
    width: meta.width,
    height: Math.round(meta.height * 0.67),
  })
  .png()
  .toBuffer();

// Trim in a separate pass — libvips runs trim before extract in one pipeline.
const emblemBuf = await sharp(cropped).trim({ threshold: 8 }).png().toBuffer();

const trimmed = await sharp(emblemBuf).metadata();
const side = Math.max(trimmed.width, trimmed.height);
console.log(`emblem trimmed to ${trimmed.width}x${trimmed.height} → square ${side}`);

/** Transparent square emblem — used anywhere the background is already dark. */
const squareTransparent = await sharp(emblemBuf)
  .extend({
    top: Math.floor((side - trimmed.height) / 2),
    bottom: Math.ceil((side - trimmed.height) / 2),
    left: Math.floor((side - trimmed.width) / 2),
    right: Math.ceil((side - trimmed.width) / 2),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await mkdir(brandDir, { recursive: true });
await sharp(squareTransparent).toFile(path.join(brandDir, "emblem.png"));
console.log("  wrote public/brand/emblem.png (512, transparent)");

/**
 * The same emblem on a deep tile. The logo is gold-on-black by design and parts
 * of it are near-white, so it needs a dark ground to read on the cream theme.
 */
const tile = await sharp({
  create: { width: 512, height: 512, channels: 4, background: DEEP },
})
  .composite([
    {
      input: await sharp(squareTransparent).resize(440, 440, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
      gravity: "center",
    },
  ])
  .png()
  .toBuffer();

await sharp(tile).toFile(path.join(brandDir, "mark-tile.png"));
console.log("  wrote public/brand/mark-tile.png (512, deep ground)");

// App icons — Next picks these up from app/ automatically.
await sharp(tile).resize(512, 512).png().toFile(path.join(appDir, "icon.png"));
console.log("  wrote app/icon.png (512)");

await sharp(tile).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));
console.log("  wrote app/apple-icon.png (180)");

console.log("\nBrand assets ready.");
