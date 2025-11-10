import type { Metadata } from 'next';
import SearchPageClient from '../../components/pages/search/SearchPageClient';
import { getSearchItems } from '../../lib/utils/searchIndex';

export const metadata: Metadata = {
  title: 'Search | Quantiva Advisory',
  description: 'Discover content, services and industry solutions from Quantiva Advisory.',
};

export default async function SearchPage() {
  const items = await getSearchItems('en');
  return <SearchPageClient items={items} lang="en" />;
}
