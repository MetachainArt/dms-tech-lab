"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./FiberMotion.module.css";
import interiorStyles from "./FiberInterior.module.css";
import { isFiberRoute, isFiberInteriorRoute } from "./fiber-routes";

export default function FiberMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const scope = useRef<HTMLDivElement>(null);
  const active = isFiberRoute(pathname);
  const interior = isFiberInteriorRoute(pathname);

  useEffect(() => {
    if (!active || reduceMotion || !scope.current) return;
    const targets = scope.current.querySelectorAll<HTMLElement>("main > section:not(#hero), main > header");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.animate(
          [{ opacity: 0.45, translate: "0 22px" }, { opacity: 1, translate: "0 0" }],
          { duration: 800, easing: "cubic-bezier(.22, .61, .36, 1)", fill: "none" }
        );
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname, active, reduceMotion]);

  return (
    <motion.div
      ref={scope}
      key={pathname}
      className={active ? `${styles.universe} ${interior ? interiorStyles.interior : ""}` : undefined}
      initial={false}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
