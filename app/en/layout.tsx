import { ContentProvider } from '../lib/contexts/ContentContext';
import { LanguageProvider } from '../components/QuantivaWebsite';
import LaserCursor from '../components/LaserCursor';

export default function EnLayout({
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

