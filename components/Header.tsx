"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Monogram";
import { ThemeToggle, type ThemeLabels } from "./ThemeToggle";
import { ProductsMegaMenu, type ProductsMegaLabels } from "@/components/nav/ProductsMegaMenu";
import { SolutionsMegaMenu, type SolutionsMegaLabels } from "@/components/nav/SolutionsMegaMenu";
import { HardwareMegaMenu, type HardwareMegaLabels, type HardwareNavKit } from "@/components/nav/HardwareMegaMenu";
import { LinksMegaMenu, type LinksMegaLabels, type MegaNavLink } from "@/components/nav/LinksMegaMenu";
import { MobileNav } from "@/components/nav/MobileNav";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { ProductCard, SolutionCard } from "@/lib/nav";

export type HeaderData = {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
  availableProducts: ProductCard[];
  comingSoonProducts: ProductCard[];
  solutions: SolutionCard[];
  hardwareKits: HardwareNavKit[];
  resourcesLinks: MegaNavLink[];
  companyLinks: MegaNavLink[];
  productsMega: ProductsMegaLabels;
  solutionsMega: SolutionsMegaLabels;
  hardwareMega: HardwareMegaLabels;
  resourcesMega: LinksMegaLabels;
  companyMega: LinksMegaLabels;
  langLabels: { switchLabel: string; en: string; fr: string; ar: string };
  themeLabels: ThemeLabels;
  mobileNav: Dictionary["mobileNav"];
};

export function Header({ data }: { data: HeaderData }) {
  const {
    locale,
    nav,
    common,
    availableProducts,
    comingSoonProducts,
    solutions,
    hardwareKits,
    resourcesLinks,
    companyLinks,
    productsMega,
    solutionsMega,
    hardwareMega,
    resourcesMega,
    companyMega,
    langLabels,
    themeLabels,
    mobileNav,
  } = data;
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };

  const openMenu = (label: string) => {
    cancelClose();
    setOpen(label);
  };

  const closeAll = () => {
    cancelClose();
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

  useEffect(() => () => cancelClose(), []);

  const localePrefix = `/${locale}`;
  const isActive = (href: string) => {
    const full = lp(locale, href);
    return pathname === full || pathname.startsWith(full + "/");
  };

  const primary = [
    { label: nav.products, href: "/products", kind: "products" as const },
    { label: nav.solutions, href: "/solutions", kind: "solutions" as const },
    { label: nav.hardware, href: "/hardware", kind: "hardware" as const },
    { label: nav.resources, href: "/resources", kind: "resources" as const },
    { label: nav.company, href: "/company", kind: "company" as const },
  ];

  const cardLabels = {
    statuses: productsMega.statuses,
    requestQuote: common.requestQuote,
    viewPricing: common.viewPricing,
  };

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

  const mobileSections = primary.map((item) => {
    if (item.kind === "products") {
      return {
        kind: "products" as const,
        label: item.label,
        href: item.href,
        desc: mobileNav.productsDesc,
      };
    }
    if (item.kind === "solutions") {
      return {
        kind: "solutions" as const,
        label: item.label,
        href: item.href,
        desc: mobileNav.solutionsDesc,
      };
    }
    if (item.kind === "hardware") {
      return {
        kind: "hardware" as const,
        label: item.label,
        href: item.href,
        desc: mobileNav.hardwareDesc,
      };
    }
    if (item.kind === "resources") {
      return {
        kind: "links" as const,
        sectionKind: "resources" as const,
        label: item.label,
        href: item.href,
        desc: mobileNav.resourcesDesc,
        links: resourcesLinks,
        intro: resourcesMega.intro,
        viewAllLabel: resourcesMega.viewAll,
      };
    }
    return {
      kind: "links" as const,
      sectionKind: "company" as const,
      label: item.label,
      href: item.href,
      desc: mobileNav.companyDesc,
      links: companyLinks,
      intro: companyMega.intro,
      viewAllLabel: companyMega.viewAll,
    };
  });

  return (
    <header
      className={`fixed top-3 md:top-4 start-3 end-3 md:start-4 md:end-4 z-50 transition-transform duration-200 ease-out ${
        hidden && !mobileOpen ? "-translate-y-[130%]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] relative">
        <div className="glass rounded-full shadow-float h-14 ps-4 pe-3 flex items-center justify-between relative z-50">
          <Link href={lp(locale, "/")} className="flex items-center" aria-label="ESTINAD">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {primary.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={lp(locale, item.href)}
                  onClick={() => setOpen(null)}
                  aria-expanded={open === item.label}
                  aria-haspopup="menu"
                  className={`relative flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 text-sm transition-colors ${
                    open === item.label || isActive(item.href)
                      ? "text-ink"
                      : "text-ink-secondary hover:text-ink"
                  } ${
                    open === item.label
                      ? "after:absolute after:start-2.5 after:end-2.5 after:bottom-0.5 after:h-px after:bg-ink"
                      : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`text-muted text-[10px] transition-transform ${
                      open === item.label ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </Link>
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
                  <div className="w-40 bg-card hairline rounded-card shadow-lift p-1 animate-mega-in">
                    {(["en", "fr", "ar"] as const).map((l) => (
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
              href={lp(locale, "/quote")}
              onClick={() => setOpen(null)}
              className="inline-flex items-center h-9 px-4 ms-1 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
            >
              {nav.requestQuote}
            </Link>
          </div>

          <button
            className={`lg:hidden relative z-50 inline-flex items-center justify-center transition-colors ${
              mobileOpen
                ? "h-10 w-10 rounded-full border border-line bg-card text-ink"
                : "flex flex-col gap-1.5 p-3"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setOpen(null);
              setMobileOpen((v) => !v);
            }}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
              </svg>
            ) : (
              <>
                <span className="h-px w-6 bg-ink" />
                <span className="h-px w-6 bg-ink" />
                <span className="h-px w-6 bg-ink" />
              </>
            )}
          </button>
        </div>

        {open === nav.products && (
          <ProductsMegaMenu
            locale={locale}
            available={availableProducts}
            comingSoon={comingSoonProducts}
            labels={productsMega}
            onNavigate={closeAll}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}

        {open === nav.solutions && (
          <SolutionsMegaMenu
            locale={locale}
            solutions={solutions}
            labels={solutionsMega}
            onNavigate={closeAll}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}

        {open === nav.hardware && (
          <HardwareMegaMenu
            locale={locale}
            kits={hardwareKits}
            labels={hardwareMega}
            onNavigate={closeAll}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}

        {open === nav.resources && (
          <LinksMegaMenu
            locale={locale}
            links={resourcesLinks}
            labels={resourcesMega}
            columns={2}
            onNavigate={closeAll}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}

        {open === nav.company && (
          <LinksMegaMenu
            locale={locale}
            links={companyLinks}
            labels={companyMega}
            columns={2}
            onNavigate={closeAll}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          />
        )}
      </div>

      {mobileOpen && (
        <MobileNav
          locale={locale}
          sections={mobileSections}
          availableProducts={availableProducts}
          comingSoonProducts={comingSoonProducts}
          solutions={solutions}
          hardwareKits={hardwareKits}
          productsMega={productsMega}
          solutionsMega={solutionsMega}
          hardwareMega={hardwareMega}
          requestQuoteLabel={nav.requestQuote}
          trustLine={mobileNav.trustLine}
          themeSectionLabel={themeLabels.sectionLabel}
          cardLabels={cardLabels}
          langLabels={langLabels}
          themeLabels={themeLabels}
          onClose={closeAll}
          switchTo={switchTo}
        />
      )}
    </header>
  );
}
