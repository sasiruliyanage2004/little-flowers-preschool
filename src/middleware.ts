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

  // 1. Detect country from Vercel Edge Geolocation headers
  const country =
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    '';

  const normalized = country ? country.toUpperCase().trim() : '';
  const isForeign = normalized !== '' && normalized !== 'LK';
  const geoLang: 'en' | 'si' = isForeign ? 'en' : 'si';

  // 2. Check if user made an active session choice in this browser session
  const sessionChoice = request.cookies.get('lf_session_lang')?.value;
  if (sessionChoice === 'en' || sessionChoice === 'si') {
    response.headers.set('x-detected-country', normalized || (isForeign ? 'foreign' : 'LK'));
    response.headers.set('x-detected-lang', sessionChoice);
    return response;
  }

  // 3. Clear legacy persistent 1-year lock cookies that might have been stuck on 'en'
  const legacyChoice = request.cookies.get('lf_user_choice')?.value;
  if (legacyChoice && !isForeign) {
    response.cookies.delete('lf_user_choice');
  }

  // 4. Set the fresh cookie based on IP geolocation
  response.cookies.set({
    name: 'little_flowers_lang',
    value: geoLang,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: 'lax',
  });

  response.headers.set('x-detected-country', normalized || (isForeign ? 'foreign' : 'LK'));
  response.headers.set('x-detected-lang', geoLang);

  return response;
}
