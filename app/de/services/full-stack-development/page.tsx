import { Metadata } from 'next';
import FullStackDevelopmentPage from '../../../../components/pages/services/FullStackDevelopmentPage';

export const metadata: Metadata = {
  title: 'Full Stack Development – Individuelle Softwareentwicklung | Quantiva Advisory',
  description: 'Maßgeschneiderte Full-Stack-Lösungen von Frontend bis Backend – modern, skalierbar und zukunftssicher. React, Next.js, Node.js, Python und mehr.',
  openGraph: {
    title: 'Full Stack Development – Individuelle Softwareentwicklung',
    description: 'Maßgeschneiderte Full-Stack-Lösungen von Frontend bis Backend – modern, skalierbar und zukunftssicher.',
  },
};

export default function Page() {
  return <FullStackDevelopmentPage lang="de" />;
}

