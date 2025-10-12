import QuantivaWebsite from '../../components/QuantivaWebsite';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about Quantiva Advisory - Your partner for SAP, Cloud and AI consulting.',
  alternates: {
    canonical: '/en/about',
    languages: {
      'de-DE': '/de/about',
      'en-US': '/en/about',
    },
  },
};

export default function AboutPage() {
  return <QuantivaWebsite />;
}


