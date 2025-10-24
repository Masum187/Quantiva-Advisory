import QuantivaWebsite from '../components/QuantivaWebsite';

export const metadata = {
  title: 'Quantiva Advisory – SAP, Cloud & AI Consulting',
  description: 'Professional consulting for SAP, Cloud, AI, Integration and Cyber Security. Strategic consulting, technical excellence and sustainable solutions for your digital success.',
  alternates: {
    canonical: '/en',
    languages: {
      'de-DE': '/de',
      'en-US': '/en',
    },
  },
  openGraph: {
    locale: 'en_US',
    alternateLocale: ['de_DE'],
  },
};

export default function HomePage() {
  return <QuantivaWebsite />;
}






