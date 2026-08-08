"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { Monogram } from "@/components/Monogram";
import { productIcon } from "@/components/nav/ProductIcons";
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
  style?: CSSProperties;
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
        className="relative flex h-full flex-col overflow-hidden rounded-[16px] bg-ink text-bg p-5 sm:p-6"
        style={style}
      >
        <Link
          href={L(`/products/${product.slug}`)}
          onClick={onNavigate}
          className="relative block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-bg/10">
                <Monogram className="h-5 w-5" />
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bg/55">
                {product.vertical}
              </span>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full border border-bg/25 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-bg">
              {labels.available}
            </span>
          </div>
          <h3 className="mt-5 text-xl font-semibold tracking-tight text-bg">
            {product.name}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bg/70">
            {product.oneLiner}
          </p>
        </Link>

        <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6">
          <Link
            href={L(`/quote?product=${product.slug}`)}
            onClick={onNavigate}
            className="inline-flex min-h-10 items-center rounded-full bg-bg px-4 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            {labels.requestQuote}
          </Link>
          <Link
            href={L(`/products/${product.slug}/pricing`)}
            onClick={onNavigate}
            className="inline-flex min-h-10 items-center rounded-full border border-bg/30 px-4 text-sm font-medium text-bg transition-colors hover:border-bg/60"
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
      className="group flex h-full flex-col rounded-[16px] border border-line bg-card p-4 transition-colors hover:bg-surface-2 hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-ink">{productIcon(product.slug, "h-5 w-5")}</span>
        <span className="text-muted-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M4 12 12 4M7 4h5v5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
      <h3 className="mt-3 text-[0.9375rem] font-semibold tracking-tight text-ink">
        {product.name}
      </h3>
      <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-muted">
        {product.oneLiner}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
          {product.vertical}
        </span>
        <span className="inline-flex items-center rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
          {available ? labels.available : labels.comingSoon}
        </span>
      </div>
    </Link>
  );
}
