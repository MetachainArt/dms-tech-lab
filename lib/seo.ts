export const SITE_CONFIG = {
  name: "DMS.Labs",
  title: "DMS.Labs | 자동화 · 설계 · 교육",
  description:
    "광통신 트레이닝 전문가이자 AX 전문가. 광통신 하드웨어·FTTx 현장 경험을 바탕으로 AI 자동화, 3D 설계, 실무형 교육을 리도만의 방식으로 연결합니다.",
  url: "https://dmssolution.co.kr",
  locale: "ko_KR",
  type: "website",
  keywords: [
    "DMS.Labs",
    "DMS Labs",
    "리도",
    "Reedo",
    "AI",
    "자동화",
    "광통신",
    "광통신 트레이닝",
    "광통신 교육",
    "AX",
    "AX 전문가",
    "AI 트랜스포메이션",
    "FTTx",
    "하드웨어 개발",
    "3D 설계",
    "3D 모델링",
    "광통신 장비 수출입",
    "무역대행",
    "중동 동남아 유럽 무역",
    "N8N",
    "워크플로우 자동화",
    "웹GL",
    "프롬프트 엔지니어링",
    "실무형 교육",
  ],
  author: {
    name: "DMS.Labs",
    url: "https://dmssolution.co.kr",
  },
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com/@reedoinvest",
    kakao: "https://open.kakao.com/o/sSPHn33g",
  },
  og: {
    title: "DMS.Labs | 자동화 · 설계 · 교육",
    description:
      "광통신 트레이닝 전문가이자 AX 전문가. 광통신 하드웨어·FTTx 현장 경험을 바탕으로 AI 자동화, 3D 설계, 실무형 교육을 리도만의 방식으로 연결합니다.",
    image:
      "https://dmssolution.co.kr/images/a21.webp",
    alt: "DMS.Labs - 자동화 · 설계 · 교육",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMS.Labs | 자동화 · 설계 · 교육",
    description:
      "복잡한 일은 줄이고, 필요한 건 직접 만듭니다.",
    image:
      "https://dmssolution.co.kr/images/a21.webp",
    creator: "@reedoinvest",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
