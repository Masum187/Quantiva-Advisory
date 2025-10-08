import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import QuantivaWebsite, { CasesPage, CaseDetailPage } from './QuantivaWebsite';
import AdminDashboard from './AdminDashboard';
import DocsWorkflow from './pages/DocsWorkflow';

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

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin dashboard - no language prefix */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Documentation - no language prefix */}
        <Route path="/docs/cms-workflow" element={<DocsWorkflow />} />

        {/* Language-prefixed routes: /:lng/* */}
        <Route path="/:lng/*" element={<WithLocaleRoutes />} />

        {/* Root fallback - redirect to preferred language */}
        {/* This will be handled by the redirectFromRootIfNeeded() function */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
