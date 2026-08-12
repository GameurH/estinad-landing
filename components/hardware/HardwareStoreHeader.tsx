"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useHardwareCart } from "@/components/hardware/HardwareCartProvider";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/i18n-config";
import { formatMoneyMinor } from "@/lib/hardware-commerce";
import { lp } from "@/lib/i18n-config";

/**
 * Fixed secondary chrome under the site header.
 * Tracks `data-primary-nav` on <html> (set by Header).
 * When the primary nav collapses, this bar moves to top: 0 — no empty gap.
 */
export function HardwareStoreHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();
  const { itemCount, subtotalPreview } = useHardwareCart();
  const [primaryCollapsed, setPrimaryCollapsed] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.dataset.primaryNav === "collapsed";
  });
  const L = (h: string) => lp(locale, h);
  const h = dictionary.hardware.storeChrome;
  const currency = subtotalPreview?.currency ?? "DZD";

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => {
      setPrimaryCollapsed(root.dataset.primaryNav === "collapsed");
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-primary-nav"],
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "/hardware/catalog", label: h.catalog },
    { href: "/hardware", label: h.overview },
    { href: "/hardware/quote", label: h.quote },
  ] as const;

  return (
    <>
      {/* Shrink with primary nav so no empty band remains under the store bar. */}
      <div
        className={`transition-[height] duration-200 ease-out ${
          primaryCollapsed
            ? "h-12"
            : "h-[calc(4.25rem+3rem)] md:h-[calc(4.5rem+3rem)]"
        }`}
        aria-hidden
      />
      <div
        className={`fixed start-0 end-0 z-40 border-b border-line bg-bg/95 backdrop-blur-md supports-[backdrop-filter]:bg-bg/85 transition-[top] duration-200 ease-out ${
          primaryCollapsed
            ? "top-0"
            : "top-[4.25rem] md:top-[4.5rem]"
        }`}
      >
        <div className="shell flex items-center justify-between gap-3 min-h-12 h-12">
          <div className="flex items-center gap-1 min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="hidden sm:inline font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted pe-3 border-e border-line me-2 shrink-0">
              {h.eyebrow}
            </span>
            {links.map((link) => {
              const full = L(link.href);
              const active =
                pathname === full ||
                (link.href !== "/hardware" &&
                  pathname.startsWith(`${full}/`)) ||
                (link.href === "/hardware" && pathname === full);
              return (
                <Link
                  key={link.href}
                  href={full}
                  className={`shrink-0 inline-flex items-center min-h-9 px-3 rounded-full text-sm transition-colors ${
                    active
                      ? "bg-ink text-bg"
                      : "text-ink-secondary hover:text-ink hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href={L("/hardware/cart")}
            className="relative shrink-0 inline-flex items-center gap-2 min-h-9 h-9 ps-3 pe-3 rounded-full border border-line-strong bg-card text-sm font-medium text-ink hover:border-ink hover:bg-surface transition-colors"
            aria-label={h.cartAria.replace("{count}", String(itemCount))}
          >
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path
                d="M3.5 4.5h1.6l1.2 8.2h8.4l1.3-6.2H6.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.2" cy="15.4" r="1" fill="currentColor" stroke="none" />
              <circle cx="14.2" cy="15.4" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span className="hidden sm:inline">{h.cart}</span>
            {itemCount > 0 ? (
              <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-ink text-bg text-[0.65rem] font-mono">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            ) : null}
            {subtotalPreview && itemCount > 0 ? (
              <span className="hidden lg:inline text-ink-secondary font-normal">
                {formatMoneyMinor(subtotalPreview.amount, currency, locale)}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </>
  );
}
