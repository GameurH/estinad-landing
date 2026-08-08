"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { lp, type Locale } from "@/lib/i18n-config";
import type { SolutionCard } from "@/lib/nav";

export type SolutionsMegaLabels = {
  intro: string;
  viewAll: string;
};

type Props = {
  locale: Locale;
  solutions: SolutionCard[];
  labels: SolutionsMegaLabels;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function SolutionsMegaMenu({
  locale,
  solutions,
  labels,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="absolute start-0 end-0 top-full pt-3 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`bg-card hairline rounded-card shadow-float overflow-hidden origin-top ${
          reduceMotion ? "" : "animate-mega-in"
        }`}
        role="menu"
        aria-label={labels.viewAll}
      >
        <div className="px-5 pt-4 pb-3 hairline-b">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
            {labels.intro}
          </p>
        </div>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 hairline bg-line m-3 overflow-hidden rounded-[14px]">
          {solutions.map((solution, i) => (
            <Link
              key={solution.slug}
              href={L(`/solutions/${solution.slug}`)}
              onClick={onNavigate}
              className="group bg-card p-4 hover:bg-surface-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
              style={
                reduceMotion
                  ? undefined
                  : {
                      animation: "mega-card-in 220ms ease-out both",
                      animationDelay: `${30 + i * 24}ms`,
                    }
              }
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-2">
                    {solution.audience}
                  </div>
                  <h3 className="mt-1.5 text-sm font-medium text-ink">{solution.name}</h3>
                </div>
                <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                  <span className="inline-block rtl:-scale-x-100 text-xs">→</span>
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                {solution.summary}
              </p>
            </Link>
          ))}
        </div>

        <div className="hairline-t px-5 py-3">
          <Link
            href={L("/solutions")}
            onClick={onNavigate}
            className="text-xs font-mono uppercase tracking-[0.16em] text-ink hover:opacity-70 transition-opacity"
          >
            {labels.viewAll}{" "}
            <span className="inline-block rtl:-scale-x-100">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
