import type { SupportedLanguage } from './contentHub';
import { getContentPosts } from './contentHub';
import { industryDetails } from '../data/industryDetails';
import { servicesOverview } from '../data/servicesOverview';

export type SearchItem = {
  id: string;
  language: SupportedLanguage;
  title: string;
  description: string;
  category: 'Content' | 'Industry' | 'Service';
  href: string;
  tags: string[];
};

export async function getSearchItems(lang: SupportedLanguage): Promise<SearchItem[]> {
  const [posts] = await Promise.all([
    getContentPosts(lang),
  ]);

  const postItems: SearchItem[] = posts.map((post) => ({
    id: `post-${post.slug}`,
    language: lang,
    title: post.title,
    description: post.excerpt,
    category: 'Content',
    href: `/${lang}/content/${post.slug}`,
    tags: post.tags ?? [],
  }));

  const industryItems: SearchItem[] = industryDetails
    .filter((industry) => industry.language === lang)
    .map((industry) => ({
      id: `industry-${industry.slug}`,
      language: lang,
      title: industry.name,
      description: industry.hero.subtitle,
      category: 'Industry',
      href: `/${lang}/industries/${industry.slug}`,
      tags: industry.technologies,
    }));

  const serviceItems: SearchItem[] = servicesOverview
    .filter((service) => service.language === lang)
    .map((service) => ({
      id: `service-${service.slug}`,
      language: lang,
      title: service.title,
      description: service.description,
      category: 'Service',
      href: `/${lang}/services/${service.slug}`,
      tags: service.tags,
    }));

  return [...postItems, ...industryItems, ...serviceItems];
}

