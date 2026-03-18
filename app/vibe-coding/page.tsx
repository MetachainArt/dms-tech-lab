import VibeContainer from "@/components/vibe/VibeMain";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";

export const metadata = generateSeoMetadata({
  title: "바이브 코딩",
  description: "아이디어를 빠르게 형태로 만들고 실험하는 리도의 바이브 코딩 작업을 모았습니다.",
  path: "/vibe-coding",
});

export default function VibeCodingPage() {
  return (
    <main className="w-full min-h-screen bg-[#FDFCF8] text-stone-900 font-poppins relative selection:bg-stone-200 selection:text-stone-900">
      
      {/* Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/80 to-[#FDFCF8] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.03),transparent_70%)] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                생각을 빠르게
                <span className="text-stone-500"> 형태로 만드는 작업</span>
            </h1>
            <p className="text-xl text-stone-500 max-w-2xl leading-relaxed">
                프로토타입, 작은 웹앱, 실험적인 도구를 빠르게 만들며 아이디어를 검증합니다.<br />
                거창한 제품보다 먼저 써보고 확인할 수 있는 형태를 중요하게 생각합니다.
            </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 pb-32 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDFCF8]/50 to-[#FDFCF8] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
            <VibeContainer />
        </div>
      </section>
    </main>
  );
}
