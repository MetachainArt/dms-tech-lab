import type { ComponentProps } from "react";
import Link from "next/link";
import { MDXComponents } from "./MDXComponents";
import { ArticleFigure, ArticleNextImage, ArticleTable } from "./ArticleFigure";
import AudioPlayer from "./AudioPlayer";
import { localizePath } from "@/lib/i18n";

function englishHref(href: string | undefined) {
  if (!href?.startsWith("/") || href.startsWith("//")) return href;
  const [pathname] = href.split(/[?#]/);
  return localizePath(pathname, "en") + href.slice(pathname.length);
}

export const EnglishMDXComponents = {
  ...MDXComponents,
  h1: MDXComponents.h2,
  img: (props: ComponentProps<typeof ArticleFigure>) => <ArticleFigure {...props} locale="en" />,
  Image: (props: ComponentProps<typeof ArticleNextImage>) => <ArticleNextImage {...props} locale="en" />,
  table: (props: ComponentProps<typeof ArticleTable>) => <ArticleTable {...props} locale="en" />,
  AudioPlayer: (props: ComponentProps<typeof AudioPlayer>) => <AudioPlayer {...props} locale="en" />,
  a: (props: ComponentProps<"a">) => <MDXComponents.a {...props} href={englishHref(props.href)} />,
  Link: (props: ComponentProps<typeof Link>) => <Link {...props} href={typeof props.href === "string" ? englishHref(props.href)! : props.href} />,
};
