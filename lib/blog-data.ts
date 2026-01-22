export interface BlogPost {
  slug: string;
  chapter: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface BlogSeries {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  color: string;
  tags: string[];
  posts: BlogPost[];
}

export const BLOG_SERIES: Record<string, BlogSeries> = {
  "future-arts": {
    id: "future-arts",
    title: "Future Arts",
    subtitle: "AI & AESTHETICS",
    description: "기계의 눈으로 본 세상, 알고리즘이 빚어낸 건축, 그리고 합성된 시네마. AI 시대의 예술과 미학을 탐구합니다.",
    coverImage: "/images/series/future_arts.png",
    color: "purple",
    tags: ["AI Art", "Cinema", "Architecture"],
    posts: [
      {
        slug: "ai-vision-aesthetics",
        chapter: "01",
        title: "AI가 보는 세상: 컴퓨터 비전의 미학",
        excerpt: "기계의 눈은 인간이 놓치는 스펙트럼을 본다. 그 차가운 시선 속에 숨겨진 새로운 아름다움.",
        date: "2026. 01. 01",
        readTime: "25 min"
      },
      {
        slug: "generative-architecture",
        chapter: "02",
        title: "공간을 연산하다: 생성형 건축의 미학",
        excerpt: "건축가는 더 이상 벽돌을 쌓지 않는다. 알고리즘을 통해 수만 개의 가능성을 지휘할 뿐이다.",
        date: "2026. 01. 05",
        readTime: "35 min"
      },
      {
        slug: "synthetic-cinema",
        chapter: "03",
        title: "프롬프트로 찍는 영화: 합성 시네마의 시대",
        excerpt: "카메라 없는 영화, 배우 없는 연기. AI는 헐리우드의 스튜디오를 클라우드로 옮기고 있다.",
        date: "2026. 01. 06",
        readTime: "42 min"
      },
      {
        slug: "ai-photography-essay",
        chapter: "04",
        title: "AI 시대의 사진 예술이란?",
        excerpt: "생성형 AI가 만드는 이미지와 인간이 포착하는 순간의 차이. 기술이 발전할수록 우리는 무엇을 기록해야 하는가.",
        date: "2026. 01. 04",
        readTime: "5 min"
      }
    ]
  },
  "homo-technicus": {
    id: "homo-technicus",
    title: "Homo Technicus",
    subtitle: "HUMAN & TECH",
    description: "기술적 포스트휴머니즘. 디지털 페르소나와 이식된 기억. 기술과 결합하여 진화하는 인류의 철학적 질문들.",
    coverImage: "/images/series/homo_technicus.png",
    color: "rose",
    tags: ["Philosophy", "Identity", "Memory"],
    posts: [
      {
        slug: "digital-persona",
        chapter: "01",
        title: "디지털 페르소나: 가상 인플루언서",
        excerpt: "가짜가 진짜보다 더 진짜 같을 때, 우리는 '자아'를 어떻게 정의해야 하는가?",
        date: "2026. 01. 02",
        readTime: "30 min"
      },
      {
        slug: "artificial-memory",
        chapter: "02",
        title: "실재하지 않는 기억: 노스탤지어",
        excerpt: "우리는 경험한 적 없는 과거를 그리워할 수 있는가? 합성된 기억과 감정 해킹.",
        date: "2026. 01. 03",
        readTime: "28 min"
      },
      {
        slug: "post-humanism",
        chapter: "03",
        title: "호모 엑스 마키나: 기술적 포스트휴머니즘",
        excerpt: "인간은 과정이다. 우리는 생물학적 진화의 바통을 기술적 진화에게 넘겨주고 있다.",
        date: "2026. 01. 08",
        readTime: "60 min"
      }
    ]
  },
  "agentic-era": {
    id: "agentic-era",
    title: "Agentic Era",
    subtitle: "AUTONOMY & CODE",
    description: "도구를 넘어 동료가 된 AI. 자율 에이전트와 자동화가 바꾸는 일의 미래, 그리고 창작의 민주화.",
    coverImage: "/images/series/agentic_era.png",
    color: "teal",
    tags: ["Agents", "Automation", "N8N"],
    posts: [
      {
        slug: "n8n-masterclass",
        chapter: "01",
        title: "N8N 워크플로우 100% 활용하기",
        excerpt: "반복되는 마케팅 업무를 자동화하는 실전 가이드. 웹훅 연동부터 데이터 처리까지.",
        date: "2024. 05. 18",
        readTime: "8 min"
      },
      {
        slug: "creativity-democratization",
        chapter: "02",
        title: "창작의 민주화인가, 예술의 종말인가?",
        excerpt: "모두가 예술가가 될 수 있는 시대는, 역설적으로 아무도 예술가가 될 수 없는 시대일지도 모른다.",
        date: "2026. 01. 04",
        readTime: "25 min"
      },
      {
        slug: "autonomous-agents",
        chapter: "03",
        title: "도구를 넘어 동료로: AI 에이전트의 부상",
        excerpt: "AI는 더 이상 질문에 답하는 것에 만족하지 않는다. 스스로 목표를 설정하고 창조한다.",
        date: "2026. 01. 07",
        readTime: "50 min"
      }
    ]
  },
  "ai-tech-trends": {
    id: "ai-tech-trends",
    title: "AI Tech Trends",
    subtitle: "LATEST NEWS",
    description: "매일 쏟아지는 AI 기술 뉴스. 핵심만 요약하여 전해드립니다. RAG부터 멀티모달 모델까지.",
    coverImage: "/images/series/ai_tech_trends.png",
    color: "blue",
    tags: ["Retrospective", "News", "Insight"],
    posts: [
        {
            slug: "ai-tech-trends",
            chapter: "01",
            title: "2026 AI 트렌드 리포트: 멀티 에이전트 시스템의 도래",
            excerpt: "단일 모델의 시대는 끝났다. 이제 AI 팀(Team)이 일하는 방식이 온다. AutoGen과 Swarm으로 보는 미래.",
            date: "2026. 01. 22",
            readTime: "10 min"
        },
         {
            slug: "ai-survival-2025",
            chapter: "02",
            title: "청구서가 도착했다: 2025 AI 생존기",
            excerpt: "DeepSeek 쇼크, 온디바이스 AI, 그리고 바이브 코딩. 2025년 AI 시장의 명암과 2026년의 전망.",
            date: "2026. 01. 22",
            readTime: "50 min"
        },
        {
            slug: "ai-hardware-revolution",
            chapter: "03",
            title: "AI-하드웨어 혁명: 전력의 역설과 신칩의 도래",
            excerpt: "더 똑똑해질수록 더 배고파진다. NPU, 퓨전 칩, 3D 나노칩으로 보는 에너지 효율의 혁명.",
            date: "2026. 01. 22",
            readTime: "35 min"
        }
    ]
  },
  "today-me": {
    id: "today-me",
    title: "Today's Me",
    subtitle: "DAILY ESSAY",
    description: "나의 하루가 곧 나의 미래가 된다. 아침의 물 한 잔부터 잠들기 전의 회고까지, 매일을 채우는 엔지니어의 작지만 단단한 루틴에 대하여.",
    coverImage: "/images/series/today_me.png",
    color: "emerald",
    tags: ["Essay", "Growth", "Routine"],
    posts: [
         {
            slug: "today-me",
            chapter: "01",
            title: "에필로그. 매일을 채우는 작은 시작",
            excerpt: "나의 하루가 곧 나의 미래가 된다. 아침의 물 한 잔부터 잠들기 전의 회고까지.",
            date: "2026. 01. 22",
            readTime: "5 min"
        }
    ]
  },
  "ai-fantasy-life": {
    id: "ai-fantasy-life",
    title: "AI Fantasy Life",
    subtitle: "VIRTUAL FICTION",
    description: "현실과 가상의 경계가 무너진 세상. AI와 함께 써 내려가는 몽환적이고 기묘한 이야기.",
    coverImage: "/images/series/ai_fantasy.png",
    color: "pink",
    tags: ["Fiction", "Story", "Dream"],
    posts: [
        {
            slug: "ai-fantasy-life",
            chapter: "01",
            title: "이진법으로 꾸는 꿈: 데이터 요정의 도서관",
            excerpt: "삭제된 기억들이 모이는 클라우드 서버 섹터 9. 그곳에서 발견한 0바이트의 꿈 파일.",
            date: "2026. 01. 22",
            readTime: "15 min"
        }
    ]
  }
};
