#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to convert img tags to Next.js Image components
function convertImgToImage(content, filePath) {
  let updatedContent = content;
  let hasChanges = false;

  // Add Image import if not present
  if (!updatedContent.includes("import Image from 'next/image'") && updatedContent.includes('<img')) {
    const importMatch = updatedContent.match(/import.*from 'next\/link';/);
    if (importMatch) {
      updatedContent = updatedContent.replace(
        importMatch[0],
        importMatch[0] + "\nimport Image from 'next/image';"
      );
      hasChanges = true;
    }
  }

  // Convert img tags to Image components
  const imgRegex = /<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/g;
  
  updatedContent = updatedContent.replace(imgRegex, (match, beforeSrc, src, afterSrc) => {
    // Extract alt attribute
    const altMatch = match.match(/alt=["']([^"']*)["']/);
    const alt = altMatch ? altMatch[1] : '';
    
    // Extract className
    const classMatch = match.match(/className=["']([^"']*)["']/);
    const className = classMatch ? classMatch[1] : '';
    
    // Determine width and height based on className or default
    let width = 800;
    let height = 600;
    
    if (className.includes('w-80') && className.includes('h-80')) {
      width = 320;
      height = 320;
    } else if (className.includes('w-full') && className.includes('h-full')) {
      width = 800;
      height = 600;
    } else if (className.includes('h-48')) {
      height = 192;
    }
    
    // Create Image component
    const imageComponent = `<Image
      src="${src}"
      alt="${alt}"
      width={${width}}
      height={${height}}
      className="${className}"
    />`;
    
    hasChanges = true;
    return imageComponent;
  });

  return { content: updatedContent, hasChanges };
}

// Function to process all TypeScript/JavaScript files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        processFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const { content: updatedContent, hasChanges } = convertImgToImage(content, filePath);
        
        if (hasChanges) {
          fs.writeFileSync(filePath, updatedContent);
          console.log(`✅ Updated: ${filePath}`);
        }
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Main execution
console.log('🚀 Starting image optimization...');
console.log('Converting <img> tags to Next.js <Image> components...\n');

const appDir = path.join(__dirname, '..', 'app');
processFiles(appDir);

console.log('\n✨ Image optimization complete!');
console.log('📊 Benefits:');
console.log('  - Automatic image optimization');
console.log('  - Better Core Web Vitals');
console.log('  - Reduced bandwidth usage');
console.log('  - Improved loading performance');
