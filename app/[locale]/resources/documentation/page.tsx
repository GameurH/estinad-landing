import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Eyebrow, Tag } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale } from "@/lib/i18n-config";
import { resourcesNav } from "@/lib/nav";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.resources.documentation.title, description: d.resources.documentation.intro };
}

export default async function DocumentationPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const doc = d.resources.documentation;

  return (
    <>
      <PageHero eyebrow={doc.eyebrow} title={doc.title} intro={doc.intro} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <Eyebrow>{d.resources.sidebar.title}</Eyebrow>
            <nav className="mt-4 flex flex-col gap-1">
              {resourcesNav(d).map((r) => (
                <a
                  key={r.href}
                  href={L(r.href)}
                  className="block py-2 text-sm text-ivory-dim hover:text-ivory transition-colors hairline-b"
                >
                  {r.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="grid gap-px md:grid-cols-2 hairline bg-line">
            {doc.sections.map((s) => (
              <div key={s.title} className="bg-base p-7">
                <h3 className="text-lg text-ivory font-medium">{s.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-2 h-px w-3 bg-muted-2 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hairline bg-surface p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <Tag>{doc.apiTag}</Tag>
            <p className="text-sm text-ivory-dim">{doc.apiLine}</p>
          </div>
          <a href="#" className="text-xs text-accent hover:underline whitespace-nowrap">{doc.readApi}</a>
        </div>
      </Section>
    </>
  );
}
