import { NextRequest, NextResponse } from 'next/server';

const locales = ['de', 'en'];
const defaultLocale = 'de';

function getLocale(request: NextRequest): string {
  // Check if locale is in pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) return pathnameLocale;

  // Check saved preference in cookie
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (savedLocale && locales.includes(savedLocale)) {
    return savedLocale;
  }

  // Check accept-language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase();
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (
    pathname.includes('/api/') ||
    pathname.includes('/_next/') ||
    pathname.includes('/static/') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Admin/CMS Route Protection (Production only)
  // Note: Vercel Password Protection should be enabled in Vercel Dashboard
  // This middleware serves as an additional security layer
  if (process.env.NODE_ENV === 'production') {
    const isAdminRoute = pathname.includes('/cms') || pathname.includes('/admin');
    
    if (isAdminRoute) {
      // In production, block direct access to admin routes
      // Vercel Password Protection will handle authentication before this middleware runs
      // If you need custom auth, implement it here or use NextAuth.js
      return new NextResponse('Access Denied', { 
        status: 403,
        headers: {
          'X-Robots-Tag': 'noindex, nofollow',
        },
      });
    }
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to locale-prefixed URL
  const locale = getLocale(request);
  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );

  // Set locale cookie
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: '/',
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)',
  ],
};






