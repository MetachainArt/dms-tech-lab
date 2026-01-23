import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dmssolution.co.kr';

  // 메인 페이지
  const mainRoutes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/services', priority: 0.9 },
    { path: '/contact', priority: 0.9 },
    { path: '/education', priority: 0.8 },
    { path: '/education/n8n-masterclass', priority: 0.7 },
    { path: '/blog', priority: 0.9 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ];

  // 블로그 포스트
  const blogPosts = [
    'ai-hardware-revolution',
    'ai-tech-trends',
    'ai-survival-2025',
    'ai-fantasy-life',
    'ai-fantasy-life-2',
    'ai-vision-aesthetics',
    'artificial-memory',
    'post-humanism',
    'autonomous-agents',
    'synthetic-cinema',
    'generative-architecture',
    'n8n-masterclass',
    'ai-photography-essay',
    'creativity-democratization',
    'digital-persona',
    'today-me',
  ];

  const sitemap: MetadataRoute.Sitemap = [
    // 메인 페이지
    ...mainRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route.priority,
    })),
    // 블로그 포스트
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return sitemap;
}
