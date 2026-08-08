"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ThemeToggle, type ThemeLabels } from "@/components/ThemeToggle";
import { ProductNavCard } from "@/components/nav/ProductNavCard";
import { locales, lp, type Locale } from "@/lib/i18n-config";
import type { ProductCard, SolutionCard } from "@/lib/nav";
import type { ProductsMegaLabels } from "@/components/nav/ProductsMegaMenu";
import type { HardwareMegaLabels, HardwareNavKit } from "@/components/nav/HardwareMegaMenu";
import type { MegaNavLink } from "@/components/nav/LinksMegaMenu";

type Section =
  | { kind: "products"; label: string; href: string }
  | { kind: "solutions"; label: string; href: string }
  | { kind: "hardware"; label: string; href: string }
  | { kind: "links"; label: string; href: string; links: MegaNavLink[]; intro: string; viewAllLabel: string };

type Props = {
  locale: Locale;
  sections: Section[];
  availableProducts: ProductCard[];
  comingSoonProducts: ProductCard[];
  solutions: SolutionCard[];
  hardwareKits: HardwareNavKit[];
  productsMega: ProductsMegaLabels;
  hardwareMega: HardwareMegaLabels;
  solutionsIntro: string;
  allSolutionsLabel: string;
  requestQuoteLabel: string;
  cardLabels: {
    available: string;
    comingSoon: string;
    requestQuote: string;
    viewPricing: string;
  };
  langLabels: { switchLabel: string; en: string; fr: string; ar: string };
  themeLabels: ThemeLabels;
  onClose: () => void;
  switchTo: (target: Locale) => string;
};

function AccordionHeader({
  label,
  href,
  expanded,
  onToggle,
  onNavigate,
  controlsId,
}: {
  label: string;
  href: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  controlsId: string;
}) {
  return (
    <div className="flex items-center gap-2 min-h-12">
      <Link
        href={href}
        onClick={onNavigate}
        className="flex-1 text-[1.05rem] font-semibold tracking-tight text-ink py-2"
      >
        {label}
      </Link>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={controlsId}
        onClick={onToggle}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full hairline text-ink transition-colors active:bg-surface-2"
        aria-label={expanded ? `Collapse ${label}` : `Expand ${label}`}
      >
        <span className={`text-sm transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
    </div>
  );
}

export function MobileNav({
  locale,
  sections,
  availableProducts,
  comingSoonProducts,
  solutions,
  hardwareKits,
  productsMega,
  hardwareMega,
  solutionsIntro,
  allSolutionsLabel,
  requestQuoteLabel,
  cardLabels,
  langLabels,
  themeLabels,
  onClose,
  switchTo,
}: Props) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [expanded, setExpanded] = useState<string>(sections[0]?.label ?? "");
  const L = (href: string) => lp(locale, href);

  const langLabel: Record<Locale, string> = {
    en: langLabels.en,
    fr: langLabels.fr,
    ar: langLabels.ar,
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const toggle = (label: string) => {
    setExpanded((cur) => (cur === label ? "" : label));
  };

  return (
    <div
      className={`lg:hidden fixed inset-0 z-40 bg-bg/95 backdrop-blur-md ${
        reduceMotion ? "" : "animate-mega-in"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-full flex-col pt-[4.75rem]">
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-36">
          <div className="mx-auto max-w-lg flex flex-col gap-1">
            {sections.map((section) => {
              const isOpen = expanded === section.label;
              const panelId = `${baseId}-${section.label}`;

              return (
                <div key={section.label} className="hairline-b">
                  <AccordionHeader
                    label={section.label}
                    href={L(section.href)}
                    expanded={isOpen}
                    onToggle={() => toggle(section.label)}
                    onNavigate={onClose}
                    controlsId={panelId}
                  />

                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      {section.kind === "products" && (
                        <div className="flex flex-col gap-4 pt-1">
                          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted leading-relaxed">
                            {productsMega.intro}
                          </p>
                          {availableProducts.map((product) => (
                            <div
                              key={product.slug}
                              className="overflow-hidden rounded-[16px] shadow-card"
                            >
                              <ProductNavCard
                                product={product}
                                locale={locale}
                                labels={cardLabels}
                                variant="featured"
                                onNavigate={onClose}
                              />
                            </div>
                          ))}
                          <div>
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                                {productsMega.groupComingSoon}
                              </span>
                              <span className="text-[11px] font-mono text-muted-2">
                                {comingSoonProducts.length}
                              </span>
                            </div>
                            <div className="-mx-1 flex gap-2 overflow-x-auto snap-x snap-mandatory pb-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                              {comingSoonProducts.map((product) => (
                                <Link
                                  key={product.slug}
                                  href={L(`/products/${product.slug}`)}
                                  onClick={onClose}
                                  className="snap-start shrink-0 w-[min(72vw,240px)] rounded-[14px] hairline bg-card p-4 active:bg-surface-2 transition-colors"
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-sm font-medium text-ink leading-snug">
                                      {product.name}
                                    </h3>
                                    <span className="inline-block rtl:-scale-x-100 text-muted-2 text-xs">
                                      →
                                    </span>
                                  </div>
                                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                                    {product.oneLiner}
                                  </p>
                                  <div className="mt-3 inline-flex items-center font-mono text-[0.62rem] uppercase tracking-[0.16em] hairline px-2 py-0.5 text-muted-2">
                                    {cardLabels.comingSoon}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <Link
                            href={L("/products")}
                            onClick={onClose}
                            className="inline-flex min-h-11 items-center text-xs font-mono uppercase tracking-[0.16em] text-ink"
                          >
                            {productsMega.viewAllProducts}
                          </Link>
                        </div>
                      )}

                      {section.kind === "solutions" && (
                        <div className="flex flex-col gap-3 pt-1">
                          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                            {solutionsIntro}
                          </p>
                          <div className="grid gap-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.slug}
                                href={L(`/solutions/${solution.slug}`)}
                                onClick={onClose}
                                className="rounded-[14px] hairline bg-card p-4 active:bg-surface-2 transition-colors"
                              >
                                <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-2">
                                  {solution.audience}
                                </div>
                                <div className="mt-1 flex items-center justify-between gap-3">
                                  <h3 className="text-sm font-medium text-ink">{solution.name}</h3>
                                  <span className="inline-block rtl:-scale-x-100 text-muted-2 text-xs">
                                    →
                                  </span>
                                </div>
                                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                                  {solution.summary}
                                </p>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href={L("/solutions")}
                            onClick={onClose}
                            className="inline-flex min-h-11 items-center text-xs font-mono uppercase tracking-[0.16em] text-ink"
                          >
                            {allSolutionsLabel}{" "}
                            <span className="inline-block rtl:-scale-x-100 ms-1">→</span>
                          </Link>
                        </div>
                      )}

                      {section.kind === "hardware" && (
                        <div className="flex flex-col gap-3 pt-1">
                          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                            {hardwareMega.intro}
                          </p>
                          <div className="overflow-hidden rounded-[16px] bg-ink text-bg p-5">
                            <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bg/55">
                              ESTINAD Axis
                            </div>
                            <h3 className="mt-2 text-lg font-semibold text-bg">
                              {hardwareMega.viewAll}
                            </h3>
                            <div className="mt-5 flex flex-col gap-2">
                              <Link
                                href={L(hardwareMega.quoteHref)}
                                onClick={onClose}
                                className="inline-flex min-h-11 items-center justify-center rounded-full bg-bg px-4 text-sm font-medium text-ink"
                              >
                                {hardwareMega.requestQuote}
                              </Link>
                              <Link
                                href={L(hardwareMega.compatibilityHref)}
                                onClick={onClose}
                                className="inline-flex min-h-11 items-center justify-center rounded-full border border-bg/30 px-4 text-sm font-medium text-bg"
                              >
                                {hardwareMega.checkCompatibility}
                              </Link>
                            </div>
                          </div>
                          <div className="-mx-1 flex gap-2 overflow-x-auto snap-x snap-mandatory pb-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {hardwareKits.map((kit) => (
                              <Link
                                key={kit.slug}
                                href={L(`/hardware/${kit.slug}`)}
                                onClick={onClose}
                                className="snap-start shrink-0 w-[min(72vw,240px)] rounded-[14px] hairline bg-card p-4 active:bg-surface-2 transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-[0.65rem] text-muted-2">
                                    {kit.glyph}
                                  </span>
                                  <h3 className="text-sm font-medium text-ink">
                                    {kit.shortName || kit.name}
                                  </h3>
                                </div>
                                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                                  {kit.tagline}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.kind === "links" && (
                        <div className="flex flex-col gap-3 pt-1">
                          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                            {section.intro}
                          </p>
                          <div className="grid gap-2">
                            {section.links.map((link) => (
                              <Link
                                key={link.href}
                                href={L(link.href)}
                                onClick={onClose}
                                className={`rounded-[14px] p-4 transition-colors ${
                                  link.featured
                                    ? "bg-ink text-bg"
                                    : "hairline bg-card active:bg-surface-2"
                                }`}
                              >
                                {link.meta ? (
                                  <div
                                    className={`font-mono text-[0.62rem] uppercase tracking-[0.16em] ${
                                      link.featured ? "text-bg/55" : "text-muted-2"
                                    }`}
                                  >
                                    {link.meta}
                                  </div>
                                ) : null}
                                <div className="mt-1 flex items-center justify-between gap-3">
                                  <h3
                                    className={`text-sm font-medium ${
                                      link.featured ? "text-bg" : "text-ink"
                                    }`}
                                  >
                                    {link.label}
                                  </h3>
                                  <span
                                    className={`inline-block rtl:-scale-x-100 text-xs ${
                                      link.featured ? "text-bg/60" : "text-muted-2"
                                    }`}
                                  >
                                    →
                                  </span>
                                </div>
                                {link.desc ? (
                                  <p
                                    className={`mt-1.5 line-clamp-2 text-xs leading-relaxed ${
                                      link.featured ? "text-bg/70" : "text-muted"
                                    }`}
                                  >
                                    {link.desc}
                                  </p>
                                ) : null}
                              </Link>
                            ))}
                          </div>
                          <Link
                            href={L(section.href)}
                            onClick={onClose}
                            className="inline-flex min-h-11 items-center text-xs font-mono uppercase tracking-[0.16em] text-ink"
                          >
                            {section.viewAllLabel}{" "}
                            <span className="inline-block rtl:-scale-x-100 ms-1">→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-5 pb-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-3">
                {langLabels.switchLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchTo(l)}
                    onClick={onClose}
                    className={`inline-flex min-h-11 items-center px-4 rounded-full text-sm border transition-colors ${
                      l === locale
                        ? "text-ink border-ink bg-surface-2"
                        : "text-muted border-line"
                    }`}
                  >
                    {langLabel[l]}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <ThemeToggle labels={themeLabels} />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 bg-gradient-to-t from-bg via-bg/95 to-transparent">
          <div className="pointer-events-auto mx-auto max-w-lg">
            <Link
              href={L("/quote")}
              onClick={onClose}
              className="flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-[0.9375rem] font-medium text-bg shadow-float active:scale-[0.98] transition-transform"
            >
              {requestQuoteLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
