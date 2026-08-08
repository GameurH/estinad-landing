"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ProductNavCard } from "@/components/nav/ProductNavCard";
import { lp, type Locale } from "@/lib/i18n-config";
import type { ProductCard } from "@/lib/nav";

export type ProductsMegaLabels = {
  intro: string;
  groupAvailable: string;
  groupComingSoon: string;
  available: string;
  comingSoon: string;
  requestQuote: string;
  viewPricing: string;
  viewAllProducts: string;
  certifiedHardware: string;
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
  comingSoon,
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
        className={`bg-card hairline rounded-card shadow-float overflow-hidden origin-top ${
          reduceMotion ? "" : "animate-mega-in"
        }`}
        role="menu"
        aria-label={labels.viewAllProducts}
      >
        <div className="px-5 pt-4 pb-3 hairline-b">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
            {labels.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(280px,1.05fr)_minmax(0,1.6fr)]">
          <div className="lg:border-e lg:border-line">
            <div className="px-5 pt-4 pb-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 border border-ink" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                  {labels.groupAvailable}
                </span>
              </div>
            </div>
            <div className="px-3 pb-3">
              {featured ? (
                <div className="overflow-hidden rounded-[14px]">
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
                </div>
              ) : null}
            </div>
          </div>

          <div className="bg-surface/60">
            <div className="px-5 pt-4 pb-2">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 border border-muted-2" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                  {labels.groupComingSoon}
                </span>
              </div>
            </div>
            <div className="grid gap-px sm:grid-cols-2 xl:grid-cols-3 hairline bg-line mx-3 mb-3 overflow-hidden rounded-[14px]">
              {comingSoon.map((product, i) => (
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

        <div className="hairline-t px-5 py-3 flex flex-wrap items-center justify-between gap-3 bg-card">
          <Link
            href={L("/products")}
            onClick={onNavigate}
            className="text-xs font-mono uppercase tracking-[0.16em] text-ink hover:opacity-70 transition-opacity"
          >
            {labels.viewAllProducts}{" "}
            <span className="inline-block rtl:-scale-x-100">→</span>
          </Link>
          <Link
            href={L("/hardware")}
            onClick={onNavigate}
            className="text-xs font-mono uppercase tracking-[0.16em] text-muted hover:text-ink transition-colors"
          >
            {labels.certifiedHardware}{" "}
            <span className="inline-block rtl:-scale-x-100">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
