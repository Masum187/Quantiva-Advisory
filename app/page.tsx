/**
 * Root page - Redirects to default language
 * Middleware should handle this, but this is a fallback
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Always redirect to default language (German)
  // This is a server-side redirect that works even if middleware fails
  redirect('/de');
}






