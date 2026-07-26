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
  return { title: d.company.vision.title, description: d.company.vision.intro };
}

export default async function VisionPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const v = d.company.vision;

  return (
    <>
      <PageHero eyebrow={v.eyebrow} title={v.title} intro={v.intro} />

      <Section>
        <SectionHeader eyebrow={v.trajectoryEyebrow} title={v.trajectoryTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {v.phases.map((p) => (
            <div key={p.n} className="bg-base p-8">
              <span className="font-mono text-sm text-accent">{p.n}</span>
              <h3 className="mt-3 text-lg text-ivory font-medium">{p.t}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow={v.truthEyebrow} title={v.truthTitle} />
        <div className="mt-10 max-w-3xl flex flex-col gap-6">
          {v.truths.map((t) => (
            <p key={t} className="text-base md:text-lg text-ivory-dim leading-relaxed">{t}</p>
          ))}
        </div>
        <div className="mt-10">
          <Button href={L("/demo")}>{v.cta}</Button>
        </div>
      </Section>
    </>
  );
}
