export interface ShowcaseWorkItem {
  title: string;
  summary: string;
  tags: string[];
  image: string;
  link?: string;
}

export const SHOWCASE_WORKS: ShowcaseWorkItem[] = [
  {
    title: "업무 자동화 실험실",
    summary: "메일, 보고서, 문서 작성처럼 반복되는 업무를 자동화한 사례들입니다.",
    tags: ["자동화", "실무", "생산성"],
    image: "/images/business.png",
  },
  {
    title: "PromptBlocks",
    summary: "프롬프트를 13개 구조 블록으로 분해하고 다시 조립해, 팀 단위로 재현 가능한 결과를 만드는 프롬프트 워크스페이스입니다.",
    tags: ["프롬프트", "블록", "워크스페이스"],
    image: "/images/prompt.png",
    link: "https://promptblocks.dmssolution.co.kr/",
  },
  {
    title: "3D 제품 설계 및 구조 검토",
    summary: "20개 이상의 하드웨어 제품 개발과 상용화 경험을 바탕으로 아이디어를 실제 검토 가능한 구조와 시각화 자료로 바꿉니다.",
    tags: ["3D", "설계", "제조"],
    image: "/images/3D.png",
  },
  {
    title: "실무형 AI 교육 프로그램 설계",
    summary: "처음 배우는 사람도 바로 써볼 수 있도록 실습 중심 커리큘럼과 예제를 설계했습니다.",
    tags: ["교육", "AI", "워크숍"],
    image: "/images/AIauto.png",
    link: "/works/ai-education",
  },
  {
    title: "꿈꾸는 카메라 프로젝트",
    summary: "사진, AI, 글, 음악을 연결해 기술을 쉽게 풀어내는 AI 교육 프로그램 기획·개발 사례입니다.",
    tags: ["사진", "AI", "콘텐츠"],
    image: "/images/dream.png",
    link: "https://storylens.dmssolution.co.kr/",
  },
  {
    title: "OpenClaw",
    summary: "OpenClaw를 어디에 붙이고, 어떻게 쓰고, 어떤 식으로 운영하면 좋은지 설치부터 스킬, 메모리, 자동화까지 실전 중심으로 정리하는 학습 공간입니다.",
    tags: ["OpenClaw", "실전 가이드", "AI 비서"],
    image: "/images/openclaw2.png",
    link: "/blog/series/openclaw-room",
  },
];
