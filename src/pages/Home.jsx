import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bgImg from '../images/home-banner.jpeg';
import overlayImg from '../images/playing-piano-home.jpeg';
import teacherPic from '../images/teacher-pic.jpeg';
import pianoImg from '../images/playing-piano.jpeg';
import violinImg from '../images/playing-violin.jpeg';
import { useLanguage } from '../components/LanguageWrapper';

const missionText = {
  en: `Welcome! I’m Lavinia, a passionate teacher dedicated to nurturing each student’s unique musical voice. Whether you’re just starting or preparing for competitions, I offer tailored piano, violin, and viola lessons that build skill, confidence, and joy.`,
  tw: `歡迎！我是Lavinia，一位熱愛教學的老師，致力於啟發每位學生獨特的音樂聲音。不論是初學還是備賽，我都提供量身打造的鋼琴、小提琴與中提琴課程，幫助學生建立技巧、自信與音樂的喜悅。`
};

const instrumentText = {
  en: {
    piano: {
      title: 'Piano Lessons',
      desc: 'Learn to play the piano with personalized lessons tailored to your goals and learning style.'
    },
    violin: {
      title: 'Violin & Viola Lessons',
      desc: 'Develop your string skills with expert guidance in violin and viola playing techniques.'
    },
    ready: {
      heading: 'Ready to Begin?',
      buttonText: 'Schedule an Intro Call'
    }
  },
  tw: {
    piano: {
      title: '鋼琴課程',
      desc: '根據您的目標和學習風格，提供量身打造的鋼琴課程。'
    },
    violin: {
      title: '小提琴與中提琴課程',
      desc: '在小提琴和中提琴演奏技巧方面獲得專業指導。'
    },
    ready: {
      heading: '準備好開始了嗎？',
      buttonText: '預約初步洽談'
    }
  }
};

const Home = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  return (
    <>
      <Link to="/" className="home-banner-link">
        <section className="home-banner-section">
          <img src={bgImg} alt="Banner" className="home-banner-bg" />
          <div className="home-banner-overlay">
            <img src={overlayImg} alt="Playing Piano" className="home-banner-overlay-img" />
          </div>
        </section>
      </Link>
      <section className="home-mission-section">
        <div className="home-mission-pic">
          <img src={teacherPic} alt="Teacher" className="home-mission-img" />
        </div>
        <div className="home-mission-bio">
          <p>{missionText[langKey]}</p>
        </div>
      </section>
      <section className="home-instruments-section">
        <div className="home-instrument-card">
          <Link to="/piano" className="home-instrument-link">
            <div className="home-instrument-content">
              <img src={pianoImg} alt="Piano" className="home-instrument-img" />
              <h3>{instrumentText[langKey].piano.title}</h3>
              <p>{instrumentText[langKey].piano.desc}</p>
            </div>
          </Link>
        </div>
        <div className="home-instrument-card">
          <Link to="/violin-viola" className="home-instrument-link">
            <div className="home-instrument-content">
              <img src={violinImg} alt="Violin" className="home-instrument-img" />
              <h3>{instrumentText[langKey].violin.title}</h3>
              <p>{instrumentText[langKey].violin.desc}</p>
            </div>
          </Link>
        </div>
      </section>
      {/* Ready to Begin Section */}
      <section className="home-ready-section">
        <h2>{instrumentText[langKey].ready.heading}</h2>
        <a href="https://calendly.com/lavinialeemusicstudio/" className="home-ready-button" target="_blank" rel="noopener noreferrer">{instrumentText[langKey].ready.buttonText}</a>
      </section>
    </>
  );
};

export default Home; 