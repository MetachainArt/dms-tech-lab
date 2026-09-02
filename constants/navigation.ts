// 모바일 메뉴 항목. 데스크탑 헤더(components/sections/Navbar.tsx 의 desktopLinks)와
// 같은 4개로 맞춘다. 회사소개·개인정보처리방침 등은 푸터에서 접근한다.
export const navLinks = [
  { name: "Work", href: "/works" },
  { name: "Writing", href: "/blog" },
  { name: "Ideas", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
