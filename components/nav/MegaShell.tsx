"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { lp, type Locale } from "@/lib/i18n-config";

type FooterLink = { label: string; href: string };

type Props = {
  locale: Locale;
  intro?: string;
  ariaLabel: string;
  children: React.ReactNode;
  footerLinks?: FooterLink[];
  onNavigate?: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function MegaShell({
  locale,
  intro,
  ariaLabel,
  children,
  footerLinks,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const reduceMotion = useReducedMotion();
  const L = (href: string) => lp(locale, href);

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
        aria-label={ariaLabel}
      >
        {intro ? (
          <div className="px-5 pt-4 pb-3 hairline-b">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
              {intro}
            </p>
          </div>
        ) : null}

        {children}

        {footerLinks && footerLinks.length > 0 ? (
          <div className="hairline-t px-5 py-3 flex flex-wrap items-center justify-between gap-3 bg-card">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={L(link.href)}
                onClick={onNavigate}
                className="text-xs font-mono uppercase tracking-[0.16em] text-ink hover:opacity-70 transition-opacity"
              >
                {link.label}{" "}
                <span className="inline-block rtl:-scale-x-100">→</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function MegaCardLink({
  href,
  title,
  desc,
  meta,
  onNavigate,
  style,
  featured = false,
}: {
  href: string;
  title: string;
  desc?: string;
  meta?: string;
  onNavigate?: () => void;
  style?: React.CSSProperties;
  featured?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      style={style}
      className={`group relative flex h-full flex-col p-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink ${
        featured
          ? "bg-ink text-bg hover:bg-ink/95"
          : "bg-card hover:bg-surface-2 text-ink"
      }`}
    >
      {meta ? (
        <div
          className={`font-mono text-[0.62rem] uppercase tracking-[0.16em] ${
            featured ? "text-bg/55" : "text-muted-2"
          }`}
        >
          {meta}
        </div>
      ) : null}
      <div className="mt-1.5 flex items-start justify-between gap-3">
        <h3 className={`text-sm font-medium ${featured ? "text-bg" : "text-ink"}`}>
          {title}
        </h3>
        <span
          className={`transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 ${
            featured ? "text-bg/60" : "text-muted-2"
          }`}
        >
          <span className="inline-block rtl:-scale-x-100 text-xs">→</span>
        </span>
      </div>
      {desc ? (
        <p
          className={`mt-2 line-clamp-2 text-xs leading-relaxed ${
            featured ? "text-bg/70" : "text-muted"
          }`}
        >
          {desc}
        </p>
      ) : null}
    </Link>
  );
}
