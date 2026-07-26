import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { LeadForm, type FieldDef } from "@/components/LeadForm";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.company.contact.title, description: d.company.contact.intro };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const c = d.company.contact;
  const f = c.form;

  const fields: FieldDef[] = [
    { name: "name", label: f.name, required: true },
    { name: "company", label: f.company },
    { name: "email", label: f.email, type: "email", required: true },
    { name: "phone", label: f.phone, type: "tel" },
    { name: "reason", label: f.reasonLabel, type: "select", options: f.reasons, placeholder: "—", full: true },
    { name: "message", label: f.messageLabel, type: "textarea", placeholder: f.messagePlaceholder, full: true },
  ];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <LeadForm
            endpoint="/api/contact"
            fields={fields}
            submit={f.submit}
            sending={f.sending}
            sentTitle={f.sentTitle}
            sentBody={f.sentBody}
            privacyNote={f.privacyNote}
            privacyLink={f.privacyLink}
            privacyHref={L("/legal/privacy")}
          />

          <aside className="hairline bg-surface p-7 h-fit">
            <h2 className="text-sm text-ivory font-medium font-mono uppercase tracking-[0.18em]">
              {c.directTitle}
            </h2>
            <dl className="mt-6 flex flex-col gap-5">
              <div>
                <dt className="text-xs text-muted-2 font-mono uppercase tracking-[0.18em]">{c.emailLabel}</dt>
                <dd className="mt-1 text-sm text-ivory">{c.email}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-2 font-mono uppercase tracking-[0.18em]">{c.basedLabel}</dt>
                <dd className="mt-1 text-sm text-ivory">{c.based}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-2 font-mono uppercase tracking-[0.18em]">{c.responseLabel}</dt>
                <dd className="mt-1 text-sm text-ivory">{c.response}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
