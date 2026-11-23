import { SchoolInfo } from '@/types';

export const schoolInfo: SchoolInfo = {
  name: {
    en: 'Little Flowers Preschool',
    si: 'ලිට්ල් ෆ්ලවර්ස් පෙර පාසල',
  },
  tagline: {
    en: 'Little Hearts, Big Dreams — Growing Together with Love, Learning and Happiness',
    si: 'පුංචි හදවත්, මහා සිහින — ආදරය, දැනුම සහ සතුට පිරි ළමා ලොවක්',
  },
  establishedYear: 2010,
  principal: {
    name: {
      en: 'Mrs. Indrani Wettasinghe',
      si: 'ඉන්ද්‍රාණි වෙත්තසිංහ මිය',
    },
    qualifications: {
      en: 'Dip. University of Sabaragamuwa / Dip. Sanasa Preschool Teacher Training',
      si: 'සබරගමුව විශ්වවිද්‍යාල ඩිප්ලෝමාධාරී / සණස පෙරපාසල් ගුරු පුහුණු ඩිප්ලෝමාධාරී',
    },
    role: {
      en: 'Principal & Early Childhood Educator',
      si: 'ප්‍රධාන ආචාරිණී හා පෙර ළමාවිය අධ්‍යාපනවේදිනී',
    },
  },
  contact: {
    phone: '+94719606126',
    phoneDisplay: '071 960 6126',
    whatsapp: '+94719606126',
    whatsappUrl: 'https://wa.me/94719606126?text=Hello%20Little%20Flowers%20Preschool,%20I%20would%20like%20to%20enquire%20about%20admissions.',
    address: {
      en: '96/2 Makola South, Makola, 11640, Sri Lanka',
      si: '96/2 මාකොළ දකුණ, මාකොළ, 11640, ශ්‍රී ලංකාව',
    },
    city: 'Makola',
    postalCode: '11640',
    country: 'Sri Lanka',
    googleMapsUrl: 'https://share.google/v0ygYpIB2YPst12Nd',
    googleMapsEmbedQuery: 'Little+Flowers+Pre+school+-+Makola',
    youtubeUrl: 'https://youtube.com/@littleflowerspreschool3677?si=O4jSjcF1sCO6Ue6r',
    youtubeChannelId: '@littleflowerspreschool3677',
  },
};

export const admissions2027Campaign = {
  year: '2027',
  isActive: true,
  establishedYear: 2010,
  deadline: '2026-12-31',
  deadlineDisplay: {
    en: '31 December 2026',
    si: '2026 දෙසැම්බර් 31',
  },
  collectionDays: {
    en: 'Weekdays only',
    si: 'සතියේ දිනවල පමණි',
  },
  collectionTime: {
    en: '10:00 AM – 12:00 PM',
    si: 'පෙ.ව. 10.00 – මධ්‍යහ්න 12.00',
  },
  address: {
    en: '96/2, Makola South, Makola, Sri Lanka',
    si: '96/2, මාකොළ දකුණ, මාකොළ, ශ්‍රී ලංකාව',
  },
  phone: '+94719606126',
  phoneDisplay: '071 960 6126',
  googleMapsUrl: 'https://share.google/v0ygYpIB2YPst12Nd',
  posterImage: '/images/little-flowers-admissions-2027.jpeg',
  optimizedPosterImage: '/images/opt-little-flowers-admissions-2027.jpg',
  posterWidth: 4160,
  posterHeight: 2496,
  specialOffer: {
    title: {
      en: 'Special Admission Offer',
      si: 'සුවිශේෂී ඇතුළත් වීමේ දීමනාව',
    },
    badge: {
      en: 'FREE ADMISSION',
      si: 'ඇතුළත් වීමේ ගාස්තු නොමිලේ',
    },
    highlight: {
      en: 'Admission Fee FREE for the First 15 Children!',
      si: 'පළමු දරුවන් 15 දෙනා සඳහා ඇතුළත් වීමේ ගාස්තු නොමිලේ!',
    },
    condition: {
      en: 'Applicable for children enrolling for the full 2-year early childhood programme up to 31 December 2026.',
      si: 'අවුරුදු දෙකම ඉගෙනුම ලබන දරුවන් සඳහා පමණි (දෙසැම්බර් 31 දක්වා ඇතුළත් වන අයට පමණි).',
    },
  },
  whatsappPrefill: {
    en: 'Hello Little Flowers Preschool, I would like to know more about the 2027 admissions. Could you please provide further information?',
    si: 'ආයුබෝවන්, Little Flowers Preschool 2027 නවක සිසුන් ඇතුළත් කිරීම පිළිබඳ වැඩි විස්තර දැනගැනීමට කැමතියි.',
  },
  getWhatsappUrl(lang: 'en' | 'si' = 'si') {
    const msg = lang === 'si' ? this.whatsappPrefill.si : this.whatsappPrefill.en;
    return `https://wa.me/94719606126?text=${encodeURIComponent(msg)}`;
  },
};

export const officialStatements = {
  vision: {
    si: `සෞභාග්ය සම්පන්න වූද,
මනා පෝෂණයෙන් යුක්ත වූද,
යහපත් චිත්තවේගයන් ඇත්තාවූද,
සමාජීය වශයෙන් මනා පෞරුෂයක් සතු වූ,
දරුවන් හෙට ලොවට දායාද කිරීම අපගේ දැක්මයි.`,
    en: `Our vision is to nurture and develop children who are:
• Prosperous and well-nourished.
• Emotionally healthy.
• Socially well-adjusted.
• Equipped with good personalities.
And to prepare them to become valuable members of tomorrow's world.`,
    bulletPoints: {
      en: [
        'Prosperous and well-nourished',
        'Emotionally healthy & resilient',
        'Socially well-adjusted & empathetic',
        'Equipped with radiant, balanced personalities',
        'Prepared to be valuable members of tomorrow’s world',
      ],
      si: [
        'සෞභාග්‍ය සම්පන්න වූද',
        'මනා පෝෂණයෙන් යුක්ත වූද',
        'යහපත් චිත්තවේගයන් ඇත්තාවූද',
        'සමාජීය වශයෙන් මනා පෞරුෂයක් සතු වූද',
        'හෙට ලොවට වටිනා පුරවැසියන් වන දරුවන්',
      ],
    },
  },
  mission: {
    si: `අප සෙවණට එන දරුවන්ට ආදරය, රැකවරණය හා සතුටු මනස දෙමින්, ඔවුන් අගයෙන්, ඔවුන්ගේ සැඟවුණු හැකියාවන් හඳුනා ගැනීමට සුදුසු වන ක්රියාකාරකම් සම්පාදනය ඔස්සේ ඔවුන්ගේ දැනුම, කුසලතා හා ආකල්ප වර්ධනය කරමින් දරුවන්ගේ සමස්ත සංවර්ධනය ඇති කිරීම.`,
    en: `Our mission is to provide children who come under our care with love, protection and happiness. Through appropriate activities that help identify their hidden talents, we aim to develop their knowledge, skills and attitudes, thereby promoting their overall development.`,
    bulletPoints: {
      en: [
        'Providing every child with love, protection, and a happy mindset',
        'Valuing each child’s unique individuality and pace of growth',
        'Curating age-appropriate activities to uncover hidden talents',
        'Developing foundational knowledge, practical skills, and positive attitudes',
        'Fostering holistic overall development in a safe preschool haven',
      ],
      si: [
        'සෑම දරුවෙකුටම ආදරය, රැකවරණය හා සතුටු සිතැති පරිසරයක් ලබාදීම',
        'දරුවාගේ සුවිශේෂීත්වය සහ නිසග දක්ෂතා අගය කිරීම',
        'සැඟවුණු හැකියාවන් ඔප්නැංවෙන නිර්මාණාත්මක ක්‍රියාකාරකම් සැකසීම',
        'දැනුම, කුසලතා සහ යහපත් ආකල්ප සුසංයෝගීව වර්ධනය කිරීම',
        'සුරක්ෂිත හා සෙනෙහෙබර පෙරපාසල් පරිසරයක සමස්ත සංවර්ධනය ඇතිකිරීම',
      ],
    },
  },
};
