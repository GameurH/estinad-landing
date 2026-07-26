import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import {
  Section,
  SectionHeader,
  Eyebrow,
  Button,
  Tag,
  NodeDivider,
} from "@/components/ui";
import { Monogram } from "@/components/Monogram";
import { lp, type Locale, type AppStatus } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries/types";

export type AppPageData = {
  locale: Locale;
  slug: string;
  eyebrow: string;
  a: Dictionary["apps"]["items"][keyof Dictionary["apps"]["items"]];
  idx: Dictionary["apps"]["index"];
  c: Dictionary["common"];
};

const STATUS_LABEL: Record<AppStatus, keyof Dictionary["apps"]["index"]> = {
  shipped: "statusShipped",
  beta: "statusBeta",
  frozen: "statusFrozen",
  archived: "statusArchived",
  planned: "statusPlanned",
};

export function AppPageView({ data }: { data: AppPageData }) {
  const { locale, eyebrow, a, idx } = data;
  const L = (href: string) => lp(locale, href);
  const statusLabel = idx[STATUS_LABEL[a.status as AppStatus]] as string;
  const heroEyebrow = `${eyebrow} · ${statusLabel}`;
  const hasBundle = a.bundle.rows.length > 0;
  const hasWorkflows = a.workflows.groups.length > 0;
  const hasNotIncluded =
    a.notIncluded.items.length > 0 || a.notIncluded.ctaLabel.length > 0;

  return (
    <>
      <PageHero
        eyebrow={heroEyebrow}
        title={a.oneLiner}
        intro={a.positioning}
        cta={{ label: a.ctaPrimary, href: L("/demo") }}
        secondaryCta={
          a.ctaSecondary.length > 0
            ? { label: a.ctaSecondary, href: L(a.secondaryHref) }
            : undefined
        }
      />

      {/* Bundle contents */}
      {hasBundle && (
        <Section>
          <Eyebrow>{a.bundle.title}</Eyebrow>
          <h2 className="text-2xl md:text-3xl text-ivory font-semibold tracking-tight">
            {a.bundle.title}
          </h2>
          <div className="mt-10 hairline overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-line hairline-b">
              {[a.bundle.appHeader, a.bundle.roleHeader, a.bundle.platformHeader].map(
                (h) => (
                  <div
                    key={h}
                    className="bg-surface-2 p-4 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-muted-2"
                  >
                    {h}
                  </div>
                ),
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
              {a.bundle.rows.map((r) => (
                <div key={r.app} className="bg-base p-5">
                  <div className="flex items-center gap-2.5">
                    <Monogram className="h-4 w-4 text-accent" />
                    <h3 className="text-sm text-ivory font-medium">{r.app}</h3>
                  </div>
                  <p className="mt-3 text-sm text-ivory-dim leading-relaxed">
                    {r.role}
                  </p>
                  <p className="mt-3 text-xs font-mono uppercase tracking-[0.16em] text-muted-2">
                    {r.platform}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Capabilities */}
      <Section className={hasBundle ? "bg-surface" : ""}>
        <SectionHeader
          eyebrow={a.capabilitiesEyebrow}
          title={a.capabilitiesTitle}
          intro={a.capabilitiesIntro}
        />
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3 hairline bg-line">
          {a.capabilities.map((cap) => (
            <div key={cap.title} className="bg-base p-7">
              <div className="flex items-center gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                <h3 className="text-base text-ivory font-medium">{cap.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Workflows */}
      {hasWorkflows && (
        <Section>
          <SectionHeader
            eyebrow={a.workflows.eyebrow}
            title={a.workflows.title}
            intro={a.workflows.intro}
          />
          <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
            {a.workflows.groups.map((g, i) => (
              <div key={g.title} className="bg-base p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg text-ivory font-medium">{g.title}</h3>
                </div>
                <ol className="mt-5 flex flex-col gap-3">
                  {g.steps.map((s, idx2) => (
                    <li
                      key={idx2}
                      className="flex items-start gap-3 text-sm text-ivory-dim"
                    >
                      <span className="font-mono text-[0.65rem] text-muted-2 mt-1">
                        {String(idx2 + 1).padStart(2, "0")}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Integrations + ecosystem fit */}
      <Section className={hasWorkflows ? "bg-surface" : ""}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{a.integrationsEyebrow}</Eyebrow>
            <h2 className="text-2xl text-ivory font-semibold tracking-tight">
              {a.integrationsTitle}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {a.integrations.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>{a.ecosystemEyebrow}</Eyebrow>
            <h2 className="text-2xl text-ivory font-semibold tracking-tight">
              {a.ecosystemTitle}
            </h2>
            <ul className="mt-6 flex flex-col gap-px bg-line hairline">
              {a.ecosystem.map((e) => (
                <li key={e.t} className="bg-base p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="mt-2 h-1 w-1 bg-accent flex-shrink-0" />
                    <h3 className="text-sm text-ivory font-medium">{e.t}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {e.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tech highlight */}
      <Section>
        <div className="hairline bg-surface p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 grid-fine opacity-60" aria-hidden />
          <div className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex items-center gap-3">
              <Monogram className="h-5 w-5 text-accent" />
              <span className="eyebrow">{a.techEyebrow}</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl text-ivory font-semibold tracking-tight">
                {a.techTitle}
              </h2>
              <p className="mt-3 text-sm md:text-base text-ivory-dim leading-relaxed max-w-3xl">
                {a.tech}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Not included / roadmap callout */}
      {hasNotIncluded && (
        <Section className="bg-surface">
          <div className="hairline bg-base p-8 md:p-10">
            <Eyebrow>{a.notIncluded.title}</Eyebrow>
            {a.notIncluded.intro.length > 0 && (
              <p className="text-lg text-ivory-dim leading-relaxed max-w-2xl">
                {a.notIncluded.intro}
              </p>
            )}
            {a.notIncluded.items.length > 0 && (
              <ul className="mt-6 flex flex-col gap-3 max-w-2xl">
                {a.notIncluded.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm text-ivory-dim"
                  >
                    <span className="mt-2 h-px w-4 bg-line-strong flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            )}
            {a.notIncluded.ctaLabel.length > 0 && (
              <div className="mt-7">
                <Button href={L(a.notIncluded.ctaHref)} variant="secondary">
                  {a.notIncluded.ctaLabel}
                </Button>
              </div>
            )}
          </div>
        </Section>
      )}

      <NodeDivider />

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeader eyebrow={a.faqEyebrow} title={a.faqTitle} />
        <div className="mt-12 max-w-3xl">
          <div className="flex flex-col gap-px bg-line hairline">
            {a.faq.map((f) => (
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
            {a.ctaTitle}
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href={L("/demo")}>{a.ctaPrimary}</Button>
            {a.ctaSecondary.length > 0 && (
              <Button href={L(a.secondaryHref)} variant="secondary">
                {a.ctaSecondary}
              </Button>
            )}
            <Link
              href={L("/products")}
              className="inline-flex items-center h-11 px-5 text-sm text-ivory-dim hover:text-ivory transition-colors"
            >
              {idx.backToProducts}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
