import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    default: 'Quantiva Advisory – SAP, Cloud & AI Consulting',
    template: '%s | Quantiva Advisory',
  },
  description: 'Professionelle Beratung für SAP, Cloud, AI, Integration und Cyber Security. Strategische Beratung, technische Exzellenz und nachhaltige Lösungen für Ihren digitalen Erfolg.',
  keywords: ['SAP Beratung', 'Cloud Consulting', 'AI Consulting', 'System Integration', 'Cyber Security', 'Digital Transformation', 'S/4HANA', 'SAP BTP', 'Microservices'],
  authors: [{ name: 'Quantiva Advisory' }],
  creator: 'Quantiva Advisory',
  publisher: 'Quantiva Advisory',
  metadataBase: new URL('https://quantivaadvisory.com'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: ['en_US'],
    url: 'https://quantivaadvisory.com',
    title: 'Quantiva Advisory – SAP, Cloud & AI Consulting',
    description: 'Professionelle Beratung für SAP, Cloud, AI, Integration und Cyber Security.',
    siteName: 'Quantiva Advisory',
    images: [
      {
        url: '/assets/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Quantiva Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantiva Advisory – SAP, Cloud & AI Consulting',
    description: 'Professionelle Beratung für SAP, Cloud, AI, Integration und Cyber Security.',
    images: ['/assets/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f766e" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo512.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f766e" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

