"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";

type DemoTab = {
  id: string;
  label: string;
  headline: string;
  body: string;
  metrics: string[];
};

const TAB_IMAGES: Record<string, string> = {
  retail: "/images/v2/ui-retail.png",
  restaurant: "/images/v2/ui-restaurant.png",
  clinic: "/images/v2/ui-clinic.png",
};

const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

/**
 * Interactive demo — sector tabs crossfade the interface render inside
 * one glass frame. Crossfade only: no page navigation, no layout shift.
 */
export function DemoTabs({
  tabs,
  captions,
}: {
  tabs: DemoTab[];
  captions: Record<string, string>;
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = tabs[active];

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      setActive((i) => (i + dir + tabs.length) % tabs.length);
    },
    [tabs.length],
  );

  return (
    <div>
      {/* Tab pills */}
      <div
        role="tablist"
        aria-label="Sectors"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-2"
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`h-10 px-5 rounded-full text-sm font-medium transition-colors duration-150 ${
                selected
                  ? "bg-ink text-bg"
                  : "text-ink-secondary border border-line-strong hover:text-ink hover:border-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* Text column — swaps with the tab */}
        <div role="tabpanel" className="min-h-[16rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0.12 : 0.3, ease: EASE_IN_OUT }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                {current.headline}
              </h3>
              <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-ink-secondary">
                {current.body}
              </p>
              <ul className="mt-8 max-w-md">
                {current.metrics.map((m) => (
                  <li
                    key={m}
                    className="hairline-t py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-secondary"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Frame — three renders stacked, opacity-crossfaded */}
        <figure className="glass rounded-frame shadow-lift p-2 md:p-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-surface">
            {tabs.map((t, i) => (
              <motion.div
                key={t.id}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: i === active ? 1 : 0 }}
                transition={{ duration: reduce ? 0.12 : 0.35, ease: EASE_IN_OUT }}
                aria-hidden={i !== active}
              >
                <Image
                  src={TAB_IMAGES[t.id]}
                  alt={captions[t.id]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            ))}
          </div>
          <figcaption className="px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {captions[current.id]}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
