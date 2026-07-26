import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Eyebrow, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, serviceSlugs, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  if (!(serviceSlugs as readonly string[]).includes(slug)) return {};
  const s = d.services.items[slug as (typeof serviceSlugs)[number]];
  return { title: s.name, description: s.oneLiner };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  if (!(serviceSlugs as readonly string[]).includes(slug)) notFound();
  const key = slug as (typeof serviceSlugs)[number];
  const s = d.services.items[key];

  return (
    <>
      <PageHero
        eyebrow={`${d.nav.services} / ${s.short}`}
        title={s.name}
        intro={s.positioning}
        cta={{ label: d.common.discussProject, href: L("/company/contact") }}
        secondaryCta={{ label: d.common.allServices, href: L("/services") }}
      />

      {/* Who it's for + capabilities */}
      <Section>
        <div className="grid gap-px md:grid-cols-2 hairline bg-line">
          <div className="bg-base p-8">
            <Eyebrow>{s.forTitle}</Eyebrow>
            <h2 className="mt-2 text-xl text-ivory font-medium">{s.forHeader}</h2>
            <ul className="mt-5 flex flex-col gap-4">
              {s.forList.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 border border-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-base p-8">
            <Eyebrow>{s.capabilitiesTitle}</Eyebrow>
            <ul className="mt-5 flex flex-col gap-4">
              {s.capabilities.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ivory">
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={s.processEyebrow} title={s.processTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-2 lg:grid-cols-4 hairline bg-line">
          {s.process.map((step, i) => (
            <div key={step.t} className="bg-base p-7">
              <div className="font-mono text-xs text-accent">{`0${i + 1}`}</div>
              <h3 className="mt-3 text-lg text-ivory font-medium">{step.t}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech / how we build */}
      <Section>
        <SectionHeader eyebrow={s.techEyebrow} title={s.techTitle} />
        <div className="mt-12 grid gap-px sm:grid-cols-2 hairline bg-line">
          {s.tech.map((t) => (
            <div key={t} className="bg-base p-7">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rotate-45 border border-accent" />
                <p className="text-sm text-ivory">{t}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-surface">
        <div className="max-w-3xl">
          <Eyebrow>{d.nav.services}</Eyebrow>
          <h2 className="text-3xl md:text-4xl text-ivory font-semibold leading-tight">
            {s.ctaTitle}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={L("/company/contact")}>{d.common.discussProject}</Button>
            <Button href={L("/case-studies")} variant="secondary">
              {d.common.seeAllCaseStudies}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
