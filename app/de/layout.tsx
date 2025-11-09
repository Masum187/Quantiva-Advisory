import { ContentProvider } from '../lib/contexts/ContentContext';
import { LanguageProvider } from '../components/QuantivaWebsite';
import LaserCursor from '../components/LaserCursor';
import FloatingDock from '../components/FloatingDock';

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ContentProvider>
        <LaserCursor />
        <FloatingDock />
        {children}
      </ContentProvider>
    </LanguageProvider>
  );
}

