import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";
import { editorialContent, editorialCover } from './editorial-art';

const worksDirectory = path.join(process.cwd(), "content/works");

export interface MDXWork {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    readTime?: string;
    tags?: string[];
    [key: string]: unknown;
  };
  content: string;
}

async function loadWorkBySlug(slug: string, locale: "ko" | "en" = "ko"): Promise<MDXWork | null> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const directory = locale === "en" ? path.join(worksDirectory, "en") : worksDirectory;
  const fullPath = path.join(directory, `${realSlug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontMatter: { ...data, ...(editorialCover(`content/works/${locale === "en" ? "en/" : ""}${realSlug}.mdx`) ? { coverImage: editorialCover(`content/works/${locale === "en" ? "en/" : ""}${realSlug}.mdx`) } : {}) } as MDXWork['frontMatter'],
      content: editorialContent(content),
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function getAllWorksInternal(locale: "ko" | "en" = "ko"): Promise<MDXWork[]> {
  try {
    const files = await fs.readdir(locale === "en" ? path.join(worksDirectory, "en") : worksDirectory);
    const workSlugs = files
      .filter((fileName) => !fileName.startsWith("_") && fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));

    const loadedWorks = await Promise.all(workSlugs.map((slug) => loadWorkBySlug(slug, locale)));

    return loadedWorks
      .filter((work): work is MDXWork => work !== null)
      .sort((work1, work2) => (work1.frontMatter.date > work2.frontMatter.date ? -1 : 1));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function getWorksBySlugIndex(locale: "ko" | "en" = "ko"): Promise<Record<string, MDXWork>> {
  const works = await getAllWorksInternal(locale);
  return works.reduce<Record<string, MDXWork>>((acc, work) => {
    acc[work.slug] = work;
    return acc;
  }, {});
}

export async function getWorkBySlug(slug: string, locale: "ko" | "en" = "ko"): Promise<MDXWork | null> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const worksBySlug = await getWorksBySlugIndex(locale);
  const work = worksBySlug[realSlug];

  if (!work) {
    return null;
  }

  return work;
}

export async function getAllWorks(locale: "ko" | "en" = "ko"): Promise<MDXWork[]> {
  return getAllWorksInternal(locale);
}
