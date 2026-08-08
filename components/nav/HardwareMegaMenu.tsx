"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { MegaShell } from "@/components/nav/MegaShell";
import { lp, type Locale } from "@/lib/i18n-config";

export type HardwareNavKit = {
  slug: string;
  glyph: string;
  name: string;
  shortName: string;
  tagline: string;
};

export type HardwareMegaLabels = {
  intro: string;
  kitsLabel: string;
  requestQuote: string;
  checkCompatibility: string;
  viewAll: string;
  quoteHref: string;
  compatibilityHref: string;
};

type Props = {
  locale: Locale;
  kits: HardwareNavKit[];
  labels: HardwareMegaLabels;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function HardwareMegaMenu({
  locale,
  kits,
  labels,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const reduceMotion = useReducedMotion();

  return (
    <MegaShell
      locale={locale}
      intro={labels.intro}
      ariaLabel={labels.viewAll}
      onNavigate={onNavigate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      footerLinks={[
        { label: labels.viewAll, href: "/hardware" },
        { label: labels.requestQuote, href: labels.quoteHref },
      ]}
    >
      <div className="grid lg:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.7fr)]">
        <div className="lg:border-e lg:border-line p-3">
          <div className="overflow-hidden rounded-[14px] bg-ink text-bg p-5 h-full flex flex-col">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bg/55">
              ESTINAD Axis
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-bg">
              {labels.viewAll}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bg/70">
              {labels.intro}
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-8">
              <Link
                href={L(labels.quoteHref)}
                onClick={onNavigate}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-bg px-4 text-sm font-medium text-ink"
              >
                {labels.requestQuote}
              </Link>
              <Link
                href={L(labels.compatibilityHref)}
                onClick={onNavigate}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-bg/30 px-4 text-sm font-medium text-bg"
              >
                {labels.checkCompatibility}
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-surface/60">
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rotate-45 border border-muted-2" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                {labels.kitsLabel}
              </span>
            </div>
          </div>
          <div className="grid gap-px sm:grid-cols-2 hairline bg-line mx-3 mb-3 overflow-hidden rounded-[14px]">
            {kits.map((kit, i) => (
              <Link
                key={kit.slug}
                href={L(`/hardware/${kit.slug}`)}
                onClick={onNavigate}
                className="group bg-card p-4 hover:bg-surface-2 transition-colors"
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
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[0.65rem] text-muted-2">
                      {kit.glyph}
                    </span>
                    <h3 className="text-sm font-medium text-ink">{kit.shortName || kit.name}</h3>
                  </div>
                  <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                    <span className="inline-block rtl:-scale-x-100 text-xs">→</span>
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                  {kit.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MegaShell>
  );
}
