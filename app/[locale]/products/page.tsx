import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, Eyebrow, Tag } from "@/components/ui";
import { Monogram } from "@/components/Monogram";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, type Locale, type AppStatus, appGroupRestaurant, appGroupPlatform, appGroupPackages } from "@/lib/i18n-config";
import { productsList, appsList, roadmapList, type AppCard, type RoadmapCard } from "@/lib/nav";
import type { Dictionary } from "@/lib/dictionaries/types";

type Props = { params: Promise<{ locale: string }> };

const STATUS_LABEL_KEY: Record<AppStatus, keyof Dictionary["apps"]["index"]> = {
  shipped: "statusShipped",
  beta: "statusBeta",
  frozen: "statusFrozen",
  archived: "statusArchived",
  planned: "statusPlanned",
};

function statusLabel(idx: Dictionary["apps"]["index"], status: string): string {
  const key = STATUS_LABEL_KEY[status as AppStatus];
  return idx[key] as string;
}

function statusTone(status: string): string {
  switch (status as AppStatus) {
    case "beta":
      return "text-accent border-accent/40";
    case "shipped":
      return "text-muted";
    default:
      return "text-muted-2";
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  return { title: d.nav.products, description: d.products.index.intro };
}

function GroupHeader({ label }: { label: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="h-1.5 w-1.5 rotate-45 border border-accent" />
      <h2 className="text-sm font-mono uppercase tracking-[0.22em] text-muted">
        {label}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function AppCardItem({ card, idx, locale }: { card: AppCard; idx: Dictionary["apps"]["index"]; locale: Locale }) {
  const L = (h: string) => lp(locale, h);
  return (
    <Link
      href={L(`/products/${card.slug}`)}
      className="group bg-base p-7 md:p-8 hover:bg-surface-2 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-accent">{card.glyph}</span>
          <h3 className="text-lg text-ivory font-medium">{card.name}</h3>
        </div>
        <span className="text-muted-2 group-hover:text-ivory group-hover:translate-x-1 transition-all">
          →
        </span>
      </div>
      <p className="mt-3 text-sm text-ivory-dim leading-relaxed">{card.oneLiner}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <Tag>{card.category}</Tag>
        <span
          className={`inline-flex items-center font-mono text-[0.68rem] uppercase tracking-[0.18em] hairline px-2.5 py-1 ${statusTone(card.status)}`}
        >
          {statusLabel(idx, card.status)}
        </span>
      </div>
    </Link>
  );
}

function RoadmapItem({ card, idx }: { card: RoadmapCard; idx: Dictionary["apps"]["index"] }) {
  return (
    <div className="bg-base p-7 md:p-8">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rotate-45 border border-muted-2" />
          <h3 className="text-lg text-ivory font-medium">{card.name}</h3>
        </div>
        <span
          className={`inline-flex items-center font-mono text-[0.68rem] uppercase tracking-[0.18em] hairline px-2.5 py-1 ${statusTone(card.status)}`}
        >
          {statusLabel(idx, card.status)}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted leading-relaxed">{card.summary}</p>
    </div>
  );
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "en";
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const idx = d.products.index;
  const aidx = d.apps.index;

  const apps = appsList(d);
  const restaurantLines = apps.filter((a) =>
    (appGroupRestaurant as readonly string[]).includes(a.slug),
  );
  const platformApps = apps.filter((a) =>
    (appGroupPlatform as readonly string[]).includes(a.slug),
  );
  const packages = apps.filter((a) =>
    (appGroupPackages as readonly string[]).includes(a.slug),
  );
  const roadmap = roadmapList(d);

  return (
    <>
      <PageHero eyebrow={aidx.eyebrow} title={aidx.title} intro={aidx.intro} />

      {/* Customer-facing products */}
      <Section>
        <GroupHeader label={aidx.groupProducts} />
        <div className="grid gap-px md:grid-cols-2 hairline bg-line">
          {productsList(d).map((p) => (
            <Link
              key={p.slug}
              href={L(`/products/${p.slug}`)}
              className="group bg-base p-8 md:p-10 hover:bg-surface transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Monogram className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl text-ivory font-semibold">{p.name}</h2>
                </div>
                <span className="text-muted-2 group-hover:text-ivory group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <p className="mt-4 text-base text-ivory-dim leading-relaxed">
                {p.oneLiner}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Tag>{p.vertical}</Tag>
                <Tag>{idx.tagDeploy}</Tag>
                <Tag>{idx.tagPricing}</Tag>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Restaurant product lines */}
      {restaurantLines.length > 0 && (
        <Section className="bg-surface">
          <GroupHeader label={aidx.groupRestaurant} />
          <div className="grid gap-px md:grid-cols-2 hairline bg-line">
            {restaurantLines.map((a) => (
              <AppCardItem key={a.slug} card={a} idx={aidx} locale={l} />
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-2 font-mono">{aidx.pricingNote}</p>
        </Section>
      )}

      {/* Platform & companion apps */}
      {platformApps.length > 0 && (
        <Section>
          <GroupHeader label={aidx.groupPlatform} />
          <div className="grid gap-px md:grid-cols-3 hairline bg-line">
            {platformApps.map((a) => (
              <AppCardItem key={a.slug} card={a} idx={aidx} locale={l} />
            ))}
          </div>
        </Section>
      )}

      {/* Shared packages */}
      {packages.length > 0 && (
        <Section className="bg-surface">
          <GroupHeader label={aidx.groupPackages} />
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4 hairline bg-line">
            {packages.map((a) => (
              <AppCardItem key={a.slug} card={a} idx={aidx} locale={l} />
            ))}
          </div>
        </Section>
      )}

      {/* Roadmap & internal */}
      {roadmap.length > 0 && (
        <Section>
          <GroupHeader label={aidx.groupRoadmap} />
          <div className="grid gap-px md:grid-cols-2 hairline bg-line">
            {roadmap.map((a) => (
              <RoadmapItem key={a.slug} card={a} idx={aidx} />
            ))}
          </div>
          <div className="mt-8 text-xs text-muted-2 font-mono">
            <Eyebrow>{aidx.statusRoadmap}</Eyebrow>
          </div>
        </Section>
      )}
    </>
  );
}
