
import { Type, Image as ImageIcon, Video, Code, ShoppingBag, Megaphone, User, Search, Zap, PenTool, Briefcase, DollarSign, GraduationCap, Image, Share2, MessageCircle, Coffee, Smile, Grid } from "lucide-react";

export type PromptCategory = "All" | "Text" | "Image" | "Video" | "Vibe Coding";

export interface PromptItem {
  id: string;
  title: string;
  description: string;
  category: PromptCategory;
  subcategory?: string; // e.g., "Marketing", "SEO"
  promptContent: string;
  tags: string[];
  author: string;
  image?: string; // Optional cover image for Image/Video prompts
  
  // For Text Prompt Detail View
  detail?: {
    useCase: string; // "When to use"
    exampleOutput: string; // "Example result"
    tips: string[]; // "Pro tips"
  }
}

export const PROMPT_CATEGORIES: PromptCategory[] = [
  "All",
  "Text",
  "Image",
  "Video",
  "Vibe Coding"
];

// Text Prompt Subcategories (Level 1)
// Text Prompt Subcategories (Level 1)
export const TEXT_SUBCATEGORIES = [
  { id: "Writing", name: "글쓰기", description: "빈 화면 멍 때리기 끝! 글이 술술 나오는 마법", count: 624, icon: PenTool },
  { id: "Development", name: "개발", description: "코드 작성부터 디버깅까지", count: 342, icon: Code },
  { id: "Education", name: "교육", description: "쉽고 빠르게 배우는 학습 가이드", count: 546, icon: GraduationCap },
  { id: "Marketing", name: "마케팅", description: "고객의 마음을 사로잡는 전략", count: 556, icon: Megaphone },
  { id: "Research", name: "연구", description: "복잡한 자료 조사와 요약", count: 215, icon: Search },
  { id: "Business", name: "업무", description: "보고서, 이메일, 기획안 작성", count: 652, icon: Briefcase },
  { id: "Content", name: "콘텐츠", description: "유튜브, 블로그 아이디어 발굴", count: 489, icon: Video },
  { id: "Productivity", name: "생산성", description: "시간 관리와 효율적인 워크플로우", count: 494, icon: Zap },
  { id: "Travel", name: "여행", description: "완벽한 여행 계획과 맛집 추천", count: 128, icon: Image }, // Using Image momentarily as map icon substitute
  { id: "SNS", name: "SNS", description: "인스타그램, 틱톡 핫한 포스팅", count: 890, icon: Share2 },
  { id: "ProblemSolving", name: "고민해결", description: "현명한 조언과 상담", count: 334, icon: MessageCircle },
  { id: "Life", name: "생활", description: "요리, 건강, 취미 생활 꿀팁", count: 445, icon: Coffee },
  { id: "Fun", name: "재미", description: "유머, 퀴즈, 창작 활동", count: 221, icon: Smile },
  { id: "Other", name: "기타", description: "그 외 다양한 프롬프트", count: 156, icon: Grid },
];

export const IMAGE_SUBCATEGORIES = [
    "3D", "일러스트", "사물", "동물", "인물", "캐릭터", "게임", "디자인", 
    "예술", "공예", "패션", "건축", "음식", "사진", "배경", "로고", "기타"
];

export const VIDEO_SUBCATEGORIES = [
  "영화", "숏폼", "광고", "애니메이션", "모션그래픽", "드론", "다큐멘터리", "뮤직비디오", "기타"
];

export const VIBE_CODING_SUBCATEGORIES = [
  "웹개발", "앱개발", "게임", "데이터", "알고리즘", "자동화", "UI/UX", "기타"
];

export const GENERATION_TOOLS = [
  "Midjourney", "Nanobanana", "GPT", "Zimage", "Grok", 
  "DALL-E 3", "Stable Diffusion", "Runway", "Pika", "Sora", 
  "Claude", "Gemini", "Other"
];

export function getGenerationTool(tags: string[] = []): string | undefined {
    return tags.find(tag => GENERATION_TOOLS.includes(tag));
}

export const PROMPTS: PromptItem[] = [
  // Text Prompts - Marketing
  {
    id: "marketing-copy-generator",
    title: "고전환 마케팅 카피 생성",
    description: "AIDA 프레임워크를 활용한 설득력 있는 광고 카피를 작성합니다.",
    category: "Text",
    subcategory: "Marketing",
    promptContent: "당신은 10년 차 시니어 카피라이터입니다. AIDA(Attention, Interest, Desire, Action) 프레임워크를 사용하여 [제품명]에 대한 페이스북 광고 문구를 작성해 주세요.\n\n- 타겟 오디언스: [타겟층]\n- 주요 혜택 및 특징: [주요 특징]\n- 브랜드 톤앤매너: [톤앤매너, 예: 친근한, 전문적인]\n\n각 단계(A, I, D, A)를 명확히 구분하여 작성하고, 이모지를 적절히 사용하여 가독성을 높여주세요.",
    tags: ["Marketing", "Copywriting", "GPT-4"],
    author: "DMS Lab",
    detail: {
        useCase: "페이스북, 인스타그램 광고 문구를 빠르게 작성해야 할 때 사용하세요.",
        exampleOutput: "🔥 놓치지 마세요! 지금 [제품명]으로 당신의 일상을 바꿔보세요. \n\n👀 Attention: 아직도 불편하게 생활하시나요?\n🧠 Interest: [제품명]은 혁신적인 기술로...\n❤️ Desire: 이미 10,000명이 선택했습니다.\n✅ Action: 지금 바로 주문하고 30% 할인 받으세요!",
        tips: ["타겟 오디언스를 구체적으로 적을수록 효과가 좋습니다.", "톤앤매너를 '친근하게', '전문적으로' 등으로 지정해보세요."]
    }
  },
  {
    id: "sns-viral-post",
    title: "SNS 바이럴 포스트 작성",
    description: "인스타그램 저장수를 부르는 캡션 작성 템플릿.",
    category: "Text",
    subcategory: "Marketing",
    promptContent: "[주제]에 대한 인스타그램 게시물 캡션을 작성해 주세요. \n\n1. 첫 문장은 사용자의 시선을 사로잡는 강력한 후킹(Hook) 멘트로 시작하세요.\n2. 본문에는 유용한 꿀팁 3가지를 정리해서 포함하세요.\n3. 마지막에는 댓글 참여를 유도하는 질문으로 마무리하세요.\n\n적절한 줄바꿈과 이모지를 사용하여 모바일에서 읽기 편하게 작성해 주세요.",
    tags: ["SNS", "Instagram", "Viral"],
    author: "ViralBot",
    detail: {
        useCase: "정보성 콘텐츠로 저장과 공유를 유도하고 싶을 때 적합합니다.",
        exampleOutput: "💡 [주제] 정복하는 3가지 꿀팁!\n\n1. 첫 번째 팁...\n2. 두 번째 팁...\n3. 세 번째 팁...\n\n여러분은 어떤 방법이 가장 좋으신가요? 댓글로 알려주세요! 👇",
        tips: ["첫 문장은 반드시 이목을 끄는 문구(Hook)로 시작하세요."]
    }
  },

  // Text Prompts - Business / Sales
  {
    id: "email-sequence",
    title: "B2B 콜드 메일 시퀀스",
    description: "리드 생성을 위한 3단계 콜드 메일 템플릿입니다.",
    category: "Text",
    subcategory: "Business",
    promptContent: "[서비스]를 판매하기 위해 기업 임원(VP 레벨)을 타겟으로 하는 3단계 콜드 메일 시퀀스를 작성해 주세요.\n\n- 이메일 1: 가치 제안 및 흥미 유발\n- 이메일 2: 성공 사례(Case Study) 및 사회적 증거 제시\n- 이메일 3: 가벼운 리마인드 및 마무리(Break-up email)\n\n각 이메일은 150단어 이내로 간결하게 작성하고, 정중하면서도 자신감 있는 비즈니스 톤을 유지하세요.",
    tags: ["Sales", "Email", "Business"],
    author: "SalesBot",
    detail: {
        useCase: "잠재 고객에게 처음 연락할 때 부담 없이 접근하기 위한 시퀀스입니다.",
        exampleOutput: "Subject: Quick question about [Company]\n\nHi [Name],\n\nI noticed that [Company] is...",
        tips: ["각 이메일 간격을 2-3일로 설정하여 발송하세요."]
    }
  },
  {
    id: "business-plan-one-pager",
    title: "1장짜리 사업계획서",
    description: "린 캔버스 모델을 기반으로 한 핵심 사업 계획 요약.",
    category: "Text",
    subcategory: "Business",
    promptContent: "다음 스타트업 아이디어에 대한 린 캔버스(Lean Canvas) 비즈니스 모델을 작성해 주세요.\n\n- 아이디어: [아이디어 설명]\n\n다음 9가지 요소를 포함하여 표 형식이나 글머리 기호로 정리해 주세요:\n1. 문제 (Problem)\n2. 솔루션 (Solution)\n3. 고유 가치 제안 (USP)\n4. 경쟁 우위 (Unfair Advantage)\n5. 고객 세그먼트 (Customer Segments)\n6. 핵심 지표 (Key Metrics)\n7. 채널 (Channels)\n8. 비용 구조 (Cost Structure)\n9. 수익원 (Revenue Streams)",
    tags: ["Startup", "Planning", "Strategy"],
    author: "BizGenius",
    detail: {
        useCase: "아이디어를 빠르게 검증하고 핵심 요소를 정리할 때 사용합니다.",
        exampleOutput: "Problem: 바쁜 현대인의 식사 해결...\nSolution: 30분 내 배달되는 건강 도시락...",
        tips: ["경쟁 우위(Unfair Advantage)에 집중하여 작성해달라고 요청하세요."]
    }
  },
  
  // Image Prompts
  {
    id: "knitted-cosmetic",
    title: "털실로 짠 니트 질감 화장품",
    description: "포근하고 독특한 질감의 털실로 만들어진 화장품 용기 컨셉 아트.",
    category: "Image",
    promptContent: "A soft beauty still life inside a miniature world handcrafted entirely from yarn, wool, and plush textiles. Two knitted night cream jars float gently above a pastel pink felt backdrop. The hero jar is fully sculpted from thick knitted stitches wrapped around a felted cylinder, with embroidered gold lettering mimicking the original label. --ar 4:5 --v 6.0",
    tags: ["Midjourney", "Product", "Texture"],
    author: "ArtAI",
    image: "/images/web-optimized/216-knitted-cream-71595ffc2801.webp"
  },
  {
    id: "luxury-beauty",
    title: "럭셔리 뷰티 홀리데이 컬렉션",
    description: "고급스러운 레드 벨벳 배경의 홀리데이 화장품 연출 샷.",
    category: "Image",
    promptContent: "Luxury cosmetic holiday collection 2025, red velvet curtains background, golden lighting, sparkling champagne glass, elegant serum bottle and cream, festive atmosphere, high end advertising photography, 8k resolution, elegant, expensive look.",
    tags: ["Advertising", "Luxury", "Beauty"],
    author: "StudioAI",
    image: "/images/web-optimized/217-luxury-beauty-7d327d0dc862.webp"
  },
  {
    id: "cyberpunk-city",
    title: "사이버펑크 네온 시티",
    description: "비 내리는 미래 도시의 네온 사인과 몽환적인 분위기.",
    category: "Image",
    promptContent: "futuristic cyberpunk city street at night, raining, neon lights reflecting on wet pavement, towering skyscrapers, holographic billboards, flying cars, cinematic lighting, photorealistic, 8k, unreal engine 5 render --ar 16:9 --v 6.0",
    tags: ["Midjourney", "Sci-Fi", "Environment"],
    author: "MidBot",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop"
  },

  // Video Prompts
  {
    id: "drone-nature",
    title: "시네마틱 자연 드론 촬영",
    description: "웅장한 산맥을 가로지르는 드론 샷 프롬프트.",
    category: "Video",
    promptContent: "cinematic drone shot flying over a misty mountain range at sunrise, golden hour lighting, 4k resolution, smooth motion, highly detailed nature",
    tags: ["Runway", "Nature", "Cinematic"],
    author: "VideoGen",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  },

  // Vibe Coding Prompts
  {
    id: "react-landing-page",
    title: "리액트 모던 랜딩 페이지",
    description: "반응형 히어로 섹션과 애니메이션을 포함한 컴포넌트 코드 생성.",
    category: "Vibe Coding",
    promptContent: "Create a modern, responsive Hero section component using React, Tailwind CSS, and Framer Motion. It should have a large headline on the left, a call-to-action button with a hover glow effect, and a 3D spline illustration placeholder on the right. Dark mode theme with neon accents.",
    tags: ["React", "Tailwind", "Web"],
    author: "CodeVibe"
  },
  {
    id: "dashboard-layout",
    title: "넥스트JS 어드민 대시보드",
    description: "사이드바와 상단 네비게이션이 포함된 관리자 레이아웃 스캐폴딩.",
    category: "Vibe Coding",
    promptContent: "Generate a Next.js admin dashboard layout with a collapsible sidebar, top navigation bar with user profile, and a main content area. Use Lucide icons for the sidebar menu. The sidebar should have sections for 'Overview', 'Analytics', 'Users', and 'Settings'. implement responsive behavior for mobile.",
    tags: ["Next.js", "Layout", "UI"],
    author: "DevAssist"
  }
];

export const CATEGORY_ICONS: Record<PromptCategory, any> = {
    "All": Type,
    "Text": Type,
    "Image": ImageIcon,
    "Video": Video,
    "Vibe Coding": Code
};
