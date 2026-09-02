export const navLinks = [
  { name: "홈", href: "/" },
  { name: "소개", href: "/#intro" },
  { name: "하는 일", href: "/#what-i-do" },
  { name: "Work", href: "/works" },
  { name: "Writing", href: "/blog" },
  { name: "Ideas", href: "/gallery" },
  { name: "회사소개", href: "/company" },
  { name: "Contact", href: "/#contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
