import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images, videos, robots.txt, sitemap.xml, api routes
     */
    '/((?!_next/static|_next/image|images|videos|favicon.ico|robots.txt|sitemap.xml|api).*)',
  ],
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 1. If user already has an explicit language preference cookie, respect it
  const existingCookie = request.cookies.get('little_flowers_lang')?.value;
  if (existingCookie === 'en' || existingCookie === 'si') {
    return response;
  }

  // 2. Detect country from Vercel Edge Geolocation headers
  const country =
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    '';

  let defaultLang: 'en' | 'si' = 'en';

  // If user is accessing from Sri Lanka (LK), default to Sinhala ('si')
  // If user is accessing from any other country, default to English ('en')
  if (country.toUpperCase() === 'LK') {
    defaultLang = 'si';
  } else if (!country) {
    // Fallback: check Accept-Language header for Sinhala
    const acceptLanguage = request.headers.get('accept-language') || '';
    if (acceptLanguage.toLowerCase().includes('si')) {
      defaultLang = 'si';
    }
  }

  // Set the cookie so client-side hydration and future requests retain this default
  response.cookies.set({
    name: 'little_flowers_lang',
    value: defaultLang,
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });

  response.headers.set('x-detected-country', country || 'unknown');
  response.headers.set('x-detected-lang', defaultLang);

  return response;
}
