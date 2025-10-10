import React, { createContext, useContext, ReactNode } from 'react';
import contentData from '../data/content.json';
import teamData from '../data/team.json';

type Language = 'de' | 'en';

interface ContentContextType {
  content: typeof contentData;
  team: typeof teamData;
  getContent: <K extends keyof typeof contentData>(
    section: K,
    lang: Language
  ) => typeof contentData[K][Language];
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const getContent = <K extends keyof typeof contentData>(
    section: K,
    lang: Language
  ) => {
    return contentData[section][lang];
  };

  const value: ContentContextType = {
    content: contentData,
    team: teamData,
    getContent,
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
}

// Helper hooks for specific content sections
export function useHero(lang: Language) {
  const { getContent } = useContent();
  return getContent('hero', lang);
}

export function useAbout(lang: Language) {
  const { getContent } = useContent();
  return getContent('about', lang);
}

export function useServices(lang: Language) {
  const { getContent } = useContent();
  return getContent('services', lang);
}

export function useContactContent(lang: Language) {
  const { getContent } = useContent();
  return getContent('contact', lang);
}

export function useMeetingContent(lang: Language) {
  const { getContent } = useContent();
  return getContent('meeting', lang);
}

export function useCareersContent(lang: Language) {
  const { getContent } = useContent();
  return getContent('careers', lang);
}

export function useFooterContent(lang: Language) {
  const { getContent } = useContent();
  return getContent('footer', lang);
}

export function useNavigationContent(lang: Language) {
  const { getContent } = useContent();
  return getContent('navigation', lang);
}

export function useTeam() {
  const { team } = useContent();
  return team.sort((a, b) => a.order - b.order);
}




