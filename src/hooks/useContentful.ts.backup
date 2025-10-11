/**
 * 🎣 React Hooks for Contentful
 * 
 * Easy-to-use hooks for fetching content from Contentful
 * Falls back to local JSON if Contentful is not configured
 */

import { useState, useEffect } from 'react';
import {
  getPageContent,
  getServices,
  getTeamMembers,
  getCaseStudies,
  getCaseStudy,
  transformPageContent,
  transformService,
  transformTeamMember,
  transformCaseStudy,
  isContentfulEnabled,
  getCachedContent,
} from '../utils/contentful';

// Fallback imports
import contentData from '../data/content.json';
import teamData from '../data/team.json';
import casesData from '../data/cases.json';

/**
 * Hook to fetch page content (hero, about, etc.)
 */
export function usePageContent(section: string, language: 'de' | 'en') {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);

        if (isContentfulEnabled) {
          // Fetch from Contentful
          const cacheKey = `page-${section}-${language}`;
          const entry = await getCachedContent(cacheKey, () => 
            getPageContent(section, language)
          );
          const transformed = transformPageContent(entry);
          setContent(transformed);
        } else {
          // Fallback to local JSON
          const localContent = (contentData as any)[section]?.[language];
          setContent(localContent);
        }
      } catch (err) {
        console.error('Error fetching page content:', err);
        setError(err as Error);
        
        // Fallback to local JSON on error
        const localContent = (contentData as any)[section]?.[language];
        setContent(localContent);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, [section, language]);

  return { content, loading, error };
}

/**
 * Hook to fetch all services
 */
export function useServices(language: 'de' | 'en') {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true);

        if (isContentfulEnabled) {
          // Fetch from Contentful
          const cacheKey = `services-${language}`;
          const entries = await getCachedContent(cacheKey, getServices);
          const transformed = entries.map(entry => transformService(entry, language));
          setServices(transformed);
        } else {
          // Fallback to local JSON
          const localServices = (contentData as any).services?.[language]?.items || [];
          setServices(localServices);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err as Error);
        
        // Fallback to local JSON on error
        const localServices = (contentData as any).services?.[language]?.items || [];
        setServices(localServices);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, [language]);

  return { services, loading, error };
}

/**
 * Hook to fetch team members
 */
export function useTeamMembers(language: 'de' | 'en') {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        setLoading(true);

        if (isContentfulEnabled) {
          // Fetch from Contentful
          const cacheKey = `team-${language}`;
          const entries = await getCachedContent(cacheKey, getTeamMembers);
          const transformed = entries.map(entry => transformTeamMember(entry, language));
          setTeamMembers(transformed);
        } else {
          // Fallback to local JSON
          const localTeam = (teamData as any)[language] || [];
          setTeamMembers(localTeam);
        }
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError(err as Error);
        
        // Fallback to local JSON on error
        const localTeam = (teamData as any)[language] || [];
        setTeamMembers(localTeam);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamMembers();
  }, [language]);

  return { teamMembers, loading, error };
}

/**
 * Hook to fetch all case studies
 */
export function useCaseStudies(language: 'de' | 'en') {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        setLoading(true);

        if (isContentfulEnabled) {
          // Fetch from Contentful
          const cacheKey = `cases-${language}`;
          const entries = await getCachedContent(cacheKey, getCaseStudies);
          const transformed = entries.map(entry => transformCaseStudy(entry, language));
          setCaseStudies(transformed);
        } else {
          // Fallback to local JSON
          const localCases = Array.isArray(casesData) ? casesData : [];
          setCaseStudies(localCases);
        }
      } catch (err) {
        console.error('Error fetching case studies:', err);
        setError(err as Error);
        
        // Fallback to local JSON on error
        const localCases = Array.isArray(casesData) ? casesData : [];
        setCaseStudies(localCases);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudies();
  }, [language]);

  return { caseStudies, loading, error };
}

/**
 * Hook to fetch single case study
 */
export function useCaseStudy(slug: string, language: 'de' | 'en') {
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCaseStudy() {
      try {
        setLoading(true);

        if (isContentfulEnabled) {
          // Fetch from Contentful
          const cacheKey = `case-${slug}-${language}`;
          const entry = await getCachedContent(cacheKey, () => getCaseStudy(slug));
          const transformed = entry ? transformCaseStudy(entry, language) : null;
          setCaseStudy(transformed);
        } else {
          // Fallback to local JSON
          const localCases = Array.isArray(casesData) ? casesData : [];
          const localCase = localCases.find((c: any) => c.slug === slug);
          setCaseStudy(localCase || null);
        }
      } catch (err) {
        console.error(`Error fetching case study ${slug}:`, err);
        setError(err as Error);
        
        // Fallback to local JSON on error
        const localCases = Array.isArray(casesData) ? casesData : [];
        const localCase = localCases.find((c: any) => c.slug === slug);
        setCaseStudy(localCase || null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchCaseStudy();
    }
  }, [slug, language]);

  return { caseStudy, loading, error };
}

/**
 * Hook to check if Contentful is enabled
 */
export function useContentfulStatus() {
  return {
    isEnabled: isContentfulEnabled,
    usingFallback: !isContentfulEnabled,
  };
}

/**
 * Example Usage:
 * 
 * function HeroSection() {
 *   const { content, loading } = usePageContent('hero', 'de');
 *   
 *   if (loading) return <Spinner />;
 *   
 *   return <h1>{content?.title}</h1>;
 * }
 * 
 * function ServicesSection() {
 *   const { services, loading } = useServices('de');
 *   
 *   if (loading) return <Spinner />;
 *   
 *   return services.map(service => (
 *     <ServiceCard key={service.id} {...service} />
 *   ));
 * }
 */

