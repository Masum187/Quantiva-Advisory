import CareerPage from '../../components/pages/CareerPage';

export const metadata = {
  title: 'Career',
  description: 'Join our team at Quantiva Advisory.',
  alternates: {
    canonical: '/en/career',
    languages: {
      'de-DE': '/de/career',
      'en-US': '/en/career',
    },
  },
};

export default function Career() {
  return <CareerPage />;
}



