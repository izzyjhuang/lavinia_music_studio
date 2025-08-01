import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import '../images/playing-piano.jpeg';
import './ViolinViola.css';
import playingViolinImg from '../images/playing-violin.jpeg';

const headings = {
  en: {
    why: 'Why Learn Violin/Viola?',
    curriculum: 'Focus for Every Stage',
    recitals: 'Student Highlights',
    faq: 'Frequently Asked Questions',
    testimonials: 'Student Testimonials',
    cta: 'Ready to Begin?',
    schedule: 'Schedule an Intro Call',
  },
  zh: {
    why: '為什麼學小提琴/中提琴？',
    curriculum: '每個階段的學習重點',
    recitals: '學生亮點',
    faq: '常見問題',
    testimonials: '學生感言',
    cta: '準備好開始了嗎？',
    schedule: '預約體驗課',
  }
};

const whyLearnPoints = {
  en: [
    {
      title: 'Develops Fine Motor Skills and Coordination',
      desc: 'Mastering the bow, posture, and finger placement hones a student’s precision and control. These skills strengthen mind focus and finger dexterity'
    },
    {
      title: 'Trains the Ear and Builds Musical Sensitivity',
      desc: 'Unlike instruments with fixed pitches, strings demand close listening. Students develop an exceptional ear for pitch, tone, and musical nuance'
    },
    {
      title: 'Offers Rich Ensemble Opportunities',
      desc: 'From string quartets to full symphony orchestras, violinists and violists enjoy vibrant opportunities to collaborate, connect, and create music together — learning teamwork, timing, and leadership.'
    },
    {
      title: 'Teaches Discipline and Patience',
      desc: 'Learning violin or viola is a journey of steady progress. As students meet each challenge, they build perseverance, confidence, and a deep appreciation for their own growth.'
    },
    {
      title: 'A Voice for Personal Expression',
      desc: 'A wide range of violin repertoire help students learn to cultivate their creativities through expressing music on the violin'
    }
  ],
  zh: [
    {
      title: '發展精細動作與協調力',
      desc: '學習運弓、正確姿勢與手指擺放，能訓練孩子的專注力與手指靈活度，提升精細動作控制'
    },
    {
      title: '訓練聽力，培養音樂敏感度',
      desc: '弦樂器不像鋼琴有固定音高，需細心聆聽音準與音色，讓孩子培養絕佳的音感與音樂細膩度'
    },
    {
      title: '豐富的合奏與團體經驗',
      desc: '從四重奏到交響樂團，小提琴/中提琴學生有許多機會與他人合作，學習團隊合作、節奏感與領導能力'
    },
    {
      title: '培養耐心與自律',
      desc: '學琴是一段持續進步的旅程，孩子在每個挑戰中累積毅力、自信，並學會欣賞自己的成長'
    },
    {
      title: '展現自我、音樂表達力',
      desc: '多元的小提琴曲目，讓學生在音樂中發揮創意，找到屬於自己的聲音'
    }
  ]
};

function WhyLearnAccordion() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);
  return (
    <div className="why-learn-violinviola-accordion">
      {whyLearnPoints[language].map((item, idx) => (
        <div key={idx} className={`why-learn-violinviola-item${openIndex === idx ? ' open' : ''}`}>
          <button className="why-learn-violinviola-title-btn" onClick={() => toggle(idx)} aria-expanded={openIndex === idx}>
            <span className="why-learn-violinviola-title">{item.title}</span>
            <span className="why-learn-violinviola-arrow">{openIndex === idx ? '▲' : '▼'}</span>
          </button>
          <div className="why-learn-violinviola-desc-wrapper" style={{ maxHeight: openIndex === idx ? '200px' : '0px' }}>
            <span className="why-learn-violinviola-desc">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const curriculum = {
  en: {
    beginner: [
      'Instrument care and posture',
      'Bow hold and basic sound',
      'Simple songs and rhythms'
    ],
    intermediate: [
      'Scales and arpeggios',
      'Shifting and vibrato',
      'Ensemble skills'
    ],
    advanced: [
      'Concertos and advanced repertoire',
      'Expressive phrasing',
      'Chamber and orchestral playing'
    ]
  },
  zh: {
    beginner: [
      '樂器保養與正確姿勢',
      '弓法與基礎發聲',
      '簡單旋律與節奏'
    ],
    intermediate: [
      '音階與琶音',
      '換把與顫音',
      '合奏技巧'
    ],
    advanced: [
      '協奏曲與進階曲目',
      '音樂表情詮釋',
      '室內樂與樂團經驗'
    ]
  }
};

const curriculumTableRows = {
  en: [
    ['Overall Goal', 'Build comfort and confidence with proper posture and sound', 'Learn to express music with control and emotion', 'Perform with polish, depth, and individuality'],
    ['Right Arm (Bow)', 'Learn how to hold the bow, play with a straight bow, and use basic strokes on open strings', 'Explore new bowing styles, use dynamics, and shape musical phrases', 'Master advanced bowing techniques and refined tone control'],
    ['Left Hand', 'Develop correct finger placement and play first-position notes', 'Learn vibrato, shift to higher positions (2-7 positions), and begin playing two notes at once', 'Perform advanced techniques like harmonics, smooth shifting, and double stops'],
    ['Musicality & Theory', 'Read music, count rhythms, and understand note values', 'Understand key signatures and begin to use bow distribution and vibrato for musical phrasing', 'Dive into musical interpretation and historical styles from Baroque to 20th century'],
    ['Repertoire', 'Suzuki Books 1–3 and beginner songs', 'Student concertos and short expressive pieces (Vivaldi, Seitz, Accolay, Bach, Monti)', 'Major concertos (Mozart, Bruch, Lalo, Mendelssohn), solo Bach, and advanced chamber music']
  ],
  zh: [
    ['學習目標', '建立正確姿勢與音色，培養自信與舒適感', '學會用控制與情感詮釋音樂', '展現成熟技巧、深度與個人風格'],
    ['右手（運弓）', '學習正確持弓、直線運弓與空弦基本弓法', '探索多元弓法、運用力度與樂句表現', '精通高階弓法與音色控制'],
    ['左手', '建立正確指法，彈奏第一把位音', '學習顫音、換把與雙音初步', '進階技巧如泛音、順暢換把與雙音彈奏'],
    ['音樂性與樂理', '學會識譜、節奏與音符時值', '理解調號，開始運用樂句與顫音表現', '深入音樂詮釋與歷史風格（巴洛克至20世紀）'],
    ['曲目', '鈴木教材1–3冊與初級曲目', '學生協奏曲與抒情小品（韋瓦第、賽茲、蒙蒂）', '大型協奏曲（巴哈、莫札特、孟德爾頌）、巴哈獨奏與高階室內樂']
  ]
};

const recitals = {
  en: [
    { video: require('../videos/aidan_keelin_czardas.mp4'), label: '<div style="text-align: center;">Aidan & Keelin<br/><i>Monti "Czardas"</i></div>' },
    { video: require('../videos/nathan_havanaise.mp4'), label: '<div style="text-align: center;">Nathan<br/><i>Saint-Saëns \"Havanaise\"</i></div>' },
    { video: require('../videos/logan_scottish_fantasy.mp4'), label: '<div style="text-align: center;">Logan<br/><i>Bruch \"Scottish Fantasy\"</i></div>' },
  ],
  zh: [
    { video: require('../videos/aidan_keelin_czardas.mp4'), label: '<div style="text-align: center;">Aidan 和 Keelin<br/><i>蒙蒂 "Czardas"</i></div>' },
    { video: require('../videos/nathan_havanaise.mp4'), label: '<div style="text-align: center;">Nathan<br/><i>聖桑 "哈瓦奈斯"</i></div>' },
    { video: require('../videos/logan_scottish_fantasy.mp4'), label: '<div style="text-align: center;">Logan<br/><i>布魯赫 "蘇格蘭幻想曲"</i></div>' },
  ]
};

const faqData = [
  {
    question: {
      en: 'What age is a good age to start violin or viola?',
      zh: '幾歲適合開始學小提琴或中提琴？'
    },
    answer: {
      en: 'Most children can start around age 5, depending on their attention span and fine motor skills. That said, it’s never too late to begin! I teach students of all ages—young beginners to adults—and tailor lessons to fit individual goals and learning styles.',
      zh: '大多數孩子約5歲即可開始學琴，視專注力與手部發展而定。不過，任何年齡都適合學習！我教過從幼兒到成人，會根據每位學生的目標與學習風格調整課程內容。'
    }
  },
  {
    question: {
      en: 'Do we need to own an instrument before starting?',
      zh: '開始上課前需要先有樂器嗎？'
    },
    answer: {
      en: 'Yes. I’m happy to guide you through renting or purchasing the right size and quality instrument. For young beginners, renting from a reputable shop is often the most flexible and affordable option.',
      zh: '是的。建議上課前先租借或購買合適尺寸的樂器。對初學小朋友來說，從信譽良好的店家租琴通常最彈性、經濟。我會協助家長挑選適合的樂器。'
    }
  },
  {
    question: {
      en: 'My child doesn’t know how to read music. Is that okay?',
      zh: '孩子不會看譜可以學嗎？'
    },
    answer: {
      en: 'Absolutely! We start with note reading and rhythm skills from the very beginning—no prior knowledge is required.',
      zh: '完全沒問題！課程會從認識音符、節奏開始，無需任何基礎。'
    }
  },
  {
    question: {
      en: 'My child takes group orchestra at school. Do we still need private lessons?',
      zh: '孩子在學校有參加樂團，還需要上一對一課嗎？'
    },
    answer: {
      en: 'Yes. Private lessons offer personalized instruction tailored to your child’s needs. Questions are answered immediately, bad habits are corrected early, and progress is faster and more secure.',
      zh: '需要。一對一課程能針對孩子的需求調整教學，及時解答問題、糾正壞習慣，進步更快也更扎實。'
    }
  },
  {
    question: {
      en: 'How long is each lesson, and how often do they occur?',
      zh: '每次上課多久？多久上一次？'
    },
    answer: {
      en: 'Lessons are held once a week. Typical durations:\n• 30 minutes – young beginners\n• 45 minutes – intermediate students\n• 60 minutes – advanced or older students\nWe’ll choose the right length based on your child’s age and level.',
      zh: '課程每週一次。一般來說：\n• 30分鐘－幼兒初學\n• 45分鐘－中級學生\n• 60分鐘－高年級或進階學生\n會依年齡與程度建議最適合的課程長度。'
    }
  },
  {
    question: {
      en: 'How much practice is expected between lessons?',
      zh: '課後需要練習多久？'
    },
    answer: {
      en: 'Consistency matters more than length. Beginners might practice 15–20 minutes a day; intermediate/advanced students may need 30–60 minutes. I’ll provide tailored practice goals that fit your child’s routine.',
      zh: '重點是持之以恆。初學者每天15–20分鐘，中高級學生建議30–60分鐘。我會根據孩子的狀況給予個別化的練習建議。'
    }
  },
  {
    question: {
      en: 'What method or curriculum do you use?',
      zh: '課程內容和教材是什麼？'
    },
    answer: {
      en: 'I combine Suzuki, traditional, and contemporary approaches—blending ear training, note reading, technical studies, and expressive repertoire. Each lesson is customized to the student’s learning style and goals.',
      zh: '課程融合鈴木、傳統與現代教學法，包含聽力訓練、識譜、技巧練習與多元曲目，並依學生需求量身訂做。'
    }
  },
  {
    question: {
      en: 'Will my child perform in recitals?',
      zh: '學生會有演出或發表會嗎？'
    },
    answer: {
      en: 'Yes! I host regular recitals and encourage all students to participate. Performing builds confidence, sets goals, and creates a joyful sense of accomplishment.',
      zh: '會！我定期舉辦學生發表會，鼓勵大家參加。演出能建立自信、設定目標，也讓學習更有成就感。'
    }
  },
  {
    question: {
      en: 'Can I sit in on my child’s lesson?',
      zh: '家長可以旁聽課程嗎？'
    },
    answer: {
      en: 'Absolutely. For younger children, parent involvement is encouraged—it helps you understand how to support practice at home. You\'re always welcome!',
      zh: '當然可以！年紀小的學生建議家長參與課程，方便回家協助練習。歡迎家長隨時旁聽。'
    }
  },
  {
    question: {
      en: 'What if we need to miss a lesson?',
      zh: '臨時請假怎麼辦？'
    },
    answer: {
      en: 'No problem—just give at least 24 hours’ notice for a make-up lesson. I also offer occasional online lessons if you\'re traveling or your child is feeling under the weather.',
      zh: '只要提前24小時通知即可補課。如遇旅遊或身體不適，也可安排線上課程。'
    }
  },
  {
    question: {
      en: 'Do you teach both violin and viola?',
      zh: '有教中提琴嗎？可以換樂器嗎？'
    },
    answer: {
      en: 'Yes! While most students begin with violin, I’m happy to teach viola as well. Students are welcome to transition between the two as they grow.',
      zh: '有的！大多數學生從小提琴開始，之後也歡迎學中提琴，兩者可依興趣與需求轉換。'
    }
  },
  {
    question: {
      en: 'How will I know if my child is progressing?',
      zh: '怎麼知道孩子有沒有進步？'
    },
    answer: {
      en: 'I provide regular updates, celebrate milestones, and maintain open communication with parents. You’ll see growth not just in playing skills, but also in confidence, discipline, and musical joy.',
      zh: '我會定期回饋學習狀況，與家長保持溝通。除了技巧進步，也會看到孩子自信、專注與音樂素養的提升。'
    }
  }
];

function FAQAccordion() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);
  return (
    <div className="piano-faq-accordion">
      {faqData.map((item, idx) => (
        <div key={idx} className={`faq-item${openIndex === idx ? ' open' : ''}`}>
          <button className="faq-question" onClick={() => toggle(idx)} aria-expanded={openIndex === idx}>
            {item.question[language]}
            <span className="faq-arrow">{openIndex === idx ? '▲' : '▼'}</span>
          </button>
          <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === idx ? '200px' : '0px' }}>
            <div className="faq-answer" dangerouslySetInnerHTML={{__html: item.answer[language]}} />
          </div>
        </div>
      ))}
    </div>
  );
}

const testimonials = {
  en: [
    {
      text: 'Lavinia helped me prepare for my first orchestra audition. I started viola with her in 2022, and now I can play pieces I never thought I could. She always encourages me to do my best!',
      student: '— Alex (12yo), learning since 2022'
    },
    {
      text: 'I used to struggle with intonation, but Lavinia showed me how to practice smart. Since starting lessons last year, I feel much more confident and even played a solo at my school concert!',
      student: '— Mia (10yo), learning since 2023'
    },
    {
      text: 'Ms. Lavinia makes violin so much fun! I love learning new songs and playing with friends in group class. She always finds music I enjoy.',
      student: '— Ethan (8yo), learning since 2023'
    }
  ],
  zh: [
    {
      text: 'Lavinia老師幫我準備第一次樂團甄選。2022年開始學中提琴，現在能彈我以前覺得很難的曲子。老師總是鼓勵我做到最好！',
      student: '— Alex（12歲），自2022年開始學習'
    },
    {
      text: '我以前音準常常不準，Lavinia老師教我如何有效練習。去年開始上課後，我自信多了，還在學校音樂會獨奏！',
      student: '— Mia（10歲），自2023年開始學習'
    },
    {
      text: 'Lavinia老師讓小提琴變得很有趣！我喜歡學新歌，也喜歡和同學一起合奏。老師總是幫我找我喜歡的音樂。',
      student: '— Ethan（8歲），自2023年開始學習'
    }
  ]
};

const ViolinViola = () => {
  const { language } = useLanguage();
  return (
    <>
    <section className="violinviola-banner-bg">
    </section>
      <div className="violinviola-page">
        
        {/* 1. Overview */}
        <section className="violinviola-section violinviola-overview">
          <h1>{headings[language].why}</h1>
          <WhyLearnAccordion />
        </section>

        {/* 2. Curriculum & Levels */}
        <section className="violinviola-section violinviola-curriculum">
          <h2>{headings[language].curriculum}</h2>
          <div className="violinviola-curriculum-table-wrapper">
            <table className="violinviola-curriculum-table">
              <thead>
                <tr>
                  <th></th>
                  <th>{language === 'en' ? 'Beginner' : '初學'}</th>
                  <th>{language === 'en' ? 'Intermediate' : '中級'}</th>
                  <th>{language === 'en' ? 'Advanced' : '高級'}</th>
                </tr>
              </thead>
              <tbody>
                {curriculumTableRows[language].map((row, idx) => (
                  <tr key={idx}>
                    <th style={{textAlign: 'center', verticalAlign: 'middle'}}>{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Student Highlights */}
        <section className="violinviola-section violinviola-recitals">
          <h2>{headings[language].recitals}</h2>
          <div className="recital-videos">
            {recitals[language].map((item, idx) => (
              <div className="recital-video-thumb" key={idx}>
                <video width="320" height="240" controls>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <span dangerouslySetInnerHTML={{ __html: item.label }} />
              </div>
            ))}
          </div>
        </section>

        {/* 4. FAQ */}
        <section className="violinviola-section violinviola-faq">
          <h2>{headings[language].faq}</h2>
          <FAQAccordion />
        </section>

        {/* 5. Student Testimonials */}
        <section className="violinviola-section violinviola-testimonials">
          <h2>{headings[language].testimonials}</h2>
          {testimonials[language].map((t, idx) => (
            <blockquote key={idx}>
              {t.text}
              <span className="testimonial-student">{t.student}</span>
            </blockquote>
          ))}
        </section>

        {/* 6. Call to Action */}
        <section className="violinviola-section violinviola-cta">
          <h2>{headings[language].cta}</h2>
          <a href="https://calendly.com/lavinialeemusicstudio/violin-viola-intro-call" className="violinviola-cta-button" target="_blank" rel="noopener noreferrer">{headings[language].schedule}</a>
        </section>
      </div>
    </>
  );
};

export default ViolinViola; 