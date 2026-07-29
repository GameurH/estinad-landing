"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Hero render float — the page's only perpetual motion.
 * ±8px over 7s; pauses off-screen and under reduced motion.
 */
export function Float({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "100px" });
  const reduce = useReducedMotion();
  const still = reduce || !inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={still ? { y: 0 } : { y: [0, -8, 0] }}
      transition={
        still
          ? { duration: 0.2 }
          : { duration: 7, ease: "easeInOut", repeat: Infinity }
      }
    >
      {children}
    </motion.div>
  );
}
