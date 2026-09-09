import { withoutLocale } from "@/lib/i18n";

const landingRoutes = new Set([
  "/", "/services", "/works", "/blog", "/about", "/company", "/contact",
]);

const publicRouteRoots = [
  "/services", "/works", "/blog", "/about", "/company", "/contact",
  "/gallery", "/fttx-training", "/education", "/apps", "/automation",
  "/prompts", "/vibe-coding", "/newsletter", "/survey", "/privacy",
  "/terms", "/data-deletion",
];

/** Keep the public art direction out of authentication and admin tools. */
export function isFiberRoute(pathname: string): boolean {
  pathname = withoutLocale(pathname);
  return pathname === "/" || publicRouteRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`),
  );
}

export function isFiberInteriorRoute(pathname: string): boolean {
  return isFiberRoute(pathname) && !landingRoutes.has(withoutLocale(pathname));
}
