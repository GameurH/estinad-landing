"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { hardwareMegaIcon } from "@/components/nav/HardwareIcons";
import { lp, type Locale } from "@/lib/i18n-config";

export type HardwareNavKit = {
  slug: string;
  glyph: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
};

export type HardwareMegaSideLink = {
  icon: string;
  title: string;
  body: string;
  href: string;
};

export type HardwareMegaExplore = {
  title: string;
  body: string;
  href: string;
};

export type HardwareMegaLabels = {
  intro: string;
  kitsLabel: string;
  requestQuote: string;
  checkCompatibility: string;
  viewAll: string;
  quoteHref: string;
  compatibilityHref: string;
  eyebrow: string;
  title: string;
  body: string;
  assuranceTitle: string;
  assuranceBody: string;
  sideLinks: HardwareMegaSideLink[];
  exploreLabel: string;
  explore: HardwareMegaExplore[];
  expertTitle: string;
  expertBody: string;
  bannerTitle: string;
  bannerBody: string;
  bannerCta: string;
  contactHref: string;
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
  const bannerImage = kits[2] ?? kits[0];

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
        <div className="grid lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.35fr)_minmax(220px,0.75fr)]">
          {/* Left promo */}
          <div className="flex flex-col p-5 md:p-6 lg:border-e lg:border-line">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
              <span className="text-ink">{hardwareMegaIcon("check", "h-3.5 w-3.5")}</span>
              {labels.eyebrow}
            </div>
            <h3 className="mt-3 text-xl md:text-[1.35rem] font-semibold tracking-tight text-ink leading-snug [text-wrap:balance]">
              {labels.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{labels.body}</p>

            <div className="mt-6 flex flex-col gap-2">
              <Link
                href={L(labels.quoteHref)}
                onClick={onNavigate}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bg hover:bg-ink/85 transition-colors"
              >
                {labels.requestQuote}
                <span className="inline-block rtl:-scale-x-100 opacity-80">→</span>
              </Link>
              <Link
                href={L(labels.compatibilityHref)}
                onClick={onNavigate}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium text-ink hover:bg-surface transition-colors"
              >
                {labels.checkCompatibility}
                <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
              </Link>
            </div>

            <div className="mt-auto pt-6">
              <div className="rounded-[14px] border border-line bg-surface p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-ink shrink-0">
                    {hardwareMegaIcon("check", "h-4 w-4")}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink">{labels.assuranceTitle}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {labels.assuranceBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kit grid */}
          <div className="p-4 md:p-5 lg:border-e lg:border-line bg-surface/30">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rotate-45 border border-ink" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                {labels.kitsLabel}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {kits.map((kit, i) => (
                <Link
                  key={kit.slug}
                  href={L(`/hardware/${kit.slug}`)}
                  onClick={onNavigate}
                  className="group flex flex-col overflow-hidden rounded-[16px] border border-line bg-card transition-colors hover:border-line-strong hover:bg-surface-2"
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          animation: "mega-card-in 220ms ease-out both",
                          animationDelay: `${30 + i * 24}ms`,
                        }
                  }
                >
                  <div className="relative aspect-[4/3] bg-surface">
                    <span className="absolute start-3 top-3 z-10 font-mono text-[0.65rem] text-muted">
                      {kit.glyph}
                    </span>
                    <Image
                      src={kit.imageSrc}
                      alt={kit.imageAlt}
                      fill
                      sizes="220px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold tracking-tight text-ink">
                        {kit.shortName || kit.name}
                      </h3>
                      <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                        →
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                      {kit.tagline}
                    </p>
                    <div className="mt-auto pt-3 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-2">
                      {kit.category}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Side links */}
          <div className="flex flex-col gap-1 p-4 md:p-5">
            {labels.sideLinks.map((link) => (
              <Link
                key={link.title}
                href={L(link.href)}
                onClick={onNavigate}
                className="group flex items-start gap-3 rounded-[14px] p-3 transition-colors hover:bg-surface"
              >
                <span className="mt-0.5 text-ink shrink-0">
                  {hardwareMegaIcon(link.icon, "h-4 w-4")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-ink">{link.title}</span>
                    <span className="text-muted-2 text-xs transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                      →
                    </span>
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted">
                    {link.body}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Explore more */}
        <div className="border-t border-line px-4 md:px-5 py-4">
          <div className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
            {labels.exploreLabel}
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {labels.explore.map((item) => (
              <Link
                key={item.title}
                href={L(item.href)}
                onClick={onNavigate}
                className="rounded-[14px] border border-line bg-surface/50 px-4 py-3 transition-colors hover:bg-surface-2"
              >
                <div className="text-sm font-medium text-ink">{item.title}</div>
                <p className="mt-1 text-xs text-muted">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer banners */}
        <div className="border-t border-line p-4 md:p-5 grid gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
          <Link
            href={L(labels.contactHref)}
            onClick={onNavigate}
            className="group flex items-center gap-3 rounded-[16px] border border-line bg-card p-4 transition-colors hover:bg-surface"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink">
              {hardwareMegaIcon("expert", "h-4 w-4")}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-ink">{labels.expertTitle}</span>
              <span className="mt-0.5 block text-xs text-muted">{labels.expertBody}</span>
            </span>
            <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
              →
            </span>
          </Link>

          <div className="relative overflow-hidden rounded-[16px] bg-ink text-bg">
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 p-4 md:p-5">
              <div className="min-w-0 max-w-md flex items-start gap-3">
                {bannerImage ? (
                  <span className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-[10px] border border-bg/15 sm:block">
                    <Image
                      src={bannerImage.imageSrc}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                ) : null}
                <div>
                  <div className="text-sm font-semibold text-bg">{labels.bannerTitle}</div>
                  <p className="mt-1 text-xs leading-relaxed text-bg/70">
                    {labels.bannerBody}
                  </p>
                </div>
              </div>
              <Link
                href={L(labels.contactHref)}
                onClick={onNavigate}
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-bg px-4 text-sm font-medium text-ink hover:opacity-90 transition-opacity"
              >
                {labels.bannerCta}
                <span className="inline-block rtl:-scale-x-100 opacity-70">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
