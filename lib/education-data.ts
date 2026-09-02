
export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration?: string; // e.g., "10 min read"
}

export interface EducationChapter {
  id: string; // "chapter-01"
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface EducationTrack {
  id: string; // "gen-ai"
  title: string;
  description: string;
  image: string;
  backgroundImage?: string;
  color: string;
  vol: string;
  tags: string[];
  chapters: EducationChapter[];
  externalLink?: string;
  /** true 면 목록·사이트맵에서 감춘다. 직접 URL 로는 계속 접근할 수 있다. */
  hidden?: boolean;
}

export const EDUCATION_TRACKS: Record<string, EducationTrack> = {
  "gen-ai": {
    id: "gen-ai",
    title: "Generative AI",
    description: "Midjourney, Sora2, GPT 등 최신 생성형 AI 도구의 심화 활용법. 상상을 압도적인 퀄리티의 비주얼과 영상으로 구현하는 프로페셔널 가이드.",
    image: "/icons/3d-curriculum-ai.png",
    color: "blue",
    vol: "01",
    tags: ["Midjourney", "Sora2", "GPT"],
    chapters: [
      {
        id: "chapter-01",
        title: "생성형 AI 기초와 작법",
        description: "AI 아트의 기본 원리와 프롬프트 엔지니어링 기초",
        lessons: [
          { id: "intro-generative-ai", title: "생성형 AI가 바꾸는 창작의 미래", description: "왜 지금 생성형 AI인가?", duration: "5 min" },
          { id: "prompt-engineering-basics", title: "프롬프트 엔지니어링 핵심 3요소", description: "원하는 이미지를 얻기 위한 언어 구조", duration: "10 min" }
        ]
      },
      {
        id: "chapter-02",
        title: "Midjourney 마스터 클래스",
        description: "압도적인 퀄리티의 이미지를 생성하는 미드저니 심화 기법",
        lessons: [
          { id: "midjourney-parameters", title: "파라미터 완벽 정복 (--s, --c, --w)", description: "스타일과 다양성을 제어하는 방법", duration: "15 min" },
          { id: "consistent-characters", title: "일관된 캐릭터 생성하기", description: "동일한 인물을 다양한 상황에 배치하는 법", duration: "20 min" }
        ]
      }
    ]
  },
  "vibe-coding": {
    id: "vibe-coding",
    title: "Vibe Coding",
    description: "Cursor, Bolt, V0 등 AI 코딩 툴을 마스터하여 아이디어를 즉시 배포 가능한 웹 서비스로 전환. 코딩 지식이 없어도 감각만으로 개발하는 로우코드/노코드 혁명.",
    image: "/icons/3d-curriculum-code.png",
    color: "purple",
    vol: "02",
    tags: ["Cursor", "Bolt", "V0"],
    chapters: [
      {
        id: "chapter-01",
        title: "AI 코딩 툴 셋업",
        description: "개발 환경 구축 없이 시작하는 모던 웹 개발",
        lessons: [
          { id: "cursor-setup", title: "Cursor 에디터 설치 및 설정", description: "VS Code보다 강력한 AI 에디터", duration: "5 min" },
          { id: "v0-ui-generation", title: "V0로 1분 만에 UI 디자인하기", description: "텍스트로 리액트 컴포넌트 생성", duration: "10 min" }
        ]
      }
    ]
  },
  "automation": {
    id: "automation",
    hidden: true,
    title: "Openclaw",
    description: "THE AI THAT ACTUALLY DOES THINGS. 이메일, 캘린더, 브라우저까지 제어하는 개인 AI 어시스턴트. WhatsApp, Telegram 등 어떤 채팅 앱에서든 바로 사용 가능.",
    image: "/images/Service/openclaw-features.png",
    color: "rose",
    vol: "03",
    tags: ["OpenClaw", "AI Assistant", "Automation"],
    externalLink: "https://openclaw.dmssolution.co.kr/",
    chapters: [
      {
        id: "chapter-01",
        title: "OpenClaw 시작하기",
        description: "개인 AI 어시스턴트 설정 및 활용",
        lessons: [
          { id: "openclaw-basics", title: "OpenClaw 설치 및 설정", description: "원클릭 설치로 AI 어시스턴트 시작하기", duration: "10 min" }
        ]
      }
    ]
  },
  "optical-training": {
    id: "optical-training",
    title: "Optical Network Training",
    description: "From FTTx network architecture to field measurement and fault finding. A practical track built so that engineers new to the equipment can understand the principles and make their own judgement calls on site.",
    image: "/icons/3d-curriculum-hw.png",
    color: "blue",
    vol: "04",
    tags: ["FTTx", "광통신", "현장 실무"],
    chapters: [
      {
        id: "chapter-01",
        title: "FTTx Fundamentals and Field Judgement",
        description: "Network structure, power budget and OTDR measurement — the basics you use on site",
        lessons: [
          { id: "01-fttx-network-structure", title: "Reading an FTTx Network in One Picture", description: "The full path an optical signal travels, end to end", duration: "12 min" },
          { id: "02-pon-and-splitter", title: "PON and Optical Splitters", description: "How 32 homes share a single fiber strand", duration: "14 min" },
          { id: "03-optical-power-budget", title: "Optical Power Budget", description: "The calculation and the margin that keep a link alive", duration: "15 min" },
          { id: "04-otdr-fault-finding", title: "Finding Faults with an OTDR", description: "Reading the trace and locating the fault", duration: "16 min" }
        ]
      },
      {
        id: "chapter-02",
        title: "Cable, Splicing and Installation",
        description: "Fiber types, splice quality, connector hygiene and the installation habits that decide long-term loss",
        lessons: [
          { id: "01-singlemode-vs-multimode", title: "Single-mode or Multimode", description: "Choosing the right fiber, and what G.652 and G.657 actually mean", duration: "10 min" },
          { id: "02-fusion-splicing", title: "Fusion Splicing", description: "What actually makes a good splice, and what the loss estimate hides", duration: "12 min" },
          { id: "03-connectors-and-contamination", title: "Connectors and End-face Contamination", description: "The number one field fault, and the habit that prevents it", duration: "11 min" },
          { id: "04-bend-radius-and-slack", title: "Bend Radius, Slack and Enclosure Discipline", description: "Why light leaks at corners and how much slack to leave", duration: "11 min" },
          { id: "05-route-types-and-failure-modes", title: "Aerial, Duct and Direct-buried", description: "Route types and how each one fails over a decade", duration: "12 min" }
        ]
      },
      {
        id: "chapter-03",
        title: "Measurement and Acceptance",
        description: "Insertion loss, OTDR event tables, handover records — the measurements every later diagnosis is compared against",
        lessons: [
          { id: "01-insertion-loss-testing", title: "Insertion Loss Testing", description: "The measurement that decides acceptance, and why the reference method changes the answer", duration: "12 min" },
          { id: "02-reading-otdr-event-table", title: "Reading an OTDR Event Table", description: "Verifying automated results, and the artefacts that fool the software", duration: "13 min" },
          { id: "03-acceptance-testing", title: "Acceptance Testing", description: "What to record at handover and why it matters years later", duration: "12 min" },
          { id: "04-visual-fault-locator", title: "The Visual Fault Locator", description: "When a red laser beats an OTDR, and the safety rules that go with it", duration: "9 min" },
          { id: "05-test-documentation", title: "Documentation That Survives", description: "Why most fiber records become unusable, and the minimum that works", duration: "10 min" }
        ]
      },
      {
        id: "chapter-04",
        title: "Troubleshooting and Operations",
        description: "Triage order, intermittent faults, registration failures and emergency restoration",
        lessons: [
          { id: "01-fault-triage-order", title: "A Triage Order for Fiber Faults", description: "A fixed sequence that puts the cheap checks before the expensive ones", duration: "11 min" },
          { id: "02-intermittent-faults", title: "Intermittent Faults", description: "Temperature, water and movement — catching what is gone when you arrive", duration: "12 min" },
          { id: "03-onu-will-not-register", title: "The ONU Will Not Register", description: "Separating optical faults from provisioning faults, in order", duration: "11 min" },
          { id: "04-rogue-onu", title: "Rogue ONU", description: "When one unit breaks the whole PON, and how to find it", duration: "12 min" },
          { id: "05-emergency-restoration", title: "Emergency Restoration", description: "Getting service back at night without creating a future problem", duration: "12 min" }
        ]
      },
      {
        id: "chapter-05",
        title: "PON Technology and Plant Strategy",
        description: "Wavelength plans, coexistence, capacity decisions and what higher rates demand from the plant",
        lessons: [
          { id: "01-gpon-xgspon-wavelength-plan", title: "GPON, XGS-PON and the Wavelength Plan", description: "How generations share one fiber, and what blocks an upgrade", duration: "12 min" },
          { id: "02-coexistence-on-existing-plant", title: "Coexistence on Existing Plant", description: "Migrating subscribers without a forklift replacement", duration: "12 min" },
          { id: "03-capacity-planning", title: "Capacity Planning", description: "Split ratio as a business decision, not just an optical one", duration: "11 min" },
          { id: "04-in-building-distribution", title: "In-building Distribution", description: "Why the last thirty metres cost more than the last three kilometres", duration: "11 min" },
          { id: "05-what-changes-with-higher-rate-pon", title: "What Changes as Rates Rise", description: "Which decisions become irreversible, and what to do now", duration: "11 min" }
        ]
      }
    ]
  }
};
