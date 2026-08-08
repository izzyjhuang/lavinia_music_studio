// Per-suburb landing page content.
//
// These exist to rank for "piano lessons <town>" style queries. Google treats
// near-identical pages with the town name swapped as doorway pages and can
// penalise the whole site for them, so every page below carries genuinely
// different material — the actual schools, the actual neighbouring towns, the
// actual travel situation. Only the three highest-opportunity markets are
// covered. Adding a fourth means writing real content for it, not copying.

export const LOCATIONS = {
  glenview: {
    slug: 'music-lessons-glenview',
    name: { en: 'Glenview', tw: 'Glenview' },
    title: {
      en: 'Music Lessons in Glenview, IL — Piano, Violin & Viola',
      tw: 'Glenview 音樂課程 — 鋼琴、小提琴與中提琴',
    },
    description: {
      en: 'Private piano, violin, and viola lessons for Glenview families. Yale- and Northwestern-trained teacher, 15 minutes from central Glenview, with a free trial lesson.',
      tw: 'Glenview 地區私人鋼琴、小提琴與中提琴課程。耶魯與西北大學訓練的教師，距離 Glenview 市中心約 15 分鐘，並提供免費體驗課。',
    },
    h1: {
      en: 'Piano, Violin & Viola Lessons in Glenview, IL',
      tw: 'Glenview 鋼琴、小提琴與中提琴課程',
    },
    intro: {
      en: 'Glenview is the largest community on the North Shore and one of the most musically active — but families here often end up commuting to Winnetka or Northfield for serious private instruction. The studio sits just north in Northbrook, about a fifteen-minute drive from central Glenview, which makes a weekly lesson slot practical on a school night.',
      tw: 'Glenview 是北岸人口最多的社區之一，音樂風氣濃厚，但許多家庭為了尋找專業的一對一教學，往往需要前往 Winnetka 或 Northfield。本教室位於北鄰的 Northbrook，距離 Glenview 市中心約十五分鐘車程，平日晚上安排每週課程相當方便。',
    },
    schools: {
      en: 'Students come from the Glenview District 34 schools and Glenbrook South High School. Private study is the norm in these programs — the Glenbrook and New Trier orchestras draw heavily on students who take weekly lessons outside school — and lesson plans are built around district concert and audition dates rather than against them.',
      tw: '學生多來自 Glenview 34 學區以及 Glenbrook South 高中。在這些學校的音樂班中，課外一對一學習相當普遍——Glenbrook 與 New Trier 管弦樂團的學生大多在校外持續進修——課程規劃會配合學區的音樂會與甄選時程。',
    },
    strings: {
      en: 'Violin and viola are where Glenview families have the fewest options. Most local studios list strings but staff them with piano teachers who also play; almost none have a dedicated violist. Students here have placed in ILMEA District and All-State ensembles, including as Principal Violist.',
      tw: 'Glenview 家庭在小提琴與中提琴方面的選擇最少。多數本地教室雖然列出弦樂課程，實際授課者多為兼任的鋼琴老師，幾乎沒有專任中提琴教師。本教室學生曾入選 ILMEA 地區與全州管弦樂團，並曾擔任中提琴首席。',
    },
    nearby: { en: ['Northbrook', 'Northfield', 'Wilmette', 'Golf', 'Morton Grove'], tw: ['Northbrook', 'Northfield', 'Wilmette', 'Golf', 'Morton Grove'] },
  },

  northbrook: {
    slug: 'music-lessons-northbrook',
    name: { en: 'Northbrook', tw: 'Northbrook' },
    title: {
      en: 'Music Lessons in Northbrook, IL — Piano, Violin & Viola',
      tw: 'Northbrook 音樂課程 — 鋼琴、小提琴與中提琴',
    },
    description: {
      en: 'Private piano, violin, and viola lessons in Northbrook, IL. Home studio, Yale and Northwestern trained, over 20 years teaching. Free trial lesson available.',
      tw: 'Northbrook 私人鋼琴、小提琴與中提琴課程。教室位於 Northbrook，教師畢業於耶魯與西北大學，擁有二十年以上教學經驗，提供免費體驗課。',
    },
    h1: {
      en: 'Piano, Violin & Viola Lessons in Northbrook, IL',
      tw: 'Northbrook 鋼琴、小提琴與中提琴課程',
    },
    intro: {
      en: 'The studio is based in Northbrook, so this is the shortest drive of anywhere on the North Shore — and the easiest place to fit a lesson between school and dinner. Northbrook families also get first access to the afternoon slots that fill earliest in the fall, and to back-to-back times when two siblings study different instruments.',
      tw: '教室即設於 Northbrook，因此本地家庭的車程最短，也最容易在放學與晚餐之間安排課程。Northbrook 的學生可優先選擇秋季最早額滿的下午時段，若家中兩位孩子學習不同樂器，也較容易安排連續時段。',
    },
    schools: {
      en: 'Students come from the Northbrook elementary districts and Glenbrook North High School. Northbrook also has the most competition for piano instruction on the North Shore, with two national franchises and several established schools in town — what a small independent studio offers instead is the same teacher every week for years, rather than whoever is on staff this semester.',
      tw: '學生來自 Northbrook 各小學學區以及 Glenbrook North 高中。Northbrook 的鋼琴教學競爭也是北岸最激烈的，鎮上有兩家全國連鎖品牌與數家音樂學校——小型獨立教室的差別在於，多年來由同一位老師持續授課，而非每學期更換師資。',
    },
    strings: {
      en: 'For violin and viola the picture is the opposite: there is no dedicated string studio in Northbrook. Lessons cover everything from a first-year Suzuki start through advanced audition and competition repertoire.',
      tw: '小提琴與中提琴的情況則相反：Northbrook 並沒有專門的弦樂教室。課程涵蓋從鈴木教學法的初學階段，到進階的甄選與比賽曲目。',
    },
    nearby: { en: ['Glenview', 'Northfield', 'Deerfield', 'Glencoe', 'Techny'], tw: ['Glenview', 'Northfield', 'Deerfield', 'Glencoe', 'Techny'] },
  },

  wilmette: {
    slug: 'music-lessons-wilmette',
    name: { en: 'Wilmette', tw: 'Wilmette' },
    title: {
      en: 'Music Lessons in Wilmette, IL — Piano, Violin & Viola',
      tw: 'Wilmette 音樂課程 — 鋼琴、小提琴與中提琴',
    },
    description: {
      en: 'Private piano, violin, and viola lessons for Wilmette families. New Trier audition and ILMEA preparation, Yale and Northwestern trained teacher, free trial lesson.',
      tw: 'Wilmette 地區私人鋼琴、小提琴與中提琴課程。提供 New Trier 甄選與 ILMEA 備賽指導，教師畢業於耶魯與西北大學，並提供免費體驗課。',
    },
    h1: {
      en: 'Piano, Violin & Viola Lessons in Wilmette, IL',
      tw: 'Wilmette 鋼琴、小提琴與中提琴課程',
    },
    intro: {
      en: 'Wilmette has no dedicated private music studio of its own, so families here generally choose between a large institution in Evanston or Winnetka and an independent teacher further west. The studio is about twenty minutes away in Northbrook, and Wilmette students tend to book the later afternoon and Saturday morning slots.',
      tw: 'Wilmette 本地並沒有專門的私人音樂教室，家庭通常需要在 Evanston 或 Winnetka 的大型機構與較西邊的獨立教師之間選擇。本教室位於 Northbrook，車程約二十分鐘，Wilmette 的學生多半選擇下午較晚或週六上午的時段。',
    },
    schools: {
      en: 'Wilmette students attend the District 39 schools and go on to New Trier, whose music program enrolls roughly 1,200 students across five orchestras and multiple wind ensembles. Around 80% of New Trier wind ensemble players study privately, and placement there is competitive — lessons are structured around that audition calendar for students who want it.',
      tw: 'Wilmette 學生就讀 39 學區，之後多升學至 New Trier 高中。該校音樂班約有 1,200 名學生，設有五個管弦樂團與多個管樂團，管樂團學生中約有 80% 在校外接受一對一指導，入選競爭激烈。有意參加甄選的學生，課程會依甄選時程規劃。',
    },
    strings: {
      en: 'Strings are the strongest reason to make the drive. Violin and viola are taught by a violist, not by a pianist covering strings — and viola in particular is chronically short-staffed across every North Shore studio, while school orchestras are always looking for players.',
      tw: '弦樂是值得前來的主要原因。小提琴與中提琴由中提琴專業教師授課，而非由鋼琴老師兼任；中提琴師資在北岸各教室普遍短缺，而學校管弦樂團則長期需要中提琴手。',
    },
    nearby: { en: ['Kenilworth', 'Winnetka', 'Glenview', 'Evanston', 'Skokie'], tw: ['Kenilworth', 'Winnetka', 'Glenview', 'Evanston', 'Skokie'] },
  },
};

export const LOCATION_KEYS = Object.keys(LOCATIONS);
export const LOCATION_ROUTES = LOCATION_KEYS.map((k) => `/${LOCATIONS[k].slug}`);

export function locationBySlug(slug) {
  const key = LOCATION_KEYS.find((k) => LOCATIONS[k].slug === slug.replace(/^\//, ''));
  return key ? LOCATIONS[key] : null;
}
