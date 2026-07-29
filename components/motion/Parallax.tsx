"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useCallback, type PointerEvent, type ReactNode } from "react";

/**
 * Pointer parallax — spring-damped ±strength px following the cursor.
 * Mouse-only (fine pointer), springs back to rest on leave,
 * fully disabled under reduced motion.
 */
export function Parallax({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  const onMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (reduce || e.pointerType !== "mouse") return;
      const r = e.currentTarget.getBoundingClientRect();
      x.set(((e.clientX - r.left) / r.width - 0.5) * 2 * strength);
      y.set(((e.clientY - r.top) / r.height - 0.5) * 2 * strength);
    },
    [reduce, strength, x, y],
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}
