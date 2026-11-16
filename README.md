<div align="center">

# 🌸 Little Flowers Preschool
### ලිට්ල් ෆ්ලවර්ස් පෙර පාසල • Est. 2010 • Makola, Sri Lanka
**"Little Hearts, Big Dreams — Growing Together with Love, Learning and Happiness"**  
**"පුංචි හදවත්, මහා සිහින — ආදරය, දැනුම සහ සතුට පිරි ළමා ලොවක්"**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel Deployment](https://img.shields.io/badge/Live_Site-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://little-flowers-preschool.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-F28B78.svg?style=for-the-badge)](LICENSE)

<br />

[🌐 Live Website](https://little-flowers-preschool.vercel.app) •
[Explore Features](#-key-features) •
[Quick Start](#-quick-start) •
[Design System](#-brand-identity--design-tokens) •
[School Information](#-verified-preschool-profile) •
[Architecture](#-project-architecture)

</div>

---

## 📖 Introduction

**Little Flowers Preschool** is a premier early childhood educational institution established in **2010** in Makola South, Sri Lanka. 

This repository contains the complete, production-ready bilingual web platform engineered to reflect an international standard of early education while preserving the warmth, security, and cultural heritage of Sri Lankan preschool life.

The platform provides parents with immediate insight into the school’s nurturing environment, qualified leadership under **Mrs. Indrani Wettasinghe**, play-based developmental curriculum, authentic campus moments, and a transparent digital admission enquiry system.

---

## ✨ Key Features

### 🌐 1. True Bilingual Experience (English & සිංහල)
- Native language switcher with zero-lag updates across the entire site.
- Preserved official Sinhala wording and natural, professional English equivalents.
- Dedicated typography loading: **Fredoka** (English Headings), **Nunito** (English Body), and **Noto Sans Sinhala** (Sinhala Body & Headings).
- Client-side language preference stored in `localStorage` across page navigation.

### 📸 2. Authentic Real School Media
- Built exclusively with authentic preschool photography and video.
- Showcases students in their official uniform (orange polo and maroon skirts/shorts).
- Real campus features: traditional blessing board (*"ලිට්ල් ෆ්ලවර්ස් පෙර පාසල දිනෙන් දින දියුණු වේවා!"*), courtyard swings, cartoon-painted walls, and green playground.
- Native video section featuring students running and laughing across the sunny courtyard with responsive HTML5 controls and poster fallbacks.

### 🏛️ 3. Complete 6-Page Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                              PAGES OVERVIEW                            │
├─────────────────┬──────────────────────────────────────────────────────┤
│ 1. Home (/)     │ Full-width hero, 2010 milestone timeline, welcome    │
│                 │ philosophy, vision & mission cards, 6 developmental  │
│                 │ domains, learning through play, gallery preview,     │
│                 │ video showcase, and warm parent CTA.                 │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 2. About Us     │ Heritage story since 2010, leadership profile of     │
│    (/about)     │ Mrs. Indrani Wettasinghe, 6 core values, educational │
│                 │ philosophy, and learning environment showcase.       │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 3. Our Learning │ In-depth analysis of 6 early childhood development   │
│    (/learning)  │ domains, daily preschool rhythm (08:00 AM – 12:00 PM)│
│                 │ and individual talent discovery approach.            │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 4. Gallery      │ Category filterable masonry gallery, full-screen     │
│    (/gallery)   │ lightbox with zoom, keyboard navigation, and official│
│                 │ YouTube video integration.                           │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 5. Admissions   │ Transparent 4-step admission guide, responsive       │
│    (/admissions)│ enquiry form with Sri Lankan phone validation, local │
│                 │ storage backup, and prospective parents FAQ.         │
├─────────────────┼──────────────────────────────────────────────────────┤
│ 6. Contact      │ Verified direct phone, WhatsApp click-to-chat,       │
│    (/contact)   │ interactive Google Maps embed, turn-by-turn          │
│                 │ directions, and direct message contact form.         │
└─────────────────┴──────────────────────────────────────────────────────┘
```

### 📋 4. Functional Admissions & Contact Systems
- **Admission Enquiry Form:**
  - Validates Parent Name, Sri Lankan / International phone formats (`07X` / `+94`), Child's Age, and Admission Year.
  - Generates instant reference ID (e.g. `ENQ-XXXXXX`) with local storage backup.
  - Direct 1-click **WhatsApp Confirmation Link** pre-filled with enquiry details.
  - Zero false claims about delivery when backend is offline.

---

## 🎨 Brand Identity & Design Tokens

Designed to avoid childish visual noise while maintaining joy and playful elegance:

```
Warm Cream       #FFF9F0  ████████  Main page background, warm & comforting
Soft Pink        #F9DCE5  ████████  Tenderness, care & early childhood
Coral (Primary)  #F28B78  ████████  Call to actions, buttons & highlights
Sunshine Yellow  #FFD66B  ████████  Playfulness, creativity & sunlit courtyard
Soft Mint        #CBE8D5  ████████  Nature, garden play & organic leaves
Sky Blue         #D9ECFA  ████████  Calmness, stability & imagination
Deep Charcoal    #34333A  ████████  High contrast readable text & contrast
```

---

## 📜 Official Vision & Mission (නිල දැක්ම සහ මෙහෙවර)

### 🌟 Vision (දැක්ම)
> **Sinhala:**  
> සෞභාග්ය සම්පන්න වූද,  
> මනා පෝෂණයෙන් යුක්ත වූද,  
> යහපත් චිත්තවේගයන් ඇත්තාවූද,  
> සමාජීය වශයෙන් මනා පෞරුෂයක් සතු වූ,  
> දරුවන් හෙට ලොවට දායාද කිරීම අපගේ දැක්මයි.  
>  
> **English:**  
> Our vision is to nurture and develop children who are:  
> • Prosperous and well-nourished.  
> • Emotionally healthy.  
> • Socially well-adjusted.  
> • Equipped with good personalities.  
> And to prepare them to become valuable members of tomorrow's world.

### 🎯 Mission (මෙහෙවර)
> **Sinhala:**  
> අප සෙවණට එන දරුවන්ට ආදරය, රැකවරණය හා සතුටු මනස දෙමින්, ඔවුන් අගයෙන්, ඔවුන්ගේ සැඟවුණු හැකියාවන් හඳුනා ගැනීමට සුදුසු වන ක්රියාකාරකම් සම්පාදනය ඔස්සේ ඔවුන්ගේ දැනුම, කුසලතා හා ආකල්ප වර්ධනය කරමින් දරුවන්ගේ සමස්ත සංවර්ධනය ඇති කිරීම.  
>  
> **English:**  
> Our mission is to provide children who come under our care with love, protection and happiness. Through appropriate activities that help identify their hidden talents, we aim to develop their knowledge, skills and attitudes, thereby promoting their overall development.

---

## 🏫 Verified Preschool Profile

| Attribute | Verified Official Record |
| :--- | :--- |
| **School Name (EN)** | Little Flowers Preschool |
| **School Name (SI)** | ලිට්ල් ෆ්ලවර්ස් පෙර පාසල |
| **Established** | 2010 (Over 14 Years of Continuous Dedication) |
| **Principal / Educator** | Mrs. Indrani Wettasinghe (Dip. University of Sabaragamuwa / Dip. Sanasa Preschool Teacher Training) |
| **Physical Address** | 96/2 Makola South, Makola, 11640, Sri Lanka |
| **Contact Phone** | `071 960 6126` (+94 71 960 6126) |
| **WhatsApp Chat** | [Click to Chat (+94 71 960 6126)](https://wa.me/94719606126) |
| **Google Maps Pin** | [Little Flowers Pre school - Makola](https://share.google/v0ygYpIB2YPst12Nd) |
| **Official YouTube** | [@littleflowerspreschool3677](https://youtube.com/@littleflowerspreschool3677) |

---

## 📁 Project Architecture

```
Little Flowers Pre School/
├── public/
│   ├── images/              # Web-optimized authentic photos & poster assets
│   │   ├── opt-children-play-smiles.jpg
│   │   ├── opt-happy-learning-group.jpg
│   │   ├── opt-preschool-entrance-sign.jpg
│   │   └── opt-preschool-activity-banner.jpg
│   └── videos/              # Courtyard running video (MP4)
│       └── preschool-children-running.mp4
├── src/
│   ├── app/
│   │   ├── about/page.tsx   # About Us Page
│   │   ├── admissions/page.tsx # Admissions & Enquiry Page
│   │   ├── contact/page.tsx # Contact & Map Page
│   │   ├── gallery/page.tsx # Interactive Gallery Page
│   │   ├── learning/page.tsx# Learning & Philosophy Page
│   │   ├── globals.css      # Custom styles & font variables
│   │   ├── layout.tsx       # Root layout, Google Fonts, JSON-LD schema
│   │   ├── page.tsx         # Home Page
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic sitemap.xml
│   ├── components/
│   │   ├── forms/           # AdmissionForm & ContactForm
│   │   ├── home/            # 8 dedicated homepage sections
│   │   ├── layout/          # Navbar, Footer, LanguageSwitcher
│   │   └── ui/              # Logo, Lightbox, FloatingPetals, SectionHeader
│   ├── context/
│   │   └── LanguageContext.tsx # Bilingual React context
│   ├── data/
│   │   ├── siteContent.ts   # Centralized school data configuration
│   │   ├── translations.ts  # English & Sinhala dictionary
│   │   ├── learningData.ts  # 6 domains, play activities, daily routine
│   │   └── galleryData.ts   # Gallery items & YouTube metadata
│   └── types/
│       └── index.ts         # Strict TypeScript interfaces
├── build.bat                # 1-Click production build script
├── start.bat                # 1-Click local server launch script
├── tailwind.config.ts       # Custom color tokens & keyframes
├── tsconfig.json            # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Quick Start

### 1-Click Start (Windows)
Simply double-click the **`start.bat`** file in the project folder:
- It checks your Node.js environment.
- Installs packages if run for the first time.
- Launches your default browser to `http://localhost:3000`.
- Starts the live server.

### Manual Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sasiruliyanage2004/little-flowers-preschool.git
   cd little-flowers-preschool
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify TypeScript & Production Build:**
   ```bash
   # Type check
   npm run type-check

   # Production build
   npm run build

   # Start production server
   npm run start
   ```

---

## ⚡ Performance & Production Readiness

- **100% Static Site Generation (SSG):** All 11 routes pre-rendered for instant page transitions.
- **Strict Typing:** 0 TypeScript compilation errors (`tsc --noEmit`).
- **Core Web Vitals:** Next.js automatic image optimization (`AVIF` & `WebP`), responsive `sizes`, and font preloading with zero layout shift.
- **Search Engine Optimization:**
  - Preschool / EducationalOrganization JSON-LD Schema.
  - Canonical URL and OpenGraph metadata.
  - Automatically served `sitemap.xml` and `robots.txt`.
- **Accessibility:** Semantic HTML5, visible keyboard focus rings, WCAG AA compliant color contrast, and respect for `prefers-reduced-motion`.

---

## 🚢 1-Click Deployment (Vercel)

This Next.js 14 App Router project is pre-configured for seamless deployment on **Vercel**:

1. Push your code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import `little-flowers-preschool`.
4. Click **Deploy**. Vercel will automatically build and deploy your site with global edge caching and free SSL.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Crafted with love and care for <strong>Little Flowers Preschool</strong>, Makola South, Sri Lanka.</sub>
</div>
