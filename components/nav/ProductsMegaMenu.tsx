"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ProductNavCard } from "@/components/nav/ProductNavCard";
import { productIcon } from "@/components/nav/ProductIcons";
import { lp, PRODUCTS_HUB_HREF, type Locale } from "@/lib/i18n-config";
import type { ProductCard } from "@/lib/nav";

export type ProductsMegaHighlight = {
  icon: string;
  title: string;
  body: string;
};

export type ProductsMegaLabels = {
  intro: string;
  groupAvailable: string;
  groupPortfolio: string;
  statuses: Record<
    import("@/lib/i18n-config").ProductStatus,
    string
  >;
  requestQuote: string;
  viewPricing: string;
  viewAllProducts: string;
  highlights: ProductsMegaHighlight[];
  helpTitle: string;
  helpBody: string;
  talkExpert: string;
};

type Props = {
  locale: Locale;
  available: ProductCard[];
  comingSoon: ProductCard[];
  labels: ProductsMegaLabels;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function ProductsMegaMenu({
  locale,
  available,
  comingSoon: portfolio,
  labels,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const reduceMotion = useReducedMotion();
  const featured = available[0];

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
        aria-label={labels.viewAllProducts}
      >
        {/* Top banner */}
        <div className="px-5 md:px-6 py-3 bg-surface border-b border-line">
          <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.18em] text-muted leading-relaxed">
            {labels.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(300px,0.95fr)_minmax(0,1.55fr)]">
          {/* Available now */}
          <div className="p-4 md:p-5 lg:border-e lg:border-line flex flex-col">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rotate-45 border border-ink" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                {labels.groupAvailable}
              </span>
            </div>

            {featured ? (
              <ProductNavCard
                product={featured}
                locale={locale}
                labels={labels}
                variant="featured"
                onNavigate={onNavigate}
                style={
                  reduceMotion
                    ? undefined
                    : { animation: "mega-card-in 220ms ease-out both" }
                }
              />
            ) : null}

            <ul className="mt-5 flex flex-col gap-3.5">
              {labels.highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 text-ink shrink-0">
                    {productIcon(item.icon, "h-4 w-4")}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink">{item.title}</div>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href={L(PRODUCTS_HUB_HREF)}
              onClick={onNavigate}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:opacity-70 transition-opacity"
            >
              {labels.viewAllProducts}
              <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
            </Link>
          </div>

          {/* Portfolio */}
          <div className="p-4 md:p-5 bg-surface/40">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rotate-45 border border-muted-2" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                {labels.groupPortfolio}
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {portfolio.map((product, i) => (
                <ProductNavCard
                  key={product.slug}
                  product={product}
                  locale={locale}
                  labels={labels}
                  variant="compact"
                  onNavigate={onNavigate}
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          animation: "mega-card-in 220ms ease-out both",
                          animationDelay: `${40 + i * 28}ms`,
                        }
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Help footer */}
        <div className="border-t border-line px-5 md:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 bg-card">
          <div className="flex items-center gap-3 min-w-0">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink">
              {productIcon("help", "h-4 w-4")}
            </span>
            <div className="min-w-0">
              <div className="text-sm font-medium text-ink">{labels.helpTitle}</div>
              <p className="text-xs text-muted truncate sm:whitespace-normal">
                {labels.helpBody}
              </p>
            </div>
          </div>
          <Link
            href={L("/company/contact")}
            onClick={onNavigate}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:opacity-70 transition-opacity"
          >
            <span className="text-muted">{productIcon("expert", "h-4 w-4")}</span>
            {labels.talkExpert}
            <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
