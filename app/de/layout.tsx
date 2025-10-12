import { ContentProvider } from '../lib/contexts/ContentContext';
import { LanguageProvider } from '../components/QuantivaWebsite';

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ContentProvider>
        {children}
      </ContentProvider>
    </LanguageProvider>
  );
}

