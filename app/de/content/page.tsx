import type { Metadata } from 'next';
import ContentHubPage from '../../components/pages/content/ContentHubPage';
import { getContentPosts } from '../../lib/utils/contentHub';

export const metadata: Metadata = {
  title: 'Content Hub – Quantiva Advisory',
  description: 'Impulse, Playbooks und Projekteinblicke für den deutschen Mittelstand.',
  alternates: {
    canonical: '/de/content',
    languages: {
      'de-DE': '/de/content',
      'en-US': '/en/content',
    },
  },
};

export default async function ContentIndexDe() {
  const posts = await getContentPosts('de');
  return <ContentHubPage lang="de" posts={posts} />;
}

