import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Tag, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { caseStudiesList } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.nav.caseStudies, description: d.caseStudies.index.intro };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const idx = d.caseStudies.index;
  const cases = caseStudiesList(d);

  return (
    <>
      <PageHero
        eyebrow={idx.eyebrow}
        title={idx.title}
        intro={idx.intro}
        cta={{ label: idx.cta, href: L("/company/contact") }}
      />

      {/* Filter strips (IA signal) + grid */}
      <Section>
        <div className="flex flex-col gap-8 mb-12">
          <div>
            <p className="eyebrow mb-4">{idx.filterIndustry}</p>
            <div className="flex flex-wrap gap-2">
              <Tag>{idx.filterAll}</Tag>
              {idx.industries.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-4">{idx.filterType}</p>
            <div className="flex flex-wrap gap-2">
              <Tag>{idx.filterAll}</Tag>
              {idx.types.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 hairline bg-line">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={L(`/case-studies/${c.slug}`)}
              className="group bg-base p-7 flex flex-col hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-accent">{c.glyph}</span>
                <Tag>{c.type}</Tag>
              </div>
              <h3 className="mt-5 text-lg text-ivory font-medium leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed flex-1">{c.excerpt}</p>
              <p className="mt-5 text-xs font-mono uppercase tracking-[0.16em] text-muted-2">
                {c.meta}
              </p>
              <span className="mt-4 inline-block text-xs text-accent group-hover:translate-x-1 transition-transform">
                {d.common.readCaseStudy}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={idx.ctaTitle} title={idx.ctaBody} />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={L("/company/contact")}>{idx.cta}</Button>
          <Button href={L("/products")} variant="secondary">
            {d.common.exploreProductsArrow}
          </Button>
        </div>
      </Section>
    </>
  );
}
