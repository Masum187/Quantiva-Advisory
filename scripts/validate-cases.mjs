// scripts/validate-cases.mjs
import fs from "fs";
import path from "path";
import process from "process";
import Ajv from "ajv";
import addFormats from "ajv-formats";

const STRICT = process.argv.includes("--strict"); // <— NEU

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, "src", "data", "cases.json");
const TAXO_PATH = path.join(ROOT, "src", "data", "taxonomy.json"); // <-- NEU

// ---------- JSON Schema ----------
const schema = {
  $id: "https://quantivaadvisory.com/schemas/cases.schema.json",
  type: "array",
  minItems: 1,
  items: {
    type: "object",
    required: ["slug"],
    additionalProperties: false,
    properties: {
      slug: { type: "string", pattern: "^[a-z0-9-]+$" },
      titleDe: { type: ["string", "null"], minLength: 1 },
      titleEn: { type: ["string", "null"], minLength: 1 },
      subtitleDe: { type: ["string", "null"] },
      subtitleEn: { type: ["string", "null"] },
      category: { type: ["string", "null"] },
      industry: { type: ["string", "null"] },
          heroImage: { type: ["string", "null"], pattern: "^\\/[^?#]+\\.(jpg|jpeg|png|webp)$" },
          heroMedia: { type: ["string", "null"], pattern: "^\\/[^?#]+\\.(mp4|webm)$" },
          heroPoster: { type: ["string", "null"], pattern: "^\\/[^?#]+\\.(jpg|jpeg|png|webp)$" },
      goalsDe: { type: "array", items: { type: "string", minLength: 1 } },
      goalsEn: { type: "array", items: { type: "string", minLength: 1 } },
      solutionDe: { type: "array", items: { type: "string", minLength: 1 } },
      solutionEn: { type: "array", items: { type: "string", minLength: 1 } },
      resultsDe: { type: "array", items: { type: "string", minLength: 1 } },
      resultsEn: { type: "array", items: { type: "string", minLength: 1 } },
      tech: { type: "array", items: { type: "string", minLength: 1 }, uniqueItems: true },
      quote: {
        type: ["object", "null"],
        additionalProperties: false,
        properties: {
          textDe: { type: ["string", "null"] },
          textEn: { type: ["string", "null"] },
          author: { type: ["string", "null"] }
        }
      }
    }
  }
};

// ---------- Load & Validate JSON ----------
let data, taxo;
try { 
  data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8")); 
} catch (e) { 
  console.error("❌ cases.json invalid:", e.message); 
  process.exit(1); 
}
try { 
  taxo = JSON.parse(fs.readFileSync(TAXO_PATH, "utf-8")); 
} catch (e) { 
  console.error("❌ taxonomy.json fehlt/invalid:", e.message); 
  process.exit(1); 
}

const allowedCategories = new Set(taxo.categories || []);
const allowedIndustries = new Set(taxo.industries || []);

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

const errors = [];
const warnings = [];
if (!validate(data)) {
  for (const err of validate.errors) {
    errors.push(`Schema: ${err.instancePath || "<root>"} ${err.message}`);
  }
}

// ---------- Custom Checks ----------
const slugs = new Set();
for (const c of data) {
  if (!c?.slug) continue;
  if (slugs.has(c.slug)) {
    errors.push(`Custom: Duplicate slug "${c.slug}"`);
  } else {
    slugs.add(c.slug);
  }
}

for (const c of data) {
  if (!c.titleDe && !c.titleEn) {
    errors.push(`Custom: Case "${c.slug}" hat weder titleDe noch titleEn`);
  }
}

for (const c of data) {
  if (c.quote && !c.quote.textDe && !c.quote.textEn) {
    errors.push(`Custom: Case "${c.slug}" hat quote ohne textDe/textEn`);
  }
}

// whitelist checks (soft vs strict)
for (const c of data) {
  if (c.category && !allowedCategories.has(c.category)) {
    const msg = `"${c.slug}" category "${c.category}" nicht in taxonomy.json`;
    (STRICT ? errors : warnings).push(`Whitelist: ${msg}`);
  }
  if (c.industry && !allowedIndustries.has(c.industry)) {
    const msg = `"${c.slug}" industry "${c.industry}" nicht in taxonomy.json`;
    (STRICT ? errors : warnings).push(`Whitelist: ${msg}`);
  }
}

// Dateiexistenz-Prüfung
const missingAssetsErrors = []; // werden in STRICT zu harten Fehlern
for (const c of data) {
      const files = [
        c.heroImage && path.join(ROOT, "public", c.heroImage.replace(/^\//, "")),
        c.heroMedia && path.join(ROOT, "public", c.heroMedia.replace(/^\//, "")),
        c.heroPoster && path.join(ROOT, "public", c.heroPoster.replace(/^\//, "")), // <-- NEU
      ].filter(Boolean);

  for (const f of files) {
    if (!fs.existsSync(f)) {
      const msg = `${c.slug}: Datei nicht gefunden: ${path.relative(ROOT, f)}`;
      (STRICT ? missingAssetsErrors : warnings).push(msg);
    }
  }

  // OG-Datei muss NACH dem Build existieren (strict)
  const og = path.join(ROOT, "public", "assets", "og", `${c.slug}.jpg`);
  if (!fs.existsSync(og)) {
    const msg = `${c.slug}: OG-Bild fehlt: ${path.relative(ROOT, og)} (wird i. d. R. im postbuild erzeugt)`;
    (STRICT ? missingAssetsErrors : warnings).push(msg);
  }
}

// ---------- Report ----------
if (warnings.length) {
  console.log("⚠️  WARNUNGEN:");
  for (const w of warnings) console.log(" -", w);
}

const allErrors = [...errors, ...missingAssetsErrors];
if (allErrors.length) {
  console.error(`❌ FEHLER${STRICT ? " (STRICT)" : ""}:`);
  for (const e of allErrors) console.error(" -", e);
  process.exit(1);
}

console.log(`✅ cases.json: OK${STRICT ? " (STRICT)" : ""}`);
