import { Reveal } from "@/components/motion/Reveal";
import { Button, Eyebrow } from "@/components/ui";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailFinalCtaCopy =
  Dictionary["products"]["items"]["retail"]["landing"]["finalCta"];

type Props = {
  locale: Locale;
  copy: RetailFinalCtaCopy;
};

export function RetailFinalCta({ locale, copy }: Props) {
  const L = (href: string) => lp(locale, href);

  return (
    <section
      className="relative overflow-hidden hairline-b bg-bg"
      aria-labelledby="retail-final-cta-title"
    >
      <div className="absolute inset-0 soft-light opacity-70" aria-hidden />
      <div className="shell relative py-24 md:py-32 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              id="retail-final-cta-title"
              className="text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.1] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]"
            >
              {copy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-secondary md:text-lg">
              {copy.body}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <Button href={L("/quote?product=retail")}>{copy.primaryCta}</Button>
              <Button href={L("/company/contact")} variant="secondary">
                {copy.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
