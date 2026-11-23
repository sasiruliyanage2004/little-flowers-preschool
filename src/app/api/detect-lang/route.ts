import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  // Support testing overrides (e.g., ?country=LK or ?country=US)
  const testCountry = req.nextUrl.searchParams.get('country');

  const country =
    testCountry ||
    req.headers.get('x-vercel-ip-country') ||
    req.headers.get('cf-ipcountry') ||
    '';

  const normalized = country ? country.toUpperCase().trim() : '';
  const acceptLanguage = req.headers.get('accept-language') || '';

  // Sri Lanka -> 'si'
  // Foreign country (US, GB, AU, CA, etc.) -> 'en'
  // Unknown / Missing -> 'si' (Little Flowers Preschool in Makola, Sri Lanka)
  let language: 'en' | 'si' = 'si';
  let isSriLanka = true;

  if (normalized && normalized !== 'LK') {
    language = 'en';
    isSriLanka = false;
  } else if (normalized === 'LK') {
    language = 'si';
    isSriLanka = true;
  } else {
    // When no geo header is available (e.g., localhost or certain proxies)
    if (acceptLanguage && !acceptLanguage.toLowerCase().includes('si') && acceptLanguage.toLowerCase().includes('en-us')) {
      language = 'en';
      isSriLanka = false;
    } else {
      language = 'si';
      isSriLanka = true;
    }
  }

  return NextResponse.json(
    {
      country: normalized || (isSriLanka ? 'LK' : 'unknown'),
      isSriLanka,
      language,
    },
    {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      },
    }
  );
}
