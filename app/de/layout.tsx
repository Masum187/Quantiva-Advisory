import { ContentProvider } from '../lib/contexts/ContentContext';
import { LanguageProvider } from '../components/QuantivaWebsite';
import LaserCursor from '../components/LaserCursor';

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ContentProvider>
        <LaserCursor />
        {children}
      </ContentProvider>
    </LanguageProvider>
  );
}

