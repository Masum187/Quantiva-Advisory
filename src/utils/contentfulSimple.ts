/**
 * 🚀 Simplified Contentful Integration
 * 
 * Works with the simplified Content Model structure
 */

import { createClient, Entry, ContentfulClientApi } from 'contentful';

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
 * Simplified Page Content Interface
 */
export interface SimplePageContentFields {
  heroText?: any; // RichText
  about?: any; // RichText
  navigation?: any; // Object
  footer?: any; // RichText
}

/**
 * Fetch Page Content
 */
export async function getSimplePageContent(): Promise<Entry<SimplePageContentFields> | null> {
  try {
    const client = getContentfulClient();
    if (!client) return null;

    const entries = await client.getEntries<SimplePageContentFields>({
      content_type: 'pageContent',
      limit: 1,
    });

    return entries.items[0] || null;
  } catch (error) {
    console.error('Error fetching page content:', error);
    return null;
  }
}

/**
 * Parse RichText to plain text (simple version)
 */
export function richTextToPlainText(richText: any): string {
  if (!richText || !richText.content) return '';
  
  return richText.content
    .map((node: any) => {
      if (node.nodeType === 'paragraph' || node.nodeType === 'heading-1') {
        return node.content?.map((c: any) => c.value).join('') || '';
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

/**
 * Example usage:
 * 
 * const pageContent = await getSimplePageContent();
 * const heroText = richTextToPlainText(pageContent?.fields.heroText);
 */

