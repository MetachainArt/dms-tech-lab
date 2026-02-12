import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface MDXPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string; // Optional
    series?: string;     // Optional (Series ID)
    chapter?: string;    // Optional (Chapter number)
    readTime?: string;   // Optional (Can be calculated or manual)
    [key: string]: any;
  };
  content: string;
}

export function getPostBySlug(slug: string): MDXPost | null {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontMatter: data as MDXPost['frontMatter'],
    content,
  };
}

export function getAllPosts(): MDXPost[] {
  // Check if directory exists first
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((fileName) => !fileName.startsWith('_') && fileName.endsWith('.mdx'))
    .map((fileName) => getPostBySlug(fileName.replace(/\.mdx$/, '')))
    .filter((post): post is MDXPost => post !== null);

  return posts.sort((post1, post2) => (post1.frontMatter.date > post2.frontMatter.date ? -1 : 1));
}

export function getPostsBySeries(seriesId: string): MDXPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.frontMatter.series === seriesId)
    .sort((a, b) => {
      // Sort by chapter if available, otherwise date
      if (a.frontMatter.chapter && b.frontMatter.chapter) {
        return a.frontMatter.chapter.localeCompare(b.frontMatter.chapter);
      }
      return a.frontMatter.date > b.frontMatter.date ? -1 : 1;
    });
}

export function getRelatedPosts(slug: string, maxCount: number = 3): MDXPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts().filter((p) => p.slug !== slug);
  const related: MDXPost[] = [];

  // 1순위: 같은 시리즈의 다른 글
  if (currentPost.frontMatter.series) {
    const sameSeries = allPosts.filter(
      (p) => p.frontMatter.series === currentPost.frontMatter.series
    );
    related.push(...sameSeries);
  }

  // 2순위: 같은 태그를 가진 글 (이미 추가된 글 제외)
  const currentTags: string[] = currentPost.frontMatter.tags || [];
  if (currentTags.length > 0) {
    const addedSlugs = new Set(related.map((r) => r.slug));
    const sameTag = allPosts
      .filter((p) => !addedSlugs.has(p.slug))
      .map((p) => {
        const postTags: string[] = p.frontMatter.tags || [];
        const overlap = postTags.filter((t: string) => currentTags.includes(t)).length;
        return { post: p, overlap };
      })
      .filter((item) => item.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap)
      .map((item) => item.post);
    related.push(...sameTag);
  }

  return related.slice(0, maxCount);
}

