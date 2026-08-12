"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Logo } from "./Monogram";
import { ThemeToggle, type ThemeLabels } from "./ThemeToggle";
import { ProductsMegaMenu, type ProductsMegaLabels } from "@/components/nav/ProductsMegaMenu";
import { SolutionsMegaMenu, type SolutionsMegaLabels } from "@/components/nav/SolutionsMegaMenu";
import { HardwareMegaMenu, type HardwareMegaLabels } from "@/components/nav/HardwareMegaMenu";
import { LinksMegaMenu, type LinksMegaLabels, type MegaNavLink } from "@/components/nav/LinksMegaMenu";
import { MobileNav } from "@/components/nav/MobileNav";
import type { HardwareMegaNav } from "@/lib/hardware-mega-nav";
import { lp, isNavActive, productSlugs, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { PrimaryNavItem, ProductCard, SolutionCard } from "@/lib/nav";

export type HeaderData = {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
  primaryNav: PrimaryNavItem[];
  availableProducts: ProductCard[];
  comingSoonProducts: ProductCard[];
  solutions: SolutionCard[];
  hardwareMegaNav: HardwareMegaNav;
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

function productSlugFromPath(pathname: string, locale: Locale): string | null {
  const prefix = `/${locale}/products/`;
  if (!pathname.startsWith(prefix)) return null;
  const rest = pathname.slice(prefix.length);
  const slug = rest.split("/")[0];
  if (!slug || slug === "components") return null;
  return (productSlugs as readonly string[]).includes(slug) ? slug : null;
}

export function Header({ data }: { data: HeaderData }) {
  const {
    locale,
    nav,
    common,
    primaryNav,
    availableProducts,
    comingSoonProducts,
    solutions,
    hardwareMegaNav,
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
  const headerRef = useRef<HTMLElement>(null);

  const currentSlug = useMemo(
    () => productSlugFromPath(pathname, locale),
    [pathname, locale],
  );

  const currentProduct = useMemo(() => {
    if (!currentSlug) return null;
    return (
      availableProducts.find((p) => p.slug === currentSlug) ??
      comingSoonProducts.find((p) => p.slug === currentSlug) ??
      null
    );
  }, [availableProducts, comingSoonProducts, currentSlug]);

  const quoteHref =
    currentSlug === "retail" ? "/quote?product=retail" : "/quote";

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

  // Publish hide state so nested chrome (e.g. hardware store bar) can track top offset.
  useEffect(() => {
    const collapsed = hidden && !mobileOpen;
    document.documentElement.dataset.primaryNav = collapsed
      ? "collapsed"
      : "expanded";
    return () => {
      delete document.documentElement.dataset.primaryNav;
    };
  }, [hidden, mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open && !langOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (target && headerRef.current && !headerRef.current.contains(target)) {
        cancelClose();
        setOpen(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open, langOpen]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => () => cancelClose(), []);

  const localePrefix = `/${locale}`;
  const isActive = (href: string) => isNavActive(pathname, locale, href);
  const isPrimaryActive = (item: PrimaryNavItem) => {
    if (item.kind === "hardware") {
      return isNavActive(pathname, locale, "/hardware");
    }
    return isActive(item.href);
  };

  const cardLabels = {
    statuses: productsMega.statuses,
    requestQuote: common.requestQuote,
    viewPricing: common.viewPricing,
    currentLabel: productsMega.currentLabel,
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

  const mobileSections = primaryNav.map((item) => {
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
      ref={headerRef}
      className={`fixed top-3 md:top-4 start-3 end-3 md:start-4 md:end-4 z-50 transition-transform duration-200 ease-out ${
        hidden && !mobileOpen ? "-translate-y-[130%]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] relative">
        <div className="glass rounded-full shadow-float h-14 ps-4 pe-3 flex items-center justify-between relative z-50">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              href={lp(locale, "/")}
              className="flex items-center shrink-0"
              aria-label="ESTINAD"
            >
              <Logo />
            </Link>
            {currentProduct ? (
              <span
                className="hidden sm:inline-flex items-center gap-2 min-w-0 text-sm text-ink-secondary"
                aria-current="page"
              >
                <span className="text-muted select-none" aria-hidden>
                  ·
                </span>
                <span className="truncate font-medium text-ink">
                  {currentProduct.short}
                </span>
                <span className="sr-only">
                  {productsMega.currentLabel}
                </span>
              </span>
            ) : null}
          </div>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
            {primaryNav.map((item) => {
              const menuOpen = open === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={lp(locale, item.href)}
                    onClick={(e) => {
                      // First interaction opens the menu (touch / keyboard parity with hover).
                      if (!menuOpen) {
                        e.preventDefault();
                        openMenu(item.label);
                        return;
                      }
                      setOpen(null);
                    }}
                    aria-expanded={menuOpen}
                    aria-haspopup="menu"
                    className={`relative flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded-full ${
                      menuOpen || isPrimaryActive(item)
                        ? "text-ink"
                        : "text-ink-secondary hover:text-ink"
                    } ${
                      menuOpen
                        ? "after:absolute after:start-2.5 after:end-2.5 after:bottom-0.5 after:h-px after:bg-ink"
                        : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`text-muted text-[10px] transition-transform ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      ▾
                    </span>
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-1">
            <ThemeToggle labels={themeLabels} />

            <div
              className="relative"
              onMouseEnter={() => setLangOpen(true)}
              onMouseLeave={() => setLangOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-ink-secondary hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink rounded-full"
                aria-label={langLabels.switchLabel}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                onClick={() => setLangOpen((v) => !v)}
              >
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  {locale}
                </span>
                <span className="text-muted text-[10px]" aria-hidden>
                  ▾
                </span>
              </button>
              {langOpen && (
                <div className="absolute end-0 top-full pt-3">
                  <div
                    className="w-40 bg-card hairline rounded-card shadow-lift p-1 animate-mega-in"
                    role="listbox"
                    aria-label={langLabels.switchLabel}
                  >
                    {(["en", "fr", "ar"] as const).map((l) => (
                      <Link
                        key={l}
                        href={switchTo(l)}
                        onClick={closeAll}
                        role="option"
                        aria-selected={l === locale}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
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
              href={lp(locale, quoteHref)}
              onClick={() => setOpen(null)}
              className="inline-flex items-center h-9 px-4 ms-1 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {nav.requestQuote}
            </Link>
          </div>

          <button
            type="button"
            className={`lg:hidden relative z-50 inline-flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
              mobileOpen
                ? "h-10 w-10 rounded-full border border-line bg-card text-ink"
                : "flex flex-col gap-1.5 p-3 rounded-full"
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
            currentSlug={currentSlug}
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
            nav={hardwareMegaNav}
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
          hardwareMegaNav={hardwareMegaNav}
          productsMega={productsMega}
          solutionsMega={solutionsMega}
          hardwareMega={hardwareMega}
          requestQuoteLabel={nav.requestQuote}
          quoteHref={quoteHref}
          trustLine={mobileNav.trustLine}
          themeSectionLabel={themeLabels.sectionLabel}
          cardLabels={cardLabels}
          langLabels={langLabels}
          themeLabels={themeLabels}
          currentSlug={currentSlug}
          onClose={closeAll}
          switchTo={switchTo}
        />
      )}
    </header>
  );
}
