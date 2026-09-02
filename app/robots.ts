import { MetadataRoute } from 'next';

import { SITE_CONFIG } from '@/lib/seo';

// 주의: public/robots.txt 를 다시 만들면 정적 파일이 우선되어 이 파일이 무시된다.
// (예전에 public/robots.txt 가 존재해 아래 disallow 규칙이 전혀 적용되지 않았다.)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/auth/', '/unauthorized'],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
