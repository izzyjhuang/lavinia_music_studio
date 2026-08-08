import Footer from '../components/Footer';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
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
    // The home page had no <h1> at all. It carries the primary keyword set.
    h1: "Piano, Violin & Viola Lessons on Chicago's North Shore",
    alt: {
      teacher: 'Lavinia Lee, private piano and violin teacher in Northbrook, Illinois',
      piano: 'Student playing piano during a private lesson',
      violin: 'Student playing violin during a private lesson',
    },
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
      buttonText: 'Book a Free Trial Lesson'
    }
  },
  tw: {
    h1: '芝加哥北岸鋼琴、小提琴與中提琴課程',
    alt: {
      teacher: 'Lavinia Lee 老師，Northbrook 鋼琴與小提琴私人教學',
      piano: '學生於一對一課程中彈奏鋼琴',
      violin: '學生於一對一課程中演奏小提琴',
    },
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
      buttonText: '預約免費體驗課'
    }
  }
};

const Home = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  return (
    <>
      <section className="home-hero-video-section">
        <video
          className="home-hero-video"
          src="https://res.cloudinary.com/dbav9uvia/video/upload/v1777321263/website_self_intro_video_tzqpxf.mov"
          controls
          playsInline
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="home-mission-section">
        <div className="home-mission-pic">
          <img src={teacherPic} alt={instrumentText[langKey].alt.teacher} className="home-mission-img" />
        </div>
        <div className="home-mission-bio">
          <h1 className="home-h1">{instrumentText[langKey].h1}</h1>
          <p>{missionText[langKey]}</p>
        </div>
      </section>
      <section className="home-instruments-section">
        <div className="home-instrument-card">
          <Link to="/piano" className="home-instrument-link">
            <div className="home-instrument-content">
              <img src={pianoImg} alt={instrumentText[langKey].alt.piano} className="home-instrument-img" />
              <h3>{instrumentText[langKey].piano.title}</h3>
              <p>{instrumentText[langKey].piano.desc}</p>
            </div>
          </Link>
        </div>
        <div className="home-instrument-card">
          <Link to="/violin-viola" className="home-instrument-link">
            <div className="home-instrument-content">
              <img src={violinImg} alt={instrumentText[langKey].alt.violin} className="home-instrument-img" />
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

export default function HomeWithFooter(props) {
  return <>
    <Home {...props} />
    <Footer />
  </>;
}

// Original default export
// export default Home;
 