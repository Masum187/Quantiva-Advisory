import { Metadata } from 'next';
import PrivateAIHostingPage from '../../../components/pages/services/PrivateAIHostingPage';

export const metadata: Metadata = {
  title: 'Private AI Hosting – Your Own AI Models Secure in Your Company | Quantiva Advisory',
  description: 'Private AI Hosting with Ollama & Open WebUI. Your AI models exclusively in your infrastructure – performant, scalable, and GDPR-compliant.',
  openGraph: {
    title: 'Private AI Hosting – Your Own AI Models Secure in Your Company',
    description: 'Private AI Hosting with Ollama & Open WebUI. Your AI models exclusively in your infrastructure – performant, scalable, and GDPR-compliant.',
  },
};

export default function Page() {
  return <PrivateAIHostingPage lang="en" />;
}

