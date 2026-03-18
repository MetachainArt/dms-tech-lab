export const navLinks = [
  { name: "홈", href: "/" },
  { name: "소개", href: "/#intro" },
  { name: "하는 일", href: "/#what-i-do" },
  { name: "작업", href: "/works" },
  { name: "글", href: "/blog" },
  { name: "문의", href: "/#contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
