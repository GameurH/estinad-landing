"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { Monogram } from "@/components/Monogram";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { productIcon } from "@/components/nav/ProductIcons";
import {
  lp,
  productHref,
  productPricingHref,
  type Locale,
  type ProductStatus,
} from "@/lib/i18n-config";
import type { ProductCard } from "@/lib/nav";

type Labels = {
  statuses: Record<ProductStatus, string>;
  requestQuote: string;
  viewPricing: string;
  currentLabel: string;
};

type Props = {
  product: ProductCard;
  locale: Locale;
  labels: Labels;
  variant: "featured" | "compact";
  /** Product page the visitor is already viewing. */
  current?: boolean;
  onNavigate?: () => void;
  style?: CSSProperties;
};

function StatusOrCurrent({
  product,
  labels,
  current,
  tone,
  showDot = true,
}: {
  product: ProductCard;
  labels: Labels;
  current?: boolean;
  tone?: "default" | "inverse";
  showDot?: boolean;
}) {
  if (current) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border font-mono uppercase px-2.5 py-0.5 text-[0.62rem] tracking-[0.16em] ${
          tone === "inverse"
            ? "border-bg/35 bg-bg/10 text-bg"
            : "border-line-strong bg-surface-2 text-ink"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
            tone === "inverse" ? "bg-bg" : "bg-ink"
          }`}
          aria-hidden
        />
        {labels.currentLabel}
      </span>
    );
  }

  return (
    <ProductStatusBadge
      status={product.status}
      label={labels.statuses[product.status]}
      size="sm"
      tone={tone}
      showDot={showDot}
    />
  );
}

export function ProductNavCard({
  product,
  locale,
  labels,
  variant,
  current = false,
  onNavigate,
  style,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const isAvailable = product.status === "available";
  /** Only commercially available products navigate from the mega menu. */
  const canNavigate = isAvailable && !current;

  if (variant === "featured") {
    const titleBlock = (
      <>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-bg/10">
              <Monogram className="h-5 w-5" />
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-bg/55">
              {product.vertical}
            </span>
          </div>
          <StatusOrCurrent
            product={product}
            labels={labels}
            current={current}
            tone="inverse"
          />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-bg">
          {product.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-bg/70">
          {product.oneLiner}
        </p>
      </>
    );

    return (
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[16px] bg-ink text-bg p-5 sm:p-6"
        style={style}
        aria-current={current ? "page" : undefined}
      >
        {canNavigate ? (
          <Link
            href={L(productHref(product.slug))}
            onClick={onNavigate}
            className="relative block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
          >
            {titleBlock}
          </Link>
        ) : (
          <div className="relative block">{titleBlock}</div>
        )}

        {isAvailable ? (
          <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6">
            <Link
              href={L(`/quote?product=${product.slug}`)}
              onClick={onNavigate}
              className="inline-flex min-h-10 items-center rounded-full bg-bg px-4 text-sm font-medium text-ink transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
            >
              {labels.requestQuote}
            </Link>
            <Link
              href={L(productPricingHref(product.slug))}
              onClick={onNavigate}
              className="inline-flex min-h-10 items-center rounded-full border border-bg/30 px-4 text-sm font-medium text-bg transition-colors hover:border-bg/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg"
            >
              {labels.viewPricing}
            </Link>
          </div>
        ) : null}
      </div>
    );
  }

  const compactBody = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="text-ink">{productIcon(product.slug, "h-5 w-5")}</span>
        {canNavigate ? (
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
        ) : (
          <span className="sr-only">
            {current ? labels.currentLabel : labels.statuses[product.status]}
          </span>
        )}
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
        <StatusOrCurrent
          product={product}
          labels={labels}
          current={current}
          showDot={false}
        />
      </div>
    </>
  );

  const compactClass = `group flex h-full flex-col rounded-[16px] border bg-card p-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
    current
      ? "border-ink/30 bg-surface"
      : canNavigate
        ? "border-line hover:bg-surface-2 hover:border-line-strong"
        : "border-line"
  }`;

  if (canNavigate) {
    return (
      <Link
        href={L(productHref(product.slug))}
        onClick={onNavigate}
        style={style}
        className={compactClass}
      >
        {compactBody}
      </Link>
    );
  }

  return (
    <div
      style={style}
      className={compactClass}
      aria-current={current ? "page" : undefined}
      aria-disabled={!isAvailable ? true : undefined}
    >
      {compactBody}
    </div>
  );
}
