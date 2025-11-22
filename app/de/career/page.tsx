import CareerPage from '../../components/pages/CareerPage';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantivaadvisory.com';

export const metadata = {
  title: 'Karriere',
  description: 'Werden Sie Teil unseres Teams bei Quantiva Advisory.',
  alternates: {
    canonical: `${BASE_URL}/de/career`,
    languages: {
      'de': `${BASE_URL}/de/career`,
      'en': `${BASE_URL}/en/career`,
      'x-default': `${BASE_URL}/de/career`,
    },
  },
};

export default function Career() {
  return <CareerPage />;
}






