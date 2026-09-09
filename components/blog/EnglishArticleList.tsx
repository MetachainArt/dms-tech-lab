"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/components/brand/FiberPages.module.css";

type Article = { slug: string; title: string; excerpt: string; date: string };

export default function EnglishArticleList({ posts }: { posts: Article[] }) {
  const [query, setQuery] = useState("");
  const filtered = posts.filter(post => `${post.title} ${post.excerpt}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <label className="mb-3 block text-sm font-semibold" htmlFor="article-search">Search articles</label>
    <input id="article-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by title or topic" className="mb-5 w-full max-w-xl rounded-xl border border-paperfolio-line bg-white px-4 py-3 text-paperfolio-text" />
    <p role="status" className="mb-6 text-sm text-paperfolio-text-muted">{filtered.length} of {posts.length} articles</p>
    <div className={styles.articleList}>
      {filtered.map(post => <Link key={post.slug} href={`/en/blog/${post.slug}`} className={styles.article}>
        <p className="text-sm font-semibold text-paperfolio-accent-coral">{post.date}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-paperfolio-text">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-paperfolio-text-muted">{post.excerpt}</p>
      </Link>)}
    </div>
    {!filtered.length && <p className="py-8">No articles match your search. Try another word.</p>}
  </>;
}
