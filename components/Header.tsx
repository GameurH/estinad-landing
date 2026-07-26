"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Monogram";
import { ThemeToggle, type ThemeLabels } from "./ThemeToggle";
import { locales, lp, productSlugs, solutionSlugs, serviceSlugs, caseStudySlugs, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type HeaderData = {
  locale: Locale;
  nav: Dictionary["nav"];
  productNames: Record<string, string>;
  solutionNames: Record<string, string>;
  serviceNames: Record<string, string>;
  caseStudyNames: Record<string, string>;
  resourcesNav: { label: string; href: string; desc?: string }[];
  companyNav: { label: string; href: string; desc?: string }[];
  langLabels: { switchLabel: string; en: string; fr: string; ar: string };
  themeLabels: ThemeLabels;
};

export function Header({ data }: { data: HeaderData }) {
  const { locale, nav, productNames, solutionNames, serviceNames, caseStudyNames, resourcesNav, companyNav, langLabels, themeLabels } =
    data;
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
    setLangOpen(false);
  };

  const localePrefix = `/${locale}`;
  const isActive = (href: string) => {
    const full = lp(locale, href);
    return pathname === full || pathname.startsWith(full + "/");
  };

  type MegaEntry = { label: string; href: string; desc?: string; group?: string };
  const productEntries: MegaEntry[] = productSlugs.map((s) => ({
    label: productNames[s],
    href: `/products/${s}`,
    desc: "",
  }));
  const solutionEntries: MegaEntry[] = solutionSlugs.map((s) => ({
    label: solutionNames[s],
    href: `/solutions/${s}`,
  }));
  const serviceEntries: MegaEntry[] = serviceSlugs.map((s) => ({
    label: serviceNames[s],
    href: `/services/${s}`,
  }));
  const caseEntries: MegaEntry[] = caseStudySlugs.map((s) => ({
    label: caseStudyNames[s],
    href: `/case-studies/${s}`,
  }));

  const mega: Record<string, { items: MegaEntry[]; intro: string; footer?: { label: string; href: string } }> = {
    [nav.products]: { items: productEntries, intro: nav.megaProductsIntro, footer: { label: nav.products, href: "/products" } },
    [nav.solutions]: { items: solutionEntries, intro: nav.megaSolutionsIntro, footer: { label: nav.solutions, href: "/solutions" } },
    [nav.services]: { items: serviceEntries, intro: nav.megaServicesIntro, footer: { label: nav.services, href: "/services" } },
    [nav.caseStudies]: { items: caseEntries, intro: nav.megaCaseIntro, footer: { label: nav.caseStudies, href: "/case-studies" } },
    [nav.company]: {
      items: companyNav.map((c) => ({ label: c.label, href: c.href, desc: c.desc })),
      intro: "",
    },
  };

  const primary = [
    { label: nav.products, href: "/products" },
    { label: nav.solutions, href: "/solutions" },
    { label: nav.services, href: "/services" },
    { label: nav.caseStudies, href: "/case-studies" },
    { label: nav.company, href: "/company" },
  ];

  const switchTo = (target: Locale) => {
    // Replace the leading locale segment with the target locale.
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
    <header className="sticky top-0 z-50 hairline-b bg-base/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <Link href={lp(locale, "/")} className="flex items-center" aria-label="ESTINAD">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
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
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm transition-colors ${
                  isActive(item.href) ? "text-ivory" : "text-ivory-dim hover:text-ivory"
                }`}
              >
                {item.label}
                <span className="text-muted-2 text-[10px]">▾</span>
              </Link>

              {open === item.label && mega[item.label] && (
                <div className="absolute start-0 top-full pt-2">
                  <div className="w-80 bg-surface hairline p-2 shadow-2xl shadow-black/40">
                    {mega[item.label].intro && (
                      <p className="px-3 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-2">
                        {mega[item.label].intro}
                      </p>
                    )}
                    {mega[item.label].items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={lp(locale, sub.href)}
                        onClick={() => setOpen(null)}
                        className="block px-3 py-2.5 hover:bg-surface-2 transition-colors"
                      >
                        <div className="text-sm text-ivory">{sub.label}</div>
                        {sub.desc && (
                          <div className="text-xs text-muted mt-0.5">{sub.desc}</div>
                        )}
                      </Link>
                    ))}
                    {mega[item.label].footer && (
                      <Link
                        href={lp(locale, mega[item.label].footer!.href)}
                        onClick={() => setOpen(null)}
                        className="mt-1 block px-3 py-2.5 hairline-t text-xs font-mono uppercase tracking-[0.16em] text-accent hover:bg-surface-2 transition-colors"
                      >
                        {mega[item.label].footer!.label} →
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {/* Theme toggle */}
          <ThemeToggle labels={themeLabels} />

          {/* Language switcher */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-ivory-dim hover:text-ivory transition-colors"
              aria-label={langLabels.switchLabel}
            >
              <span className="font-mono text-[11px] uppercase tracking-widest">
                {locale}
              </span>
              <span className="text-muted-2 text-[10px]">▾</span>
            </button>
            {langOpen && (
              <div className="absolute end-0 top-full pt-2">
                <div className="w-40 bg-surface hairline p-1 shadow-2xl shadow-black/40">
                  {locales.map((l) => (
                    <Link
                      key={l}
                      href={switchTo(l)}
                      onClick={closeAll}
                      className={`block px-3 py-2 text-sm transition-colors ${
                        l === locale
                          ? "text-ivory bg-surface-2"
                          : "text-ivory-dim hover:bg-surface-2 hover:text-ivory"
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
            href={lp(locale, "/company/contact")}
            className="text-sm text-ivory-dim hover:text-ivory px-3.5 py-2 transition-colors"
          >
            {nav.contact}
          </Link>
          <Link
            href={lp(locale, "/demo")}
            onClick={() => setOpen(null)}
            className="inline-flex items-center h-10 px-4 text-sm font-medium bg-accent text-base hover:bg-accent-dim border border-accent transition-colors"
          >
            {nav.requestDemo}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-ivory transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ivory transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ivory transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden hairline-t bg-base">
          <div className="shell py-6 flex flex-col gap-1">
            {primary.map((item) => (
              <div key={item.label} className="hairline-b py-3">
                <Link
                  href={lp(locale, item.href)}
                  onClick={closeAll}
                  className="block text-sm text-ivory font-medium"
                >
                  {item.label}
                </Link>
                <div className="mt-2 flex flex-col gap-1">
                  {mega[item.label]?.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={lp(locale, sub.href)}
                      onClick={closeAll}
                      className="text-sm text-muted py-1 ps-3"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Language switch (mobile) */}
            <div className="py-3 flex items-center gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  onClick={closeAll}
                  className={`px-3 py-1.5 text-sm hairline ${
                    l === locale ? "text-ivory border-accent/50" : "text-muted"
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
              className="mt-4 inline-flex items-center justify-center h-11 px-5 text-sm font-medium bg-accent text-base"
            >
              {nav.requestDemo}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
