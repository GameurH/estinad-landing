import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

type WhyCopy = Dictionary["homeV2"]["why"];

type Props = {
  locale: Locale;
  copy: WhyCopy;
};

function PillarIcon({ index, className = "h-5 w-5" }: { index: number; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <rect x="5" y="7" width="14" height="12" rx="1.5" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          <path d="M5 12h14" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path d="M12 3 19 6.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5L12 3Z" />
          <path d="m9.5 12 1.8 1.8L15 10" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-3" />
          <path d="M12 15V9" />
          <path d="M16 15v-6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.2" />
          <circle cx="5.5" cy="7" r="1.6" />
          <circle cx="18.5" cy="7" r="1.6" />
          <circle cx="5.5" cy="17" r="1.6" />
          <circle cx="18.5" cy="17" r="1.6" />
          <path d="m7 8 3.2 2.3M14.8 10.3 17 8M7 16l3.2-2.3M14.8 13.7 17 16" />
        </svg>
      );
  }
}

function TrustIcon({ index, className = "h-4 w-4" }: { index: number; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <path d="M7 8h10v11H7V8Z" />
          <path d="M9 8V6.5A3 3 0 0 1 12 3.5 3 3 0 0 1 15 6.5V8" />
          <path d="M10 13h4" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M5.6 18.4l1.6-1.6M16.8 7.2l1.6-1.6" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 0 1 13.5-5.8L20 4v6h-6" />
          <path d="M20 12a8 8 0 0 1-13.5 5.8L4 20v-6h6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2" />
          <circle cx="5" cy="8" r="1.5" />
          <circle cx="19" cy="8" r="1.5" />
          <circle cx="5" cy="16" r="1.5" />
          <circle cx="19" cy="16" r="1.5" />
          <path d="m6.3 9 3.8 2M14 11l3.7-2M6.3 15l3.8-2M14 13l3.7 2" />
        </svg>
      );
  }
}

export function WhyEstinad({ locale, copy }: Props) {
  const isAr = locale === "ar";

  return (
    <div>
      {/* Hero row */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {copy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className={
                isAr
                  ? "mt-5 text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.35] font-semibold tracking-tight text-ink [text-wrap:balance]"
                  : "mt-5 text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.08] tracking-[-0.03em] font-semibold text-ink [text-wrap:balance]"
              }
            >
              {copy.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mt-6 block h-[3px] w-14 bg-ink" aria-hidden />
          </Reveal>
          <Reveal delay={0.14}>
            <p
              className={
                isAr
                  ? "mt-7 max-w-xl text-base md:text-lg leading-[1.9] text-ink-secondary [text-wrap:pretty]"
                  : "mt-7 max-w-xl text-base md:text-lg leading-relaxed text-ink-secondary [text-wrap:pretty]"
              }
            >
              {copy.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <figure className="relative mx-auto w-full max-w-[520px] lg:max-w-none lg:ms-auto">
            <div className="relative aspect-square overflow-hidden rounded-[24px] bg-pure-black ring-1 ring-black/10 dark:ring-white/10">
              <Image
                src="/images/why/whiy-image.png"
                alt={copy.visualLabel}
                fill
                sizes="(max-width: 1024px) min(100vw, 520px), 40vw"
                className="object-contain object-center scale-[1.02]"
                priority={false}
              />
            </div>
          </figure>
        </Reveal>
      </div>

      {/* Pillar cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
        {copy.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={0.08 + i * 0.05}>
            <article className="group relative flex h-full min-h-[200px] flex-col rounded-[20px] border border-line bg-card p-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-surface text-ink transition-colors group-hover:border-line-strong">
                    <PillarIcon index={i} />
                  </span>
                  <span className="font-mono text-2xl font-semibold tracking-tight text-ink tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="inline-block text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </div>
              <h3 className="mt-6 font-mono text-[0.8rem] uppercase tracking-[0.16em] text-ink">
                {pillar.title}
              </h3>
              <p
                className={`mt-3 text-sm text-ink-secondary ${
                  isAr ? "leading-[1.85]" : "leading-relaxed"
                }`}
              >
                {pillar.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Trust bar */}
      <Reveal delay={0.2}>
        <ul className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-4">
          {copy.trust.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2.5 bg-card px-4 py-4 sm:justify-center sm:px-3 md:px-4"
            >
              <span className="shrink-0 text-ink">
                <TrustIcon index={i} />
              </span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink leading-snug sm:text-[0.58rem] md:text-[0.65rem] md:tracking-[0.14em]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
