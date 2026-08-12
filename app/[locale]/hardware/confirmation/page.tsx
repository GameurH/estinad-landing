import type { Metadata } from "next";
import { Button, Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ ref?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/hardware/confirmation", {
    title: d.hardware.confirmation.metaTitle,
    description: d.hardware.confirmation.metaDescription,
  });
}

export default async function HardwareConfirmationPage({
  params,
  searchParams,
}: Props) {
  const { locale } = await params;
  const { ref } = await searchParams;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const c = d.hardware.confirmation;
  const reference = typeof ref === "string" ? ref.trim().slice(0, 64) : "";

  return (
    <>
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
        <div className="shell relative py-16 md:py-24">
          <div className="max-w-3xl min-w-0">
            <p className="eyebrow mb-5">{c.eyebrow}</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance]">
              {reference ? c.title : c.missingTitle}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
              {reference ? c.body : c.missingBody}
            </p>
            {reference && (
              <p className="mt-8 font-mono text-sm text-ink">
                <span className="text-muted uppercase tracking-[0.16em] me-3">
                  {c.referenceLabel}
                </span>
                {reference}
              </p>
            )}
          </div>
        </div>
      </section>

      <Section>
        {reference && (
          <div className="max-w-xl">
            <h2 className="text-sm text-ink font-medium font-mono uppercase tracking-[0.18em]">
              {c.nextTitle}
            </h2>
            <ol className="mt-5 flex flex-col gap-3 list-none">
              {c.next.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink-secondary"
                >
                  <span className="font-mono text-xs text-muted tracking-[0.18em] mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={L("/hardware")}>{c.shopCta}</Button>
          <Button href={L("/hardware/quote")} variant="secondary">
            {c.quoteCta}
          </Button>
        </div>
      </Section>
    </>
  );
}
