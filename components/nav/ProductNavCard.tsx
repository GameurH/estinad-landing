"use client";

import Link from "next/link";
import { Monogram } from "@/components/Monogram";
import { lp, type Locale } from "@/lib/i18n-config";
import type { ProductCard } from "@/lib/nav";

type Labels = {
  available: string;
  comingSoon: string;
  requestQuote: string;
  viewPricing: string;
};

type Props = {
  product: ProductCard;
  locale: Locale;
  labels: Labels;
  variant: "featured" | "compact";
  onNavigate?: () => void;
  style?: React.CSSProperties;
};

export function ProductNavCard({
  product,
  locale,
  labels,
  variant,
  onNavigate,
  style,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const available = product.availability === "available";

  if (variant === "featured") {
    return (
      <div
        className="relative flex h-full flex-col overflow-hidden bg-ink text-bg p-5 sm:p-6 md:p-7"
        style={style}
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden>
          <div className="absolute -end-10 -top-12 h-44 w-44 rounded-full bg-bg blur-3xl" />
          <div className="absolute inset-0 grid-fine" />
        </div>

        <Link
          href={L(`/products/${product.slug}`)}
          onClick={onNavigate}
          className="relative block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] bg-bg/10">
                <Monogram className="h-5 w-5 text-bg" />
              </span>
              <div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bg/55">
                  {product.vertical}
                </div>
                <h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-bg">
                  {product.name}
                </h3>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center font-mono text-[0.65rem] uppercase tracking-[0.18em] border border-bg/25 px-2.5 py-1 text-bg">
              {labels.available}
            </span>
          </div>
          <p className="mt-4 sm:mt-5 line-clamp-2 sm:line-clamp-3 text-sm leading-relaxed text-bg/70">
            {product.oneLiner}
          </p>
        </Link>

        <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6 sm:pt-8">
          <Link
            href={L(`/quote?product=${product.slug}`)}
            onClick={onNavigate}
            className="inline-flex min-h-11 items-center rounded-full bg-bg px-4 text-sm font-medium text-ink transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            {labels.requestQuote}
          </Link>
          <Link
            href={L(`/products/${product.slug}/pricing`)}
            onClick={onNavigate}
            className="inline-flex min-h-11 items-center rounded-full border border-bg/30 px-4 text-sm font-medium text-bg transition-colors hover:border-bg/60 active:scale-[0.98]"
          >
            {labels.viewPricing}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={L(`/products/${product.slug}`)}
      onClick={onNavigate}
      style={style}
      className="group relative flex h-full flex-col bg-card p-4 transition-colors hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <Monogram className="h-4 w-4 shrink-0 text-muted" />
          <h3 className="truncate text-sm font-medium text-ink">{product.name}</h3>
        </div>
        <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
          <span className="inline-block rtl:-scale-x-100 text-xs">→</span>
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
        {product.oneLiner}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-2">
          {product.vertical}
        </span>
        <span className="inline-flex items-center font-mono text-[0.62rem] uppercase tracking-[0.16em] hairline px-2 py-0.5 text-muted-2">
          {available ? labels.available : labels.comingSoon}
        </span>
      </div>
    </Link>
  );
}
