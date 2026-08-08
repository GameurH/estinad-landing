"use client";

import Link from "next/link";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  solutionMegaIcon,
  solutionTintClass,
} from "@/components/nav/SolutionIcons";
import { lp, type Locale } from "@/lib/i18n-config";
import type { SolutionCard } from "@/lib/nav";

export type SolutionsMegaCard = {
  slug: string;
  icon: string;
  tint: string;
  category: string;
  title: string;
  body: string;
};

export type SolutionsMegaTab = {
  id: string;
  label: string;
  icon: string;
};

export type SolutionsMegaHighlight = {
  icon: string;
  title: string;
  body: string;
};

export type SolutionsMegaLabels = {
  intro: string;
  viewAll: string;
  eyebrow: string;
  title: string;
  body: string;
  highlights: SolutionsMegaHighlight[];
  helpTitle: string;
  helpBody: string;
  talkExpert: string;
  viewAllCta: string;
  trustTitle: string;
  trustBody: string;
  tabs: SolutionsMegaTab[];
  exploreCategory: string;
  exploreTitle: string;
  exploreBody: string;
  cards: Record<string, SolutionsMegaCard[]>;
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
  const defaultTab = labels.tabs[0]?.id ?? "business";
  const [tab, setTab] = useState(defaultTab);

  const knownSlugs = new Set(solutions.map((s) => s.slug));
  const activeCards = (labels.cards[tab] ?? labels.cards[defaultTab] ?? []).filter(
    (card) => knownSlugs.has(card.slug),
  );

  return (
    <div
      className="absolute start-0 end-0 top-full pt-3 z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`bg-card border border-line rounded-[20px] shadow-float overflow-hidden origin-top ${
          reduceMotion ? "" : "animate-mega-in"
        }`}
        role="menu"
        aria-label={labels.viewAll}
      >
        <div className="grid lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.6fr)]">
          {/* Left sidebar */}
          <div className="flex flex-col p-5 md:p-6 lg:border-e lg:border-line bg-surface/40">
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
              {labels.eyebrow}
            </p>
            <h3 className="mt-3 text-xl md:text-[1.35rem] font-semibold tracking-tight text-ink leading-snug [text-wrap:balance]">
              {labels.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{labels.body}</p>

            <ul className="mt-6 flex flex-col gap-3.5">
              {labels.highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 text-ink shrink-0">
                    {solutionMegaIcon(item.icon, "h-4 w-4")}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink">{item.title}</div>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <div className="rounded-[14px] border border-line bg-card p-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink">
                    {solutionMegaIcon("expert", "h-4 w-4")}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-ink">{labels.helpTitle}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {labels.helpBody}
                    </p>
                    <Link
                      href={L("/company/contact")}
                      onClick={onNavigate}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:opacity-70 transition-opacity"
                    >
                      {labels.talkExpert}
                      <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="flex flex-col p-4 md:p-5">
            <div
              className="flex flex-wrap gap-1.5 rounded-full border border-line bg-surface p-1"
              role="tablist"
              aria-label={labels.intro}
            >
              {labels.tabs.map((item) => {
                const active = item.id === tab;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(item.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition-colors ${
                      active
                        ? "bg-ink text-bg"
                        : "text-ink-secondary hover:text-ink hover:bg-card"
                    }`}
                  >
                    <span className={active ? "text-bg" : "text-muted"}>
                      {solutionMegaIcon(item.icon, "h-3.5 w-3.5")}
                    </span>
                    <span className="whitespace-nowrap">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {activeCards.map((card, i) => (
                <Link
                  key={`${tab}-${card.slug}`}
                  href={L(`/solutions/${card.slug}`)}
                  onClick={onNavigate}
                  className="group flex flex-col rounded-[16px] border border-line bg-card p-4 transition-colors hover:bg-surface-2 hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
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
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-[12px] ${
                        solutionTintClass[card.tint] ?? solutionTintClass.mute
                      }`}
                    >
                      {solutionMegaIcon(card.icon, "h-5 w-5")}
                    </span>
                    <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5">
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden
                      >
                        <path
                          d="M4 12 12 4M7 4h5v5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                    {card.category}
                  </div>
                  <h3 className="mt-1.5 text-[0.9375rem] font-semibold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                    {card.body}
                  </p>
                </Link>
              ))}

              <Link
                href={L("/solutions")}
                onClick={onNavigate}
                className="group flex flex-col rounded-[16px] border border-line bg-card p-4 transition-colors hover:bg-surface-2 hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                style={
                  reduceMotion
                    ? undefined
                    : {
                        animation: "mega-card-in 220ms ease-out both",
                        animationDelay: `${30 + activeCards.length * 24}ms`,
                      }
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-[12px] ${solutionTintClass.mute}`}
                  >
                    {solutionMegaIcon("more", "h-5 w-5")}
                  </span>
                  <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden
                    >
                      <path
                        d="M4 12 12 4M7 4h5v5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  {labels.exploreCategory}
                </div>
                <h3 className="mt-1.5 text-[0.9375rem] font-semibold tracking-tight text-ink">
                  {labels.exploreTitle}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                  {labels.exploreBody}
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-line px-5 md:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 bg-card">
          <Link
            href={L("/solutions")}
            onClick={onNavigate}
            className="inline-flex items-center gap-2.5 text-sm font-medium text-ink hover:opacity-70 transition-opacity"
          >
            <span className="text-muted">{solutionMegaIcon("grid", "h-4 w-4")}</span>
            {labels.viewAllCta}
            <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
          </Link>
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-muted shrink-0">
              {solutionMegaIcon("shield", "h-4 w-4")}
            </span>
            <div className="min-w-0">
              <div className="text-sm font-medium text-ink truncate">{labels.trustTitle}</div>
              <p className="text-xs text-muted truncate sm:whitespace-normal">
                {labels.trustBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
