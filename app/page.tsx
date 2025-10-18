/**
 * Root page - Redirects to default language
 * This handles the "/" route and redirects to "/de" (default language)
 */

import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to default language (German)
  redirect('/de');
}



