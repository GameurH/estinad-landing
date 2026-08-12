import type { Metadata } from "next";
import { HardwareCartClient } from "@/components/hardware/HardwareCartClient";
import { Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/hardware/cart", {
    title: d.hardware.cart.metaTitle,
    description: d.hardware.cart.metaDescription,
  });
}

export default async function HardwareCartPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const c = d.hardware.cart;

  return (
    <>
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
        <div className="shell relative py-16 md:py-24">
          <div className="max-w-3xl min-w-0">
            <p className="eyebrow mb-5">{c.eyebrow}</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance]">
              {c.title}
            </h1>
          </div>
        </div>
      </section>

      <Section>
        <HardwareCartClient locale={l} dictionary={d} />
      </Section>
    </>
  );
}
