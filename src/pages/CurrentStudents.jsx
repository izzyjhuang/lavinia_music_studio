import Footer from '../components/Footer';
import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageWrapper';

const text = {
  en: {
    title: 'Student Resources',
    content: 'Access resources, announcements, and schedules for current students.',
    enterPassword: 'Please enter the password to access this page:',
    submit: 'Submit',
    error: 'Incorrect password. Please try again.'
  },
  tw: {
    title: '學生資源',
    content: '提供學生資源、公告與課程表。',
    enterPassword: '請輸入密碼以瀏覽本頁內容：',
    submit: '送出',
    error: '密碼錯誤，請再試一次。'
  }
};

const PASSWORD = 'Brahms';

const CurrentStudents = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = text[langKey];
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError('');
    } else {
      setError(t.error);
    }
  };

  if (!unlocked) {
    return (
      <div style={{ maxWidth: 400, margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 4px 18px rgba(60,40,120,0.08)' }}>
        <h2>{t.title}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="student-password">{t.enterPassword}</label>
          <input
            id="student-password"
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ display: 'block', width: '100%', margin: '1rem 0', padding: '0.7rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <button type="submit" style={{ padding: '0.7rem 2rem', borderRadius: 8, background: '#3a2c5b', color: '#fff', fontWeight: 'bold', border: 'none', fontSize: '1rem' }}>{t.submit}</button>
        </form>
        {error && <div style={{ color: '#b00', marginTop: '1rem' }}>{error}</div>}
      </div>
    );
  }

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.content}</p>
    </div>
  );
};

export default function CurrentStudentsWithFooter(props) {
  return <>
    <CurrentStudents {...props} />
    <Footer />
  </>;
}

// Original default export
// export default CurrentStudents;
 