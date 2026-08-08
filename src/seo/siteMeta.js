// Central source of truth for all SEO metadata.
// Consumed by <Seo /> at runtime and by scripts/generate-sitemap.js at build time.

import routes from './routes.json';

export const SITE_URL = routes.siteUrl;
export const SITE_NAME = 'Lavinia Lee Music Studio';
export const CONTACT_EMAIL = 'lavinialeemusicstudio@gmail.com';
export const BOOKING_URL = 'https://calendly.com/lavinialeemusicstudio/';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// North Shore suburbs served in person. Mirrors LocationSection.jsx.
export const SERVICE_AREAS = [
  { name: 'Northbrook', lat: 42.1275, lng: -87.8289 },
  { name: 'Glenview', lat: 42.0723, lng: -87.815 },
  { name: 'Northfield', lat: 42.1011, lng: -87.7712 },
  { name: 'Lake Forest', lat: 42.2586, lng: -87.8406 },
  { name: 'Winnetka', lat: 42.1081, lng: -87.7359 },
  { name: 'Wilmette', lat: 42.0723, lng: -87.7228 },
];

// Canonical English paths. The Chinese versions live at /tw + path.
// Shared with scripts/prerender.js and scripts/generate-sitemap.js.
export const ROUTES = routes.canonical;

// Titles stay under ~60 characters so Google doesn't truncate them.
// Every title carries at least one instrument keyword and one location keyword.
export const META = {
  '/': {
    en: {
      title: 'Piano, Violin & Viola Lessons — Northbrook & Glenview IL',
      description:
        "Private piano, violin, and viola lessons on Chicago's North Shore. Serving Northbrook, Glenview, Northfield, Winnetka, Wilmette, and Lake Forest, plus online lessons across Chicagoland.",
    },
    tw: {
      title: '芝加哥北岸鋼琴、小提琴與中提琴課程 | Northbrook・Glenview',
      description:
        '芝加哥北岸私人鋼琴、小提琴與中提琴教學。服務 Northbrook、Glenview、Northfield、Winnetka、Wilmette 與 Lake Forest 等地區，並提供大芝加哥地區線上課程。',
    },
  },
  '/about': {
    en: {
      title: 'About Lavinia Lee — Piano & Violin Teacher, North Shore IL',
      description:
        'Meet Lavinia Lee, a private piano, violin, and viola teacher serving Chicago\'s North Shore. Learn about her teaching philosophy, training, and studio approach for students of all ages.',
    },
    tw: {
      title: '關於 Lavinia Lee — 芝加哥北岸鋼琴與小提琴老師',
      description:
        '認識 Lavinia Lee 老師，於芝加哥北岸提供私人鋼琴、小提琴與中提琴教學。了解她的教學理念、專業訓練與適合各年齡層學生的教學方式。',
    },
  },
  '/piano': {
    en: {
      title: 'Piano Lessons in Northbrook & Glenview, IL | Lavinia Lee',
      description:
        'Private piano lessons for all ages and levels on the North Shore. Personalized curriculum, music theory, recitals, and competition preparation in Northbrook, Glenview, Winnetka, and Wilmette.',
    },
    tw: {
      title: 'Northbrook・Glenview 鋼琴課程 | Lavinia Lee 音樂教室',
      description:
        '芝加哥北岸私人鋼琴課程，適合各年齡與程度的學生。量身打造的課程內容、樂理教學、成果發表會與比賽指導，服務 Northbrook、Glenview、Winnetka 與 Wilmette。',
    },
  },
  '/violin-viola': {
    en: {
      title: 'Violin & Viola Lessons — Northbrook & Glenview, IL',
      description:
        'Private violin and viola lessons on Chicago\'s North Shore. Build intonation, tone, and technique with lessons tailored to beginners through advanced competition and audition repertoire.',
    },
    tw: {
      title: 'Northbrook・Glenview 小提琴與中提琴課程 | Lavinia Lee',
      description:
        '芝加哥北岸私人小提琴與中提琴課程。從初學到進階比賽與甄選曲目，循序建立音準、音色與演奏技巧，課程依學生程度量身規劃。',
    },
  },
  '/current-students': {
    en: {
      title: 'Student Resources | Lavinia Lee Music Studio',
      description:
        'Practice guides, studio policies, recital information, and lesson resources for current piano, violin, and viola students at Lavinia Lee Music Studio.',
    },
    tw: {
      title: '學生資源 | Lavinia Lee 音樂教室',
      description:
        'Lavinia Lee 音樂教室在學學生專區：練習指南、教室規定、成果發表會資訊與課程相關資源。',
    },
  },
  '/contact': {
    en: {
      title: 'Free Trial Lesson — Piano & Violin, Northbrook IL',
      description:
        'Book a free trial lesson for piano, violin, or viola on Chicago\'s North Shore. Serving Northbrook, Glenview, Northfield, Winnetka, Wilmette, and Lake Forest.',
    },
    tw: {
      title: '免費體驗課・鋼琴與小提琴 | Northbrook 音樂教室',
      description:
        '預約免費體驗課，了解芝加哥北岸的鋼琴、小提琴與中提琴課程。服務 Northbrook、Glenview、Northfield、Winnetka、Wilmette 與 Lake Forest。',
    },
  },
};

// Strips the /tw prefix and normalises to a key in META.
export function canonicalPath(pathname) {
  const stripped = pathname.replace(/^\/tw(?=\/|$)/, '') || '/';
  const noTrailing = stripped.length > 1 ? stripped.replace(/\/$/, '') : stripped;
  return META[noTrailing] ? noTrailing : '/';
}

export function langFromPath(pathname) {
  return /^\/tw(\/|$)/.test(pathname) ? 'tw' : 'en';
}

// Pages with nothing useful for a search engine — currently the password-gated
// student area, whose prerendered form is all a crawler would ever see.
export const NOINDEX = routes.noindex || [];

export function metaFor(pathname) {
  const key = canonicalPath(pathname);
  const lang = langFromPath(pathname);
  return { ...META[key][lang], key, lang, noindex: NOINDEX.includes(key) };
}

// Absolute URLs for a canonical key in each language.
export function urlsFor(key) {
  const suffix = key === '/' ? '' : key;
  return {
    en: `${SITE_URL}${key === '/' ? '/' : key}`,
    tw: `${SITE_URL}/tw${suffix}${key === '/' ? '/' : ''}`,
  };
}

// LocalBusiness structured data. Rendered once, on the home page.
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MusicSchool', 'LocalBusiness'],
    '@id': `${SITE_URL}/#studio`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    image: OG_IMAGE,
    logo: `${SITE_URL}/owl-logo.png`,
    description:
      "Private piano, violin, and viola lessons for all ages on Chicago's North Shore, with online lessons available across Chicagoland.",
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Northbrook',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: area.name,
        addressRegion: 'IL',
        addressCountry: 'US',
      },
    })),
    knowsLanguage: ['en', 'zh-Hant'],
    founder: {
      '@type': 'Person',
      name: 'Lavinia Lee',
      jobTitle: 'Music Instructor',
      description:
        'Violin, viola, and piano teacher with over 20 years of teaching and performing experience, blending Suzuki method, music theory, and orchestral training.',
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Yale University' },
        { '@type': 'CollegeOrUniversity', name: 'Northwestern University' },
      ],
      knowsAbout: ['Piano', 'Violin', 'Viola', 'Suzuki method', 'Music theory', 'Competition preparation'],
    },
    potentialAction: {
      '@type': 'ReserveAction',
      name: 'Book a Free Trial Lesson',
      target: BOOKING_URL,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Private Music Lessons',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Piano Lessons' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Violin Lessons' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Viola Lessons' } },
      ],
    },
  };
}
