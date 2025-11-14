/**
 * Root Layout
 * This is the top-level layout for the entire application
 */

import type { Metadata } from 'next';
import ConditionalAnalytics from './components/ConditionalAnalytics';
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
        {children}
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
