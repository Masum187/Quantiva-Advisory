import { Metadata } from 'next';
import PrivateAIHostingPage from '../../../components/pages/services/PrivateAIHostingPage';

export const metadata: Metadata = {
  title: 'Private AI Hosting – Ihre eigenen KI-Modelle sicher im Unternehmen | Quantiva Advisory',
  description: 'Private AI Hosting mit Ollama & Open WebUI. Ihre KI-Modelle ausschließlich in Ihrer Infrastruktur – performant, skalierbar und DSGVO-konform.',
  openGraph: {
    title: 'Private AI Hosting – Ihre eigenen KI-Modelle sicher im Unternehmen',
    description: 'Private AI Hosting mit Ollama & Open WebUI. Ihre KI-Modelle ausschließlich in Ihrer Infrastruktur – performant, skalierbar und DSGVO-konform.',
  },
};

export default function Page() {
  return <PrivateAIHostingPage lang="de" />;
}

