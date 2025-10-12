import { ContentProvider } from '../lib/contexts/ContentContext';
import { LanguageProvider } from '../components/QuantivaWebsite';

export default function EnLayout({
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

