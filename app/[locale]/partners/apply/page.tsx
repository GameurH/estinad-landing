import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return pageMeta(l, "/partners/apply", {
    title: d.partners.apply.title,
    description: d.partners.apply.intro,
  });
}

export default async function PartnerApplyPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const form = d.partners.apply.form;

  return (
    <>
      <PageHero
        eyebrow={d.partners.apply.eyebrow}
        title={d.partners.apply.title}
        intro={d.partners.apply.intro}
      />

      <Section>
        <div className="max-w-2xl">
          <LeadForm
            endpoint="/api/partners"
            analyticsStart="partner_application_started"
            analyticsSubmit="partner_application_submitted"
            consentLabel={form.consentLabel}
            errorRetry={d.common.errorRetry}
            fields={[
              { name: "name", label: form.name, required: true },
              { name: "company", label: form.company },
              { name: "email", label: form.email, type: "email", required: true },
              { name: "phone", label: form.phone, type: "tel" },
              {
                name: "partnerType",
                label: form.typeLabel,
                type: "select",
                options: form.types,
                full: true,
              },
              { name: "territory", label: form.territory },
              { name: "segment", label: form.segment },
              { name: "message", label: form.message, type: "textarea", full: true },
            ]}
            submit={form.submit}
            sending={form.sending}
            sentTitle={form.sentTitle}
            sentBody={form.sentBody}
            privacyNote={form.privacyNote}
            privacyLink={form.privacyLink}
            privacyHref={L("/legal/privacy")}
          />
        </div>
      </Section>
    </>
  );
}
