import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Eyebrow, Tag, Button, Stat } from "@/components/ui";
import { CaseStudyViewTracker } from "@/components/AnalyticsTrackers";
import { getDict } from "@/lib/i18n";
import {
  isLocale,
  lp,
  caseStudySlugs,
  productSlugs,
  serviceSlugs,
  type Locale,
} from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!(caseStudySlugs as readonly string[]).includes(slug)) return {};
  const c = d.caseStudies.items[slug as (typeof caseStudySlugs)[number]];
  return pageMeta(l, `/case-studies/${slug}`, {
    title: `${c.title} (${d.common.illustrativeLabel})`,
    description: c.excerpt,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  if (!(caseStudySlugs as readonly string[]).includes(slug)) notFound();
  const key = slug as (typeof caseStudySlugs)[number];
  const c = d.caseStudies.items[key];

  return (
    <>
      <CaseStudyViewTracker slug={slug} />
      <PageHero
        eyebrow={`${d.nav.caseStudies} / ${c.industry}`}
        title={c.title}
        intro={c.excerpt}
        secondaryCta={{ label: d.common.seeAllCaseStudiesPlain, href: L("/case-studies") }}
      />

      {/* Tags */}
      <section className="hairline-b">
        <div className="shell py-8">
          <div className="flex flex-wrap gap-2">
            <Tag>{d.common.illustrativeLabel}</Tag>
            <Tag>{c.industry}</Tag>
            <Tag>{c.type}</Tag>
          </div>
        </div>
      </section>

      {/* Context / Need / Approach / Result */}
      <Section>
        <div className="grid gap-px md:grid-cols-2 hairline bg-line">
          <div className="bg-base p-8">
            <Eyebrow>{c.contextTitle}</Eyebrow>
            <p className="mt-3 text-sm text-muted leading-relaxed">{c.context}</p>
          </div>
          <div className="bg-base p-8">
            <Eyebrow>{c.needTitle}</Eyebrow>
            <p className="mt-3 text-sm text-ivory leading-relaxed">{c.need}</p>
          </div>
          <div className="bg-base p-8">
            <Eyebrow>{c.approachTitle}</Eyebrow>
            <p className="mt-3 text-sm text-muted leading-relaxed">{c.approach}</p>
          </div>
          <div className="bg-base p-8 relative">
            <div className="absolute inset-0 border border-accent/30 pointer-events-none" />
            <Eyebrow>
              <span className="text-accent">{c.resultTitle}</span>
            </Eyebrow>
            <p className="mt-3 text-sm text-ivory leading-relaxed">{c.result}</p>
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={c.resultTitle} title={c.title} />
        <div className="mt-12 grid gap-px sm:grid-cols-3 hairline bg-line">
          {c.outcomes.map((o) => (
            <Stat key={o.label} value={o.metric} label={o.label} />
          ))}
        </div>
      </Section>

      {/* Related */}
      <Section>
        <SectionHeader eyebrow={c.relatedEyebrow} title={c.title} />
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line">
          {c.related.map((slug) => {
            const isProduct = (productSlugs as readonly string[]).includes(slug);
            const isService = (serviceSlugs as readonly string[]).includes(slug);
            if (isProduct) {
              const p = d.products.items[slug as (typeof productSlugs)[number]];
              return (
                <Link
                  key={slug}
                  href={L(`/products/${slug}`)}
                  className="group bg-base p-6 hover:bg-surface-2 transition-colors"
                >
                  <div className="font-mono text-xs text-accent">{p.glyph}</div>
                  <h3 className="mt-2 text-base text-ivory font-medium">{p.name}</h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">{p.oneLiner}</p>
                </Link>
              );
            }
            if (isService) {
              const s = d.services.items[slug as (typeof serviceSlugs)[number]];
              return (
                <Link
                  key={slug}
                  href={L(`/services/${slug}`)}
                  className="group bg-base p-6 hover:bg-surface-2 transition-colors"
                >
                  <div className="font-mono text-xs text-accent">{s.glyph}</div>
                  <h3 className="mt-2 text-base text-ivory font-medium">{s.name}</h3>
                  <p className="mt-2 text-xs text-muted leading-relaxed">{s.oneLiner}</p>
                </Link>
              );
            }
            return null;
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={L("/company/contact")}>{d.common.discussProject}</Button>
          <Button href={L("/case-studies")} variant="secondary">
            {d.common.seeAllCaseStudiesPlain}
          </Button>
        </div>
      </Section>
    </>
  );
}
