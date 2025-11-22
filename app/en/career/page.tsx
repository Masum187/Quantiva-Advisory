import CareerPage from '../../components/pages/CareerPage';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantivaadvisory.com';

export const metadata = {
  title: 'Career',
  description: 'Join our team at Quantiva Advisory.',
  alternates: {
    canonical: `${BASE_URL}/en/career`,
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






