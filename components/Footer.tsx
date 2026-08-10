"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Monogram";
import { navSectionIcon } from "@/components/nav/NavSectionIcons";
import {
  lp,
  PRODUCTS_HUB_HREF,
  isNavActive,
  type Locale,
} from "@/lib/i18n-config";
import type { FooterProductItem, NavItem } from "@/lib/nav";

export type FooterData = {
  locale: Locale;
  footer: {
    ctaEyebrow: string;
    ctaTitle: string;
    ctaPrimary: string;
    ctaTertiary: string;
    tagline: string;
    builtLine: string;
    builtBadge: string;
    helpTitle: string;
    helpBody: string;
    helpCta: string;
    social: {
      linkedin: string;
      x: string;
      email: string;
    };
    socialLinks: {
      linkedin: string;
      x: string;
      email: string;
    };
    rights: string;
    cols: {
      products: string;
      solutions: string;
      services: string;
      platform: string;
      partners: string;
      caseStudies: string;
      resources: string;
      company: string;
      hardware: string;
    };
    solutionLinks: { label: string; href: string }[];
    serviceLinks: { label: string; href: string }[];
    caseStudyLinks: { label: string; href: string }[];
    platformLinks: { label: string; href: string }[];
    partnerLinks: { label: string; href: string }[];
    hardwareLinks: { label: string; href: string }[];
  };
  productsNav: FooterProductItem[];
  productsExploreLabel: string;
  resourcesNav: NavItem[];
  companyNav: NavItem[];
  legalNav: NavItem[];
};

const ease = "duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inv-fg";

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`rtl:rotate-180 ${className ?? "h-3 w-3"}`}
      aria-hidden
    >
      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-3.5 w-3.5"}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  );
}

function SolutionsPeopleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-3.5 w-3.5"}
      aria-hidden
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14.5 19a4.5 4.5 0 0 1 6.5-4" />
    </svg>
  );
}

function HeadsetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-4 w-4"}
      aria-hidden
    >
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13v3.5A1.5 1.5 0 0 0 5.5 18H7v-5H5.5A1.5 1.5 0 0 0 4 14.5V13Z" />
      <path d="M20 13v3.5a1.5 1.5 0 0 1-1.5 1.5H17v-5h1.5A1.5 1.5 0 0 1 20 14.5V13Z" />
      <path d="M17 18.5v.5a3 3 0 0 1-3 3h-1" />
    </svg>
  );
}

function AlgeriaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "h-3.5 w-3.5"}
      aria-hidden
    >
      <path d="M6.1 3.8c1.6-.2 3.1.3 4.3 1.2l1.2.8 1.6-.3c1-.2 2.1-.1 3 .5l1.4.8 1.1-.2.7 1.5-1 2 .4 1.4 1.1 1-.5 1.9-2 .6-1.3 1.4-1.9.3-1.6 1.2-2.1-.3-1.4.9-2-.7-1-1.5.2-1.9-1.1-1.3.3-2 1.2-1.6-.2-1.9L6.1 3.8Z" />
    </svg>
  );
}

function SocialIcon({
  kind,
  className,
}: {
  kind: "linkedin" | "x" | "email";
  className?: string;
}) {
  const cls = className ?? "h-3.5 w-3.5";
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
        <path d="M6.5 9.5H3.8v10.7h2.7V9.5ZM5.15 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.2 13.2c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.42.92-2.84 1.56V9.5h-2.7c.04.8 0 10.7 0 10.7h2.7v-6c0-.32.02-.64.12-.87.26-.64.85-1.3 1.84-1.3 1.3 0 1.82.98 1.82 2.42v5.75h2.7v-6.01Z" />
      </svg>
    );
  }
  if (kind === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
        <path d="M16.8 4h2.5l-5.45 6.23L20.5 20h-4.5l-3.52-4.6L8.1 20H5.6l5.83-6.66L3.7 4h4.6l3.18 4.22L16.8 4Zm-.88 14.4h1.39L8.18 5.5H6.7l9.22 12.9Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={cls}
      aria-hidden
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ColumnIcon({
  kind,
}: {
  kind: "products" | "solutions" | "hardware" | "resources";
}) {
  if (kind === "solutions") {
    return <SolutionsPeopleIcon className="h-3.5 w-3.5" />;
  }
  return navSectionIcon(kind, "h-3.5 w-3.5");
}

function AvailableBadge({ label }: { label: string }) {
  const short = label.replace(/\s+now$/i, "").trim() || label;
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-500/25 bg-emerald-500/[0.12] px-2 py-[3px] font-mono text-[0.58rem] uppercase leading-none tracking-[0.12em] text-emerald-400">
      {short}
    </span>
  );
}

function NavLink({
  href,
  label,
  active,
  subtitle,
  badge,
}: {
  href: string;
  label: string;
  active: boolean;
  subtitle?: string;
  badge?: string;
}) {
  const stacked = Boolean(subtitle) && !badge;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`group flex items-center gap-3 border-b border-inv-line/70 py-3 transition-colors ${ease} ${focusRing} ${
        stacked ? "min-h-[3.25rem]" : "min-h-11"
      } ${active ? "text-inv-fg" : "text-inv-fg-dim hover:text-inv-fg"}`}
    >
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate text-[0.8125rem] font-medium tracking-[-0.01em] sm:text-sm">
            {label}
          </span>
          {badge ? <AvailableBadge label={badge} /> : null}
        </span>
        {stacked ? (
          <span className="mt-1 block text-[0.72rem] leading-none text-inv-muted">
            {subtitle}
          </span>
        ) : null}
      </span>
      <Chevron
        className={`h-3 w-3 shrink-0 text-inv-muted/55 transition-[color,transform,opacity] ${ease} ${
          active ? "text-inv-fg opacity-100" : "opacity-70"
        } group-hover:translate-x-0.5 group-hover:text-inv-fg group-hover:opacity-100 rtl:group-hover:-translate-x-0.5`}
      />
    </Link>
  );
}

function ColumnHeader({
  kind,
  title,
}: {
  kind: "products" | "solutions" | "hardware" | "resources";
  title: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="text-inv-fg/65" aria-hidden>
        <ColumnIcon kind={kind} />
      </span>
      <h2 className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-inv-muted">
        {title}
      </h2>
    </div>
  );
}

export function Footer({ data }: { data: FooterData }) {
  const {
    locale,
    footer,
    productsNav,
    productsExploreLabel,
    resourcesNav,
    companyNav,
    legalNav,
  } = data;
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const homeHref = lp(locale, "/");
  const isHome = pathname === homeHref || pathname === `${homeHref}/`;
  const L = (href: string) => lp(locale, href);
  const active = (href: string) => isNavActive(pathname, locale, href);

  const socials = [
    {
      key: "linkedin" as const,
      href: footer.socialLinks.linkedin,
      label: footer.social.linkedin,
    },
    {
      key: "x" as const,
      href: footer.socialLinks.x,
      label: footer.social.x,
    },
    {
      key: "email" as const,
      href: footer.socialLinks.email,
      label: footer.social.email,
    },
  ];

  const simpleColumns: {
    key: string;
    title: string;
    kind: "solutions" | "hardware" | "resources";
    items: { label: string; href: string }[];
  }[] = [
    {
      key: "solutions",
      title: footer.cols.solutions,
      kind: "solutions",
      items: footer.solutionLinks,
    },
    {
      key: "hardware",
      title: footer.cols.hardware,
      kind: "hardware",
      items: footer.hardwareLinks,
    },
    {
      key: "resources",
      title: footer.cols.resources,
      kind: "resources",
      items: resourcesNav,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-inv-bg text-inv-fg">
      <div className="footer-noise absolute inset-0" aria-hidden />

      {!isHome ? (
        <div className="relative border-b border-inv-line/80">
          <div className="shell py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="eyebrow text-inv-muted">{footer.ctaEyebrow}</div>
              <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-inv-fg [text-wrap:balance]">
                {footer.ctaTitle}
              </h2>
              <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
                <Link
                  href={L("/quote")}
                  className={`inline-flex h-11 items-center rounded-full bg-inv-fg px-6 text-sm font-medium text-inv-bg transition-opacity ${ease} hover:opacity-90 sm:h-12 sm:px-7 sm:text-[0.9375rem]`}
                >
                  {footer.ctaPrimary}
                </Link>
                <Link
                  href={L(PRODUCTS_HUB_HREF)}
                  className={`inline-flex h-11 items-center rounded-full border border-inv-line-strong px-6 text-sm font-medium text-inv-fg transition-colors ${ease} hover:border-inv-fg/45 hover:bg-inv-fg/[0.04] sm:h-12 sm:px-7 sm:text-[0.9375rem]`}
                >
                  {productsExploreLabel}
                </Link>
                <Link
                  href={L("/company/contact")}
                  className={`inline-flex h-11 items-center px-3 text-sm font-medium text-inv-fg-dim transition-colors ${ease} hover:text-inv-fg sm:h-12 sm:px-4 sm:text-[0.9375rem]`}
                >
                  {footer.ctaTertiary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`relative shell ${
          isHome ? "pb-10 pt-20 md:pb-12 md:pt-24" : "py-14 md:py-16 lg:py-[4.5rem]"
        }`}
      >
        {/* Main 5-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          {/* Brand */}
          <div className="footer-brand sm:col-span-2 lg:col-span-4 xl:col-span-3">
            <Link
              href={L("/")}
              className={`inline-flex w-fit transition-opacity ${ease} hover:opacity-80 ${focusRing} rounded-[2px]`}
              aria-label="ESTINAD"
            >
              <Logo variant="inverse" className="h-7 md:h-8" />
            </Link>

            <p className="mt-5 max-w-[20rem] text-[0.8125rem] leading-[1.7] text-inv-fg-dim md:text-sm md:leading-[1.75]">
              {footer.tagline}
            </p>

            <p className="mt-3 flex items-start gap-2 text-[0.75rem] leading-relaxed text-inv-muted">
              <GlobeIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-inv-fg/55" />
              <span>{footer.builtLine}</span>
            </p>

            <div className="mt-6 flex gap-2" role="list">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target={social.key === "email" ? undefined : "_blank"}
                  rel={
                    social.key === "email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  role="listitem"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-inv-line text-inv-fg-dim transition-[color,background-color,border-color] ${ease} hover:border-inv-line-strong hover:bg-inv-fg/[0.05] hover:text-inv-fg ${focusRing}`}
                >
                  <SocialIcon kind={social.key} />
                </a>
              ))}
            </div>

            <Link
              href={L("/company/contact")}
              className={`group mt-7 block max-w-sm rounded-[12px] border border-inv-line bg-inv-fg/[0.025] p-4 transition-[border-color,background-color] ${ease} hover:border-inv-line-strong hover:bg-inv-fg/[0.05] ${focusRing}`}
            >
              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-inv-line text-inv-fg transition-colors group-hover:border-inv-line-strong">
                  <HeadsetIcon />
                </span>
                <div className="min-w-0 pt-0.5">
                  <div className="text-sm font-semibold tracking-[-0.01em] text-inv-fg">
                    {footer.helpTitle}
                  </div>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-inv-fg-dim">
                    {footer.helpBody}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-inv-fg">
                    {footer.helpCta}
                    <span
                      className={`text-inv-muted transition-transform ${ease} group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5`}
                      aria-hidden
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Products */}
          <nav
            aria-label={footer.cols.products}
            className="min-w-0 lg:col-span-2 xl:col-span-2"
          >
            <ColumnHeader kind="products" title={footer.cols.products} />
            <ul className="border-t border-inv-line/80">
              {productsNav.map((item) => {
                const isAvailable = item.status === "available";
                return (
                  <li key={item.href}>
                    <NavLink
                      href={L(item.href)}
                      label={item.label}
                      active={active(item.href)}
                      badge={isAvailable ? item.statusLabel : undefined}
                      subtitle={isAvailable ? undefined : item.statusLabel}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Solutions / Hardware / Resources */}
          {simpleColumns.map((col) => (
            <nav
              key={col.key}
              aria-label={col.title}
              className="min-w-0 lg:col-span-2 xl:col-span-2"
            >
              <ColumnHeader kind={col.kind} title={col.title} />
              <ul className="border-t border-inv-line/80">
                {col.items.map((item) => (
                  <li key={`${col.key}-${item.href}-${item.label}`}>
                    <NavLink
                      href={L(item.href)}
                      label={item.label}
                      active={active(item.href)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Company row */}
        <nav
          aria-label={footer.cols.company}
          className="mt-12 flex flex-col gap-3 border-t border-inv-line/80 pt-6 sm:flex-row sm:items-center sm:gap-6 md:mt-14 md:pt-7"
        >
          <div className="shrink-0 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-inv-muted">
            {footer.cols.company}
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {companyNav.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link
                  href={L(item.href)}
                  aria-current={active(item.href) ? "page" : undefined}
                  className={`text-[0.8125rem] transition-colors ${ease} ${focusRing} ${
                    active(item.href)
                      ? "text-inv-fg"
                      : "text-inv-fg-dim hover:text-inv-fg"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-inv-line/80 pt-6 md:mt-10 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-inv-line bg-inv-fg/[0.02] px-2.5 py-1.5 text-inv-fg-dim">
            <AlgeriaMark className="h-3 w-3 text-inv-fg/80" />
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.16em]">
              {footer.builtBadge}
            </span>
          </div>

          <p className="order-last text-[0.75rem] leading-relaxed text-inv-muted md:order-none md:text-center">
            © {year} ESTINAD. {footer.rights}
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center md:justify-end"
          >
            {legalNav.map((item, i) => (
              <span key={item.href} className="inline-flex items-center">
                {i > 0 ? (
                  <span
                    className="mx-3 h-3 w-px bg-inv-line-strong"
                    aria-hidden
                  />
                ) : null}
                <Link
                  href={L(item.href)}
                  aria-current={active(item.href) ? "page" : undefined}
                  className={`text-[0.75rem] transition-colors ${ease} ${focusRing} ${
                    active(item.href)
                      ? "text-inv-fg"
                      : "text-inv-fg-dim hover:text-inv-fg"
                  }`}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
