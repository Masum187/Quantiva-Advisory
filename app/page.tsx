import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantiva Advisory',
  description: 'Redirecting to homepage...',
};

export default function RootPage() {
  // Force redirect to /de - this runs as a server component
  // This is the most reliable way to handle root redirects
  redirect('/de');
}

