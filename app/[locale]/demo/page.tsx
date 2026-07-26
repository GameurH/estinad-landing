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
  return { title: d.demo.title, description: d.demo.intro };
}

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const dm = d.demo;
  const f = dm.form;

  const fields: FieldDef[] = [
    { name: "name", label: f.name, required: true },
    { name: "business", label: f.business },
    { name: "email", label: f.email, type: "email", required: true },
    { name: "phone", label: f.phone, type: "tel" },
    { name: "sector", label: f.sectorLabel, type: "select", options: f.sectors, placeholder: "—" },
    { name: "branches", label: f.branches, type: "number" },
    { name: "currentTools", label: f.currentTools, full: true },
    { name: "message", label: f.messageLabel, type: "textarea", placeholder: f.messagePlaceholder, full: true },
  ];

  return (
    <>
      <PageHero eyebrow={dm.eyebrow} title={dm.title} intro={dm.intro} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <LeadForm
            endpoint="/api/demo"
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
                {dm.whatTitle}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {dm.what.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-ivory-dim">
                    <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline bg-surface p-7">
              <h2 className="text-sm text-ivory font-medium font-mono uppercase tracking-[0.18em]">
                {dm.preferTitle}
              </h2>
              <p className="mt-3 text-sm text-muted">{dm.preferBody}</p>
              <p className="mt-2 text-sm text-ivory">{dm.email}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
