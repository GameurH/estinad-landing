"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Monogram";
import { ThemeToggle, type ThemeLabels } from "./ThemeToggle";
import {
  locales,
  lp,
  productSlugs,
  solutionSlugs,
  caseStudySlugs,
  platformSlugs,
  type Locale,
} from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type HeaderData = {
  locale: Locale;
  nav: Dictionary["nav"];
  productNames: Record<string, string>;
  solutionNames: Record<string, string>;
  caseStudyNames: Record<string, string>;
  platformNames: Record<string, string>;
  partnerNames: Record<string, string>;
  companyNav: { label: string; href: string; desc?: string }[];
  langLabels: { switchLabel: string; en: string; fr: string; ar: string };
  themeLabels: ThemeLabels;
};

export function Header({ data }: { data: HeaderData }) {
  const {
    locale,
    nav,
    productNames,
    solutionNames,
    caseStudyNames,
    platformNames,
    partnerNames,
    companyNav,
    langLabels,
    themeLabels,
  } = data;
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
    setLangOpen(false);
  };

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      lastY.current = y;
      if (y < 24) setHidden(false);
      else if (dy > 4 && y > 96) setHidden(true);
      else if (dy < -2) setHidden(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const localePrefix = `/${locale}`;
  const isActive = (href: string) => {
    const full = lp(locale, href);
    return pathname === full || pathname.startsWith(full + "/");
  };

  type MegaEntry = { label: string; href: string; desc?: string };
  const productEntries: MegaEntry[] = productSlugs.map((s) => ({
    label: productNames[s],
    href: `/products/${s}`,
  }));
  const solutionEntries: MegaEntry[] = solutionSlugs.map((s) => ({
    label: solutionNames[s],
    href: `/solutions/${s}`,
  }));
  const platformEntries: MegaEntry[] = [
    { label: nav.megaOs, href: "/platform" },
    ...platformSlugs.map((s) => ({
      label: platformNames[s],
      href: `/platform/${s}`,
    })),
  ];
  const caseEntries: MegaEntry[] = caseStudySlugs.map((s) => ({
    label: caseStudyNames[s],
    href: `/case-studies/${s}`,
  }));
  const partnerEntries: MegaEntry[] = [
    { label: partnerNames.referral, href: "/partners" },
    { label: partnerNames.resellers, href: "/partners/resellers" },
    { label: partnerNames.implementers, href: "/partners/implementers" },
    { label: partnerNames.technology, href: "/partners/technology" },
  ];

  const mega: Record<string, { items: MegaEntry[]; intro: string; footer?: { label: string; href: string } }> = {
    [nav.products]: {
      items: productEntries,
      intro: nav.megaProductsIntro,
      footer: { label: nav.products, href: "/products" },
    },
    [nav.solutions]: {
      items: solutionEntries,
      intro: nav.megaSolutionsIntro,
      footer: { label: nav.solutions, href: "/solutions" },
    },
    [nav.platform]: {
      items: platformEntries,
      intro: nav.megaPlatformIntro,
      footer: { label: nav.platform, href: "/platform" },
    },
    [nav.caseStudies]: {
      items: caseEntries,
      intro: nav.megaCaseIntro,
      footer: { label: nav.caseStudies, href: "/case-studies" },
    },
    [nav.partners]: {
      items: partnerEntries,
      intro: nav.megaPartnersIntro,
      footer: { label: nav.partners, href: "/partners" },
    },
    [nav.company]: {
      items: companyNav.map((c) => ({ label: c.label, href: c.href, desc: c.desc })),
      intro: "",
    },
  };

  const primary = [
    { label: nav.products, href: "/products" },
    { label: nav.solutions, href: "/solutions" },
    { label: nav.platform, href: "/platform" },
    { label: nav.caseStudies, href: "/case-studies" },
    { label: nav.partners, href: "/partners" },
    { label: nav.company, href: "/company" },
  ];

  const switchTo = (target: Locale) => {
    const rest = pathname.startsWith(localePrefix)
      ? pathname.slice(localePrefix.length)
      : pathname;
    return `/${target}${rest || ""}`;
  };

  const langLabel: Record<Locale, string> = {
    en: langLabels.en,
    fr: langLabels.fr,
    ar: langLabels.ar,
  };

  return (
    <header
      className={`fixed top-3 md:top-4 start-3 end-3 md:start-4 md:end-4 z-50 transition-transform duration-200 ease-out ${
        hidden && !mobileOpen ? "-translate-y-[130%]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="glass rounded-full shadow-float h-14 ps-4 pe-3 flex items-center justify-between relative z-10">
          <Link href={lp(locale, "/")} className="flex items-center" aria-label="ESTINAD">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {primary.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen((cur) => (cur === item.label ? null : cur))}
              >
                <Link
                  href={lp(locale, item.href)}
                  onClick={() => setOpen(null)}
                  className={`flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 text-sm transition-colors ${
                    isActive(item.href) ? "text-ink" : "text-ink-secondary hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span className="text-muted text-[10px]">▾</span>
                </Link>

                {open === item.label && mega[item.label] && (
                  <div className="absolute start-0 top-full pt-3">
                    <div className="w-80 bg-card hairline rounded-card shadow-lift p-2">
                      {mega[item.label].intro && (
                        <p className="px-3 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
                          {mega[item.label].intro}
                        </p>
                      )}
                      {mega[item.label].items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={lp(locale, sub.href)}
                          onClick={() => setOpen(null)}
                          className="block px-3 py-2.5 rounded-lg hover:bg-surface-2 transition-colors"
                        >
                          <div className="text-sm text-ink">{sub.label}</div>
                          {sub.desc && (
                            <div className="text-xs text-muted mt-0.5">{sub.desc}</div>
                          )}
                        </Link>
                      ))}
                      {mega[item.label].footer && (
                        <Link
                          href={lp(locale, mega[item.label].footer!.href)}
                          onClick={() => setOpen(null)}
                          className="mt-1 block px-3 py-2.5 hairline-t text-xs font-mono uppercase tracking-[0.16em] text-ink hover:bg-surface-2 rounded-b-lg transition-colors"
                        >
                          {mega[item.label].footer!.label}{" "}
                          <span className="inline-block rtl:-scale-x-100">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-1">
            <ThemeToggle labels={themeLabels} />

            <div
              className="relative"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-ink-secondary hover:text-ink transition-colors"
                aria-label={langLabels.switchLabel}
              >
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  {locale}
                </span>
                <span className="text-muted text-[10px]">▾</span>
              </button>
              {langOpen && (
                <div className="absolute end-0 top-full pt-3">
                  <div className="w-40 bg-card hairline rounded-card shadow-lift p-1">
                    {locales.map((l) => (
                      <Link
                        key={l}
                        href={switchTo(l)}
                        onClick={closeAll}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          l === locale
                            ? "text-ink bg-surface-2"
                            : "text-ink-secondary hover:bg-surface-2 hover:text-ink"
                        }`}
                      >
                        {langLabel[l]}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={lp(locale, "/demo")}
              onClick={() => setOpen(null)}
              className="inline-flex items-center h-9 px-4 ms-1 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
            >
              {nav.requestDemo}
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-3"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`h-px w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-bg pt-24 overflow-y-auto">
          <div className="shell pb-10 flex flex-col gap-1">
            {primary.map((item) => (
              <div key={item.label} className="hairline-b py-4">
                <Link
                  href={lp(locale, item.href)}
                  onClick={closeAll}
                  className="block text-lg text-ink font-medium"
                >
                  {item.label}
                </Link>
                <div className="mt-3 flex flex-col gap-1">
                  {mega[item.label]?.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={lp(locale, sub.href)}
                      onClick={closeAll}
                      className="text-[0.9375rem] text-muted py-1.5 ps-3"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="py-4 flex items-center gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  onClick={closeAll}
                  className={`px-3 py-2 text-sm border rounded-full ${
                    l === locale ? "text-ink border-ink" : "text-muted border-line"
                  }`}
                >
                  {langLabel[l]}
                </Link>
              ))}
            </div>

            <div className="pb-2">
              <ThemeToggle labels={themeLabels} />
            </div>

            <Link
              href={lp(locale, "/demo")}
              onClick={closeAll}
              className="mt-4 inline-flex items-center justify-center h-12 px-6 rounded-full text-[0.9375rem] font-medium bg-ink text-bg"
            >
              {nav.requestDemo}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
