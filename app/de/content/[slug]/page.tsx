import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ContentPostPage from '../../../components/pages/content/ContentPostPage';
import { getContentPost, getContentPosts } from '../../../lib/utils/contentHub';

type Params = {
  params: {
    slug: string;
  };
};

type PageParams = Promise<{ slug: string } | undefined>;
type PageSearchParams = Promise<Record<string, string | string[]> | undefined>;

export async function generateStaticParams() {
  const posts = await getContentPosts('de');
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const resolvedParams = await params;
  if (!resolvedParams?.slug) {
    return { title: 'Content Hub' };
  }

  const post = await getContentPost('de', resolvedParams.slug);
  if (!post) {
    return {
      title: 'Content Hub',
    };
  }

  return {
    title: `${post.title} – Quantiva Advisory`,
    description: post.excerpt,
    alternates: {
      canonical: `/de/content/${post.slug}`,
      languages: {
        'de-DE': `/de/content/${post.slug}`,
        'en-US': `/en/content/${post.slug}`,
      },
    },
  };
}

export default async function ContentPostDe({ params }: { params: PageParams; searchParams?: PageSearchParams }) {
  const resolvedParams = await params;
  if (!resolvedParams?.slug) {
    notFound();
  }

  const post = await getContentPost('de', resolvedParams.slug);
  if (!post) {
    notFound();
  }

  const related = (await getContentPosts('de')).filter((item) => item.slug !== post.slug);

  return <ContentPostPage lang="de" post={post} related={related} />;
}
