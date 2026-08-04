import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { HardwareKitDefinition } from "@/lib/hardware";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";

type KitCardProps = {
  locale: Locale;
  kit: HardwareKitDefinition;
  name: string;
  tagline: string;
  useCase: string;
  heroAlt: string;
  cta: string;
  labels: Dictionary["hardware"]["kitsSection"];
};

export function HardwareKitCard({
  locale,
  kit,
  name,
  tagline,
  useCase,
  heroAlt,
  cta,
  labels,
}: KitCardProps) {
  const L = (h: string) => lp(locale, h);
  const quoteHref = L(`/hardware/quote?kit=${kit.slug}`);
  const hero = kit.media.hero;

  return (
    <article className="group flex flex-col bg-card min-w-0 overflow-hidden">
      <Link
        href={L(`/hardware/${kit.slug}`)}
        className="relative block aspect-[4/3] bg-surface overflow-hidden"
      >
        <Image
          src={hero.src}
          alt={heroAlt}
          width={hero.width}
          height={hero.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-muted tracking-[0.18em]">
            {kit.glyph}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted border border-line rounded-full px-2.5 py-1">
            {labels.configuredLabel}
          </span>
        </div>

        <h3 className="mt-5 text-xl md:text-2xl font-semibold text-ink tracking-tight [text-wrap:balance] min-w-0">
          <Link
            href={L(`/hardware/${kit.slug}`)}
            className="hover:opacity-80 transition-opacity"
          >
            {name}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-ink leading-relaxed [text-wrap:pretty]">
          {tagline}
        </p>
        <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{useCase}</p>

        <div className="mt-auto pt-6 hairline-t flex flex-col sm:flex-row gap-3 sm:items-center">
          <Link
            href={quoteHref}
            className="inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-ink/85 transition-colors"
          >
            {cta}
          </Link>
          <Link
            href={L(`/hardware/${kit.slug}`)}
            className="inline-flex items-center justify-center min-h-11 h-11 px-5 rounded-full text-sm font-medium text-ink border border-line-strong hover:border-ink hover:bg-surface transition-colors"
          >
            {labels.viewDetails}
            <span className="ms-2 inline-block rtl:-scale-x-100" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
