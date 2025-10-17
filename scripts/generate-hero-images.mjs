#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

// Neue Cases ohne Hero-Bilder
const newCases = [
  'rottendorf-pharma',
  'volkswagen-integration', 
  'schwarz-it-cloud',
  'loreal-digital',
  'commerzbank-security',
  'harrybrot-logistics',
  'galaxis-retail',
  'sbb-mobility',
  'migros-supply',
  'amazon-aws',
  'pwc-consulting',
  'ibm-enterprise',
  'deutsche-rentenversicherung',
  'bmw-manufacturing',
  'matratzen-concord',
  'liebherr-construction',
  'phoenix-pharma',
  'hamburger-sparkasse',
  'dz-bank-finance',
  'bertelsmann-media',
  'sartorius-life-sciences'
];

// Farben für verschiedene Branchen
const industryColors = {
  'Pharma': '#4F46E5',      // Indigo
  'Automotive': '#DC2626',  // Red
  'Retail': '#059669',      // Emerald
  'Finance': '#7C3AED',     // Violet
  'Manufacturing': '#EA580C', // Orange
  'Public': '#0891B2',      // Cyan
  'Technology': '#9333EA',  // Purple
  'Media': '#BE185D',       // Pink
  'Healthcare': '#0D9488',  // Teal
  'default': '#6B7280'      // Gray
};

function createPlaceholderImage(caseName, industry = 'default') {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');
  
  // Hintergrundfarbe basierend auf Branche
  const bgColor = industryColors[industry] || industryColors.default;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, 800, 600);
  
  // Gradient Overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, 600);
  gradient.addColorStop(0, 'rgba(0,0,0,0.3)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.7)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 600);
  
  // Text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Case Name
  const displayName = caseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  ctx.fillText(displayName, 400, 250);
  
  // Industry
  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.fillText(industry, 400, 320);
  
  // Quantiva Logo/Branding
  ctx.font = 'bold 32px Arial';
  ctx.fillStyle = '#14B8A6'; // Teal
  ctx.fillText('Quantiva Advisory', 400, 400);
  
  // Subtle pattern
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 40, 0);
    ctx.lineTo(i * 40, 600);
    ctx.stroke();
  }
  
  return canvas.toBuffer('image/jpeg');
}

async function generateHeroImages() {
  console.log('🎨 Generating placeholder hero images...');
  
  // Erstelle cases Verzeichnis falls es nicht existiert
  const casesDir = path.join(process.cwd(), 'public', 'assets', 'cases');
  if (!fs.existsSync(casesDir)) {
    fs.mkdirSync(casesDir, { recursive: true });
  }
  
  // Lade Cases-Daten um Industry zu bekommen
  const casesData = JSON.parse(fs.readFileSync('app/lib/data/cases.json', 'utf8'));
  const caseMap = new Map();
  casesData.forEach(c => caseMap.set(c.slug, c.industry));
  
  for (const caseName of newCases) {
    const industry = caseMap.get(caseName) || 'default';
    const imageBuffer = createPlaceholderImage(caseName, industry);
    const filename = `${caseName.replace(/-/g, '-')}-hero.jpg`;
    const filepath = path.join(casesDir, filename);
    
    fs.writeFileSync(filepath, imageBuffer);
    console.log(`✅ Generated: ${filename}`);
  }
  
  console.log('🎉 Hero image generation complete!');
}

// Führe das Script aus
generateHeroImages().catch(console.error);
