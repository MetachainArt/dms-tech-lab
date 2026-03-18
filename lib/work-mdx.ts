import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";

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

async function loadWorkBySlug(slug: string): Promise<MDXWork | null> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(worksDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontMatter: data as MDXWork["frontMatter"],
      content,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function getAllWorksInternal(): Promise<MDXWork[]> {
  try {
    const files = await fs.readdir(worksDirectory);
    const workSlugs = files
      .filter((fileName) => !fileName.startsWith("_") && fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));

    const loadedWorks = await Promise.all(workSlugs.map((slug) => loadWorkBySlug(slug)));

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

async function getWorksBySlugIndex(): Promise<Record<string, MDXWork>> {
  const works = await getAllWorksInternal();
  return works.reduce<Record<string, MDXWork>>((acc, work) => {
    acc[work.slug] = work;
    return acc;
  }, {});
}

export async function getWorkBySlug(slug: string): Promise<MDXWork | null> {
  const realSlug = slug.replace(/\.mdx$/, "");
  const worksBySlug = await getWorksBySlugIndex();
  const work = worksBySlug[realSlug];

  if (!work) {
    return null;
  }

  return work;
}

export async function getAllWorks(): Promise<MDXWork[]> {
  return getAllWorksInternal();
}
