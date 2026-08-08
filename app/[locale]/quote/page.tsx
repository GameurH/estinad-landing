import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { LeadForm, type FieldDef } from "@/components/LeadForm";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/quote", {
    title: d.quote.metaTitle,
    description: d.quote.metaDescription,
  });
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const q = d.quote;
  const f = q.form;

  const fields: FieldDef[] = [
    { name: "name", label: f.name, required: true },
    { name: "company", label: f.company },
    { name: "email", label: f.email, type: "email", required: true },
    { name: "phone", label: f.phone, type: "tel" },
    { name: "scope", label: f.scopeLabel, type: "select", options: f.scopes, placeholder: "—" },
    { name: "product", label: f.productLabel, type: "select", options: f.products, placeholder: "—" },
    { name: "branches", label: f.branches, type: "number" },
    {
      name: "message",
      label: f.messageLabel,
      type: "textarea",
      placeholder: f.messagePlaceholder,
      full: true,
    },
  ];

  return (
    <>
      <PageHero eyebrow={q.eyebrow} title={q.title} intro={q.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <LeadForm
            endpoint="/api/quote"
            analyticsStart="quote_request_started"
            analyticsSubmit="quote_request_submitted"
            consentLabel={d.common.consentLabel}
            errorRetry={d.common.errorRetry}
            fields={fields}
            submit={f.submit}
            sending={f.sending}
            sentTitle={f.sentTitle}
            sentBody={f.sentBody}
            privacyNote={f.privacyNote}
            privacyLink={f.privacyLink}
            privacyHref={L("/legal/privacy")}
          />

          <aside className="flex flex-col gap-10">
            <div className="hairline bg-surface p-7">
              <h2 className="text-sm text-ivory font-medium font-mono uppercase tracking-[0.18em]">
                {q.asideTitle}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {q.aside.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-ivory-dim">
                    <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline bg-surface p-7">
              <p className="text-sm text-muted">{q.hardwareNote}</p>
              <Link
                href={L("/hardware/quote")}
                className="mt-3 inline-flex text-sm text-ivory hover:underline"
              >
                {q.hardwareLink}
              </Link>
            </div>

            <div className="hairline bg-surface p-7">
              <h2 className="text-sm text-ivory font-medium font-mono uppercase tracking-[0.18em]">
                {q.preferTitle}
              </h2>
              <p className="mt-3 text-sm text-muted">{q.preferBody}</p>
              <p className="mt-2 text-sm text-ivory">{q.email}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
