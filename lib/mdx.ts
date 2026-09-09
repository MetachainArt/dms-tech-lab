import { promises as fs } from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import type { Locale } from './i18n';
import matter from 'gray-matter';
import { editorialContent, editorialCover } from './editorial-art';

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
    tags?: string[];
    [key: string]: unknown;
  };
  content: string;
}

async function loadPostBySlug(slug: string, locale: Locale = "ko"): Promise<MDXPost | null> {
  const realSlug = slug.replace(/\.mdx$/, '');
  if (!/^[a-zA-Z0-9_-]+$/.test(realSlug)) return null;
  const fullPath = path.join(postsDirectory, locale === "en" ? "en" : "", `${realSlug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    if (locale === "en") {
      const source = (await fs.readFile(path.join(postsDirectory, `${realSlug}.mdx`), 'utf8')).replace(/\r\n/g, '\n');
      if (data.translationSourceHash !== createHash("sha256").update(source).digest("hex")) return null;
    }

    return {
      slug: realSlug,
      frontMatter: { ...data, ...(editorialCover(`content/posts/${realSlug}.mdx`) ? { coverImage: editorialCover(`content/posts/${realSlug}.mdx`) } : {}) } as MDXPost['frontMatter'],
      content: editorialContent(content),
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return null;
    }

    throw error;
  }
}

function normalizeDateStr(dateStr: string): string {
  // "2026. 03. 25" → "20260325", "2026-03-25" → "20260325"
  return dateStr.replace(/\D/g, '').slice(0, 8).padEnd(8, '0');
}

async function getAllPostsInternal(locale: Locale = "ko"): Promise<MDXPost[]> {
  try {
    const files = await fs.readdir(postsDirectory);
    const postSlugs = files
      .filter((fileName) => !fileName.startsWith('_') && fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));

    const loadedPosts = await Promise.all(postSlugs.map((slug) => loadPostBySlug(slug, locale)));

    return loadedPosts
      .filter((post): post is MDXPost => post !== null)
      .sort((post1, post2) => {
        const d1 = normalizeDateStr(String(post1.frontMatter.date));
        const d2 = normalizeDateStr(String(post2.frontMatter.date));
        return d1 > d2 ? -1 : 1;
      });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

async function getPostsBySeriesInternal(seriesId: string, locale: Locale): Promise<MDXPost[]> {
  const allPosts = await getAllPostsInternal(locale);
  return allPosts
    .filter((post) => post.frontMatter.series === seriesId)
    .sort((a, b) => {
      if (a.frontMatter.chapter && b.frontMatter.chapter) {
        return a.frontMatter.chapter.localeCompare(b.frontMatter.chapter);
      }
      return a.frontMatter.date > b.frontMatter.date ? -1 : 1;
    });
}

async function getRelatedPostsInternal(slug: string, maxCount: number, locale: Locale): Promise<MDXPost[]> {
  const posts = await getAllPostsInternal(locale);
  const currentPost = posts.find(post => post.slug === slug);
  if (!currentPost) {
    return [];
  }

  const allPosts = posts.filter((post) => post.slug !== slug);
  const related: MDXPost[] = [];

  if (currentPost.frontMatter.series) {
    const sameSeries = allPosts.filter(
      (post) => post.frontMatter.series === currentPost.frontMatter.series
    );
    related.push(...sameSeries);
  }

  const currentTags = Array.isArray(currentPost.frontMatter.tags)
    ? currentPost.frontMatter.tags
    : [];

  if (currentTags.length > 0) {
    const addedSlugs = new Set(related.map((post) => post.slug));
    const sameTag = allPosts
      .filter((post) => !addedSlugs.has(post.slug))
      .map((post) => {
        const postTags = Array.isArray(post.frontMatter.tags)
          ? post.frontMatter.tags
          : [];
        const overlap = postTags.filter((tag) => currentTags.includes(tag)).length;
        return { post, overlap };
      })
      .filter((item) => item.overlap > 0)
      .sort((a, b) => b.overlap - a.overlap)
      .map((item) => item.post);
    related.push(...sameTag);
  }

  return related.slice(0, maxCount);
}

export async function getPostBySlug(slug: string, locale: Locale = "ko"): Promise<MDXPost | null> {
  const realSlug = slug.replace(/\.mdx$/, '');
  if (realSlug.startsWith('_')) return null;
  return loadPostBySlug(realSlug, locale);
}

export async function getAllPosts(locale: Locale = "ko"): Promise<MDXPost[]> {
  return getAllPostsInternal(locale);
}

export async function getPostsBySeries(seriesId: string, locale: Locale = "ko"): Promise<MDXPost[]> {
  return getPostsBySeriesInternal(seriesId, locale);
}

export async function getRelatedPosts(slug: string, maxCount: number = 3, locale: Locale = "ko"): Promise<MDXPost[]> {
  const realSlug = slug.replace(/\.mdx$/, '');
  return getRelatedPostsInternal(realSlug, maxCount, locale);
}

