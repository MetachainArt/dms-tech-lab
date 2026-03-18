import PromptContainer from "@/components/prompts/PromptMain";
import { Suspense } from "react";
import { getAllPromptsFromFiles } from "@/lib/prompt-content";
import { PROMPTS as STATIC_PROMPTS } from "@/lib/prompt-data";
import { getPromptsFromDB } from "@/lib/prompt-db";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

// Cache the page for 5 minutes, then regenerate in background
export const revalidate = 300;

export const metadata = generateSeoMetadata({
  title: "프롬프트",
  description: "실무에서 바로 꺼내 쓸 수 있는 검증된 프롬프트 모음입니다.",
  path: "/prompts",
});

export default async function PromptLibraryPage() {
  // 1. Fetch File-based Prompts (Text Prompts from content/prompts)
  const filePrompts = await getAllPromptsFromFiles();

  // 2. Fetch DB Prompts (From Admin Dashboard)
  const dbPrompts = await getPromptsFromDB();

  // 3. Get Static Prompts (Image, Video, Vibe, etc.)
  // Exclude "Text" category from static if we are fully migrating Text to files/db
  const staticPrompts = STATIC_PROMPTS.filter(p => p.category !== "Text");

  // 4. Combine (DB First, then Files, then Static)
  const allPrompts = [...dbPrompts, ...filePrompts, ...staticPrompts];

  return (
    <main className="w-full min-h-screen bg-[#FDFCF8] text-stone-900 font-poppins relative selection:bg-stone-200 selection:text-stone-900">
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/80 to-[#FDFCF8] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_70%)] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                실무에 바로 쓰는
                <span className="text-stone-500"> 프롬프트 모음</span>
            </h1>
            <p className="text-xl text-stone-500 max-w-2xl leading-relaxed">
                업무에 바로 적용할 수 있는 문장과 구조를 모았습니다.<br />
                글, 이미지, 영상, 코딩까지 필요한 작업 흐름을 빠르게 시작할 수 있습니다.
            </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 pb-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFCF8]/50 to-[#FDFCF8] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
            <Suspense fallback={<div className="text-stone-500 text-center py-20">프롬프트를 불러오는 중입니다...</div>}>
                <PromptContainer initialPrompts={allPrompts} />
            </Suspense>
        </div>
      </section>
    </main>
  );
}
