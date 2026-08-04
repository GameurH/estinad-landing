import Image from "next/image";
import Link from "next/link";
import { Button, Tag } from "@/components/ui";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { HardwareKitDefinition } from "@/lib/hardware";
import type { Locale } from "@/lib/i18n-config";
import { lp } from "@/lib/i18n-config";

type Props = {
  locale: Locale;
  kit: HardwareKitDefinition;
  copy: Dictionary["hardware"]["kits"][keyof Dictionary["hardware"]["kits"]];
  labels: Dictionary["hardware"]["kitsSection"];
  compatibilityCta: string;
};

export function HardwareKitHero({
  locale,
  kit,
  copy,
  labels,
  compatibilityCta,
}: Props) {
  const L = (h: string) => lp(locale, h);
  const quoteHref = L(`/hardware/quote?kit=${kit.slug}`);
  const hero = kit.media.hero;

  return (
    <section className="relative overflow-hidden hairline-b">
      <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
      <div className="shell relative py-16 md:py-24">
        <Link
          href={L("/hardware")}
          className="inline-flex items-center min-h-11 text-sm text-ink-secondary hover:text-ink transition-colors"
        >
          <span className="me-2 inline-block rtl:-scale-x-100" aria-hidden>
            ←
          </span>
          {labels.backToHardware}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
          <div className="min-w-0 max-w-xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-xs text-muted tracking-[0.18em]">
                {kit.glyph}
              </span>
              <Tag>{labels.configuredLabel}</Tag>
            </div>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance]">
              {copy.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink font-medium [text-wrap:pretty]">
              {copy.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              {copy.detailIntro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={quoteHref}>{copy.cta}</Button>
              <Button href={L("/hardware/compatibility")} variant="secondary">
                {compatibilityCta}
              </Button>
            </div>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden bg-surface min-w-0">
            <Image
              src={hero.src}
              alt={copy.media.hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
