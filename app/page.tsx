/**
 * Root page - This should never be reached due to next.config.js redirect
 * But if it is, redirect to default language
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // This should never be reached because next.config.js redirects / to /de
  // But as a fallback, redirect to default language
  redirect('/de');
}






