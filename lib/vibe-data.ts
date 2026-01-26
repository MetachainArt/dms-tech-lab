
import { AppWindow, Briefcase, Calculator, Palette, Sparkles, Terminal } from "lucide-react";

export type VibeCategory = "All" | "Productivity" | "Creative" | "Business" | "Utility";

export interface VibeApp {
  id: string;
  title: string;
  description: string;
  category: VibeCategory;
  url: string; // Internal or external link
  icon: any; // Lucide icon or image path
  status: "Live" | "Beta" | "Coming Soon";
  tags: string[];
}

export const VIBE_CATEGORIES: VibeCategory[] = [
  "All",
  "Productivity",
  "Creative",
  "Business",
  "Utility",
];

export const VIBE_APPS: VibeApp[] = [
  {
    id: "muse-canvas",
    title: "Muse Canvas",
    description: "AI 기반 무한 캔버스 창작 도구. 아이디어를 시각화하고 확장하세요.",
    category: "Creative",
    url: "/apps/muse-canvas", // Placeholder
    icon: Palette,
    status: "Beta",
    tags: ["AI", "Canvas", "Ideation"],
  },

  {
    id: "prompt-library",
    title: "AI Prompt Library",
    description: "개발 및 마케팅을 위한 검증된 프롬프트 라이브러리.",
    category: "Utility",
    url: "/apps/prompt-library",
    icon: Terminal,
    status: "Live",
    tags: ["Prompt", "AI", "Dev"],
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "AI 도입에 따른 투자 수익률 시뮬레이터.",
    category: "Productivity",
    url: "/apps/roi-calculator",
    icon: Calculator,
    status: "Coming Soon",
    tags: ["Finance", "Simulation"],
  },
  {
    id: "fantasy-life",
    title: "AI Fantasy Life",
    description: "Odyssey를 활용한 실시간 판타지 세계 생성기 (Demo).",
    category: "Creative",
    url: "/odyssey",
    icon: Sparkles,
    status: "Live",
    tags: ["Video", "GenAI", "Odyssey"],
  },
  {
    id: "code-assistant",
    title: "Vibe Code Assistant",
    description: "자연어로 코드를 생성하고 수정하는 개인용 코딩 비서.",
    category: "Productivity",
    url: "/apps/code-assistant",
    icon: AppWindow,
    status: "Coming Soon",
    tags: ["Coding", "Assistant", "LLM"],
  },
];
