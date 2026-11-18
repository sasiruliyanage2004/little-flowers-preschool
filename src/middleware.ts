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

  // 1. If user already made an explicit manual choice, respect it
  const userChoice = request.cookies.get('lf_user_choice')?.value;
  if (userChoice === 'en' || userChoice === 'si') {
    return response;
  }

  // 2. Detect country from Vercel Edge Geolocation headers
  const country =
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    '';

  let defaultLang: 'en' | 'si' = 'si'; // Default to Sinhala for Little Flowers Preschool

  // Foreign IPs (US, GB, AU, etc.) default to English
  if (country && country.toUpperCase() !== 'LK') {
    defaultLang = 'en';
  } else if (country && country.toUpperCase() === 'LK') {
    defaultLang = 'si';
  }

  // Set the cookie so client-side hydration inherits it
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
