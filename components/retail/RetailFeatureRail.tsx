"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { retailFeatureIcon } from "@/components/retail/RetailFeatureIcons";

type Card = {
  icon: string;
  title: string;
  body: string;
};

type Props = {
  title: string;
  intro: string;
  cards: Card[];
};

export function RetailFeatureRail({ title, intro, cards }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const rtl =
      typeof document !== "undefined" && document.documentElement.dir === "rtl";
    const amount = Math.min(320, el.clientWidth * 0.75) * dir * (rtl ? -1 : 1);
    el.scrollBy({ left: amount, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section className="bg-surface hairline-b">
      <div className="shell py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-[-0.025em] font-semibold text-ink [text-wrap:balance]">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary [text-wrap:pretty]">
              {intro}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 md:mt-14">
            <div
              ref={scrollerRef}
              className="-mx-1 flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 pb-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="snap-start shrink-0 w-[min(78vw,280px)] rounded-[18px] border border-line bg-card p-6 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-surface-2 text-ink">
                    {retailFeatureIcon(card.icon, "h-5 w-5")}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                </article>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 end-0 hidden w-24 bg-gradient-to-l from-surface to-transparent md:block" />

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next features"
              className="absolute end-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card text-ink shadow-card transition-colors hover:bg-surface-2 md:inline-flex"
            >
              <span className="inline-block rtl:-scale-x-100" aria-hidden>
                →
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
