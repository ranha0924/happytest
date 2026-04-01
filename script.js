// === DATA ===
const questions = [
  {
    emoji: "🌅",
    text: "완벽한 주말 아침이 찾아왔다. 당신의 선택은?",
    options: [
      { text: "좋아하는 카페에서 혼자 조용히 커피 한 잔", type: "a" },
      { text: "친구들과 브런치 약속을 잡는다", type: "b" },
      { text: "미뤄뒀던 프로젝트를 드디어 시작한다", type: "c" },
      { text: "아무 계획 없이 발길 닿는 대로 산책한다", type: "d" }
    ]
  },
  {
    emoji: "🎁",
    text: "생일 선물로 가장 갖고 싶은 것은?",
    options: [
      { text: "예쁜 소품이나 취향 저격 굿즈", type: "a" },
      { text: "소중한 사람과의 특별한 시간", type: "b" },
      { text: "새로운 기술을 배울 수 있는 클래스 수강권", type: "c" },
      { text: "혼자만의 자유로운 여행 티켓", type: "d" }
    ]
  },
  {
    emoji: "😤",
    text: "스트레스를 받았을 때 당신의 해소법은?",
    options: [
      { text: "맛있는 음식을 먹거나 좋아하는 노래를 듣는다", type: "a" },
      { text: "친한 친구에게 전화해서 수다를 떤다", type: "b" },
      { text: "운동이나 작업에 몰두해서 잊는다", type: "c" },
      { text: "조용한 곳에서 혼자 생각을 정리한다", type: "d" }
    ]
  },
  {
    emoji: "📱",
    text: "SNS에서 가장 오래 보는 콘텐츠는?",
    options: [
      { text: "맛집, 카페, 인테리어 같은 감성 콘텐츠", type: "a" },
      { text: "친구들의 일상이나 커뮤니티 이야기", type: "b" },
      { text: "자기계발, 공부법, 생산성 관련 영상", type: "c" },
      { text: "철학적 글귀, 에세이, 다큐멘터리", type: "d" }
    ]
  },
  {
    emoji: "🏆",
    text: "\"잘했다\"는 말을 들었을 때 기분이 가장 좋은 상황은?",
    options: [
      { text: "내가 꾸민 공간이나 스타일을 칭찬받을 때", type: "a" },
      { text: "누군가를 도와줘서 고맙다는 말을 들을 때", type: "b" },
      { text: "열심히 노력한 결과물을 인정받을 때", type: "c" },
      { text: "나만의 독특한 시각이 신선하다는 말을 들을 때", type: "d" }
    ]
  },
  {
    emoji: "✈️",
    text: "여행을 간다면 어떤 스타일?",
    options: [
      { text: "예쁜 숙소에서 느긋하게 쉬는 힐링 여행", type: "a" },
      { text: "현지 사람들과 어울리며 문화를 체험하는 여행", type: "b" },
      { text: "계획표를 짜서 관광지를 빠짐없이 도는 여행", type: "c" },
      { text: "지도 없이 골목골목 탐험하는 자유 여행", type: "d" }
    ]
  },
  {
    emoji: "💭",
    text: "잠들기 전에 가장 자주 하는 생각은?",
    options: [
      { text: "오늘 하루 중 좋았던 작은 순간들", type: "a" },
      { text: "내일 만날 사람들과 할 이야기", type: "b" },
      { text: "내일 해야 할 일과 목표 정리", type: "c" },
      { text: "나는 어떤 사람이 되고 싶은가", type: "d" }
    ]
  },
  {
    emoji: "🎵",
    text: "지금 당장 듣고 싶은 음악은?",
    options: [
      { text: "기분 좋아지는 따뜻한 감성 팝", type: "a" },
      { text: "친구와 함께 부를 수 있는 신나는 곡", type: "b" },
      { text: "집중력을 높여주는 음악이나 로파이", type: "c" },
      { text: "가사가 깊은 인디 음악이나 재즈", type: "d" }
    ]
  },
  {
    emoji: "🌟",
    text: "10년 후 나의 모습으로 가장 이상적인 것은?",
    options: [
      { text: "매일매일이 소소하지만 확실하게 행복한 사람", type: "a" },
      { text: "사랑하는 사람들에게 둘러싸인 따뜻한 사람", type: "b" },
      { text: "자기 분야에서 전문가로 인정받는 사람", type: "c" },
      { text: "자유롭게 자기만의 철학대로 사는 사람", type: "d" }
    ]
  },
  {
    emoji: "🧩",
    text: "행복이란 단어를 들으면 가장 먼저 떠오르는 것은?",
    options: [
      { text: "따뜻한 햇살, 좋은 향기, 포근한 이불", type: "a" },
      { text: "웃고 있는 사람들의 얼굴", type: "b" },
      { text: "목표를 달성했을 때의 짜릿함", type: "c" },
      { text: "아무것도 하지 않아도 되는 평온함", type: "d" }
    ]
  }
];

const types = {
  a: {
    emoji: "☀️",
    label: "TYPE A",
    name: "소확행 수집가",
    subtitle: "일상 속 작은 행복을 발견하는 사람",
    desc: "당신은 거창한 것보다 일상 속 작은 순간에서 진짜 행복을 느끼는 사람이에요. 따뜻한 커피 한 잔, 예쁜 노을, 좋아하는 노래 한 곡 — 이런 소소한 것들이 당신의 하루를 채워줍니다. 감각이 섬세하고 자기만의 취향이 뚜렷해서, 주변을 아름답게 꾸미는 것만으로도 에너지를 얻죠. 행복을 멀리서 찾지 않고, 지금 이 순간을 즐길 줄 아는 당신은 이미 행복의 기술을 가진 사람입니다.",
    tags: ["#감성충만", "#취향존중", "#소소한일상", "#지금이순간"],
    tip: "하루에 하나씩 \"오늘의 소확행\"을 기록해보세요. 작은 것들이 쌓여 큰 행복이 됩니다. 감사일기를 써보는 것도 좋아요.",
    headerClass: "type-a"
  },
  b: {
    emoji: "🤝",
    label: "TYPE B",
    name: "관계의 연금술사",
    subtitle: "사람 사이에서 행복을 만드는 사람",
    desc: "당신에게 행복이란 곧 '사람'이에요. 사랑하는 사람들과 함께하는 시간, 누군가에게 도움을 줬을 때의 뿌듯함, 친구와의 깊은 대화 — 이런 관계 속에서 진짜 에너지를 얻습니다. 공감 능력이 뛰어나고, 주변 사람들의 감정에 민감하게 반응하죠. 당신이 있는 곳에는 늘 따뜻한 분위기가 만들어집니다. 다만 타인의 감정에 너무 몰입하면 지칠 수 있으니, 나를 위한 시간도 꼭 챙기세요.",
    tags: ["#사람이좋아", "#공감왕", "#따뜻한사람", "#함께하는행복"],
    tip: "소중한 사람에게 먼저 연락해보세요. 하지만 일주일에 하루는 '나만의 시간'을 만들어 나 자신과도 좋은 관계를 유지하세요.",
    headerClass: "type-b"
  },
  c: {
    emoji: "🔥",
    label: "TYPE C",
    name: "도전의 불꽃",
    subtitle: "성장하며 행복을 느끼는 사람",
    desc: "당신은 무언가에 도전하고, 성장하는 과정에서 가장 큰 행복을 느끼는 사람이에요. 목표를 세우고 하나씩 달성해나가는 그 과정이 곧 당신의 에너지원입니다. 끈기 있고 집중력이 높으며, \"더 나은 내가 되고 싶다\"는 열망이 항상 있죠. 이런 태도는 당신을 점점 더 멋진 사람으로 만들어줍니다. 다만 가끔은 결과에 집착하지 말고, 과정 자체를 즐기는 여유도 가져보세요.",
    tags: ["#성장러", "#목표지향", "#끈기왕", "#자기개발"],
    tip: "큰 목표 사이사이에 작은 보상을 넣어보세요. 성취감도 중요하지만, 쉬어가는 것도 성장의 일부입니다.",
    headerClass: "type-c"
  },
  d: {
    emoji: "🌊",
    label: "TYPE D",
    name: "내면의 철학자",
    subtitle: "의미를 찾으며 행복을 만드는 사람",
    desc: "당신은 삶의 의미와 자유 속에서 행복을 찾는 깊이 있는 사람이에요. 남들이 정해놓은 기준보다 자기만의 가치관을 중요하게 여기고, 조용한 사색 속에서 답을 찾아갑니다. 독립적이고 자유로운 영혼이라 틀에 박힌 것을 싫어하죠. 세상을 바라보는 시각이 독특하고, 깊은 대화를 좋아합니다. 혼자만의 시간이 곧 충전 시간이지만, 때로는 주변 사람들에게 마음을 여는 것도 중요해요.",
    tags: ["#자유영혼", "#깊은생각", "#독립적", "#의미추구"],
    tip: "생각을 글로 써보세요. 일기든 블로그든, 당신의 깊은 생각을 표현하는 것 자체가 행복을 만드는 과정이 됩니다.",
    headerClass: "type-d"
  }
};

// === STATE ===
let currentQ = 0;
let scores = { a: 0, b: 0, c: 0, d: 0 };

// === FUNCTIONS ===
function startQuiz() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('quiz').classList.add('active');
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQ];
  const card = document.getElementById('questionCard');

  // animate
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'cardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)';

  document.getElementById('counter').textContent =
    String(currentQ + 1).padStart(2, '0') + ' / 10';
  document.getElementById('progressBar').style.width =
    ((currentQ) / 10 * 100) + '%';
  document.getElementById('qEmoji').textContent = q.emoji;
  document.getElementById('qText').textContent = q.text;

  const labels = ['A', 'B', 'C', 'D'];
  const optionsHTML = q.options.map((opt, i) =>
    `<button class="option-btn" onclick="selectOption('${opt.type}', this)">
      <span class="option-label">${labels[i]}</span>${opt.text}
    </button>`
  ).join('');

  document.getElementById('options').innerHTML = optionsHTML;
}

function selectOption(type, btn) {
  // prevent double click
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.style.pointerEvents = 'none');

  btn.classList.add('selected');
  scores[type]++;

  setTimeout(() => {
    currentQ++;
    if (currentQ < 10) {
      showQuestion();
    } else {
      showResult();
    }
  }, 400);
}

function showResult() {
  document.getElementById('quiz').classList.remove('active');
  document.getElementById('result').classList.add('active');
  document.getElementById('progressBar').style.width = '100%';

  // find winner
  const maxScore = Math.max(...Object.values(scores));
  const winner = Object.keys(scores).find(k => scores[k] === maxScore);
  const t = types[winner];

  document.getElementById('resultHeader').className = 'result-header ' + t.headerClass;
  document.getElementById('resultEmoji').textContent = t.emoji;
  document.getElementById('resultLabel').textContent = t.label;
  document.getElementById('resultName').textContent = t.name;
  document.getElementById('resultSub').textContent = t.subtitle;
  document.getElementById('resultDesc').textContent = t.desc;
  document.getElementById('resultTip').textContent = t.tip;

  // tags
  document.getElementById('resultTags').innerHTML =
    t.tags.map(tag => `<span class="result-tag">${tag}</span>`).join('');

  // score bars
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const barNames = {
    a: '소확행 수집가',
    b: '관계의 연금술사',
    c: '도전의 불꽃',
    d: '내면의 철학자'
  };

  let barsHTML = '';
  for (const key of ['a', 'b', 'c', 'd']) {
    const pct = Math.round((scores[key] / total) * 100);
    barsHTML += `
      <div class="score-bar-item">
        <div class="score-bar-label">
          <span>${barNames[key]}</span>
          <span>${pct}%</span>
        </div>
        <div class="score-bar-track">
          <div class="score-bar-fill bar-${key}" id="bar-${key}"></div>
        </div>
      </div>`;
  }
  document.getElementById('scoreBars').innerHTML = barsHTML;

  // animate bars
  setTimeout(() => {
    for (const key of ['a', 'b', 'c', 'd']) {
      const pct = Math.round((scores[key] / total) * 100);
      document.getElementById('bar-' + key).style.width = pct + '%';
    }
  }, 200);
}

function retry() {
  currentQ = 0;
  scores = { a: 0, b: 0, c: 0, d: 0 };
  document.getElementById('result').classList.remove('active');
  document.getElementById('intro').classList.remove('hidden');
  document.getElementById('progressBar').style.width = '0%';
  window.scrollTo(0, 0);
}