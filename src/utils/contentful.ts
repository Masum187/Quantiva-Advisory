/**
 * 🚀 Contentful CMS Integration
 * 
 * Headless CMS für alle Website-Inhalte
 * Auto-Deploy via Webhook, Preview-Modus, Multi-Language
 */

import { createClient, Entry, Asset, ContentfulClientApi } from 'contentful';

// Environment Configuration
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || '';
const PREVIEW_TOKEN = process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN || '';
const ENVIRONMENT = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

// Check if Contentful is configured
export const isContentfulEnabled = !!(SPACE_ID && ACCESS_TOKEN);

/**
 * Create Contentful Client
 */
export function createContentfulClient(preview = false): ContentfulClientApi<undefined> {
  if (!SPACE_ID || !ACCESS_TOKEN) {
    console.warn('⚠️ Contentful not configured. Using fallback to local JSON.');
    throw new Error('Contentful credentials missing');
  }

  return createClient({
    space: SPACE_ID,
    accessToken: preview ? PREVIEW_TOKEN : ACCESS_TOKEN,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
    environment: ENVIRONMENT,
  });
}

// Default client (uses delivery API)
let client: ContentfulClientApi<undefined> | null = null;

export function getContentfulClient(): ContentfulClientApi<undefined> {
  if (!client && isContentfulEnabled) {
    client = createContentfulClient(false);
  }
  return client!;
}

/**
 * Content Type Interfaces
 */

export interface PageContentFields {
  internalName: string;
  section: string;
  language: 'de' | 'en';
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: Asset;
  videoUrl?: string;
}

export interface ServiceFields {
  id: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  icon: string;
  image?: Asset;
  order: number;
}

export interface TeamMemberFields {
  name: string;
  roleDe: string;
  roleEn: string;
  bioDe: string;
  bioEn: string;
  image?: Asset;
  email?: string;
  linkedin?: string;
  order: number;
}

export interface CaseStudyFields {
  slug: string;
  titleDe: string;
  titleEn: string;
  subtitleDe?: string;
  subtitleEn?: string;
  category: string;
  industry: string;
  heroImage?: Asset;
  goalsDe?: string[];
  goalsEn?: string[];
  solutionDe?: string[];
  solutionEn?: string[];
  resultsDe?: string[];
  resultsEn?: string[];
  technologies?: string[];
  quoteTextDe?: string;
  quoteTextEn?: string;
  quoteAuthor?: string;
  publishedAt?: string;
  status: 'draft' | 'published';
}

/**
 * Fetch Page Content by Section and Language
 */
export async function getPageContent(
  section: string,
  language: 'de' | 'en'
): Promise<Entry<PageContentFields> | null> {
  try {
    const client = getContentfulClient();
    const entries = await client.getEntries<PageContentFields>({
      content_type: 'pageContent',
      'fields.section': section,
      'fields.language': language,
      limit: 1,
    });

    return entries.items[0] || null;
  } catch (error) {
    console.error(`Error fetching page content for ${section} (${language}):`, error);
    return null;
  }
}

/**
 * Fetch All Services
 */
export async function getServices(): Promise<Entry<ServiceFields>[]> {
  try {
    const client = getContentfulClient();
    const entries = await client.getEntries<ServiceFields>({
      content_type: 'service',
      order: ['fields.order'],
    });

    return entries.items;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

/**
 * Fetch All Team Members
 */
export async function getTeamMembers(): Promise<Entry<TeamMemberFields>[]> {
  try {
    const client = getContentfulClient();
    const entries = await client.getEntries<TeamMemberFields>({
      content_type: 'teamMember',
      order: ['fields.order'],
    });

    return entries.items;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

/**
 * Fetch All Published Case Studies
 */
export async function getCaseStudies(): Promise<Entry<CaseStudyFields>[]> {
  try {
    const client = getContentfulClient();
    const entries = await client.getEntries<CaseStudyFields>({
      content_type: 'caseStudy',
      'fields.status': 'published',
      order: ['-fields.publishedAt'],
    });

    return entries.items;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

/**
 * Fetch Single Case Study by Slug
 */
export async function getCaseStudy(slug: string): Promise<Entry<CaseStudyFields> | null> {
  try {
    const client = getContentfulClient();
    const entries = await client.getEntries<CaseStudyFields>({
      content_type: 'caseStudy',
      'fields.slug': slug,
      limit: 1,
    });

    return entries.items[0] || null;
  } catch (error) {
    console.error(`Error fetching case study ${slug}:`, error);
    return null;
  }
}

/**
 * Get Asset URL
 */
export function getAssetUrl(asset?: Asset): string | null {
  if (!asset?.fields?.file?.url) return null;
  const url = asset.fields.file.url;
  return url.startsWith('//') ? `https:${url}` : url;
}

/**
 * Transform Contentful Entry to Local Format
 */
export function transformPageContent(entry: Entry<PageContentFields> | null): any {
  if (!entry) return null;

  const fields = entry.fields;
  return {
    title: fields.title,
    subtitle: fields.subtitle,
    description: fields.description,
    ctaPrimary: fields.buttonText,
    buttonLink: fields.buttonLink,
    backgroundVideo: fields.videoUrl,
    backgroundImage: getAssetUrl(fields.image),
  };
}

export function transformService(entry: Entry<ServiceFields>, language: 'de' | 'en'): any {
  const fields = entry.fields;
  return {
    id: fields.id,
    title: language === 'de' ? fields.titleDe : fields.titleEn,
    description: language === 'de' ? fields.descriptionDe : fields.descriptionEn,
    icon: fields.icon,
    image: getAssetUrl(fields.image),
  };
}

export function transformTeamMember(entry: Entry<TeamMemberFields>, language: 'de' | 'en'): any {
  const fields = entry.fields;
  return {
    name: fields.name,
    role: language === 'de' ? fields.roleDe : fields.roleEn,
    bio: language === 'de' ? fields.bioDe : fields.bioEn,
    image: getAssetUrl(fields.image),
    email: fields.email,
    linkedin: fields.linkedin,
  };
}

export function transformCaseStudy(entry: Entry<CaseStudyFields>, language: 'de' | 'en'): any {
  const fields = entry.fields;
  return {
    slug: fields.slug,
    title: language === 'de' ? fields.titleDe : fields.titleEn,
    subtitle: language === 'de' ? fields.subtitleDe : fields.subtitleEn,
    category: fields.category,
    industry: fields.industry,
    heroImage: getAssetUrl(fields.heroImage),
    goals: language === 'de' ? fields.goalsDe : fields.goalsEn,
    solution: language === 'de' ? fields.solutionDe : fields.solutionEn,
    results: language === 'de' ? fields.resultsDe : fields.resultsEn,
    tech: fields.technologies,
    quote: fields.quoteTextDe || fields.quoteTextEn ? {
      text: language === 'de' ? fields.quoteTextDe : fields.quoteTextEn,
      author: fields.quoteAuthor,
    } : null,
    publishedAt: fields.publishedAt,
  };
}

/**
 * Cache for better performance
 */
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function getCachedContent<T>(
  key: string,
  fetcher: () => Promise<T>
): Promise<T> {
  const cached = cache.get(key);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL) {
    return cached.data as T;
  }

  const data = await fetcher();
  cache.set(key, { data, timestamp: now });
  return data;
}

/**
 * Clear cache (useful for development)
 */
export function clearContentfulCache() {
  cache.clear();
}

/**
 * Example Usage:
 * 
 * // Fetch hero content for German
 * const heroDE = await getPageContent('hero', 'de');
 * 
 * // Fetch all services
 * const services = await getServices();
 * 
 * // Transform to local format
 * const transformed = services.map(s => transformService(s, 'de'));
 * 
 * // With cache
 * const heroContent = await getCachedContent('hero-de', () => getPageContent('hero', 'de'));
 */

