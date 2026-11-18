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

  const acceptLanguage = req.headers.get('accept-language') || '';
  const isSriLanka = country.toUpperCase() === 'LK';

  // If Sri Lankan IP -> 'si', else if foreign -> 'en', else check Accept-Language
  let language: 'en' | 'si' = isSriLanka ? 'si' : 'en';

  if (!country && acceptLanguage.toLowerCase().includes('si')) {
    language = 'si';
  }

  return NextResponse.json(
    {
      country: country || 'unknown',
      isSriLanka,
      language,
    },
    {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  );
}
