#!/usr/bin/env node

/**
 * 🚀 Migrate JSON Data to Contentful
 * 
 * Migrates all local JSON content to Contentful CMS
 * Run after setting up Contentful Space and Content Models
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import contentfulManagement from 'contentful-management';

const { createClient } = contentfulManagement;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN || '';
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT || 'master';

// Data files
const CONTENT_FILE = path.join(__dirname, '../src/data/content.json');
const TEAM_FILE = path.join(__dirname, '../src/data/team.json');
const CASES_FILE = path.join(__dirname, '../src/data/cases.json');

/**
 * Check configuration
 */
function checkConfig() {
  if (!SPACE_ID || !MANAGEMENT_TOKEN) {
    console.error(`
❌ Missing Contentful configuration!

Please set environment variables:
  export CONTENTFUL_SPACE_ID="your_space_id"
  export CONTENTFUL_MANAGEMENT_TOKEN="your_management_token"

Get your Management Token from:
  https://app.contentful.com/spaces/${SPACE_ID || 'YOUR_SPACE_ID'}/api/keys

Usage:
  CONTENTFUL_SPACE_ID=xxx CONTENTFUL_MANAGEMENT_TOKEN=yyy node scripts/migrate-to-contentful.mjs
`);
    process.exit(1);
  }
}

/**
 * Create Contentful Client
 */
async function getContentfulEnvironment() {
  const client = createClient({ accessToken: MANAGEMENT_TOKEN });
  const space = await client.getSpace(SPACE_ID);
  const environment = await space.getEnvironment(ENVIRONMENT_ID);
  return environment;
}

/**
 * Migrate Page Content (Hero, About, etc.)
 */
async function migratePageContent(environment, contentData) {
  console.log('\n📄 Migrating Page Content...');

  const sections = ['hero', 'about', 'navigation', 'footer'];
  const languages = ['de', 'en'];

  for (const section of sections) {
    for (const lang of languages) {
      const data = contentData[section]?.[lang];
      if (!data) continue;

      try {
        const entry = await environment.createEntry('pageContent', {
          fields: {
            internalName: { 'en-US': `${section}-${lang}` },
            section: { 'en-US': section },
            language: { 'en-US': lang },
            title: { 'en-US': data.title || '' },
            subtitle: { 'en-US': data.subtitle || '' },
            description: { 'en-US': data.description || data.text || '' },
            buttonText: { 'en-US': data.ctaPrimary || data.cta || '' },
            buttonLink: { 'en-US': data.buttonLink || '#' },
            videoUrl: { 'en-US': data.backgroundVideo || '' },
          },
        });

        await entry.publish();
        console.log(`  ✅ ${section} (${lang})`);
      } catch (error) {
        console.error(`  ❌ ${section} (${lang}):`, error.message);
      }
    }
  }
}

/**
 * Migrate Services
 */
async function migrateServices(environment, contentData) {
  console.log('\n🛠️ Migrating Services...');

  const services = contentData.services?.de?.items || [];
  const servicesEn = contentData.services?.en?.items || [];

  for (let i = 0; i < services.length; i++) {
    const serviceDe = services[i];
    const serviceEn = servicesEn[i];

    try {
      const entry = await environment.createEntry('service', {
        fields: {
          id: { 'en-US': serviceDe.id },
          titleDe: { 'en-US': serviceDe.title },
          titleEn: { 'en-US': serviceEn?.title || serviceDe.title },
          descriptionDe: { 'en-US': serviceDe.description },
          descriptionEn: { 'en-US': serviceEn?.description || serviceDe.description },
          icon: { 'en-US': serviceDe.icon },
          order: { 'en-US': i + 1 },
        },
      });

      await entry.publish();
      console.log(`  ✅ ${serviceDe.title}`);
    } catch (error) {
      console.error(`  ❌ ${serviceDe.title}:`, error.message);
    }
  }
}

/**
 * Migrate Team Members
 */
async function migrateTeamMembers(environment, teamData) {
  console.log('\n👥 Migrating Team Members...');

  const teamDe = teamData.de || [];
  const teamEn = teamData.en || [];

  for (let i = 0; i < teamDe.length; i++) {
    const memberDe = teamDe[i];
    const memberEn = teamEn[i];

    try {
      const entry = await environment.createEntry('teamMember', {
        fields: {
          name: { 'en-US': memberDe.name },
          roleDe: { 'en-US': memberDe.role },
          roleEn: { 'en-US': memberEn?.role || memberDe.role },
          bioDe: { 'en-US': memberDe.bio },
          bioEn: { 'en-US': memberEn?.bio || memberDe.bio },
          email: { 'en-US': memberDe.email || '' },
          linkedin: { 'en-US': memberDe.linkedin || '' },
          order: { 'en-US': i + 1 },
        },
      });

      await entry.publish();
      console.log(`  ✅ ${memberDe.name}`);
    } catch (error) {
      console.error(`  ❌ ${memberDe.name}:`, error.message);
    }
  }
}

/**
 * Migrate Case Studies
 */
async function migrateCaseStudies(environment, casesData) {
  console.log('\n📚 Migrating Case Studies...');

  const cases = Array.isArray(casesData) ? casesData : [];

  for (const caseStudy of cases) {
    try {
      const entry = await environment.createEntry('caseStudy', {
        fields: {
          slug: { 'en-US': caseStudy.slug },
          titleDe: { 'en-US': caseStudy.titleDe || caseStudy.title },
          titleEn: { 'en-US': caseStudy.titleEn || caseStudy.title },
          subtitleDe: { 'en-US': caseStudy.subtitleDe || caseStudy.subtitle || '' },
          subtitleEn: { 'en-US': caseStudy.subtitleEn || caseStudy.subtitle || '' },
          category: { 'en-US': caseStudy.category || '' },
          industry: { 'en-US': caseStudy.industry || '' },
          goalsDe: { 'en-US': caseStudy.goalsDe || caseStudy.goals || [] },
          goalsEn: { 'en-US': caseStudy.goalsEn || caseStudy.goals || [] },
          solutionDe: { 'en-US': caseStudy.solutionDe || caseStudy.solution || [] },
          solutionEn: { 'en-US': caseStudy.solutionEn || caseStudy.solution || [] },
          resultsDe: { 'en-US': caseStudy.resultsDe || caseStudy.results || [] },
          resultsEn: { 'en-US': caseStudy.resultsEn || caseStudy.results || [] },
          technologies: { 'en-US': caseStudy.tech || [] },
          quoteTextDe: { 'en-US': caseStudy.quote?.textDe || caseStudy.quote?.text || '' },
          quoteTextEn: { 'en-US': caseStudy.quote?.textEn || caseStudy.quote?.text || '' },
          quoteAuthor: { 'en-US': caseStudy.quote?.author || '' },
          publishedAt: { 'en-US': caseStudy.publishedAt || new Date().toISOString() },
          status: { 'en-US': 'published' },
        },
      });

      await entry.publish();
      console.log(`  ✅ ${caseStudy.slug}`);
    } catch (error) {
      console.error(`  ❌ ${caseStudy.slug}:`, error.message);
    }
  }
}

/**
 * Main Migration
 */
async function main() {
  console.log(`
🚀 Contentful Migration Tool
───────────────────────────────────────────

Space ID:     ${SPACE_ID}
Environment:  ${ENVIRONMENT_ID}
`);

  // Check config
  checkConfig();

  // Load data
  console.log('📂 Loading local JSON data...');
  const contentData = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
  const teamData = JSON.parse(fs.readFileSync(TEAM_FILE, 'utf-8'));
  const casesData = JSON.parse(fs.readFileSync(CASES_FILE, 'utf-8'));

  try {
    // Get Contentful environment
    console.log('🔌 Connecting to Contentful...');
    const environment = await getContentfulEnvironment();
    console.log('✅ Connected!');

    // Run migrations
    await migratePageContent(environment, contentData);
    await migrateServices(environment, contentData);
    await migrateTeamMembers(environment, teamData);
    await migrateCaseStudies(environment, casesData);

    console.log(`
✅ Migration Complete!

Next Steps:
1. Visit your Contentful space: https://app.contentful.com/spaces/${SPACE_ID}
2. Verify all content was migrated correctly
3. Set environment variables in .env.local:
   REACT_APP_CONTENTFUL_SPACE_ID=${SPACE_ID}
   REACT_APP_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token
4. Test locally: npm start
5. Deploy to Vercel with environment variables

🎉 Your CMS is ready!
`);
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

main().catch(console.error);

