import { redirect } from 'next/navigation';

export default function RootPage() {
  // This is a fallback in case middleware doesn't run
  // Middleware should handle this, but this ensures it always works
  redirect('/de');
}

