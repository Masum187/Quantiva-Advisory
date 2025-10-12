import QuantivaWebsite from '../components/QuantivaWebsite';

export const metadata = {
  title: 'Quantiva Advisory – SAP, Cloud & AI Consulting',
  description: 'Professionelle Beratung für SAP, Cloud, AI, Integration und Cyber Security. Strategische Beratung, technische Exzellenz und nachhaltige Lösungen für Ihren digitalen Erfolg.',
  alternates: {
    canonical: '/de',
    languages: {
      'de-DE': '/de',
      'en-US': '/en',
    },
  },
  openGraph: {
    locale: 'de_DE',
    alternateLocale: ['en_US'],
  },
};

export default function HomePage() {
  return <QuantivaWebsite />;
}


