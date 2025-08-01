import React from 'react';
import './AboutMeSection.css';
import teacherPic from '../images/about-me.jpeg';
import { useLanguage } from './LanguageWrapper';

const aboutText = {
  en: {
    bio: `I'm Lavinia Lee, a passionate violin, viola, and piano teacher with Masters degrees from Yale and Northwestern, and over 20 years of teaching and performing experience. My approach blends Suzuki method, music theory, and orchestral training to help students thrive musically and personally. Whether your child is just starting or preparing for auditions, I'm committed to nurturing their growth with warmth, structure, and expert guidance.`
  },
  tw: {
    bio: `我是李老師（Lavinia Lee），主授小提琴、中提琴與鋼琴，畢業於耶魯大學碩士與西北大學，擁有超過二十年教學與演奏經驗。我的教學融合鈴木教學法、樂理與管弦樂訓練，幫助學生在音樂與個人成長上都能茁壯。不論您的孩子是初學還是備考，我都以溫暖、結構化與專業的指導，陪伴他們成長。`
  }
};

const AboutMeSection = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = aboutText[langKey];
  return (
    <section className="aboutme-section">
      <div className="aboutme-pic">
        <img src={teacherPic} alt="Teacher" className="aboutme-img" />
      </div>
      <div className="aboutme-bio" style={{
        background: 'linear-gradient(120deg, #f7f4fa 80%, #e9e3f7 100%)',
        borderRadius: '22px',
        boxShadow: '0 8px 32px rgba(60,40,120,0.10)',
        padding: '2.2rem 2.2rem 2.2rem 2.2rem',
        border: '1.5px solid #e0d7f3',
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{ fontSize: '1.18rem', lineHeight: 1.9, color: '#4a3566', background: 'none', borderRadius: '0', padding: 0, boxShadow: 'none', fontWeight: 500, margin: 0 }}>{t.bio}</p>
      </div>
    </section>
  );
};

export default AboutMeSection; 