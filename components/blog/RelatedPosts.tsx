import Image from "next/image";
import Link from "next/link";

interface RelatedPostsProps {
  posts: {
    slug: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    series?: string;
    date?: string;
  }[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 border-t border-paperfolio-line pt-12">
      <div className="mb-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-paperfolio-accent-blue">함께 읽기</p>
        <h3 className="text-3xl font-semibold tracking-tight text-paperfolio-text">이 글도 같이 읽어보세요</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-[28px] border border-paperfolio-line bg-white shadow-[0_16px_55px_rgba(31,41,55,0.05)] hover:-translate-y-0.5 hover:border-paperfolio-accent-blue/35"
          >
            {post.coverImage && (
              <div className="relative h-40 w-full overflow-hidden bg-paperfolio-surface">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            )}

            <div className="space-y-3 p-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-paperfolio-text-muted">
                {post.series && (
                  <span className="rounded-full border border-paperfolio-accent-blue/20 bg-paperfolio-accent-blue/10 px-2.5 py-1 text-paperfolio-accent-blue">
                    {post.series}
                  </span>
                )}
                {post.date && <span>{post.date}</span>}
              </div>
              <h4 className="text-lg font-semibold tracking-tight text-paperfolio-text group-hover:text-paperfolio-accent-blue">{post.title}</h4>
              <p className="text-sm leading-7 text-paperfolio-text-muted">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
