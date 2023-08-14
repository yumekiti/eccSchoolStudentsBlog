// <Route path="/" element={<List path="content" />} />
// <Route path="/event" element={<List path="event" />} />
// <Route path="/question" element={<List path="question" />} />
// <Route path="/recruitment" element={<List path="recruitment" />} />
// <Route path="/club" element={<List path="club" />} />

const navigation = [
  {
    emoji: '🏠',
    text: 'ホーム',
    path: '/',
    bold: true,
  },
  {
    text: 'イベント',
    emoji: '🎉',
    path: '/event',
    bold: true,
  },
  {
    text: '質問',
    emoji: '❓',
    path: '/question',
    bold: true,
  },
  {
    text: '募集',
    emoji: '📢',
    path: '/recruitment',
    bold: true,
  },
  {
    text: '部活',
    emoji: '🏀',
    path: '/club',
    bold: true,
  },
  {
    text: 'お問い合わせ',
    emoji: '📧',
    path: '/contact',
    bold: true,
  },
];

const categories = [
  {
    emoji: '🌐',
    text: 'IT',
    path: '/it',
    bold: false,
  },
  {
    emoji: '🎮',
    text: 'Game',
    path: '/game',
    bold: false,
  },
  {
    text: 'Web',
    emoji: '🖥️',
    path: '/web',
    bold: false,
  },
];

const links = [
  {
    text: '公式サイト',
    emoji: '🏫',
    path: 'https://comp.ecc.ac.jp/',
    bold: false,
  },
  {
    text: 'お知らせ',
    emoji: '📢',
    path: 'https://comp-app.ecc-sv.com/app/',
    bold: false,
  },
  {
    text: 'E-Connnect',
    emoji: '📚',
    path: 'https://ecc.learning-ware.jp/',
    bold: false,
  },
  {
    text: 'ECC-ポータル',
    emoji: '📝',
    path: 'https://stork.ecc.ac.jp/',
    bold: false,
  },
];

export { navigation, categories, links };
