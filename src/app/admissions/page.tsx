import type { Metadata } from 'next';
import { AdmissionsView } from '@/components/views/AdmissionsView';

export const metadata: Metadata = {
  title: 'Admissions & Enrolment Process | Little Flowers Preschool Makola',
  description:
    'Enrol your child at Little Flowers Preschool Makola South. Explore our 4-step enrolment process, admissions criteria, prospective parent FAQs, and online enquiry form.',
  alternates: {
    canonical: 'https://little-flowers-preschool.vercel.app/admissions',
  },
  openGraph: {
    title: 'Admissions & Enrolment | Little Flowers Preschool (Est. 2010)',
    description:
      'Step-by-step admissions, caring educators, and safe early learning enrollment in Makola South, Sri Lanka.',
    url: 'https://little-flowers-preschool.vercel.app/admissions',
    images: [
      {
        url: '/images/hero-running-children.jpg',
        width: 1920,
        height: 1080,
        alt: 'Little Flowers Preschool admissions and joyful early childhood education',
      },
    ],
  },
};

export default function AdmissionsPage() {
  return <AdmissionsView />;
}
