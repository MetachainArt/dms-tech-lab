import artData from './editorial-art.generated.json';

type EditorialArt = { covers: Record<string, { image: string; title: string }>; inline: Record<string, string> };
const art = artData as EditorialArt;

export function editorialImage(src: string): string {
  return art.inline[src] || src;
}

/** Presentation mapping keeps authored source content and original assets intact. */
export function editorialCover(file: string): string | undefined {
  return art.covers[file.replaceAll('\\', '/')]?.image;
}

export function editorialContent(content: string): string {
  // Only replace complete image URLs inside image markup; prose and external links remain unchanged.
  // Quoted data URIs come first: SVG url(...) attributes contain parentheses that are not Markdown boundaries.
  return content.replace(/!\[([^\]]*)\]\("(data:image\/[^"\r\n]+)"\)|!\[([^\]]*)\]\(([^)]+)\)|(<(?:img|Image)\b[^>]*?\bsrc=["'])([^"']+)(["'][^>]*>)/g,
    (match, dataAlt: string | undefined, dataSrc: string | undefined, alt: string | undefined, markdownSrc: string | undefined, prefix: string | undefined, jsxSrc: string | undefined, suffix: string | undefined) => {
      if (dataSrc) return art.inline[dataSrc] ? `![${dataAlt}](${art.inline[dataSrc]})` : match;
      if (markdownSrc && art.inline[markdownSrc]) return `![${alt}](${art.inline[markdownSrc]})`;
      if (jsxSrc && art.inline[jsxSrc]) return `${prefix}${art.inline[jsxSrc]}${suffix}`;
      return match;
    });
}
