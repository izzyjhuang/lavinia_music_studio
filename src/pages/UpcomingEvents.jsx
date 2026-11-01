import Footer from '../components/Footer';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './UpcomingEvents.css';
import pianoRecitalPoster from '../images/recital-2026-fall-piano.jpg';
import violinRecitalPoster from '../images/recital-2026-fall-violin.jpg';
import { useLanguage } from '../components/LanguageWrapper';

// Posters link to the full PDFs in public/recitals/.
const events = [
  {
    poster: pianoRecitalPoster,
    pdf: '/recitals/2026-fall-piano-recital.pdf',
    en: { label: 'Piano Recital — Saturday, Nov 7, 2026, 1:30 PM', alt: 'Poster for the Fall 2026 Piano Recital on November 7, 2026' },
    tw: { label: '鋼琴發表會 — 2026 年 11 月 7 日（六）下午 1:30', alt: '2026 秋季鋼琴發表會海報，11 月 7 日' },
  },
  {
    poster: violinRecitalPoster,
    pdf: '/recitals/2026-fall-violin-recital.pdf',
    en: { label: 'Violin Recital — Sunday, Nov 8, 2026, 1:30 PM', alt: 'Poster for the Fall 2026 Violin Recital on November 8, 2026' },
    tw: { label: '小提琴發表會 — 2026 年 11 月 8 日（日）下午 1:30', alt: '2026 秋季小提琴發表會海報，11 月 8 日' },
  },
];

const text = {
  en: {
    h1: 'Upcoming Events',
    heading: 'Fall 2026 Recitals',
    desc: 'Join us at 550 Sunset Ridge Rd, Northfield. Free admission. Click a poster to open the full PDF.',
  },
  tw: {
    h1: '近期活動',
    heading: '2026 秋季發表會',
    desc: '地點：550 Sunset Ridge Rd, Northfield，免費入場。點選海報即可開啟完整 PDF。',
  },
};

const UpcomingEvents = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = text[langKey];
  const location = useLocation();
  const headingRef = useRef(null);

  // On phones the strip, banner, and stacked nav fill the whole screen, so
  // scroll past them to the posters. location.key changes on every visit,
  // including a repeat click on the strip while already on this page.
  useEffect(() => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      headingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.key]);

  return (
    <div className="events-page">
      <h1 ref={headingRef}>{t.h1}</h1>
      <section className="events-section">
        <h2>{t.heading}</h2>
        <p>{t.desc}</p>
        <div className="events-posters">
          {events.map((event) => (
            <a key={event.pdf} href={event.pdf} className="events-poster-card" target="_blank" rel="noopener noreferrer">
              <img src={event.poster} alt={event[langKey].alt} className="events-poster-img" />
              <span>{event[langKey].label}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default function UpcomingEventsWithFooter(props) {
  return <>
    <UpcomingEvents {...props} />
    <Footer />
  </>;
}
