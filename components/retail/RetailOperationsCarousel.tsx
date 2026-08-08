"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { retailFeatureIcon } from "@/components/retail/RetailFeatureIcons";
import { lp, type Locale } from "@/lib/i18n-config";

export type RetailOpsFeature = {
  icon: string;
  title: string;
  body: string;
};

export type RetailOpsSlide = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tabLabel: string;
  tabBody: string;
  imageSrc: string;
  imageAlt: string;
  features: RetailOpsFeature[];
};

export type RetailOperationsCarouselCopy = {
  cta: string;
  prevLabel: string;
  nextLabel: string;
  slides: RetailOpsSlide[];
};

type Props = {
  locale: Locale;
  copy: RetailOperationsCarouselCopy;
};

function UiScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = ready && !failed;

  useEffect(() => {
    setReady(false);
    setFailed(false);
  }, [src]);

  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-[18px] border-[3px] border-ink bg-surface md:min-h-[420px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={src}
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover object-top ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setReady(true)}
        onError={() => setFailed(true)}
      />

      {!showImage ? (
        <div className="absolute inset-0 flex flex-col bg-surface p-3 sm:p-4" aria-hidden>
          <div className="flex h-full overflow-hidden rounded-[12px] border border-line bg-card">
            <div className="hidden w-[72px] shrink-0 border-e border-line bg-surface-2 p-2.5 sm:block">
              <div className="h-5 w-10 rounded bg-line" />
              <div className="mt-4 flex flex-col gap-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-7 rounded-lg ${i === 0 ? "bg-card shadow-card" : "bg-transparent"}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3 p-3 sm:p-4">
              <div className="h-9 rounded-full border border-line bg-surface" />
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-[12px] border border-line bg-card p-3">
                    <div className="h-2.5 w-12 rounded bg-line" />
                    <div className="mt-3 h-4 w-16 rounded bg-ink/10" />
                  </div>
                ))}
              </div>
              <div className="grid min-h-0 flex-1 gap-2 sm:grid-cols-[1.4fr_1fr]">
                <div className="rounded-[12px] border border-line bg-card p-3">
                  <div className="h-2.5 w-24 rounded bg-line" />
                  <div className="mt-4 h-[55%] rounded-lg bg-surface-2" />
                </div>
                <div className="rounded-[12px] border border-line bg-card p-3">
                  <div className="h-2.5 w-20 rounded bg-line" />
                  <div className="mt-3 flex flex-col gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-8 rounded-lg bg-surface-2" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function RetailOperationsCarousel({ locale, copy }: Props) {
  const L = (href: string) => lp(locale, href);
  const baseId = useId();
  const slides = copy.slides;
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const slide = slides[index] ?? slides[0];
  if (!slide) return null;

  const go = (next: number) => {
    if (total === 0) return;
    setIndex(((next % total) + total) % total);
  };

  const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section className="bg-surface hairline-b">
      <div className="py-16 md:py-24">
        <div className="relative mx-auto w-[min(100%,92vw)] max-w-[1200px] px-4 sm:px-0">
          {/* Side arrows */}
          <button
            type="button"
            aria-label={copy.prevLabel}
            onClick={() => go(index - 1)}
            className="absolute start-0 top-[42%] z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card text-ink shadow-card transition-colors hover:bg-surface-2 lg:inline-flex"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M10 3.5 5.5 8 10 12.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={copy.nextLabel}
            onClick={() => go(index + 1)}
            className="absolute end-0 top-[42%] z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card text-ink shadow-card transition-colors hover:bg-surface-2 lg:inline-flex"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M6 3.5 10.5 8 6 12.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Main card */}
          <div className="overflow-hidden rounded-[28px] border border-line bg-card shadow-lift">
            <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
              <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-surface-2 text-ink">
                    {retailFeatureIcon(slide.icon, "h-5 w-5")}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    {counter}
                  </span>
                </div>

                <h2 className="mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
                  {slide.title}
                </h2>
                <p className="mt-3 max-w-md text-[0.975rem] leading-relaxed text-ink-secondary">
                  {slide.description}
                </p>

                <ul className="mt-8 flex flex-col gap-5">
                  {slide.features.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-3.5">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-surface-2 text-ink">
                        {retailFeatureIcon(feature.icon, "h-4 w-4")}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-ink">{feature.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{feature.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    href={L("/products/retail")}
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-bg transition-colors hover:bg-ink/85"
                  >
                    {copy.cta}
                  </Link>
                </div>
              </div>

              <div className="border-t border-line bg-surface/50 p-4 sm:p-6 lg:border-t-0 lg:border-s lg:p-8">
                <div
                  id={`${baseId}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${baseId}-tab-${slide.id}`}
                  className="h-full"
                >
                  <UiScreenshot src={slide.imageSrc} alt={slide.imageAlt} />
                </div>
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div className="mt-5 flex items-center justify-center gap-2" aria-hidden>
            {slides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-colors ${
                  i === index ? "w-8 bg-ink" : "w-6 bg-line-strong hover:bg-muted-2"
                }`}
                aria-label={`Go to ${item.tabLabel}`}
              />
            ))}
          </div>

          {/* Bottom tabs */}
          <div
            className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4"
            role="tablist"
            aria-label="Retail feature areas"
          >
            {slides.map((item, i) => {
              const active = i === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={active}
                  aria-controls={`${baseId}-panel`}
                  onClick={() => setIndex(i)}
                  className={`flex items-start gap-3 rounded-[18px] px-4 py-4 text-start transition-colors ${
                    active
                      ? "border border-line bg-card shadow-card"
                      : "border border-transparent text-muted hover:bg-card/70 hover:text-ink"
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${
                      active ? "bg-surface-2 text-ink" : "bg-transparent text-muted"
                    }`}
                  >
                    {retailFeatureIcon(item.icon, "h-4 w-4")}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-sm font-semibold tracking-tight ${
                        active ? "text-ink" : "text-ink-secondary"
                      }`}
                    >
                      {item.tabLabel}
                    </span>
                    <span className={`mt-0.5 block text-xs leading-relaxed ${active ? "text-muted" : "text-muted-2"}`}>
                      {item.tabBody}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile arrows */}
          <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
            <button
              type="button"
              aria-label={copy.prevLabel}
              onClick={() => go(index - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink shadow-card"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M10 3.5 5.5 8 10 12.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={copy.nextLabel}
              onClick={() => go(index + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-ink shadow-card"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M6 3.5 10.5 8 6 12.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
