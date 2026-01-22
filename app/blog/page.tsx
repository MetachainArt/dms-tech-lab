
import NeuralBackground from "@/components/ui/NeuralBackground";
import SeriesList from "@/components/blog/SeriesList";
import { BLOG_SERIES } from "@/lib/blog-data";
import { getAllPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const allPosts = getAllPosts();
  
  // Calculate post count for each series
  const seriesWithCount = Object.values(BLOG_SERIES).map((series) => {
    const count = allPosts.filter((post) => post.frontMatter.series === series.id).length;
    return {
      ...series,
      postCount: count,
    };
  });

  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B]">
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-40 pb-20 px-6 overflow-hidden">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1B] via-transparent to-[#050B1B] z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Note: Simple animations can be kept or removed for server components. 
                If complex scroll animations are needed, extract Hero to a client component.
                For now, we'll keep it static or use a client wrapper if needed, 
                but since NeuralBackground is Client, we might as well make a Client Hero wrapper if strictly needed.
                However, for simplicity and performance, we render static HTML here 
                and let NeuralBackground handle the canvas. 
            */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                Reedo <span className="text-neon-sky">Insights</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-100">
                기술과 예술, 그리고 인간의 경계에서.
                <br />
                깊이 있는 시선을 담은 연재 시리즈.
            </p>
        </div>
      </section>

      {/* 2. Series Gallery (Client Component) */}
      <SeriesList series={seriesWithCount} />

    </main>
  );
}
