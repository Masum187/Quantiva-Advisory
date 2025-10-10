#!/usr/bin/env node
/**
 * Sitemap Lastmod Auto-Updater
 * 
 * This script automatically updates the lastmod dates in sitemap.xml
 * based on actual file modification times and Git history.
 * 
 * Usage:
 *   node scripts/update-sitemap-lastmod.mjs
 *   npm run sitemap:update
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const BASE_URL = "https://quantivaadvisory.com";
const LOCALES = ["de", "en"];

// Get last modified date from Git history for a file
function getGitLastModified(filePath) {
  try {
    const result = execSync(
      `git log -1 --format=%cI "${filePath}"`,
      { encoding: 'utf-8' }
    ).trim();
    
    if (result) {
      return new Date(result).toISOString().split('T')[0];
    }
  } catch (error) {
    console.warn(`⚠️  Could not get Git history for ${filePath}:`, error.message);
  }
  return null;
}

// Get file system modification date
function getFileLastModified(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return new Date(stats.mtime).toISOString().split('T')[0];
  } catch (error) {
    console.warn(`⚠️  Could not get file stats for ${filePath}:`, error.message);
  }
  return null;
}

// Get lastmod date for a specific route
function getLastModForRoute(route) {
  const today = new Date().toISOString().split('T')[0];
  
  // Map routes to source files
  const routeFileMap = {
    '/': 'src/QuantivaWebsite.tsx',
    '/cases': 'src/data/cases.json',
  };
  
  // For case detail pages, use cases.json
  if (route.startsWith('/cases/')) {
    return getGitLastModified('src/data/cases.json') || today;
  }
  
  // For mapped routes, use their source file
  const sourceFile = routeFileMap[route];
  if (sourceFile) {
    return getGitLastModified(sourceFile) || getFileLastModified(sourceFile) || today;
  }
  
  // Default to today for unmapped routes
  return today;
}

// Load case slugs from JSON data source
const casesDataPath = path.join(process.cwd(), "src", "data", "cases.json");
const casesData = JSON.parse(fs.readFileSync(casesDataPath, "utf-8"));
const CASE_SLUGS = casesData.map(c => c.slug);

const STATIC_PATHS = ["/", "/cases"];

function urlNode(basePath) {
  const lastmod = getLastModForRoute(basePath);
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
    <lastmod>${lastmod}</lastmod>
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

const publicDir = path.join(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);

console.log("✅ sitemap.xml created with smart lastmod dates");
console.log(`   - Static routes: ${STATIC_PATHS.length}`);
console.log(`   - Case routes: ${CASE_SLUGS.length}`);
console.log(`   - Total URLs: ${(STATIC_PATHS.length + CASE_SLUGS.length) * LOCALES.length}`);

