import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Eyebrow, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import {
  isLocale,
  lp,
  solutionSlugs,
  productAvailability,
  type Locale,
} from "@/lib/i18n-config";
import { isProductSlug } from "@/lib/products";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!(solutionSlugs as readonly string[]).includes(slug)) return {};
  const s = d.solutions.items[slug as (typeof solutionSlugs)[number]];
  return { title: s.name, description: s.summary };
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  if (!(solutionSlugs as readonly string[]).includes(slug)) notFound();
  const key = slug as (typeof solutionSlugs)[number];
  const s = d.solutions.items[key];

  return (
    <>
      <PageHero
        eyebrow={`${d.nav.solutions} / ${s.name}`}
        title={s.summary}
        intro={s.audience}
        cta={{ label: d.common.requestQuoteArrow, href: L("/quote") }}
        secondaryCta={{ label: d.common.allSolutions, href: L("/solutions") }}
      />

      <Section>
        <div className="grid gap-px md:grid-cols-2 hairline bg-line">
          <div className="bg-base p-8">
            <Eyebrow>{s.painsLabel}</Eyebrow>
            <ul className="mt-5 flex flex-col gap-4">
              {s.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-2 h-px w-4 bg-muted-2 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-base p-8 relative">
            <div className="absolute inset-0 border border-accent/30 pointer-events-none" />
            <Eyebrow>
              <span className="text-accent">{s.shiftsLabel}</span>
            </Eyebrow>
            <ul className="mt-5 flex flex-col gap-4">
              {s.shifts.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ivory">
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={s.relatedEyebrow} title={s.relatedTitle} />
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line">
          {s.related.map((slug) => {
            if (!isProductSlug(slug)) return null;
            const p = d.products.items[slug];
            const available = productAvailability[slug] === "available";
            return (
              <Link
                key={slug}
                href={L(`/products/${slug}`)}
                className="group bg-base p-6 hover:bg-surface-2 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-mono text-xs text-accent">{p.glyph}</div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-2">
                    {available ? d.common.availableLabel : d.common.comingSoonLabel}
                  </span>
                </div>
                <h3 className="mt-2 text-base text-ivory font-medium">{p.name}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{p.oneLiner}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-10">
          <Button href={L("/quote")}>{d.common.requestQuoteArrow}</Button>
        </div>
      </Section>
    </>
  );
}
