/**
 * 🎣 React Hooks for Contentful (SDK v11 Compatible)
 * 
 * Simple hooks with automatic fallback to local JSON
 */

import { useState, useEffect, useMemo } from 'react';
import {
  fetchEntries,
  fetchEntry,
  isContentfulEnabled,
  richTextToPlainText,
  getAssetUrl,
} from '../utils/contentful';

// Fallback imports
import contentData from '../data/content.json';
import teamData from '../data/team.json';
import casesData from '../data/cases.json';

/**
 * Hook to fetch simplified page content
 */
export function usePageContent(section?: string) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);

        if (isContentfulEnabled) {
          // Fetch from Contentful
          const entry = await fetchEntry('pageContent', section ? {} : undefined);
          
          if (entry && entry.fields) {
            // Transform RichText fields to plain text
            const transformed: any = {};
            
            if (entry.fields.heroText) {
              transformed.hero = {
                title: richTextToPlainText(entry.fields.heroText),
              };
            }
            
            if (entry.fields.about) {
              transformed.about = {
                text: richTextToPlainText(entry.fields.about),
              };
            }
            
            if (entry.fields.footer) {
              transformed.footer = {
                text: richTextToPlainText(entry.fields.footer),
              };
            }
            
            setContent(transformed);
          } else {
            // Fallback to local JSON
            setContent(contentData);
          }
        } else {
          // Use local JSON
          setContent(contentData);
        }
      } catch (err) {
        console.error('Error fetching page content:', err);
        setError(err as Error);
        // Fallback to local JSON on error
        setContent(contentData);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [section]);

  return { content, loading, error };
}

/**
 * Hook to check Contentful status
 */
export function useContentfulStatus() {
  return {
    isEnabled: isContentfulEnabled,
    usingFallback: !isContentfulEnabled,
  };
}

/**
 * Simple hook for any content type
 */
export function useContentfulEntries<T = any>(
  contentType: string,
  query: any = {},
  fallback: T[] = []
) {
  const [entries, setEntries] = useState<T[]>(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Memoize serialized values to avoid unnecessary re-renders
  const queryString = useMemo(() => JSON.stringify(query), [query]);
  const fallbackString = useMemo(() => JSON.stringify(fallback), [fallback]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        if (isContentfulEnabled) {
          const result = await fetchEntries(contentType, query);
          setEntries(result as T[]);
        } else {
          setEntries(fallback);
        }
      } catch (err) {
        console.error(`Error fetching ${contentType}:`, err);
        setError(err as Error);
        setEntries(fallback);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentType, queryString, fallbackString]);

  return { entries, loading, error };
}

/**
 * Example Usage:
 * 
 * function HeroSection() {
 *   const { content, loading } = usePageContent();
 *   
 *   if (loading) return <Spinner />;
 *   
 *   return <h1>{content?.hero?.title}</h1>;
 * }
 * 
 * function CustomContent() {
 *   const { entries } = useContentfulEntries('myContentType', {
 *     'fields.category': 'news'
 *   }, []);
 *   
 *   return entries.map(entry => <div key={entry.sys.id}>...</div>);
 * }
 */
