import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { HardwareKitDefinition } from "@/lib/hardware";
import { lp, productHref, type Locale } from "@/lib/i18n-config";
import { productNames } from "@/lib/nav";
import { Section, SectionHeader } from "@/components/ui";

type Props = {
  locale: Locale;
  kit: HardwareKitDefinition;
  labels: Dictionary["hardware"]["kitsSection"];
  dictionary: Dictionary;
};

export function HardwareProductLinks({
  locale,
  kit,
  labels,
  dictionary,
}: Props) {
  const L = (h: string) => lp(locale, h);
  const names = productNames(dictionary);

  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow={labels.worksWithLabel}
        title={labels.worksWithLabel}
        intro={labels.worksWithIntro}
      />
      <ul className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4 hairline bg-line list-none">
        {kit.relatedProducts.map((slug) => (
          <li key={slug} className="bg-surface min-w-0">
            <Link
              href={L(productHref(slug))}
              className="flex h-full flex-col p-6 md:p-7 hover:bg-bg transition-colors min-h-11"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                ESTINAD
              </span>
              <span className="mt-3 text-base font-medium text-ink">
                {names[slug] ?? slug}
              </span>
              <span className="mt-4 inline-flex items-center text-sm text-ink-secondary">
                {dictionary.common.explore}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
