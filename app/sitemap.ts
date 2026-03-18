import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { getSeriesIdsWithContent } from '@/lib/series-content';
import { getAllWorks } from '@/lib/work-mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dmssolution.co.kr';

  // 메인 페이지 + 모든 서브 페이지
  const mainRoutes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/works', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/company', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/education', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/automation', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/prompts', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/vibe-coding', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/apps', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // 블로그 포스트 자동 수집
  const [blogPosts, works, seriesSlugs] = await Promise.all([getAllPosts(), getAllWorks(), getSeriesIdsWithContent()]);

  const sitemap: MetadataRoute.Sitemap = [
    // 메인 페이지
    ...mainRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    // 블로그 포스트 (자동)
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...works.map((work) => ({
      url: `${baseUrl}/works/${work.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...seriesSlugs.map((slug) => ({
      url: `${baseUrl}/blog/series/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  return sitemap;
}
