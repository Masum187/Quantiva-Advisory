/**
 * Root Layout
 * This is the top-level layout for the entire application
 */

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ConsentBanner from './components/ConsentBanner';
import AnalyticsGate from './components/AnalyticsGate';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quantiva Advisory',
  description: 'Professional Consulting for SAP, Cloud, AI, Integration, and Cyber Security',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <AnalyticsGate />
        {children}
        <ConsentBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
