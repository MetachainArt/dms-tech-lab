export interface ShowcaseWorkItem {
  title: string;
  summary: string;
  tags: string[];
  image: string;
  link?: string;
}

export const SHOWCASE_WORKS: ShowcaseWorkItem[] = [
  {
    title: "Optical Network Training",
    summary: "FTTx architecture, optical power budget and OTDR fault finding. A hands-on training track written in English for engineers who need to make their own calls in the field.",
    tags: ["FTTx", "Optical Network", "Field Training"],
    image: "/images/Service/real_automation_server.png",
    link: "/fttx-training",
  },
  {
    title: "AX 전환 설계",
    summary: "도구를 붙이는 자동화가 아니라 업무 흐름 전체를 AI 기준으로 다시 설계하는 과정입니다. 업무 지도, 핸드오프, 90일 측정까지 단계별로 정리했습니다.",
    tags: ["AX", "업무 재설계", "핸드오프"],
    image: "/images/Service/real_modern_workspace.png",
    link: "/works/ax",
  },
  {
    title: "업무 자동화 실험실",
    summary: "메일, 보고서, 문서 작성처럼 반복되는 업무를 자동화한 사례들입니다.",
    tags: ["자동화", "실무", "생산성"],
    image: "/images/a1.webp",
    link: "/works/automation",
  },
  {
    title: "AI 스킬 및 구축",
    summary: "ComfyUI API 연동, 이미지 생성 파이프라인 구축 등 AI 스킬을 실전에서 직접 구현하고 기록한 공간입니다.",
    tags: ["ComfyUI", "AI", "파이프라인"],
    image: "/images/a6.webp",
    link: "/works/ai-skill",
  },
  {
    title: "실무형 AI 교육 프로그램 설계",
    summary: "처음 배우는 사람도 바로 써볼 수 있도록 실습 중심 커리큘럼과 예제를 설계했습니다.",
    tags: ["교육", "AI", "워크숍"],
    image: "/images/a8.webp",
    link: "/works/ai-education",
  },
  {
    title: "꿈꾸는 카메라 프로젝트",
    summary: "사진, AI, 글, 음악을 연결해 기술을 쉽게 풀어내는 AI 교육 프로그램 기획·개발 사례입니다.",
    tags: ["사진", "AI", "콘텐츠"],
    image: "/images/a13.webp",
    link: "https://storylens.dmssolution.co.kr/",
  },
  {
    title: "OpenClaw",
    summary: "OpenClaw를 어디에 붙이고, 어떻게 쓰고, 어떤 식으로 운영하면 좋은지 설치부터 스킬, 메모리, 자동화까지 실전 중심으로 정리하는 학습 공간입니다.",
    tags: ["OpenClaw", "실전 가이드", "AI 비서"],
    image: "/images/a12.webp",
    link: "/blog/series/openclaw-room",
  },
];
