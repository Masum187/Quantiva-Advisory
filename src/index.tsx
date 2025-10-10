import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { redirectFromRootIfNeeded } from './i18nRedirect';
import { LanguageProvider } from './QuantivaWebsite';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Redirect from root to preferred language before React mounts
redirectFromRootIfNeeded();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <SpeedInsights />
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
