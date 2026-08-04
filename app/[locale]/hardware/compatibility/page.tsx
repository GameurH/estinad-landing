import type { Metadata } from "next";
import { HardwareRequestForm } from "@/components/hardware/HardwareRequestForm";
import { Section } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/hardware/compatibility", {
    title: d.hardware.compatibility.metaTitle,
    description: d.hardware.compatibility.metaDescription,
  });
}

export default async function HardwareCompatibilityPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const c = d.hardware.compatibility;

  return (
    <>
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-backdrop opacity-30" aria-hidden />
        <div className="shell relative py-20 md:py-28">
          <div className="max-w-3xl min-w-0">
            <p className="eyebrow mb-5">{c.eyebrow}</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-ink font-semibold [text-wrap:balance]">
              {c.pageTitle}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-secondary">
              {c.pageIntro}
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <HardwareRequestForm
            variant="compatibility"
            endpoint="/api/hardware-compatibility"
            privacyHref={L("/legal/privacy")}
            consentLabel={d.common.consentLabel}
            form={d.hardware.form}
            kitOptions={[]}
            analyticsStart="hardware_compatibility_started"
            analyticsSubmit="hardware_compatibility_submitted"
          />

          <aside className="hairline rounded-card bg-surface p-7 h-fit">
            <h2 className="text-sm text-ink font-medium font-mono uppercase tracking-[0.18em]">
              {c.outcomesTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {c.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink-secondary"
                >
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 border border-ink/50 flex-shrink-0" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
