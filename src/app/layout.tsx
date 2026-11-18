import type { Metadata, Viewport } from 'next';
import { Outfit, Nunito, Noto_Sans_Sinhala } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { schoolInfo } from '@/data/siteContent';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  variable: '--font-noto-sinhala',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#FFF9F0',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://little-flowers-preschool.vercel.app'),
  title: {
    default: 'Little Flowers Preschool | Makola, Sri Lanka (Est. 2010)',
    template: '%s | Little Flowers Preschool',
  },
  description:
    'Established in 2010, Little Flowers Preschool in Makola South provides a loving, cheerful, safe, and nurturing early learning sanctuary for young children. Under the leadership of Mrs. Indrani Wettasinghe.',
  keywords: [
    'Little Flowers Preschool',
    'Little Flowers Pre School Makola',
    'Preschool Makola Sri Lanka',
    'Early Childhood Education Sri Lanka',
    'Montessori Makola',
    'ලිට්ල් ෆ්ලවර්ස් පෙර පාසල',
    'මාකොළ පෙරපාසල්',
    'Kindergarten Sri Lanka',
    'Indrani Wettasinghe preschool',
  ],
  authors: [{ name: 'Little Flowers Preschool' }],
  creator: 'Little Flowers Preschool',
  openGraph: {
    title: 'Little Flowers Preschool | Little Hearts, Big Dreams',
    description:
      'Growing together with love, learning and happiness since 2010 in Makola, Sri Lanka.',
    url: 'https://little-flowers-preschool.vercel.app',
    siteName: 'Little Flowers Preschool',
    images: [
      {
        url: '/images/hero-running-children.jpg',
        width: 1920,
        height: 1080,
        alt: 'Little Flowers Preschool children running happily together across courtyard',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Flowers Preschool | Makola, Sri Lanka (Est. 2010)',
    description:
      'Growing together with love, learning and happiness since 2010 in Makola South under the guidance of Mrs. Indrani Wettasinghe.',
    images: ['/images/hero-running-children.jpg'],
  },
  alternates: {
    canonical: 'https://little-flowers-preschool.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Preschool', 'EducationalOrganization', 'ChildCare'],
    name: 'Little Flowers Preschool',
    alternateName: 'ලිට්ල් ෆ්ලවර්ස් පෙර පාසල',
    description:
      'Established in 2010 in Makola South, Sri Lanka. Nurturing young minds through holistic play, love, and early childhood education under the leadership of Mrs. Indrani Wettasinghe.',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '96/2 Makola South',
      addressLocality: 'Makola',
      postalCode: '11640',
      addressCountry: 'LK',
    },
    telephone: '+94719606126',
    url: 'https://little-flowers-preschool.vercel.app',
    image: 'https://little-flowers-preschool.vercel.app/images/hero-running-children.jpg',
    sameAs: [
      'https://youtube.com/@littleflowerspreschool3677',
      'https://share.google/v0ygYpIB2YPst12Nd',
    ],
    employee: {
      '@type': 'Person',
      name: 'Indrani Wettasinghe',
      jobTitle: 'Principal & Early Childhood Educator',
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${nunito.variable} ${notoSinhala.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-charcoal bg-cream min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
