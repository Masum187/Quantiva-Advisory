import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import QuantivaWebsite, { CasesPage, CaseDetailPage } from './QuantivaWebsite';
import AdminDashboard from './AdminDashboard';
import MDXRoot from './mdx';
import DocsLayout from './components/DocsLayout';
import DocsIndex from './docs/pages/index.mdx';
import CMSWorkflow from './docs/pages/cms-workflow.mdx';
import AdminDocs from './docs/pages/admin.mdx';
import ContentModel from './docs/pages/content-model.mdx';
import CreateCaseGuide from './docs/pages/how-to/create-case.mdx';
import ReviewPublishGuide from './docs/pages/how-to/review-publish.mdx';
import AssetsGuide from './docs/pages/how-to/assets.mdx';
import CookieBanner from './components/CookieBanner';
import { ContentProvider } from './contexts/ContentContext';

// Valid language codes
const VALID_LANGUAGES = ['de', 'en'] as const;
type Language = typeof VALID_LANGUAGES[number];

function WithLocaleRoutes() {
  const { lng } = useParams<{ lng: string }>();
  const isValid = VALID_LANGUAGES.includes(lng as Language);
  
  // Redirect invalid language codes to German
  if (!isValid) {
    return <Navigate to="/de/" replace />;
  }

  return (
    <Routes>
      {/* Homepage for this language */}
      <Route index element={<QuantivaWebsite />} />
      
      {/* Cases overview for this language */}
      <Route path="cases" element={<CasesPage />} />
      
      {/* Case detail pages for this language */}
      <Route path="cases/:slug" element={<CaseDetailPage />} />
      
      {/* 404 within this language - redirect to language home */}
      <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
    </Routes>
  );
}

function RootRedirect() {
  React.useEffect(() => {
    // Get preferred language from localStorage or browser
    const saved = localStorage.getItem('qlang');
    const browserLang = navigator.language.toLowerCase();
    const lang = (saved && VALID_LANGUAGES.includes(saved as Language)) 
      ? saved 
      : browserLang.startsWith('de') ? 'de' : 'en';
    
    // Redirect to language-prefixed route
    window.location.replace(`/${lang}/`);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
        <p>Wird geladen...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ContentProvider>
        <MDXRoot>
          <Routes>
            {/* Root - redirect to language */}
            <Route path="/" element={<RootRedirect />} />

            {/* Admin dashboard - no language prefix */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Documentation - no language prefix */}
            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<DocsIndex />} />
              <Route path="cms-workflow" element={<CMSWorkflow />} />
              <Route path="admin" element={<AdminDocs />} />
              <Route path="content-model" element={<ContentModel />} />
              
              {/* How-to Guides */}
              <Route path="how-to/create-case" element={<CreateCaseGuide />} />
              <Route path="how-to/review-publish" element={<ReviewPublishGuide />} />
              <Route path="how-to/assets" element={<AssetsGuide />} />
            </Route>

            {/* Language-prefixed routes: /:lng/* */}
            <Route path="/:lng/*" element={<WithLocaleRoutes />} />

            {/* Fallback - redirect to German */}
            <Route path="*" element={<Navigate to="/de/" replace />} />
          </Routes>
          
          {/* Cookie Banner (global) */}
          <CookieBanner />
        </MDXRoot>
      </ContentProvider>
    </Router>
  );
}

export default App;
