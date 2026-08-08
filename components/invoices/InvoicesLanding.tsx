import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { invoiceIcon } from "@/components/invoices/InvoiceIcons";
import { lp, type Locale } from "@/lib/i18n-config";

export type InvoicesLandingCopy = {
  crumbComingSoon: string;
  spotlightTitle: string;
  spotlightBody: string;
  features: { icon: string; title: string; body: string }[];
  soonEyebrow: string;
  soonTitle: string;
  soonBody: string;
  invoiceLabel: string;
  invoiceAmount: string;
  invoiceStatus: string;
  invoiceMeta: string;
  footers: { icon: string; title: string; body: string }[];
};

type Props = {
  locale: Locale;
  byline: string;
  oneLiner: string;
  name: string;
  productsLabel: string;
  landing: InvoicesLandingCopy;
  registerInterestLabel: string;
  exploreProductsLabel: string;
};

export function InvoicesLanding({
  locale,
  byline,
  oneLiner,
  name,
  productsLabel,
  landing,
  registerInterestLabel,
  exploreProductsLabel,
}: Props) {
  const L = (href: string) => lp(locale, href);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" aria-hidden />

        <div className="relative shell pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-14">
            <div className="max-w-xl">
              <Reveal>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  {productsLabel} / {name} / {landing.crumbComingSoon}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-5 text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[1.06] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]">
                  {byline}
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 text-lg md:text-xl leading-relaxed text-ink-secondary [text-wrap:pretty]">
                  {oneLiner}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={L("/company/contact")}>{registerInterestLabel}</Button>
                  <Button href={L("/products")} variant="secondary">
                    {exploreProductsLabel}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8 flex items-start gap-3 rounded-[16px] border border-line bg-card p-4 shadow-card">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-surface-2 text-ink">
                    {invoiceIcon("operator", "h-5 w-5")}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">{landing.spotlightTitle}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{landing.spotlightBody}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="relative">
              <div className="relative overflow-hidden rounded-[24px] border border-line bg-card shadow-lift">
                <Image
                  src="/images/invoices/hero.png"
                  alt={`${name} product interface`}
                  width={1402}
                  height={1122}
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="relative h-auto w-full"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="shell pb-12 md:pb-16">
        <Reveal>
          <div className="rounded-[28px] border border-line bg-card px-5 py-8 shadow-card md:px-8 md:py-10">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {landing.features.map((feature) => (
                <div key={feature.title} className="min-w-0">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-surface-2 text-ink">
                    {invoiceIcon(feature.icon, "h-5 w-5")}
                  </span>
                  <h3 className="mt-4 text-[0.975rem] font-semibold tracking-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Coming soon band */}
      <section className="shell pb-12 md:pb-16">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border border-line bg-surface">
            <div className="grid items-center gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden />
                  {landing.soonEyebrow}
                </div>
                <h2 className="mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]">
                  {landing.soonTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary [text-wrap:pretty]">
                  {landing.soonBody}
                </p>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[320px]">
                  <div
                    className="pointer-events-none absolute -inset-6 rounded-[32px] bg-ink/[0.03]"
                    aria-hidden
                  />
                  <div className="relative rotate-[-2deg] rounded-[22px] border border-line bg-card p-6 shadow-lift">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                          {landing.invoiceLabel}
                        </div>
                        <div className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                          {landing.invoiceAmount}
                        </div>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[0.68rem] font-medium text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                        {landing.invoiceStatus}
                      </span>
                    </div>
                    <div className="mt-6 space-y-2.5">
                      <div className="h-2 w-3/4 rounded-full bg-surface-2" />
                      <div className="h-2 w-1/2 rounded-full bg-surface-2" />
                      <div className="h-2 w-2/3 rounded-full bg-surface-2" />
                    </div>
                    <p className="mt-6 text-xs text-muted">{landing.invoiceMeta}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Bottom value bar */}
      <section className="shell pb-16 md:pb-24">
        <Reveal>
          <div className="grid gap-8 border-t border-line pt-12 sm:grid-cols-3">
            {landing.footers.map((item) => (
              <div key={item.title} className="text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center text-ink">
                  {invoiceIcon(item.icon, "h-5 w-5")}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
