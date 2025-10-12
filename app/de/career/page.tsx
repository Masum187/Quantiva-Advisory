import CareerPage from '../../components/pages/CareerPage';

export const metadata = {
  title: 'Karriere',
  description: 'Werden Sie Teil unseres Teams bei Quantiva Advisory.',
  alternates: {
    canonical: '/de/career',
    languages: {
      'de-DE': '/de/career',
      'en-US': '/en/career',
    },
  },
};

export default function Career() {
  return <CareerPage />;
}

