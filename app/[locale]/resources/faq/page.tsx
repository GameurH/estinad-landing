import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.resources.faq.title, description: d.resources.faq.intro };
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const f = d.resources.faq;

  return (
    <>
      <PageHero eyebrow={f.eyebrow} title={f.title} intro={f.intro} />
      <Section>
        <div className="max-w-3xl flex flex-col gap-16">
          {f.groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-2">{g.title}</h2>
              <div className="mt-6 hairline bg-base">
                {g.faqs.map((item, i) => (
                  <details key={item.q} className={`group ${i > 0 ? "hairline-b" : ""}`}>
                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                      <span className="text-base text-ivory font-medium">{item.q}</span>
                      <span className="text-muted-2 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="px-6 pb-6 text-sm text-muted leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 hairline bg-surface p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div>
            <p className="text-lg text-ivory font-medium">{f.stillTitle}</p>
            <p className="mt-2 text-sm text-muted">{f.stillBody}</p>
          </div>
          <Button href={L("/demo")}>{f.cta}</Button>
        </div>
      </Section>
    </>
  );
}
