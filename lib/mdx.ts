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
