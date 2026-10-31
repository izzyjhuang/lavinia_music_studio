import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EventsStrip.css';
import { useLanguage } from './LanguageWrapper';

// Site-wide announcement for the next events. Remove the <EventsStrip /> in
// App.js when there is nothing upcoming.
const stripText = {
  en: {
    messages: [
      { emoji: '🎹', text: 'Upcoming Piano Recital — Sat, Nov 7 · 1:30 PM · 📍 550 Sunset Ridge Rd, Northfield' },
      { emoji: '🎻', text: 'Upcoming Violin Recital — Sun, Nov 8 · 1:30 PM · 📍 550 Sunset Ridge Rd, Northfield' },
    ],
    link: 'See the posters →',
  },
  tw: {
    messages: [
      { emoji: '🎹', text: '即將舉行：鋼琴發表會 — 11/7（六）下午 1:30 · 📍 550 Sunset Ridge Rd, Northfield' },
      { emoji: '🎻', text: '即將舉行：小提琴發表會 — 11/8（日）下午 1:30 · 📍 550 Sunset Ridge Rd, Northfield' },
    ],
    link: '查看海報 →',
  },
};

const ROTATE_MS = 4000;

const EventsStrip = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = stripText[langKey];
  // Starts at 0 so the first client render matches the prerendered HTML.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % t.messages.length), ROTATE_MS);
    return () => clearInterval(timer);
  }, [t.messages.length]);

  const message = t.messages[index];
  return (
    <Link to={langKey === 'tw' ? '/tw/upcoming-events' : '/upcoming-events'} className="events-strip">
      {/* key restarts the fade-in each time the message changes */}
      <span key={index} className="events-strip-message" aria-live="polite">
        <span className="events-strip-emoji" aria-hidden="true">{message.emoji}</span>
        <span>{message.text}</span>
      </span>
      <span className="events-strip-button">{t.link}</span>
    </Link>
  );
};

export default EventsStrip;
