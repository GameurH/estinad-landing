import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.company.about.title, description: d.company.about.intro };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const a = d.company.about;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} intro={a.intro} />

      <Section>
        <SectionHeader eyebrow={a.beliefsEyebrow} title={a.beliefsTitle} />
        <div className="mt-10 max-w-3xl flex flex-col gap-6">
          {a.beliefs.map((b) => (
            <p key={b} className="text-base md:text-lg text-ivory-dim leading-relaxed">{b}</p>
          ))}
        </div>
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line">
          {a.stats.map((s) => (
            <div key={s.label} className="bg-base p-6">
              <div className="font-mono text-xl md:text-2xl text-ivory tracking-tight">{s.value}</div>
              <div className="mt-2 text-xs text-muted leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={a.principlesEyebrow} title={a.principlesTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-2 lg:grid-cols-4 hairline bg-line">
          {a.principles.map((p) => (
            <div key={p.t} className="bg-base p-7">
              <h3 className="text-base text-ivory font-medium">{p.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href={L("/company/vision")} className="text-sm text-accent hover:underline">{a.cta}</Link>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Button href={L("/demo")}>{d.common.requestDemoArrow}</Button>
        </div>
      </Section>
    </>
  );
}
