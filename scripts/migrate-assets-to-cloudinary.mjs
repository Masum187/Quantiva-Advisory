#!/usr/bin/env node

/**
 * 🚀 Cloudinary Assets Migration Script
 * 
 * Migrates all content.json image URLs to Cloudinary
 * Run after uploading all assets to Cloudinary
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CLOUD_NAME = 'dbrisux8i';
const ASSET_PATH = 'quantiva-assets';
const CONTENT_FILE = path.join(__dirname, '../src/data/content.json');

/**
 * Cloudinary URL Generator
 */
function getCloudinaryUrl(assetPath, options = {}) {
  const { width = 1200, quality = 'auto', format = 'auto' } = options;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_${format},q_${quality},w_${width}/${ASSET_PATH}/${assetPath}`;
}

/**
 * Asset Mapping (Unsplash → Cloudinary)
 */
const assetMapping = {
  // Services
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a': 'services/sap-consulting',
  'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d': 'services/cloud-solutions',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d': 'services/ai-ml',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296': 'services/integration',
  'https://images.unsplash.com/photo-1605902711622-cfb43c4437d2': 'services/security',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984': 'services/enablement',
  
  // Local assets
  '/assets/cases/api-first-hero.jpg': 'cases/api-first-hero',
  '/assets/cases/btp-delivery-hero.jpg': 'cases/btp-delivery-hero',
  '/assets/cases/btp-hero.jpg': 'cases/btp-hero',
  '/assets/cases/data-hero.jpg': 'cases/data-hero',
  '/assets/cases/data-quality-hero.jpg': 'cases/data-quality-hero',
  '/assets/cases/integration-hero.jpg': 'cases/integration-hero',
  
  // OG Images
  '/assets/og-default.jpg': 'og/default',
  '/assets/og-cases.jpg': 'og/cases',
  '/assets/og/api-first.jpg': 'og/api-first',
  '/assets/og/btp-delivery.jpg': 'og/btp-delivery',
  '/assets/og/data-quality.jpg': 'og/data-quality',
  
  // Hero
  '/assets/hero-bg.mp4': 'videos/hero-bg',
  '/assets/hero-fallback.jpg': 'videos/hero-bg', // Use video poster as fallback
};

/**
 * Replace URLs in content
 */
function migrateContent() {
  console.log('🚀 Starting Cloudinary migration...\n');
  
  // Read content.json
  const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
  let replacements = 0;
  
  // Recursive function to replace URLs
  function replaceUrls(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        // Check if it's an image/video URL
        for (const [oldUrl, cloudinaryPath] of Object.entries(assetMapping)) {
          if (obj[key].includes(oldUrl.split('?')[0])) {
            // Determine if it's a video or image
            const isVideo = key.includes('Video') || oldUrl.includes('.mp4');
            
            if (isVideo) {
              obj[key] = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto,w_1920/${ASSET_PATH}/${cloudinaryPath}.mp4`;
            } else {
              obj[key] = getCloudinaryUrl(cloudinaryPath);
            }
            
            console.log(`✅ Replaced: ${key}`);
            console.log(`   Old: ${oldUrl}`);
            console.log(`   New: ${obj[key]}\n`);
            replacements++;
          }
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        replaceUrls(obj[key]);
      }
    }
  }
  
  replaceUrls(content);
  
  // Backup original
  const backupFile = CONTENT_FILE.replace('.json', '.backup.json');
  fs.writeFileSync(backupFile, fs.readFileSync(CONTENT_FILE));
  console.log(`💾 Backup created: ${backupFile}\n`);
  
  // Write updated content
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
  console.log(`✨ Migration complete! ${replacements} URLs replaced.`);
  console.log(`📝 Updated: ${CONTENT_FILE}\n`);
  
  // Show next steps
  console.log('📋 Next Steps:');
  console.log('1. Verify the changes in content.json');
  console.log('2. Test locally: npm start');
  console.log('3. Commit & deploy: git add . && git commit && git push\n');
}

/**
 * Verify that assets exist on Cloudinary
 */
async function verifyAssets() {
  console.log('🔍 Verifying Cloudinary assets...\n');
  
  const uniquePaths = [...new Set(Object.values(assetMapping))];
  
  for (const assetPath of uniquePaths) {
    const url = getCloudinaryUrl(assetPath, { width: 10 }); // Small size for quick check
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        console.log(`✅ ${assetPath}`);
      } else {
        console.log(`❌ ${assetPath} (Status: ${response.status})`);
      }
    } catch (error) {
      console.log(`❌ ${assetPath} (Error: ${error.message})`);
    }
  }
  
  console.log('\n');
}

/**
 * Main
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--verify')) {
    await verifyAssets();
  } else if (args.includes('--migrate')) {
    migrateContent();
  } else {
    console.log(`
🖼️  Cloudinary Assets Migration Tool

Usage:
  node scripts/migrate-assets-to-cloudinary.mjs [command]

Commands:
  --verify    Check if all assets exist on Cloudinary
  --migrate   Migrate content.json to use Cloudinary URLs

Examples:
  # Check if assets are uploaded
  node scripts/migrate-assets-to-cloudinary.mjs --verify
  
  # Migrate after uploading assets
  node scripts/migrate-assets-to-cloudinary.mjs --migrate

Before running --migrate:
1. Upload all assets to Cloudinary (see CLOUDINARY_ASSETS_MIGRATION.md)
2. Verify structure: quantiva-assets/services/, quantiva-assets/cases/, etc.
3. Run --verify to check all assets exist
4. Then run --migrate to update content.json
`);
  }
}

main().catch(console.error);


