import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";
import { Section, Eyebrow, Tag, Button } from "@/components/ui";
import { lp, type Locale } from "@/lib/i18n-config";

export type ResourceItem = {
  title: string;
  meta: string;
  excerpt: string;
  tag: string;
};

export function ResourceSection({
  locale,
  eyebrow,
  title,
  intro,
  items,
  cta,
  sidebar,
  readLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  intro: string;
  items: ResourceItem[];
  cta?: ReactNode;
  sidebar: {
    title: string;
    nav: { label: string; href: string }[];
    ctaTitle: string;
    ctaBody: string;
    cta: string;
  };
  readLabel: string;
}) {
  const L = (href: string) => lp(locale, href);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <Eyebrow>{sidebar.title}</Eyebrow>
            <nav className="mt-4 flex flex-col gap-1">
              {sidebar.nav.map((r) => (
                <Link
                  key={r.href}
                  href={L(r.href)}
                  className="block py-2 text-sm text-ivory-dim hover:text-ivory transition-colors hairline-b"
                >
                  {r.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 hairline bg-surface p-5">
              <p className="text-sm text-ivory font-medium">{sidebar.ctaTitle}</p>
              <p className="mt-2 text-xs text-muted">{sidebar.ctaBody}</p>
              <div className="mt-4">
                <Button href={L("/demo")}>{sidebar.cta}</Button>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-px hairline bg-line">
            {items.map((it) => (
              <article
                key={it.title}
                className="group bg-base p-6 md:p-8 hover:bg-surface transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Tag>{it.tag}</Tag>
                  <span className="text-xs text-muted-2 font-mono">{it.meta}</span>
                </div>
                <h3 className="mt-4 text-lg md:text-xl text-ivory font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{it.excerpt}</p>
                <span className="mt-4 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
                  {readLabel}
                </span>
              </article>
            ))}
          </div>
        </div>

        {cta && <div className="mt-12">{cta}</div>}
      </Section>
    </>
  );
}
