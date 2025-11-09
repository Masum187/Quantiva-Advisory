import type { Metadata } from 'next';
import ContentHubPage from '../../components/pages/content/ContentHubPage';
import { getContentPosts } from '../../lib/utils/contentHub';

export const metadata: Metadata = {
  title: 'Content Hub – Quantiva Advisory',
  description: 'Insights, playbooks and project takeaways for European mid-market leaders.',
  alternates: {
    canonical: '/en/content',
    languages: {
      'de-DE': '/de/content',
      'en-US': '/en/content',
    },
  },
};

export default async function ContentIndexEn() {
  const posts = await getContentPosts('en');
  return <ContentHubPage lang="en" posts={posts} />;
}
