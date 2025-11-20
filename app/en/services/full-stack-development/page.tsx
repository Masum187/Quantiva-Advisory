import { Metadata } from 'next';
import FullStackDevelopmentPage from '../../../../components/pages/services/FullStackDevelopmentPage';

export const metadata: Metadata = {
  title: 'Full Stack Development – Custom Software Development | Quantiva Advisory',
  description: 'Tailored full-stack solutions from frontend to backend – modern, scalable and future-proof. React, Next.js, Node.js, Python and more.',
  openGraph: {
    title: 'Full Stack Development – Custom Software Development',
    description: 'Tailored full-stack solutions from frontend to backend – modern, scalable and future-proof.',
  },
};

export default function Page() {
  return <FullStackDevelopmentPage lang="en" />;
}

