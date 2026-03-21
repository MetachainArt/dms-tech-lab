export const SITE_CONFIG = {
  name: "Reedo",
  title: "리도 | 자동화 · 설계 · 교육",
  description:
    "복잡한 일은 줄이고, 필요한 건 직접 만듭니다. 광통신 하드웨어 경험을 바탕으로 AI 자동화, 3D 설계, 실무형 교육을 리도만의 방식으로 연결합니다.",
  url: "https://dmssolution.co.kr",
  locale: "ko_KR",
  type: "website",
  keywords: [
    "리도",
    "Reedo",
    "AI",
    "자동화",
    "광통신",
    "FTTx",
    "하드웨어 개발",
    "3D 설계",
    "N8N",
    "워크플로우 자동화",
    "웹GL",
    "프롬프트 엔지니어링",
    "실무형 교육",
  ],
  author: {
    name: "Reedo",
    url: "https://dmssolution.co.kr",
  },
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com/@reedoinvest",
    kakao: "https://open.kakao.com/o/sSPHn33g",
  },
  og: {
    title: "리도 | 자동화 · 설계 · 교육",
    description:
      "복잡한 일은 줄이고, 필요한 건 직접 만듭니다. 광통신 하드웨어 경험을 바탕으로 AI 자동화, 3D 설계, 실무형 교육을 리도만의 방식으로 연결합니다.",
    image:
      "https://dmssolution.co.kr/images/a21.webp",
    alt: "리도 - 자동화 · 설계 · 교육",
  },
  twitter: {
    card: "summary_large_image",
    title: "리도 | 자동화 · 설계 · 교육",
    description:
      "복잡한 일은 줄이고, 필요한 건 직접 만듭니다.",
    image:
      "https://dmssolution.co.kr/images/a21.webp",
    creator: "@reedoinvest",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
