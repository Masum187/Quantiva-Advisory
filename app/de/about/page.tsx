import QuantivaWebsite from '../../components/QuantivaWebsite';

export const metadata = {
  title: 'Über uns',
  description: 'Erfahren Sie mehr über Quantiva Advisory - Ihr Partner für SAP, Cloud und AI Beratung.',
  alternates: {
    canonical: '/de/about',
    languages: {
      'de-DE': '/de/about',
      'en-US': '/en/about',
    },
  },
};

export default function AboutPage() {
  return <QuantivaWebsite />;
}

