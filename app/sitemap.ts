import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dmssolution.co.kr';

  // 정적 페이지 목록
  const routes = [
    '',
    '/about',
    '/services',
    '/apps',
    '/contact',
    '/education',
    '/education/n8n-masterclass',
    '/company',
    '/blog',
    // 블로그 포스트
    '/blog/ai-hardware-revolution',
    '/blog/ai-tech-trends',
    '/blog/ai-survival-2025',
    '/blog/ai-fantasy-life',
    '/blog/ai-vision-aesthetics',
    '/blog/artificial-memory',
    '/blog/post-humanism',
    '/blog/autonomous-agents',
    '/blog/synthetic-cinema',
    '/blog/generative-architecture',
    '/blog/n8n-masterclass',
    '/blog/ai-photography-essay',
    '/blog/creativity-democratization',
    '/blog/digital-persona',
    '/blog/today-me',
  ];

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemap;
}
