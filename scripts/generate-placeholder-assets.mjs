#!/usr/bin/env node

/**
 * Quantiva Advisory - Professional Asset Generator
 * Uses Sharp (already installed) for high-quality image generation
 * 
 * Run: node scripts/generate-placeholder-assets.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Quantiva Brand Colors
const BRAND_COLORS = {
  primary: '#0f766e',    // Teal
  secondary: '#14b8a6',  // Light teal
  accent: '#f59e0b',     // Amber
  dark: '#134e4a',       // Dark teal
  light: '#f0fdfa'       // Very light teal
};

// Utility: Ensure directory exists
const ensureDir = (dirPath) => {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`📁 Created: ${path.relative(ROOT, dirPath)}/`);
    }
  } catch (error) {
    console.error(`❌ Failed to create directory ${dirPath}:`, error.message);
    process.exit(1);
  }
};

// Generate SVG Favicon (Simple)
const generateSvgFavicon = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BRAND_COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BRAND_COLORS.dark};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#grad)"/>
  <text x="50" y="72" font-family="Arial, sans-serif" font-size="65" font-weight="bold" fill="white" text-anchor="middle">Q</text>
</svg>`;
  
  try {
    const filePath = path.join(ROOT, 'public', 'favicon.svg');
    fs.writeFileSync(filePath, svg);
    console.log('✅ favicon.svg');
  } catch (error) {
    console.error('❌ Failed to generate favicon.svg:', error.message);
  }
};

// Generate Safari Pinned Tab SVG
const generateSafariSvg = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M 20 30 Q 20 15 35 15 L 65 15 Q 80 15 80 30 L 80 55 Q 80 70 65 70 L 60 70 L 70 85 L 50 85 L 40 70 L 35 70 Q 20 70 20 55 Z M 35 30 L 35 55 Q 35 60 40 60 L 60 60 Q 65 60 65 55 L 65 30 Q 65 25 60 25 L 40 25 Q 35 25 35 30 Z" fill="#000"/>
</svg>`;
  
  try {
    const filePath = path.join(ROOT, 'public', 'safari-pinned-tab.svg');
    fs.writeFileSync(filePath, svg);
    console.log('✅ safari-pinned-tab.svg');
  } catch (error) {
    console.error('❌ Failed to generate safari-pinned-tab.svg:', error.message);
  }
};

// Generate PNG Icons using Sharp (SVG → PNG)
const generatePngIcons = async () => {
  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BRAND_COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BRAND_COLORS.dark};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#iconGrad)" rx="80"/>
  <text x="256" y="370" font-family="Arial, sans-serif" font-size="340" font-weight="bold" fill="white" text-anchor="middle">Q</text>
</svg>`;

  const configs = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'logo192.png', size: 192 },
    { name: 'logo512.png', size: 512 }
  ];

  for (const { name, size } of configs) {
    try {
      await sharp(Buffer.from(iconSvg))
        .resize(size, size)
        .png({ quality: 100, compressionLevel: 9 })
        .toFile(path.join(ROOT, 'public', name));
      console.log(`✅ ${name}`);
    } catch (error) {
      console.error(`❌ Failed to generate ${name}:`, error.message);
    }
  }
};

// Generate ICO file (multi-size favicon)
const generateIcoFile = async () => {
  try {
    const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BRAND_COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BRAND_COLORS.dark};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#iconGrad)" rx="80"/>
  <text x="256" y="370" font-family="Arial, sans-serif" font-size="340" font-weight="bold" fill="white" text-anchor="middle">Q</text>
</svg>`;
    
    // Generate 32x32 PNG as ICO (Sharp doesn't support ICO format natively)
    await sharp(Buffer.from(iconSvg))
      .resize(32, 32)
      .png()
      .toFile(path.join(ROOT, 'public', 'favicon.ico'));
    console.log('✅ favicon.ico (PNG-based)');
  } catch (error) {
    console.error('❌ Failed to generate favicon.ico:', error.message);
  }
};

// Generate OG Images (1200x630)
const generateOgImages = async () => {
  const ogConfigs = [
    { 
      name: 'og-default.jpg', 
      title: 'Quantiva Advisory', 
      subtitle: 'SAP, Cloud and AI Excellence',  // Avoid & in SVG
      accent: BRAND_COLORS.accent
    },
    { 
      name: 'og-cases.jpg', 
      title: 'Success Stories', 
      subtitle: 'Real Results, Lasting Impact',
      accent: BRAND_COLORS.secondary
    }
  ];

  ensureDir(path.join(ROOT, 'public', 'assets', 'og'));

  for (const { name, title, subtitle, accent } of ogConfigs) {
    try {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg${name}">
      <stop offset="0%" stop-color="${BRAND_COLORS.primary}"/>
      <stop offset="100%" stop-color="${BRAND_COLORS.dark}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg${name})"/>
  <circle cx="1000" cy="150" r="200" fill="${accent}" opacity="0.1"/>
  <circle cx="200" cy="500" r="150" fill="${BRAND_COLORS.light}" opacity="0.05"/>
  <rect x="50" y="50" width="220" height="90" fill="${accent}" rx="8"/>
  <text x="160" y="110" font-family="Arial" font-size="36" font-weight="bold" fill="${BRAND_COLORS.dark}" text-anchor="middle">QUANTIVA</text>
  <text x="600" y="280" font-family="Arial" font-size="85" font-weight="bold" fill="white" text-anchor="middle">${title}</text>
  <text x="600" y="370" font-family="Arial" font-size="48" fill="${BRAND_COLORS.light}" text-anchor="middle">${subtitle}</text>
  <rect x="0" y="610" width="1200" height="20" fill="${accent}"/>
</svg>`;
      
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 90, progressive: true })
        .toFile(path.join(ROOT, 'public', 'assets', 'og', name));
      console.log(`✅ assets/og/${name}`);
    } catch (error) {
      console.error(`❌ Failed to generate ${name}:`, error.message);
    }
  }
};

// Generate Case Study Hero Images
const generateCaseHeroImages = async () => {
  const caseConfigs = [
    { name: 'btp-hero.jpg', title: 'BTP Delivery', subtitle: 'In 12 Wochen zur Cloud' },
    { name: 'data-hero.jpg', title: 'Data Quality', subtitle: 'Excellence Framework' },
    { name: 'integration-hero.jpg', title: 'API Integration', subtitle: 'Modern Architecture' }
  ];

  ensureDir(path.join(ROOT, 'public', 'assets', 'cases'));

  for (const { name, title, subtitle } of caseConfigs) {
    try {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="caseGrad${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${BRAND_COLORS.secondary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${BRAND_COLORS.primary};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#caseGrad${name})"/>
  
  <!-- Grid pattern -->
  <pattern id="grid${name}" width="100" height="100" patternUnits="userSpaceOnUse">
    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="${BRAND_COLORS.light}" stroke-width="1" opacity="0.1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid${name})"/>
  
  <!-- Content -->
  <text x="100" y="280" font-family="Arial, sans-serif" font-size="70" font-weight="bold" fill="white">${title}</text>
  <text x="100" y="360" font-family="Arial, sans-serif" font-size="42" fill="${BRAND_COLORS.light}">${subtitle}</text>
  
  <!-- Accent -->
  <rect x="100" y="400" width="150" height="6" fill="${BRAND_COLORS.accent}"/>
</svg>`;
      
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 90, progressive: true })
        .toFile(path.join(ROOT, 'public', 'assets', 'cases', name));
      console.log(`✅ assets/cases/${name}`);
    } catch (error) {
      console.error(`❌ Failed to generate ${name}:`, error.message);
    }
  }
};

// Generate browserconfig.xml
const generateBrowserConfig = () => {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/logo192.png"/>
      <TileColor>${BRAND_COLORS.primary}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  
  try {
    const filePath = path.join(ROOT, 'public', 'browserconfig.xml');
    fs.writeFileSync(filePath, xml);
    console.log('✅ browserconfig.xml');
  } catch (error) {
    console.error('❌ Failed to generate browserconfig.xml:', error.message);
  }
};

// Generate site.webmanifest
const generateWebManifest = () => {
  const manifest = {
    name: "Quantiva Advisory",
    short_name: "Quantiva",
    description: "SAP, Cloud & AI Excellence - Your trusted partner for digital transformation",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: BRAND_COLORS.primary,
    background_color: BRAND_COLORS.light,
    display: "standalone",
    start_url: "/",
    scope: "/"
  };
  
  try {
    const filePath = path.join(ROOT, 'public', 'site.webmanifest');
    fs.writeFileSync(filePath, JSON.stringify(manifest, null, 2));
    console.log('✅ site.webmanifest');
  } catch (error) {
    console.error('❌ Failed to generate site.webmanifest:', error.message);
  }
};

// Main execution
async function main() {
  console.log('\n🎨 Quantiva Advisory - Professional Asset Generator');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  // Ensure directories
  ensureDir(path.join(ROOT, 'public'));
  ensureDir(path.join(ROOT, 'public', 'assets'));
  
  console.log('\n📝 Generating SVG files...');
  generateSvgFavicon();
  generateSafariSvg();
  
  console.log('\n🖼️  Generating PNG icons...');
  await generatePngIcons();
  await generateIcoFile();
  
  console.log('\n📱 Generating OG images...');
  await generateOgImages();
  
  console.log('\n📸 Generating case hero images...');
  await generateCaseHeroImages();
  
  console.log('\n⚙️  Generating config files...');
  generateBrowserConfig();
  generateWebManifest();
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Asset generation complete!\n');
  console.log('📝 Next steps:');
  console.log('   1. Review generated assets in public/ directory');
  console.log('   2. Replace with professional designs if needed');
  console.log('   3. Test favicons: https://realfavicongenerator.net/favicon_checker');
  console.log('   4. Optimize further with TinyPNG or Squoosh if needed\n');
}

// Run with error handling
main().catch((error) => {
  console.error('\n❌ Fatal error:', error.message);
  console.error(error.stack);
  process.exit(1);
});

