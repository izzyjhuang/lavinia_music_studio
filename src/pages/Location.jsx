import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageWrapper';
import { locationBySlug } from '../seo/locations';
import { BOOKING_URL } from '../seo/siteMeta';
import './Location.css';

const ui = {
  en: {
    piano: (t) => `Piano Lessons in ${t}`,
    strings: (t) => `Violin & Viola Lessons in ${t}`,
    schools: (t) => `${t} Schools and Ensembles`,
    nearby: 'Also serving nearby',
    cta: 'Book a Free Trial Lesson',
    ctaLead: (t) => `Trying a lesson is the easiest way to tell if it's a fit — especially for younger students, who usually decide for themselves in the first twenty minutes. Trials for ${t} families are free.`,
    morePiano: 'More about the piano program',
    moreStrings: 'More about the violin & viola program',
  },
  tw: {
    piano: (t) => `${t} 鋼琴課程`,
    strings: (t) => `${t} 小提琴與中提琴課程`,
    schools: (t) => `${t} 的學校與樂團`,
    nearby: '同時服務鄰近地區',
    cta: '預約免費體驗課',
    ctaLead: (t) => `體驗課是最直接的方式，尤其是年紀較小的學生，通常在前二十分鐘就能感受到是否合適。${t} 地區的家庭可免費預約體驗課。`,
    morePiano: '了解更多鋼琴課程',
    moreStrings: '了解更多小提琴與中提琴課程',
  },
};

const Location = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const params = useParams();
  const langKey = language === 'zh' ? 'tw' : language;

  // The slug is the last path segment, which works for both / and /tw prefixes.
  const slug = params.slug || pathname.split('/').filter(Boolean).pop();
  const loc = locationBySlug(slug || '');
  if (!loc) return null;

  const t = ui[langKey];
  const town = loc.name[langKey];

  return (
    <div className="location-page">
      <h1>{loc.h1[langKey]}</h1>
      <p className="location-intro">{loc.intro[langKey]}</p>

      <section className="location-block">
        <h2>{t.piano(town)}</h2>
        <p>{loc.schools[langKey]}</p>
        <Link className="location-inline-link" to={langKey === 'tw' ? '/tw/piano' : '/piano'}>
          {`${t.morePiano} →`}
        </Link>
      </section>

      <section className="location-block">
        <h2>{t.strings(town)}</h2>
        <p>{loc.strings[langKey]}</p>
        <Link className="location-inline-link" to={langKey === 'tw' ? '/tw/violin-viola' : '/violin-viola'}>
          {`${t.moreStrings} →`}
        </Link>
      </section>

      <section className="location-block">
        <h2>{t.nearby}</h2>
        <ul className="location-nearby">
          {loc.nearby[langKey].map((n) => (
            <li key={n}>{`${n}, IL`}</li>
          ))}
        </ul>
      </section>

      <section className="location-cta">
        <p>{t.ctaLead(town)}</p>
        <a href={BOOKING_URL} className="location-cta-button" target="_blank" rel="noopener noreferrer">
          {t.cta}
        </a>
      </section>
    </div>
  );
};

export default function LocationWithFooter(props) {
  return (
    <>
      <Location {...props} />
      <Footer />
    </>
  );
}
