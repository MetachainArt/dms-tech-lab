import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { BLOG_SERIES } from "@/lib/blog-data";
import { getAllPosts } from "@/lib/mdx";
import { generateMetadata as generateSeoMetadata } from "@/lib/metadata";
import { getSeriesContentItems, getSeriesIdsWithContent } from "@/lib/series-content";
import styles from "@/components/brand/FiberContent.module.css";

export async function generateStaticParams() {
  const seriesIds = await getSeriesIdsWithContent();
  return seriesIds.map((id) => ({ id }));
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const series = BLOG_SERIES[params.id];
  if (!series) return;
  const allPosts = await getAllPosts();
  const coverImage = allPosts.find((post) => post.frontMatter.series === series.id && post.frontMatter.coverImage)?.frontMatter.coverImage || series.coverImage;
  return generateSeoMetadata({
    title: `${series.title} 시리즈`,
    description: series.description,
    path: `/blog/series/${series.id}`,
    image: coverImage,
  });
}

export default async function SeriesDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const series = BLOG_SERIES[id];
  if (!series) notFound();
  const [posts, allPosts] = await Promise.all([getSeriesContentItems(id), getAllPosts()]);
  if (posts.length === 0) notFound();
  const seriesCover = allPosts.find((post) => post.frontMatter.series === id && post.frontMatter.coverImage)?.frontMatter.coverImage || series.coverImage;
  const coversBySlug = new Map(allPosts.map((post) => [post.slug, post.frontMatter.coverImage]));

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.back}><ArrowLeft size={15} aria-hidden="true" />글 목록으로 돌아가기</Link>
        <header className={styles.journalHero}>
          <div>
            <p className={styles.eyebrow}>DMS.LABS / 리도 인사이트</p>
            <h1>{series.title}</h1>
            <p className={styles.eyebrow}>{series.subtitle}</p>
            <p className={styles.description}>{series.description}</p>
            <dl className={styles.facts}>
              <div><dt>작성</dt><dd>Reedo</dd></div>
              <div><dt>편수</dt><dd>{posts.length}편</dd></div>
              <div><dt>상태</dt><dd>연재 중</dd></div>
            </dl>
            <Link href="https://open.kakao.com/o/sSPHn33g" target="_blank" rel="noopener noreferrer" className={styles.button}>
              설치/문의 <MessageCircle size={16} aria-hidden="true" />
            </Link>
          </div>
          <figure className={styles.journalCover}>
            <Image src={seriesCover} alt={series.title} fill priority sizes="(max-width: 700px) 88vw, 44vw" />
          </figure>
        </header>

        <section className={styles.journalList} aria-label={`${series.title} 글 목록`}>
          {posts.map((post, index) => {
            const coverImage = post.href.startsWith("/blog/") ? coversBySlug.get(post.slug) : undefined;
            return (
              <Link key={post.slug} href={post.href} className={styles.journalRow}>
                <span className={styles.eyebrow}>{post.chapter ? `글 ${post.chapter}` : String(index + 1).padStart(2, "0")}</span>
                <div className={styles.journalRowImage}>
                  <Image src={coverImage || seriesCover} alt="" fill sizes="(max-width: 700px) 80vw, 22vw" />
                </div>
                <div className={styles.journalRowCopy}>
                  <div className={styles.meta}><time dateTime={post.date}>{post.date}</time><span>{post.readTime}</span></div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className={styles.button}>읽어보기 <ArrowRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
