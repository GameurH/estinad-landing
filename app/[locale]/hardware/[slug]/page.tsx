import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HardwareIncludes } from "@/components/hardware/HardwareIncludes";
import { HardwareKitGallery } from "@/components/hardware/HardwareKitGallery";
import { HardwareKitHero } from "@/components/hardware/HardwareKitHero";
import { HardwareProductLinks } from "@/components/hardware/HardwareProductLinks";
import { HardwareSpecGroups } from "@/components/hardware/HardwareSpecGroups";
import { Section, SectionHeader, Button } from "@/components/ui";
import { getHardwareKit, hardwareKitCopy, isHardwareKitSlug } from "@/lib/hardware";
import { getDict } from "@/lib/i18n";
import {
  hardwareKitSlugs,
  isLocale,
  lp,
  type Locale,
} from "@/lib/i18n-config";
import { pageMeta, SITE_BASE } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return hardwareKitSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  if (!isHardwareKitSlug(slug)) return {};
  const d = getDict(l);
  const copy = hardwareKitCopy(d, slug);
  const kit = getHardwareKit(slug);
  const ogImage = kit
    ? [
        {
          url: `${SITE_BASE}${kit.media.hero.src}`,
          width: kit.media.hero.width,
          height: kit.media.hero.height,
          alt: copy.media.hero.alt,
        },
      ]
    : undefined;

  return pageMeta(l, `/hardware/${slug}`, {
    title: copy.name,
    description: copy.tagline,
    openGraph: {
      title: copy.name,
      description: copy.tagline,
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.name,
      description: copy.tagline,
      images: ogImage?.map((img) => img.url),
    },
  });
}

export default async function HardwareKitPage({ params }: Props) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  if (!isHardwareKitSlug(slug)) notFound();

  const kit = getHardwareKit(slug);
  if (!kit) notFound();

  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const labels = d.hardware.kitsSection;
  const copy = hardwareKitCopy(d, slug);
  const quoteHref = L(`/hardware/quote?kit=${slug}`);

  return (
    <>
      <HardwareKitHero
        locale={l}
        kit={kit}
        copy={copy}
        labels={labels}
        compatibilityCta={d.hardware.compatibility.cta}
      />

      <Section>
        <div className="max-w-3xl min-w-0">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
            {labels.useCaseLabel}
          </p>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-ink tracking-tight [text-wrap:balance]">
            {copy.useCase}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-secondary">
            {copy.operationalFit}
          </p>
        </div>
      </Section>

      <HardwareKitGallery kit={kit} copy={copy} labels={labels} />
      <HardwareIncludes kit={kit} copy={copy} labels={labels} />
      <HardwareSpecGroups copy={copy} labels={labels} />
      <HardwareProductLinks
        locale={l}
        kit={kit}
        labels={labels}
        dictionary={d}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <SectionHeader
            eyebrow={d.hardware.compatibility.eyebrow}
            title={d.hardware.compatibility.title}
            intro={d.hardware.compatibility.body}
          />
          <div className="lg:justify-self-end">
            <Button href={L("/hardware/compatibility")} variant="secondary">
              {d.hardware.compatibility.cta}
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          eyebrow={d.hardware.quote.eyebrow}
          title={d.hardware.finalCta.title}
          intro={d.hardware.finalCta.body}
        />
        <div className="mt-10">
          <Button href={quoteHref}>{copy.cta}</Button>
        </div>
      </Section>
    </>
  );
}
