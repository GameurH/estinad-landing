"use client";

import { useReducedMotion } from "framer-motion";
import { MegaCardLink, MegaShell } from "@/components/nav/MegaShell";
import { lp, type Locale } from "@/lib/i18n-config";

export type MegaNavLink = {
  label: string;
  href: string;
  desc?: string;
  meta?: string;
  featured?: boolean;
};

export type LinksMegaLabels = {
  intro: string;
  viewAll: string;
  viewAllHref: string;
};

type Props = {
  locale: Locale;
  links: MegaNavLink[];
  labels: LinksMegaLabels;
  columns?: 2 | 3 | 4;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function LinksMegaMenu({
  locale,
  links,
  labels,
  columns = 2,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const L = (href: string) => lp(locale, href);
  const reduceMotion = useReducedMotion();
  const featured = links.find((l) => l.featured);
  const rest = links.filter((l) => !l.featured);

  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <MegaShell
      locale={locale}
      intro={labels.intro}
      ariaLabel={labels.viewAll}
      onNavigate={onNavigate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      footerLinks={[{ label: labels.viewAll, href: labels.viewAllHref }]}
    >
      {featured ? (
        <div className="grid lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.6fr)]">
          <div className="p-3 lg:border-e lg:border-line">
            <div className="overflow-hidden rounded-[14px] h-full">
              <MegaCardLink
                href={L(featured.href)}
                title={featured.label}
                desc={featured.desc}
                meta={featured.meta}
                featured
                onNavigate={onNavigate}
              />
            </div>
          </div>
          <div className="p-3">
            <div className={`grid gap-px ${colClass} hairline bg-line overflow-hidden rounded-[14px]`}>
              {rest.map((link, i) => (
                <MegaCardLink
                  key={link.href}
                  href={L(link.href)}
                  title={link.label}
                  desc={link.desc}
                  meta={link.meta}
                  onNavigate={onNavigate}
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          animation: "mega-card-in 220ms ease-out both",
                          animationDelay: `${30 + i * 24}ms`,
                        }
                  }
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3">
          <div className={`grid gap-px ${colClass} hairline bg-line overflow-hidden rounded-[14px]`}>
            {links.map((link, i) => (
              <MegaCardLink
                key={link.href}
                href={L(link.href)}
                title={link.label}
                desc={link.desc}
                meta={link.meta}
                onNavigate={onNavigate}
                style={
                  reduceMotion
                    ? undefined
                    : {
                        animation: "mega-card-in 220ms ease-out both",
                        animationDelay: `${30 + i * 24}ms`,
                      }
                }
              />
            ))}
          </div>
        </div>
      )}
    </MegaShell>
  );
}
