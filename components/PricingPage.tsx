import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section, Eyebrow, Tag } from "@/components/ui";
import { Monogram } from "@/components/Monogram";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type PricingPageData = {
  locale: Locale;
  slug: string;
  eyebrow: string;
  title: string;
  productName: string;
  productOneLiner: string;
  productVertical: string;
  tiers: Dictionary["pricing"]["tiers"][keyof Dictionary["pricing"]["tiers"]];
  pr: Dictionary["pricing"];
  c: Dictionary["common"];
};

export function PricingView({ data }: { data: PricingPageData }) {
  const { locale, slug, eyebrow, title, productName, productOneLiner, productVertical, tiers, pr, c } = data;
  const L = (href: string) => lp(locale, href);

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={productOneLiner}
        cta={{ label: c.requestQuoteArrow, href: L(`/quote?product=${slug}`) }}
        secondaryCta={{ label: productName, href: L(`/products/${slug}`) }}
      />

      <Section>
        <div className="hairline bg-surface p-6 mb-12 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ivory-dim">{pr.logicNote}</p>
          <Tag>{productVertical}</Tag>
        </div>

        <div className="grid gap-px lg:grid-cols-3 hairline bg-line">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative bg-base p-8 flex flex-col ${t.emphasized ? "border-y-2 border-y-accent lg:-mt-4 lg:mb-4" : ""}`}
            >
              {t.emphasized && (
                <span className="absolute end-6 top-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                  {c.recommended}
                </span>
              )}
              <h3 className="text-lg text-ivory font-medium">{t.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t.positioning}</p>
              <div className="mt-6">
                <div className="font-mono text-3xl text-ivory tracking-tight">{t.price}</div>
                <div className="mt-1 text-xs text-muted-2">{t.cadence}</div>
              </div>
              <ul className="mt-6 flex flex-col gap-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ivory-dim">
                    <span className="mt-2 h-1.5 w-1.5 rotate-45 border border-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={L(`/quote?product=${slug}`)}
                className={`mt-8 inline-flex items-center justify-center h-11 px-5 text-sm font-medium transition-colors ${
                  t.emphasized
                    ? "bg-accent text-base hover:bg-accent-dim border border-accent"
                    : "bg-transparent text-ivory border border-line-strong hover:border-ivory/40"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{pr.includedTitle}</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3">
              {pr.included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ivory-dim">
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{pr.payingTitle}</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3">
              {pr.paying.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ivory-dim">
                  <span className="mt-2 h-px w-4 bg-line-strong flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl">
          <Eyebrow>{pr.faqEyebrow}</Eyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl text-ivory font-semibold tracking-tight">
            {pr.faqTitle}
          </h2>
          <div className="mt-8 flex flex-col gap-px bg-line hairline">
            {pr.faqs.map((f) => (
              <div key={f.q} className="bg-base p-6">
                <h3 className="text-base text-ivory font-medium">{f.q}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="hairline-b bg-base">
        <div className="shell py-20 md:py-24 text-center">
          <div className="flex justify-center mb-5">
            <Monogram className="h-9 w-9 text-ivory" />
          </div>
          <h2 className="text-2xl md:text-3xl text-ivory font-semibold tracking-tight">
            {c.notSureTitle}
          </h2>
          <p className="mt-3 text-muted max-w-lg mx-auto">{c.notSureBody}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={L(`/quote?product=${slug}`)}
              className="inline-flex items-center h-11 px-5 text-sm font-medium bg-accent text-base hover:bg-accent-dim border border-accent transition-colors"
            >
              {c.requestQuoteArrow}
            </Link>
            <Link
              href={L("/company/contact")}
              className="inline-flex items-center h-11 px-5 text-sm text-ivory border border-line-strong hover:border-ivory/40 transition-colors"
            >
              {c.talkSales}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
