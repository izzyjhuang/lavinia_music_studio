import Footer from '../components/Footer';
import React from 'react';
import { useLanguage } from '../components/LanguageWrapper';
import './Contact.css';

const text = {
  en: {
    title: 'Contact',
    content: 'Get in touch for lesson inquiries, scheduling, or other questions.',
    ready: {
      heading: 'Ready to Begin?',
      buttonText: 'Schedule an Intro Call'
    },
    email: {
      heading: 'Email Us',
      address: 'lavinialeemusicstudio@gmail.com'
    }
  },
  tw: {
    title: '聯絡',
    content: '如需課程諮詢、預約或其他問題，歡迎聯絡我們。',
    ready: {
      heading: '準備好開始了嗎？',
      buttonText: '預約初步洽談'
    },
    email: {
      heading: '電子郵件',
      address: 'lavinialeemusicstudio@gmail.com'
    }
  }
};

const Contact = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = text[langKey];
  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.content}</p>
      <div className="contact-card">
        <h2 className="contact-card-title">{t.ready.heading}</h2>
        <a
          className="contact-schedule-btn"
          href="https://calendly.com/lavinialeemusicstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.ready.buttonText}
        </a>
      </div>
      <div className="contact-email-section">
        <h3 className="contact-email-title">{t.email.heading}</h3>
        <a href="mailto:lavinialeemusicstudio@gmail.com" className="contact-email-address">
          {t.email.address}
        </a>
      </div>
    </div>
  );
};

export default function ContactWithFooter(props) {
  return <>
    <Contact {...props} />
    <Footer />
  </>;
}

// Original default export
// export default Contact;
 