import type { Metadata } from "next";
import { Suspense } from "react";
import { HardwareQuoteClient } from "@/components/hardware/HardwareQuoteClient";
import { Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/hardware/quote", {
    title: d.hardware.quote.metaTitle,
    description: d.hardware.quote.metaDescription,
  });
}

export default async function HardwareQuotePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const q = d.hardware.quote;

  const kitOptions = (
    Object.keys(d.hardware.kits) as (keyof typeof d.hardware.kits)[]
  ).map((slug) => ({
    value: slug,
    label: d.hardware.kits[slug].shortName || d.hardware.kits[slug].name,
  }));

  return (
    <>
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
        <div className="shell relative py-20 md:py-28">
          <div className="max-w-3xl min-w-0">
            <p className="eyebrow mb-5">{q.eyebrow}</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance]">
              {q.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
              {q.intro}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <Suspense
            fallback={
              <div className="hairline rounded-card bg-surface p-8 text-sm text-muted">
                …
              </div>
            }
          >
            <HardwareQuoteClient
              privacyHref={L("/legal/privacy")}
              consentLabel={d.common.consentLabel}
              form={d.hardware.form}
              kitOptions={kitOptions}
              note={q.note}
            />
          </Suspense>

          <aside className="flex flex-col gap-8">
            <div className="hairline rounded-card bg-surface p-7">
              <h2 className="text-sm text-ink font-medium font-mono uppercase tracking-[0.18em]">
                {q.asideTitle}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {q.aside.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rotate-45 border border-ink/50 flex-shrink-0" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs leading-relaxed text-muted">{q.note}</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
