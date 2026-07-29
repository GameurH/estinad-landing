"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/**
 * The Quiet Reveal — opacity + 16px rise + 6px blur clearing, once,
 * when the section enters the viewport. Reduced motion collapses
 * to an instant opacity crossfade.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0.15 : 0.7, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
