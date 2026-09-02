import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { getSeriesIdsWithContent } from '@/lib/series-content';
import { getAllWorks } from '@/lib/work-mdx';
import { WORKS_DATA } from '@/lib/works-projects-data';
import { EDUCATION_TRACKS } from '@/lib/education-data';
import { BLOG_SERIES } from '@/lib/blog-data';
import { getCourseStructure } from '@/lib/education-fs';

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
    { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/fttx-training', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/apps', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/survey', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/newsletter', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // 블로그 포스트 자동 수집
  const [blogPosts, works, seriesSlugs] = await Promise.all([getAllPosts(), getAllWorks(), getSeriesIdsWithContent()]);

  const hiddenSeriesIds = new Set(
    Object.values(BLOG_SERIES).filter((series) => series.hidden).map((series) => series.id)
  );

  // 프로젝트 시리즈(랜딩 / 프로젝트 / 스텝) 자동 수집
  const projectRoutes: MetadataRoute.Sitemap = [];
  for (const landing of Object.values(WORKS_DATA)) {
    projectRoutes.push({
      url: `${baseUrl}/works/${landing.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });

    for (const project of landing.projects) {
      if (project.hidden) continue;

      projectRoutes.push({
        url: `${baseUrl}/works/${landing.id}/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });

      for (const step of project.steps) {
        projectRoutes.push({
          url: `${baseUrl}/works/${landing.id}/${project.id}/${step.id}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        });
      }
    }
  }

  // 교육 트랙 / 레슨 자동 수집
  const educationRoutes: MetadataRoute.Sitemap = [];
  for (const track of Object.values(EDUCATION_TRACKS)) {
    if (track.hidden) continue;

    educationRoutes.push({
      url: `${baseUrl}/education/${track.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });

    const course = getCourseStructure(track.id);
    if (!course) continue;

    for (const chapter of course.chapters) {
      for (const lesson of chapter.lessons) {
        educationRoutes.push({
          url: `${baseUrl}/education/${track.id}/${lesson.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        });
      }
    }
  }

  const sitemap: MetadataRoute.Sitemap = [
    // 메인 페이지
    ...mainRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    // 교육 트랙 (자동)
    ...educationRoutes,
    // 프로젝트 시리즈 (자동)
    ...projectRoutes,
    // 블로그 포스트 (자동)
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...works
      .filter((work) => !hiddenSeriesIds.has(String(work.frontMatter.series ?? '')))
      .map((work) => ({
        url: `${baseUrl}/works/${work.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
    ...seriesSlugs
      .filter((slug) => !hiddenSeriesIds.has(slug))
      .map((slug) => ({
        url: `${baseUrl}/blog/series/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      })),
  ];

  return sitemap;
}
