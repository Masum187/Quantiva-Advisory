/**
 * Root page - This should be handled by middleware.ts
 * The middleware redirects "/" to "/de" or "/en" based on user preference
 * This file exists as a fallback, but middleware should handle it first
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Fallback redirect (middleware should handle this first)
  redirect('/de');
}






