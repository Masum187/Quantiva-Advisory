// sitemap.js
import fs from "fs";
import path from "path";

const BASE_URL = "https://quantivaadvisory.com";   // << deine Domain
const LOCALES = ["de", "en"];
const TODAY = new Date().toISOString().split("T")[0];

const STATIC_PATHS = ["/", "/cases"];

// Load case slugs from JSON data source
const casesData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "data", "cases.json"), "utf-8"));
const CASE_SLUGS = casesData.map(c => c.slug);

function urlNode(basePath) {
  const localized = LOCALES.map((lng) => ({
    lang: lng,
    loc: `${BASE_URL}/${lng}${basePath === "/" ? "" : basePath}`,
  }));
  const xDefault = `${BASE_URL}${basePath}`;

  return localized
    .map(({ lang, loc }) => {
      const alternates =
        localized
          .map((a) => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.loc}"/>`)
          .join("\n") +
        `\n<xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>`;

      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${basePath === "/" ? "1.0" : basePath === "/cases" ? "0.8" : "0.7"}</priority>
${alternates}
  </url>`;
    })
    .join("\n");
}

const urls = [];
STATIC_PATHS.forEach((p) => urls.push(urlNode(p)));
CASE_SLUGS.forEach((slug) => urls.push(urlNode(`/cases/${slug}`)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`.trim();

fs.mkdirSync(path.join(process.cwd(), "public"), { recursive: true });
fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml);
console.log("✅ sitemap.xml erstellt");
