import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT   = process.cwd();
const DATA   = path.join(ROOT, "src", "data", "cases.json");        // <- Datenquelle
const OUTDIR = path.join(ROOT, "public", "assets", "og");
const BADGE  = path.join(ROOT, "public", "logo-badge.svg");

const cases = JSON.parse(fs.readFileSync(DATA, "utf-8"));
// Default: deutsche Titel für OG (kannst du auf EN ändern)
const titleFor = (c) => c.titleDe || c.titleEn || c.slug;

if (!fs.existsSync(OUTDIR)) fs.mkdirSync(OUTDIR, { recursive: true });

function overlaySVG(title) {
  return Buffer.from(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
      <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stop-color="#000" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#000" stop-opacity="0.65"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#fade)"/>
    <g>
      <text x="60" y="460"
        font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
        font-size="64" font-weight="800" fill="#fff">
        ${escapeXML(title)}
      </text>
      <text x="60" y="520"
        font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
        font-size="28" font-weight="600" fill="rgba(255,255,255,0.9)">
        Strategie · Engineering · Enablement
      </text>
    </g>
  </svg>`);
}

function escapeXML(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function ensureBadgePng() {
  const out = path.join(OUTDIR, "_badge.png");
  try {
    if (!fs.existsSync(out)) {
      await sharp(BADGE).resize(360).png().toFile(out);
    }
    return out;
  } catch {
    return null;
  }
}

async function buildOg({ slug, heroImage, title }) {
  const src = path.join(ROOT, "public", heroImage.replace(/^\//, ""));
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ Hero nicht gefunden: ${src}`);
    return;
  }
  const dest = path.join(OUTDIR, `${slug}.jpg`);
  const badge = await ensureBadgePng();

  try {
    const pipeline = sharp(src).resize(1200, 630, { fit: "cover", position: "attention" });
    const comps = [{ input: overlaySVG(title), gravity: "southwest" }];
    if (badge) comps.push({ input: badge, top: 40, left: 40 });

    await pipeline.composite(comps).jpeg({ quality: 85, mozjpeg: true }).toFile(dest);
    console.log("✅", path.relative(ROOT, dest));
  } catch (error) {
    console.warn(`⚠️ Hero image ${src} is not a valid image format, skipping ${slug}`);
  }
}

(async () => {
  console.log("🎨 Generating OG images from JSON data...");
  for (const c of cases) {
    await buildOg({ slug: c.slug, heroImage: c.heroImage, title: titleFor(c) });
  }
  console.log("✅ OG image generation complete!");
})();
