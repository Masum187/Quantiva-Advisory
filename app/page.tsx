/**
 * Root page - Redirects to default language
 * This is a fallback in case middleware doesn't catch it
 * Middleware should handle this first, but this ensures it works
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Always redirect to default language (German)
  // Middleware should handle this before this component renders
  redirect('/de');
}






