import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.legal.terms.title, description: d.legal.terms.intro };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const t = d.legal.terms;

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <Section>
        <div className="max-w-3xl flex flex-col gap-px hairline bg-line">
          {t.blocks.map((b) => (
            <div key={b.title} className="bg-base p-7 md:p-8">
              <h2 className="text-lg text-ivory font-medium">{b.title}</h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
