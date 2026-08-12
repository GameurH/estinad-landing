import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui";
import type { Dictionary } from "@/lib/dictionaries/types";

export type RetailOperationalConfidenceCopy =
  Dictionary["products"]["items"]["retail"]["landing"]["operationalConfidence"];

type Props = {
  copy: RetailOperationalConfidenceCopy;
};

export function RetailOperationalConfidence({ copy }: Props) {
  return (
    <section className="hairline-b bg-bg" aria-labelledby="retail-confidence-title">
      <div className="shell py-16 md:py-24">
        <Reveal>
          <header className="mx-auto max-w-3xl text-center md:mx-0 md:text-start">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2
              id="retail-confidence-title"
              className="text-[clamp(1.85rem,3.8vw,3rem)] leading-[1.12] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]"
            >
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg [text-wrap:pretty]">
              {copy.intro}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="relative mx-auto mt-10 max-w-5xl md:mt-12 lg:mt-14">
            <div
              className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-[32px] bg-[radial-gradient(ellipse_70%_80%_at_50%_40%,var(--color-surface)_0%,transparent_72%)] sm:-inset-x-8"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[12px] border border-line bg-surface shadow-sm sm:rounded-2xl">
              <div
                className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] ring-1 ring-inset ring-black/[0.035] dark:ring-white/[0.05]"
                aria-hidden
              />
              <Image
                src="/images/retail/RETAIL-OPERATIONAL.png"
                alt={copy.imageAlt}
                width={1672}
                height={941}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1024px"
                className="relative h-auto w-full select-none"
                loading="lazy"
                priority={false}
              />
            </div>
          </figure>
        </Reveal>

        <Reveal delay={0.12}>
          <ol className="mx-auto mt-10 grid max-w-5xl gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6 md:mt-12 md:gap-8 md:pt-12">
            {copy.principles.map((principle) => (
              <li key={principle.id} className="min-w-0">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                  {principle.number}
                </span>
                <h3 className="mt-2 text-base font-medium tracking-tight text-ink [text-wrap:balance]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary [text-wrap:pretty]">
                  {principle.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
