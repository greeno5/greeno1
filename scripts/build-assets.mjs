// Builds optimized brand assets from the two official GREENO images.
// Run with: node scripts/build-assets.mjs
//
// Sources (never redrawn or retouched — only resized and re-encoded):
//   public/brand/coin-source.webp   → official coin, transparent background
//   public/brand/keyart-source.jpg  → official 3D pedestal scene
import sharp from "sharp";

const COIN = "public/brand/coin-source.webp";
const KEYART = "public/brand/keyart-source.jpg";
const OUT = "public/brand";

/** Trim transparent padding, then pad back to a centred square. */
async function trimmedSquare(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;
  let minX = W,
    minY = H,
    maxX = 0,
    maxY = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * C + 3] > 32) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  const w = maxX - minX + 1;
  const h = maxY - minY + 1;
  const side = Math.max(w, h);
  const left = Math.max(minX - Math.round((side - w) / 2), 0);
  const top = Math.max(minY - Math.round((side - h) / 2), 0);

  return sharp(input)
    .ensureAlpha()
    .extract({ left, top, width: Math.min(side, W - left), height: Math.min(side, H - top) })
    .toFormat("png");
}

async function main() {
  const square = await (await trimmedSquare(COIN)).toBuffer();
  console.log(`Coin square: ${(await sharp(square).metadata()).width}px`);

  // Coin face, transparent, several sizes
  for (const [size, name] of [
    [1024, "greeno-coin.webp"],
    [480, "greeno-coin-md.webp"],
    [160, "greeno-coin-sm.webp"],
  ]) {
    await sharp(square)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 88, alphaQuality: 92, effort: 6 })
      .toFile(`${OUT}/${name}`);
  }

  // Favicons / app icons
  await sharp(square).resize(192, 192).png({ palette: true, quality: 90 }).toFile("src/app/icon.png");
  await sharp(square).resize(180, 180).png({ palette: true, quality: 90 }).toFile("src/app/apple-icon.png");

  // Hero / about scene
  await sharp(KEYART).resize(1280).webp({ quality: 82 }).toFile(`${OUT}/greeno-keyart.webp`);

  // Social card: centred crop of the 3D scene
  await sharp(KEYART)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 84 })
    .toFile("public/og-image.jpg");

  console.log("Assets generated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
