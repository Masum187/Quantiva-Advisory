/**
 * Root page - Middleware handles the redirect to /de or /en
 * This page should never be reached as middleware redirects first
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Fallback redirect (middleware should handle this first)
  redirect('/de');
}






