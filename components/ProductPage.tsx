import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader, Eyebrow, Button, Tag, NodeDivider } from "@/components/ui";
import { Monogram } from "@/components/Monogram";
import { lp, type Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type ProductPageData = {
  locale: Locale;
  slug: string;
  eyebrow: string;
  p: Dictionary["products"]["items"][keyof Dictionary["products"]["items"]];
  c: Dictionary["common"];
};

export function ProductPageView({ data }: { data: ProductPageData }) {
  const { locale, slug, eyebrow, p, c } = data;
  const L = (href: string) => lp(locale, href);

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={p.oneLiner}
        intro={p.positioning}
        cta={{ label: c.requestDemoArrow, href: L("/demo") }}
        secondaryCta={{ label: c.viewPricing, href: L(`/products/${slug}/pricing`) }}
      />

      {/* ICP + use cases */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{p.icpTitle}</Eyebrow>
            <h2 className="text-2xl md:text-3xl text-ivory font-semibold tracking-tight">
              {p.icpHeader}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {p.icp.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ivory-dim">
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{p.useCasesTitle}</Eyebrow>
            <h2 className="text-2xl md:text-3xl text-ivory font-semibold tracking-tight">
              {p.useCasesHeader}
            </h2>
            <ul className="mt-6 flex flex-col gap-3">
              {p.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 text-sm text-ivory-dim">
                  <span className="mt-2 h-px w-4 bg-line-strong flex-shrink-0" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Visual concept */}
      <section className="hairline-b bg-surface">
        <div className="shell py-20 md:py-28">
          <Eyebrow>{p.visualEyebrow}</Eyebrow>
          <h2 className="mt-2 text-2xl md:text-3xl text-ivory font-semibold tracking-tight max-w-2xl">
            {p.visualTitle}
          </h2>
          <div className="mt-10 relative hairline bg-base aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 grid-fine opacity-60" aria-hidden />
            <div className="absolute inset-0 p-6 md:p-10 grid gap-4 md:grid-cols-[200px_1fr]">
              <div className="hidden md:flex flex-col gap-2">
                <div className="flex items-center gap-2 hairline p-3">
                  <Monogram className="h-4 w-4 text-ivory" />
                  <span className="text-xs text-ivory font-mono">ESTINAD</span>
                </div>
                {p.visualSidebar.map((l, i) => (
                  <div
                    key={l}
                    className={`hairline p-3 text-xs ${i === 1 ? "text-ivory border-accent/40" : "text-muted"}`}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4">
                  {p.visualKpis.map((k) => (
                    <div key={k} className="hairline p-4">
                      <div className="text-[0.65rem] font-mono uppercase tracking-wider text-muted-2">{k}</div>
                      <div className="mt-2 h-5 w-2/3 bg-surface-3" />
                    </div>
                  ))}
                </div>
                <div className="flex-1 hairline p-4 relative overflow-hidden">
                  <div className="text-[0.65rem] font-mono uppercase tracking-wider text-muted-2">
                    {p.visualChart}
                  </div>
                  <div className="mt-4 flex items-end gap-2 h-3/4">
                    {[40, 65, 50, 80, 55, 90, 70, 60, 85, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-line-strong" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <span className="absolute end-4 top-4 h-1.5 w-1.5 rotate-45 border border-accent" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-2 font-mono">{p.visualCaption}</p>
        </div>
      </section>

      {/* Workflows */}
      <Section>
        <SectionHeader eyebrow={p.workflowsEyebrow} title={p.workflowsTitle} intro={p.workflowsIntro} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {p.workflows.map((w, i) => (
            <div key={w.title} className="bg-base p-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="text-lg text-ivory font-medium">{w.title}</h3>
              </div>
              <ol className="mt-5 flex flex-col gap-3">
                {w.steps.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ivory-dim">
                    <span className="font-mono text-[0.65rem] text-muted-2 mt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature clusters */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={p.featuresEyebrow} title={p.featuresTitle} />
        <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
          {p.featureClusters.map((cl) => (
            <div key={cl.title} className="bg-base p-7">
              <h3 className="text-base text-ivory font-medium">{cl.title}</h3>
              <p className="mt-2 text-sm text-muted">{cl.description}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {cl.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-ivory-dim">
                    <span className="mt-2 h-1 w-1 bg-accent flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Deployment + integrations */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{p.deployEyebrow}</Eyebrow>
            <h2 className="text-2xl text-ivory font-semibold tracking-tight">{p.deployTitle}</h2>
            <ul className="mt-6 flex flex-col gap-3">
              {p.deployment.map((d) => (
                <li key={d} className="hairline p-4 text-sm text-ivory-dim bg-surface">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{p.integEyebrow}</Eyebrow>
            <h2 className="text-2xl text-ivory font-semibold tracking-tight">{p.integTitle}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.integrations.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <NodeDivider />

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={p.faqEyebrow} title={p.faqTitle} />
        <div className="mt-12 max-w-3xl">
          <div className="flex flex-col gap-px bg-line hairline">
            {p.faq.map((f) => (
              <div key={f.q} className="bg-base p-6 md:p-7">
                <h3 className="text-base text-ivory font-medium">{f.q}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="hairline-b bg-base">
        <div className="shell py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-4xl text-ivory font-semibold tracking-tight">
            {p.ctaTitle}
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href={L("/demo")}>{c.requestDemoArrow}</Button>
            <Button href={L(`/products/${slug}/pricing`)} variant="secondary">
              {c.viewPricing}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
