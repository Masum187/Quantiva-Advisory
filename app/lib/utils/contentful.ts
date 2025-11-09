/**
 * 🚀 Contentful CMS Integration (SDK v11 Compatible)
 * 
 * Headless CMS integration with proper EntrySkeletonType support
 */

import { createClient, ContentfulClientApi, Entry } from 'contentful';

// Environment Configuration
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || '';
const ENVIRONMENT = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

// Check if Contentful is configured
export const isContentfulEnabled = !!(SPACE_ID && ACCESS_TOKEN);

/**
 * Create Contentful Client
 */
let client: ContentfulClientApi<undefined> | null = null;

export function getContentfulClient(): ContentfulClientApi<undefined> | null {
  if (!isContentfulEnabled) {
    console.warn('⚠️ Contentful not configured. Using fallback to local JSON.');
    return null;
  }

  if (!client) {
    client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
      environment: ENVIRONMENT,
    });
  }
  
  return client;
}

/**
 * Simple Contentful Entry Type (no complex skeleton)
 */
export type ContentfulEntry<T = any> = Entry<any, undefined, string> & {
  fields: T;
};

/**
 * Fetch entries with simple typing
 */
export async function fetchEntries<T = any>(contentType: string, query: any = {}): Promise<ContentfulEntry<T>[]> {
  try {
    const client = getContentfulClient();
    if (!client) return [];

    const response = await client.getEntries({
      content_type: contentType,
      ...query,
    });

    return response.items as ContentfulEntry<T>[];
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
}

/**
 * Fetch single entry
 */
export async function fetchEntry<T = any>(contentType: string, query: any = {}): Promise<ContentfulEntry<T> | null> {
  const entries = await fetchEntries<T>(contentType, { ...query, limit: 1 });
  return entries[0] || null;
}

// Management API helpers -----------------------------------------------------

type ManagementEnv = {
  getEnvironment: (id: string) => Promise<any>;
};

async function getManagementEnvironment(): Promise<any | null> {
  const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
  const managementToken = process.env.REACT_APP_CONTENTFUL_MANAGEMENT_TOKEN;
  const environmentId = process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master';

  if (!spaceId || !managementToken) {
    return null;
  }

  const { createClient: createManagementClient } = await import('contentful-management');
  const mgmtClient = createManagementClient({ accessToken: managementToken });
  const space = await mgmtClient.getSpace(spaceId);
  const env = await (space as ManagementEnv).getEnvironment(environmentId);
  return env;
}

export async function createJobPosting(fields: any) {
  const env = await getManagementEnvironment();
  if (!env) {
    throw new Error('Contentful management environment not configured');
  }

  const entry = await env.createEntry('jobPosting', { fields });
  await entry.publish();
  return entry;
}

export async function getJobPostingEntries(query: any = {}) {
  return fetchEntries('jobPosting', query);
}

/**
 * Get Asset URL
 */
export function getAssetUrl(asset: any): string | null {
  if (!asset?.fields?.file?.url) return null;
  const url = asset.fields.file.url;
  if (typeof url === 'string') {
    return url.startsWith('//') ? `https:${url}` : url;
  }
  return null;
}

/**
 * Parse RichText to plain text (simple version)
 */
export function richTextToPlainText(richText: any): string {
  if (!richText || !richText.content) return '';
  
  return richText.content
    .map((node: any) => {
      if (node.nodeType === 'paragraph' || node.nodeType?.startsWith('heading')) {
        return node.content?.map((c: any) => c.value || '').join('') || '';
      }
      return '';
    })
    .filter(Boolean)
    .join('\n');
}

/**
 * Content caching
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

export function clearContentfulCache() {
  cache.clear();
}

/**
 * Example usage:
 * 
 * // Fetch page content
 * const entries = await fetchEntries('pageContent', { 
 *   'fields.section': 'hero',
 *   'fields.language': 'de'
 * });
 * 
 * // Get hero text
 * const heroText = richTextToPlainText(entries[0]?.fields.heroText);
 * 
 * // Get image URL
 * const imageUrl = getAssetUrl(entries[0]?.fields.image);
 */
