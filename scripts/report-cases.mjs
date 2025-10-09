import fs from "fs";
import path from "path";
import pc from "picocolors";
import { table } from "table";

const ROOT = process.cwd();
const DATA = path.join(ROOT, "src", "data", "cases.json");
const TAXO = path.join(ROOT, "src", "data", "taxonomy.json");

const cases = JSON.parse(fs.readFileSync(DATA, "utf-8"));
const taxo  = JSON.parse(fs.readFileSync(TAXO, "utf-8"));
const catSet = new Set(taxo.categories || []);
const indSet = new Set(taxo.industries || []);

const rows = [[pc.bold("Slug"), pc.bold("DE"), pc.bold("EN"), pc.bold("Hero"), pc.bold("OG"), pc.bold("Media"), pc.bold("Cat/Ind")]];
let ok = 0, warn = 0;

const catCount = new Map(); const indCount = new Map();
const inc = (map, key) => map.set(key, (map.get(key) || 0) + 1);

for (const c of cases) {
  const heroOk = !!c.heroImage;
  const ogPath = path.join(ROOT, "public", "assets", "og", `${c.slug}.jpg`);
  const ogOk = fs.existsSync(ogPath);
  const mediaOk = !!c.heroMedia;

  const catValid = !c.category || catSet.has(c.category);
  const indValid = !c.industry || indSet.has(c.industry);

  const catStr = c.category ? (catValid ? c.category : pc.red(`${c.category} (!)`)) : pc.gray("-");
  const indStr = c.industry ? (indValid ? c.industry : pc.red(`${c.industry} (!)`)) : pc.gray("-");

  if (c.category) inc(catCount, c.category);
  if (c.industry) inc(indCount, c.industry);

  const row = [
    c.slug,
    c.titleDe ? "✓" : pc.yellow("—"),
    c.titleEn ? "✓" : pc.yellow("—"),
    heroOk ? pc.green("✓") : pc.yellow("—"),
    ogOk ? pc.green("✓") : pc.yellow("—"),
    mediaOk ? pc.green("✓") : pc.gray(""),
    `${catStr} / ${indStr}`
  ];

  // Bewertung
  if ((c.titleDe || c.titleEn) && heroOk && ogOk && catValid && indValid) ok++;
  else warn++;

  rows.push(row);
}

console.log(pc.bold(pc.cyan("\nQuantiva Cases Report\n")));
console.log(table(rows, { columns: { 0: { alignment: "left" } } }));
console.log(`${pc.green("OK")} ${ok}   ${pc.yellow("WARN")} ${warn}   ${pc.dim(`(Gesamt ${cases.length})`)}\n`);

function summaryMap(title, map, allowSet) {
  console.log(pc.bold(title));
  const items = [...map.entries()].sort((a,b) => b[1]-a[1]);
  if (!items.length) { console.log(pc.dim("  — keine Daten —\n")); return; }
  for (const [k,v] of items) {
    const tag = allowSet && !allowSet.has(k) ? pc.red("(!)") : pc.dim("");
    console.log(`  ${k}: ${v} ${tag}`);
  }
  console.log("");
}
summaryMap("Kategorien (Verteilung)", catCount, catSet);
summaryMap("Branchen (Verteilung)",   indCount, indSet);

// Markdown-Export (PR)
const MD = [
  `### Quantiva Cases Report`,
  ``,
  `| Slug | DE | EN | Hero | OG | Media | Cat/Ind |`,
  `|------|----|----|------|----|-------|---------|`
];
for (const r of rows.slice(1)) {
  MD.push(`| ${plain(r[0])} | ${plain(r[1])} | ${plain(r[2])} | ${plain(r[3])} | ${plain(r[4])} | ${plain(r[5])} | ${plain(r[6])} |`);
}
MD.push(``);
MD.push(`**OK:** ${ok} • **WARN:** ${warn} • **Total:** ${cases.length}`);
MD.push(``);
MD.push(`**Whitelist** — Categories: ${[...catSet].join(", ")}  •  Industries: ${[...indSet].join(", ")}`);

const OUT = path.join(ROOT, "reports");
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "cases-report.md"), MD.join("\n"));
console.log(pc.dim(`Markdown gespeichert: reports/cases-report.md`));

function plain(v) {
  return String(v).replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
}