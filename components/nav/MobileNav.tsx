"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ThemeToggle, type ThemeLabels } from "@/components/ThemeToggle";
import { ProductNavCard } from "@/components/nav/ProductNavCard";
import { productIcon } from "@/components/nav/ProductIcons";
import { navSectionIcon } from "@/components/nav/NavSectionIcons";
import { solutionMegaIcon, solutionTintClass } from "@/components/nav/SolutionIcons";
import { hardwareMegaIcon } from "@/components/nav/HardwareIcons";
import { locales, lp, type Locale } from "@/lib/i18n-config";
import type { ProductCard, SolutionCard } from "@/lib/nav";
import type { ProductsMegaLabels } from "@/components/nav/ProductsMegaMenu";
import type { SolutionsMegaLabels } from "@/components/nav/SolutionsMegaMenu";
import type { HardwareMegaLabels, HardwareNavKit } from "@/components/nav/HardwareMegaMenu";
import type { MegaNavLink } from "@/components/nav/LinksMegaMenu";

type SectionKind = "products" | "solutions" | "hardware" | "resources" | "company";

type Section =
  | { kind: "products"; label: string; href: string; desc: string }
  | { kind: "solutions"; label: string; href: string; desc: string }
  | { kind: "hardware"; label: string; href: string; desc: string }
  | {
      kind: "links";
      sectionKind: "resources" | "company";
      label: string;
      href: string;
      desc: string;
      links: MegaNavLink[];
      intro: string;
      viewAllLabel: string;
    };

type Props = {
  locale: Locale;
  sections: Section[];
  availableProducts: ProductCard[];
  comingSoonProducts: ProductCard[];
  solutions: SolutionCard[];
  hardwareKits: HardwareNavKit[];
  productsMega: ProductsMegaLabels;
  solutionsMega: SolutionsMegaLabels;
  hardwareMega: HardwareMegaLabels;
  requestQuoteLabel: string;
  trustLine: string;
  themeSectionLabel: string;
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

function iconForSection(section: Section) {
  if (section.kind === "links") return section.sectionKind;
  return section.kind as SectionKind;
}

function AccordionCard({
  label,
  desc,
  icon,
  expanded,
  onToggle,
  controlsId,
  children,
}: {
  label: string;
  desc: string;
  icon: SectionKind;
  expanded: boolean;
  onToggle: () => void;
  controlsId: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[18px] border border-line bg-card overflow-hidden transition-colors ${
        expanded ? "border-line-strong" : ""
      }`}
    >
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={controlsId}
        onClick={onToggle}
        className="flex w-full items-center gap-3.5 px-4 py-3.5 text-start active:bg-surface-2/60 transition-colors"
      >
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-line bg-surface text-ink">
          {navSectionIcon(icon, "h-5 w-5")}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[1.05rem] font-semibold tracking-tight text-ink leading-tight">
            {label}
          </span>
          <span className="mt-0.5 block text-sm text-muted leading-snug">{desc}</span>
        </span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center text-muted transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        id={controlsId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden min-h-0">
          <div className="border-t border-line px-4 pb-4 pt-3">{children}</div>
        </div>
      </div>
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
  solutionsMega,
  hardwareMega,
  requestQuoteLabel,
  trustLine,
  themeSectionLabel,
  cardLabels,
  langLabels,
  themeLabels,
  onClose,
  switchTo,
}: Props) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [expanded, setExpanded] = useState<string>("");
  const L = (href: string) => lp(locale, href);

  const langLabel: Record<Locale, string> = {
    en: langLabels.en,
    fr: langLabels.fr,
    ar: langLabels.ar,
  };

  const knownSolutionSlugs = new Set(solutions.map((s) => s.slug));
  const solutionCards = (solutionsMega.cards.business ?? []).filter((card) =>
    knownSolutionSlugs.has(card.slug),
  );

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
      className={`lg:hidden fixed inset-0 z-40 bg-bg ${
        reduceMotion ? "" : "animate-mega-in"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-full flex-col pt-[4.75rem]">
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-40">
          <div className="mx-auto max-w-lg flex flex-col gap-2.5">
            {sections.map((section) => {
              const isOpen = expanded === section.label;
              const panelId = `${baseId}-${section.label}`;

              return (
                <AccordionCard
                  key={section.label}
                  label={section.label}
                  desc={section.desc}
                  icon={iconForSection(section)}
                  expanded={isOpen}
                  onToggle={() => toggle(section.label)}
                  controlsId={panelId}
                >
                  {section.kind === "products" && (
                    <div className="flex flex-col gap-4">
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

                      <ul className="flex flex-col gap-3">
                        {productsMega.highlights.map((item) => (
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
                            <div
                              key={product.slug}
                              className="snap-start shrink-0 w-[min(72vw,240px)]"
                            >
                              <ProductNavCard
                                product={product}
                                locale={locale}
                                labels={cardLabels}
                                variant="compact"
                                onNavigate={onClose}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[14px] border border-line bg-surface p-3.5">
                        <div className="text-sm font-medium text-ink">{productsMega.helpTitle}</div>
                        <p className="mt-1 text-xs text-muted">{productsMega.helpBody}</p>
                        <Link
                          href={L("/company/contact")}
                          onClick={onClose}
                          className="mt-2 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-ink"
                        >
                          {productsMega.talkExpert}
                          <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                        </Link>
                      </div>

                      <Link
                        href={L("/products")}
                        onClick={onClose}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink"
                      >
                        {productsMega.viewAllProducts}
                        <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                      </Link>
                    </div>
                  )}

                  {section.kind === "solutions" && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                          {solutionsMega.eyebrow}
                        </p>
                        <h3 className="mt-2 text-base font-semibold tracking-tight text-ink">
                          {solutionsMega.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {solutionsMega.body}
                        </p>
                      </div>

                      <div className="grid gap-2">
                        {solutionCards.map((card) => (
                          <Link
                            key={card.slug}
                            href={L(`/solutions/${card.slug}`)}
                            onClick={onClose}
                            className="rounded-[14px] border border-line bg-surface p-3.5 active:bg-surface-2 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${
                                  solutionTintClass[card.tint] ?? solutionTintClass.mute
                                }`}
                              >
                                {solutionMegaIcon(card.icon, "h-5 w-5")}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                                  {card.category}
                                </span>
                                <span className="mt-1 flex items-center justify-between gap-2">
                                  <span className="text-sm font-semibold text-ink">{card.title}</span>
                                  <span className="text-muted-2 text-xs">→</span>
                                </span>
                                <span className="mt-1 block text-xs leading-relaxed text-muted line-clamp-2">
                                  {card.body}
                                </span>
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="rounded-[14px] border border-line bg-surface p-3.5">
                        <div className="text-sm font-medium text-ink">{solutionsMega.helpTitle}</div>
                        <p className="mt-1 text-xs text-muted">{solutionsMega.helpBody}</p>
                        <Link
                          href={L("/company/contact")}
                          onClick={onClose}
                          className="mt-2 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-ink"
                        >
                          {solutionsMega.talkExpert}
                          <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                        </Link>
                      </div>

                      <Link
                        href={L("/solutions")}
                        onClick={onClose}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink"
                      >
                        {solutionsMega.viewAllCta}
                        <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                      </Link>
                    </div>
                  )}

                  {section.kind === "hardware" && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                          <span className="text-ink">{hardwareMegaIcon("check", "h-3.5 w-3.5")}</span>
                          {hardwareMega.eyebrow}
                        </p>
                        <h3 className="mt-2 text-base font-semibold tracking-tight text-ink">
                          {hardwareMega.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {hardwareMega.body}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Link
                          href={L(hardwareMega.quoteHref)}
                          onClick={onClose}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-bg"
                        >
                          {hardwareMega.requestQuote}
                          <span className="inline-block rtl:-scale-x-100 opacity-80">→</span>
                        </Link>
                        <Link
                          href={L(hardwareMega.compatibilityHref)}
                          onClick={onClose}
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium text-ink"
                        >
                          {hardwareMega.checkCompatibility}
                          <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                        </Link>
                      </div>

                      <div>
                        <div className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                          {hardwareMega.kitsLabel}
                        </div>
                        <div className="-mx-1 flex gap-2 overflow-x-auto snap-x snap-mandatory pb-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          {hardwareKits.map((kit) => (
                            <Link
                              key={kit.slug}
                              href={L(`/hardware/${kit.slug}`)}
                              onClick={onClose}
                              className="snap-start shrink-0 w-[min(72vw,220px)] overflow-hidden rounded-[14px] border border-line bg-card active:bg-surface-2 transition-colors"
                            >
                              <div className="relative aspect-[4/3] bg-surface">
                                <span className="absolute start-2.5 top-2.5 z-10 font-mono text-[0.62rem] text-muted">
                                  {kit.glyph}
                                </span>
                                <Image
                                  src={kit.imageSrc}
                                  alt={kit.imageAlt}
                                  fill
                                  sizes="220px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-3">
                                <h3 className="text-sm font-semibold text-ink">
                                  {kit.shortName || kit.name}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                                  {kit.tagline}
                                </p>
                                <div className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-2">
                                  {kit.category}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-1">
                        {hardwareMega.sideLinks.map((link) => (
                          <Link
                            key={link.title}
                            href={L(link.href)}
                            onClick={onClose}
                            className="flex items-start gap-3 rounded-[12px] p-2.5 active:bg-surface transition-colors"
                          >
                            <span className="mt-0.5 text-ink shrink-0">
                              {hardwareMegaIcon(link.icon, "h-4 w-4")}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center justify-between gap-2">
                                <span className="text-sm font-medium text-ink">{link.title}</span>
                                <span className="text-muted-2 text-xs">→</span>
                              </span>
                              <span className="mt-0.5 block text-xs text-muted">{link.body}</span>
                            </span>
                          </Link>
                        ))}
                      </div>

                      <div className="rounded-[14px] border border-line bg-surface p-3.5">
                        <div className="text-sm font-medium text-ink">{hardwareMega.assuranceTitle}</div>
                        <p className="mt-1 text-xs text-muted">{hardwareMega.assuranceBody}</p>
                      </div>
                    </div>
                  )}

                  {section.kind === "links" && (
                    <div className="flex flex-col gap-3">
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
                                : "border border-line bg-surface active:bg-surface-2"
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
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink"
                      >
                        {section.viewAllLabel}
                        <span className="inline-block rtl:-scale-x-100 text-muted">→</span>
                      </Link>
                    </div>
                  )}
                </AccordionCard>
              );
            })}

            <div className="pt-4 pb-2 flex flex-col gap-5">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-2.5">
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
                          ? "text-ink border-ink bg-card font-medium"
                          : "text-muted border-line bg-card"
                      }`}
                    >
                      {langLabel[l]}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-2.5">
                  {themeSectionLabel}
                </div>
                <ThemeToggle labels={themeLabels} variant="card" />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-10 bg-gradient-to-t from-bg via-bg/95 to-transparent">
          <div className="pointer-events-auto mx-auto max-w-lg">
            <Link
              href={L("/quote")}
              onClick={onClose}
              className="flex h-[3.25rem] min-h-[3.25rem] items-center justify-between gap-3 rounded-full bg-ink px-5 text-[0.9375rem] font-medium text-bg shadow-float active:scale-[0.98] transition-transform"
            >
              <span className="inline-flex items-center gap-2.5 min-w-0">
                <span className="opacity-80">{navSectionIcon("quote", "h-5 w-5")}</span>
                <span className="truncate">{requestQuoteLabel}</span>
              </span>
              <span className="inline-block rtl:-scale-x-100 opacity-80" aria-hidden>
                →
              </span>
            </Link>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted">
              <span className="text-muted-2">{navSectionIcon("shield", "h-3.5 w-3.5")}</span>
              {trustLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
