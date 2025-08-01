import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageWrapper';
import playingPianoImg from '../images/playing-piano.jpeg';
import './Piano.css';

const text = {
  en: {
    title: 'Piano',
    content: 'Explore piano lessons, curriculum, and resources for students of all levels.'
  },
  tw: {
    title: '鋼琴',
    content: '探索適合各個程度學生的鋼琴課程、教學大綱與資源。'
  }
};

const faqData = [
  {
    question: {
      en: 'Why choose private lessons over group classes or apps?',
      tw: '為什麼選擇一對一課程而不是團體班或學習App？'
    },
    answer: {
      en: 'Private lessons offer customized instruction, faster progress, and correction of bad habits—none of which apps or group classes can fully provide.',
      tw: '一對一課程能針對學生個別需求調整教學，進步更快，也能及時糾正壞習慣，這是團體班或App無法做到的。'
    }
  },
  {
    question: {
      en: 'How long should my child practice each day?',
      tw: '每天應該練習多久？'
    },
    answer: {
      en: 'At least as long as their weekly lesson—typically 15–30 minutes a day for beginners. Consistency matters most.',
      tw: '建議每天練習的時間至少和每週上課時間一樣長。初學者通常每天15–30分鐘，重點是持之以恆。'
    }
  },
  {
    question: {
      en: 'How can I help my children practice at home?',
      tw: '家長如何協助孩子在家練琴？'
    },
    answer: {
      en: `<ul style="margin:0 0 0 1.2em;padding:0;">
        <li>Set a regular practice time and create a distraction-free environment.</li>
        <li>Offer encouragement and celebrate your child’s progress.</li>
        <li>Sit with your child occasionally and ask them to show you what they’re learning.</li>
        <li>For young beginners, short, frequent sessions are more effective than long, infrequent ones.</li>
      </ul>`,
      tw: `<ul style="margin:0 0 0 1.2em;padding:0;">
        <li>安排固定的練琴時間，並營造安靜無干擾的環境。</li>
        <li>多給予鼓勵，肯定孩子的進步。</li>
        <li>偶爾陪伴孩子練習，請他們向您展示所學內容。</li>
        <li>對年幼初學者，短而頻繁的練習比長時間但不規律的練習更有效。</li>
      </ul>`
    }
  },
  {
    question: {
      en: 'Can parents sit in on the lesson?',
      tw: '家長可以旁聽課程嗎？'
    },
    answer: {
      en: 'Yes! For young children (under 7), parent observation is encouraged. Older students may benefit more from independent lessons—we’ll find what works best.',
      tw: '可以！7歲以下的小朋友建議家長旁聽。年紀較大的學生則可依情況選擇是否獨立上課，我們會一起找出最適合的方式。'
    }
  },
  {
    question: {
      en: 'What is your policy for missed or canceled lessons?',
      tw: '請假或取消課程的規定是什麼？'
    },
    answer: {
      en: 'Please give at least 24 hours’ notice to reschedule. Late cancellations are forfeited, as the time is reserved exclusively for your child.',
      tw: '如需請假或改期，請提前24小時通知。臨時取消則視同上課，因為該時段已為您的孩子保留。'
    }
  },
  {
    question: {
      en: 'What if my child loses interest?',
      tw: '如果孩子對學琴失去興趣怎麼辦？'
    },
    answer: {
      en: 'It happens! I personalize lessons to keep things fresh and engaging, and we adjust goals when needed to reignite motivation.',
      tw: '這是常見的狀況！我會調整課程內容，讓學習保持新鮮感，也會和學生一起設定新目標，重新激發學習動力。'
    }
  },
  {
    question: {
      en: 'What kind of music will my child learn?',
      tw: '孩子會學什麼類型的音樂？'
    },
    answer: {
      en: 'We start with fun and familiar songs. As students grow, they explore classical styles, pop, jazz, and more based on their interests.',
      tw: '初學會從有趣、熟悉的曲子開始，之後會依學生興趣學習古典、流行、爵士等不同風格。'
    }
  },
  {
    question: {
      en: 'Do you encourage competitions?',
      tw: '會鼓勵參加比賽嗎？'
    },
    answer: {
      en: 'Yes! Intermediate students are encouraged to join local events like the Sonata & Sonatina Festival to build confidence and performance experience.',
      tw: '會的！中級以上學生鼓勵參加像Sonata & Sonatina Festival這類比賽，累積舞台經驗與自信。'
    }
  },
  {
    question: {
      en: 'How often do you hold recitals?',
      tw: '多久舉辦一次發表會？'
    },
    answer: {
      en: 'Twice a year—winter and spring. Recitals are low-pressure and a great way for students to celebrate their progress.',
      tw: '每年舉辦兩次發表會（冬季和春季），氣氛輕鬆，是學生展現成果、建立自信的好機會。'
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

const whyLearnPianoPoints = {
  en: [
    {
      title: 'Builds a Strong Foundation in Musical Understanding',
      desc: 'Piano builds a strong foundation in musical understanding, helping to develop strong listening skills and a keen sense of pitch and rhythm.'
    },
    {
      title: 'Intuitive Visual Layout of Music Theory',
      desc: 'Piano visually lays out music theory in an intuitive way. This makes it an excellent starting point in musical education.'
    },
    {
      title: 'Enhances Brain Function and Coordination',
      desc: 'Playing the piano improves memory, enhances coordination, and the music patterns promote logical thinking.'
    },
    {
      title: 'Explores a Wide Range of Repertoire',
      desc: 'A wide range of Piano repertoire lets students learn to express their creativity through music.'
    },
    {
      title: 'Builds Confidence Through Achievement',
      desc: 'Learning a piece, performing at a recital, or mastering a new skill helps students build confidence through achievement.'
    }
  ],
  tw: [
    {
      title: '建立堅實的音樂理解基礎',
      desc: '鋼琴建立堅實的音樂理解基礎，培養良好的聆聽技巧和音準節奏感。'
    },
    {
      title: '直觀的音樂理論視覺呈現',
      desc: '鋼琴以直觀的方式呈現音樂理論，使其成為音樂教育的理想起點。'
    },
    {
      title: '增強腦力與協調性',
      desc: '彈琴能改善記憶力、增強協調性，音樂模式有助於培養邏輯思維。'
    },
    {
      title: '豐富的曲目選擇',
      desc: '豐富的鋼琴曲目讓學生能通過音樂表達創造力。'
    },
    {
      title: '通過成就建立自信',
      desc: '學習曲目、發表會表演或掌握新技能，都能幫助學生通過成就建立自信。'
    }
  ]
};

const headings = {
  en: {
    why: 'Why Learn Piano?',
    curriculum: 'Focus for Every Stage',
    recitals: 'Student Highlights',
    faq: 'Frequently Asked Questions',
    testimonials: 'Student Testimonials',
    cta: 'Ready to Begin?',
    schedule: 'Schedule an Intro Call'
  },
  tw: {
    why: '為什麼學鋼琴？',
    curriculum: '每個階段的學習重點',
    recitals: '學生亮點',
    faq: '常見問題',
    testimonials: '學生感言',
    cta: '準備好開始了嗎？',
    schedule: '預約初步洽談'
  }
};

const repertoire = {
  en: {
    beginner: ['Ode to Joy', 'Twinkle Variations'],
    intermediate: ['Fur Elise', 'Burgmüller Op. 100'],
    advanced: ['Beethoven Sonatas', 'Chopin Waltzes', 'Debussy Preludes']
  },
  zh: {
    beginner: ['歡樂頌', '小星星變奏曲'],
    intermediate: ['給愛麗絲', '布格繆勒 Op. 100'],
    advanced: ['貝多芬奏鳴曲', '蕭邦圓舞曲', '德布西前奏曲']
  }
};

const recitals = {
  en: [
    { video: '/videos/daryl_rachmaninov_prelude_no.5.mp4', label: '<div style="text-align: center;">Daryl<br/><i>Rachmaninov "Prelude Op. 23 No.5"</i></div>' },
    { video: '/videos/avril_chopin_nocturne.mp4', label: '<div style="text-align: center;">Avril<br/><i>Chopin "Nocturne Op. 9 No. 2"</i></div>' },
    { video: '/videos/luke_river_flows_in_you.mp4', label: '<div style="text-align: center;">Luke<br/><i>Yurima "River Flows in You"</i></div>' }
  ],
  tw: [
    { video: '/videos/daryl_rachmaninov_prelude_no.5.mp4', label: '<div style="text-align: center;">Daryl<br/><i>拉赫曼尼諾夫 "Op. 23 No. 5 前奏曲"</i></div>' },
    { video: '/videos/avril_chopin_nocturne.mp4', label: '<div style="text-align: center;">Avril<br/><i>蕭邦 "夜曲 第9號第2首"</i></div>' },
    { video: '/videos/luke_river_flows_in_you.mp4', label: '<div style="text-align: center;">Luke<br/><i>李俞任 "River Flows in You"</i></div>' },
  ]
};


const practiceList = {
  en: [
    '<b>Weekly Goals:</b> 10-20 min/day (Beginner), 20-30 min/day (Intermediate), 30+ min/day (Advanced)',
    '<b>Parental Support:</b> Encourage regular practice, help set a routine, listen to progress',
    '<b>Tips:</b> Practice at the same time daily, break pieces into sections, celebrate small wins'
  ],
  zh: [
    '<b>每週目標：</b> 初學10-20分鐘/天，中級20-30分鐘/天，高級30分鐘以上/天',
    '<b>家長協助：</b> 鼓勵規律練習，協助建立習慣，聆聽進步',
    '<b>小撇步：</b> 固定時間練習，分段練習，隨時鼓勵與肯定'
  ]
};

function WhyLearnPianoAccordion() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);
  const langKey = language === 'zh' ? 'tw' : language;
  return (
    <div className="why-learn-piano-accordion">
      {whyLearnPianoPoints[langKey].map((item, idx) => (
        <div key={idx} className={`why-learn-piano-item${openIndex === idx ? ' open' : ''}`}>
          <button className="why-learn-piano-title-btn" onClick={() => toggle(idx)} aria-expanded={openIndex === idx}>
            <span className="why-learn-piano-title">{item.title}</span>
            <span className="why-learn-piano-arrow">{openIndex === idx ? '▲' : '▼'}</span>
          </button>
          <div className="why-learn-piano-desc-wrapper" style={{ maxHeight: openIndex === idx ? '200px' : '0px' }}>
            <span className="why-learn-piano-desc">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const Piano = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;

  const t = whyLearnPianoPoints[langKey];
  return (
    <>
      <div className="piano-banner-bg"></div>
      <div className="piano-page">
        {/* 1. Overview of Piano Program */}
        <section className="piano-section piano-overview">
          <h1>{headings[langKey].why}</h1>
          {/* <p>{t.content}</p> */}
          <WhyLearnPianoAccordion />
        </section>

        {/* 2. Curriculum & Levels */}
        <section className="piano-section piano-curriculum">
          <h2>{headings[langKey].curriculum}</h2>
          <div className="piano-curriculum-table-wrapper">
            <table className="piano-curriculum-table">
              <thead>
                <tr>
                  <th></th>
                  <th>{language === 'en' ? 'Beginner' : '初學'}</th>
                  <th>{language === 'en' ? 'Intermediate' : '中級'}</th>
                  <th>{language === 'en' ? 'Advanced' : '高級'}</th>
                </tr>
              </thead>
              <tbody>
                {language === 'en' ? (
                  <>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Overall Goal</th>
                      <td>Confidence and joy at the piano</td>
                      <td>Expressive, fluent playing</td>
                      <td>Emotional depth and refined polish</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Technique</th>
                      <td>Proper posture, hand shape, 5-finger patterns</td>
                      <td>Scales, arpeggios, and easy studies (Czerny)</td>
                      <td>Virtuosic etudes (Chopin, Liszt), refined tone control</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Music Theory</th>
                      <td>Note names, rhythms, and basic symbols</td>
                      <td>Key signatures, chord progressions</td>
                      <td>Harmonic analysis, historical styles (Baroque to Modern)</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Musicality</th>
                      <td>Loud/soft contrast, legato vs. staccato</td>
                      <td>Shaping phrases, basic pedaling</td>
                      <td>Rubato, advanced pedaling, personal expression</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>Repertoire</th>
                      <td>Fun method books, folk songs, Disney tunes</td>
                      <td>Sonatinas (Clementi, Kuhlau), character pieces (Burgmüller, Schumann), and pop/jazz</td>
                      <td>Major sonatas (Beethoven, Mozart), concertos, major works by Bach, Chopin, Rachmaninoff</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>學習目標</th>
                      <td>在鋼琴上建立自信與樂趣</td>
                      <td>流暢且有表情的彈奏</td>
                      <td>情感深度與精緻詮釋</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>技巧</th>
                      <td>正確姿勢、手型、五指練習</td>
                      <td>音階、琶音、簡易練習曲（徹爾尼）</td>
                      <td>高難度練習曲（蕭邦、李斯特）、音色控制</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>樂理</th>
                      <td>認識音名、節奏、基礎樂理符號</td>
                      <td>調號、和弦進行</td>
                      <td>和聲分析、音樂史風格（巴洛克至現代）</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>音樂表現</th>
                      <td>強弱對比、連音與斷音</td>
                      <td>樂句塑造、基本踏板運用</td>
                      <td>速度自由、進階踏板、個人詮釋</td>
                    </tr>
                    <tr>
                      <th style={{textAlign: 'center', verticalAlign: 'middle'}}>曲目</th>
                      <td>趣味教材、民謠、迪士尼樂曲</td>
                      <td>小奏鳴曲（克萊門蒂、庫勞）、性格小品（布格繆勒、舒曼）、流行/爵士</td>
                      <td>重要奏鳴曲（貝多芬、莫札特）、協奏曲、巴哈/蕭邦/拉赫曼尼諾夫等大師作品</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Sample Repertoire */}
        {/* Placeholder for student video carousel */}
        {/* (section removed) */}

        {/* Piano Recitals Section */}
        <section className="piano-section piano-recitals">
          <h2>{headings[langKey].recitals}</h2>
          <div className="recital-videos">
            {recitals[langKey].map((item, idx) => (
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

        {/* 4. Practice Expectations */}

        {/* 5. Piano Lesson FAQs */}
        <section className="piano-section piano-faq">
          <h2>{headings[langKey].faq}</h2>
          <FAQAccordion />
        </section>

        {/* 6. Student Testimonials */}
        <section className="piano-section piano-testimonials">
          <h2>{headings[langKey].testimonials}</h2>
          {language === 'en' ? (
            <>
              <blockquote>
                “Lavinia always makes lessons fun and helps me understand hard music. I started learning with her when I was 7, and now I can play pieces I never thought possible. She helped me prepare for my first recital and I felt so proud!”
                <span className="testimonial-student">— Emily (11yo), learning since 2021</span>
              </blockquote>
              <blockquote>
                “I used to be nervous about playing in front of people, but Lavinia encouraged me every week. Since I started lessons with her, I’ve learned to play with more confidence and even won my school’s talent show!”
                <span className="testimonial-student">— Jason (14yo), learning since 2019</span>
              </blockquote>
              <blockquote>
                “Ms. Lavinia explains things in a way that makes sense and always finds music I love. I began lessons with her last year, and now I can read music and play my favorite movie themes. Piano is my favorite part of the week!”
                <span className="testimonial-student">— Sophia (10yo), learning since 2024</span>
              </blockquote>
            </>
          ) : (
            <>
              <blockquote>
                「Lavinia老師的課總是很有趣，讓我懂得怎麼彈難的曲子。我七歲開始跟她學，現在已經能彈我以前覺得不可能的曲子了。她還幫我準備第一次的鋼琴發表會，讓我很有成就感！」
                <span className="testimonial-student">— Emily（11歲），自2021年開始學習</span>
              </blockquote>
              <blockquote>
                「我以前很害怕在大家面前彈琴，但Lavinia老師每週都鼓勵我。自從開始上她的課，我變得更有自信，還贏得了學校的才藝比賽！」
                <span className="testimonial-student">— Jason（14歲），自2019年開始學習</span>
              </blockquote>
              <blockquote>
                「Lavinia老師講解得很清楚，還會幫我找我喜歡的音樂。去年開始跟她學鋼琴，現在我會看譜，也能彈自己最愛的電影主題曲。每週的鋼琴課是我最期待的時光！」
                <span className="testimonial-student">— Sophia（10歲），自2024年開始學習</span>
              </blockquote>
            </>
          )}
        </section>

        {/* 7. Call to Action */}
        <section className="piano-section piano-cta">
          <h2>{headings[langKey].cta}</h2>
          <a href="https://calendly.com/lavinialeemusicstudio/piano-intro-call" className="piano-cta-button" target="_blank" rel="noopener noreferrer">{headings[language].schedule}</a>
        </section>
      </div>
    </>
  );
};

export default Piano; 