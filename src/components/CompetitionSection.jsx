import React from 'react';
import './CompetitionSection.css';
import { useLanguage } from '../LanguageContext';

const competitionText = {
  en: {
    heading: 'Student Achievements',
    competitions: [
      '<strong>Gold medals</strong> in Sonata and Sonatina Festivals',
      '<strong>First place</strong> and <strong>overall winnergi</strong> at the Lake Forest High School Music Competition',
      '<strong>First place</strong> at the Deerfield High School and Caruso Middle School Music Competitions',
      '<strong>Honorable Mention</strong> in the highly competitive Walgreens National Concerto Competition',
      '<strong>Section Violinist</strong> for the<strong> ILMEA District Orchestra</strong>, and even the role of <strong>Principal Violist</strong> in the<strong> ILMEA All-State Orchestra</strong>'
    ]
  },
  zh: {
    heading: '學生成就',
    competitions: [
      '奏鳴曲與小奏鳴曲比賽<strong>金牌</strong>',
      'Lake Forest高中音樂比賽<strong>第一名</strong>及<strong>總冠軍</strong>',
      'Deerfield高中與Caruso國中音樂比賽<strong>第一名</strong>',
      '全國知名Walgreens協奏曲大賽<strong>榮獲佳作</strong>',
      '<strong>ILMEA地區管弦樂團</strong><strong>小提琴手</strong>，並曾任<strong>ILMEA全州管弦樂團</strong><strong>中提琴首席</strong>'
    ]
  }
};

const CompetitionSection = () => {
  const { language } = useLanguage();
  const t = competitionText[language];
  return (
    <section className="competition-section">
      <h2>{t.heading}</h2>
      <div className="competition-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', margin: '0 auto', maxWidth: 700 }}>
        {t.competitions.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontSize: '1.13rem', color: '#333', gap: '0.7em' }}>
            <span style={{ fontSize: '1.3em', lineHeight: 1 }}>🏆</span>
            <span style={{ display: 'inline-block' }} dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompetitionSection; 