"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { hardwareMegaIcon } from "@/components/nav/HardwareIcons";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import type {
  HardwareMegaNav,
  HardwareMegaNavCategory,
} from "@/lib/hardware-mega-nav";
import { lp, type Locale } from "@/lib/i18n-config";

export type HardwareMegaLabels = {
  intro: string;
  eyebrow: string;
  title: string;
  body: string;
  categoriesLabel: string;
  featuredLabel: string;
  viewCatalog: string;
  catalogHref: string;
  requestQuote: string;
  quoteHref: string;
  checkCompatibility: string;
  compatibilityHref: string;
  emptyHint: string;
};

type Props = {
  locale: Locale;
  nav: HardwareMegaNav;
  labels: HardwareMegaLabels;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function categoryGlyph(pbId: string | null) {
  const key = (pbId || "").toLowerCase();
  if (key.includes("printer") || key.includes("receipt")) return "standards";
  if (key.includes("terminal") || key.includes("pos")) return "overview";
  if (key.includes("card") || key.includes("payment")) return "lifecycle";
  if (key.includes("drawer") || key.includes("cash")) return "check";
  if (key.includes("scanner") || key.includes("barcode")) return "compat";
  return "overview";
}

function CategoryRow({
  category,
  href,
  onNavigate,
  delayMs,
  reduceMotion,
}: {
  category: HardwareMegaNavCategory;
  href: string;
  onNavigate: () => void;
  delayMs: number;
  reduceMotion: boolean | null;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group flex items-center gap-3 rounded-[12px] px-2.5 py-2.5 transition-colors hover:bg-surface"
      style={
        reduceMotion
          ? undefined
          : {
              animation: "mega-card-in 200ms ease-out both",
              animationDelay: `${delayMs}ms`,
            }
      }
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-line bg-card text-ink">
        {hardwareMegaIcon(categoryGlyph(category.pbId), "h-4 w-4")}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-ink truncate">
          {category.name}
        </span>
        <span className="mt-0.5 block font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
          {category.count}
        </span>
      </span>
      <span className="text-muted-2 text-sm transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function HardwareMegaMenu({
  locale,
  nav,
  labels,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const reduceMotion = useReducedMotion();
  const hasLive = nav.categories.length > 0 || nav.featured.length > 0;

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
        aria-label={labels.viewCatalog}
      >
        <div className="grid lg:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.4fr)]">
          {/* Brand + categories */}
          <div className="flex flex-col p-5 md:p-6 lg:border-e lg:border-line">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
              <span className="text-ink">
                {hardwareMegaIcon("check", "h-3.5 w-3.5")}
              </span>
              {labels.eyebrow}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink leading-snug [text-wrap:balance]">
              {labels.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted max-w-sm">
              {labels.body}
            </p>

            {nav.categories.length > 0 ? (
              <div className="mt-6">
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rotate-45 border border-ink" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                    {labels.categoriesLabel}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  {nav.categories.map((category, i) => (
                    <CategoryRow
                      key={category.id}
                      category={category}
                      href={L(category.href)}
                      onNavigate={onNavigate}
                      delayMs={20 + i * 28}
                      reduceMotion={reduceMotion}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p className="mt-6 text-sm text-muted">{labels.emptyHint}</p>
            )}

            <div className="mt-auto pt-6 flex flex-col gap-2">
              <Link
                href={L(labels.catalogHref)}
                onClick={onNavigate}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bg hover:bg-ink/85 transition-colors"
              >
                {labels.viewCatalog}
                <span className="inline-block rtl:-scale-x-100 opacity-80">
                  →
                </span>
              </Link>
              <Link
                href={L(labels.quoteHref)}
                onClick={onNavigate}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium text-ink hover:bg-surface transition-colors"
              >
                {labels.requestQuote}
              </Link>
            </div>
          </div>

          {/* Featured products */}
          <div className="p-5 md:p-6 bg-surface/25 flex flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rotate-45 border border-ink" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                  {labels.featuredLabel}
                </span>
              </div>
              <Link
                href={L(labels.compatibilityHref)}
                onClick={onNavigate}
                className="text-xs text-ink-secondary hover:text-ink underline underline-offset-2"
              >
                {labels.checkCompatibility}
              </Link>
            </div>

            {hasLive && nav.featured.length > 0 ? (
              <ul className="flex flex-col gap-2.5 flex-1">
                {nav.featured.map((product, i) => (
                  <li key={product.id}>
                    <Link
                      href={L(product.href)}
                      onClick={onNavigate}
                      className="group flex items-center gap-3.5 rounded-[14px] border border-line bg-card p-2.5 pe-3.5 transition-colors hover:border-line-strong hover:bg-surface"
                      style={
                        reduceMotion
                          ? undefined
                          : {
                              animation: "mega-card-in 220ms ease-out both",
                              animationDelay: `${40 + i * 36}ms`,
                            }
                      }
                    >
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[10px] bg-surface border border-line">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <span className="absolute inset-0 grid-backdrop opacity-40" />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        {(product.brand || product.categoryName) && (
                          <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted truncate">
                            {product.brand || product.categoryName}
                          </span>
                        )}
                        <span className="mt-1 block text-sm font-semibold text-ink line-clamp-2 leading-snug">
                          {product.name}
                        </span>
                        <span className="mt-1.5 block text-sm text-ink-secondary">
                          {formatMoneyMinor(
                            product.price,
                            product.currency,
                            locale,
                          )}
                        </span>
                      </span>
                      <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-1 items-center">
                <p className="text-sm text-muted max-w-sm">{labels.emptyHint}</p>
              </div>
            )}

            <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.16em] text-muted leading-relaxed">
              {labels.intro}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
