import type { Dictionary } from "@/lib/dictionaries/types";
import {
  productSlugs,
  solutionSlugs,
  serviceSlugs,
  caseStudySlugs,
  platformSlugs,
  componentSlugs,
  partnerSlugs,
  roadmapSlugs,
} from "@/lib/i18n-config";

const resHrefs = [
  "/resources/blog",
  "/resources/guides",
  "/resources/documentation",
  "/resources/faq",
];

const companyHrefs = [
  "/company/about",
  "/company/vision",
  "/company/careers",
  "/company/contact",
];

export type NavItem = { label: string; href: string; desc?: string };

export function resourcesNav(d: Dictionary): NavItem[] {
  return d.resources.index.nav.map((n, i) => ({
    label: n.label,
    href: resHrefs[i],
    desc: n.desc,
  }));
}

export function companyNav(d: Dictionary): NavItem[] {
  return d.company.index.nav.map((n, i) => ({
    label: n.label,
    href: companyHrefs[i],
    desc: n.desc,
  }));
}

export function legalNav(d: Dictionary): NavItem[] {
  return [
    { label: d.legal.privacy.title, href: "/legal/privacy" },
    { label: d.legal.terms.title, href: "/legal/terms" },
  ];
}

export function platformNav(d: Dictionary): NavItem[] {
  return [
    { label: d.nav.megaOs, href: "/platform", desc: d.nav.megaPlatformIntro },
    ...platformSlugs.map((s) => ({
      label: d.platform.sub[s].eyebrow,
      href: `/platform/${s}`,
      desc: d.platform.sub[s].intro.slice(0, 80),
    })),
  ];
}

export function partnersNav(d: Dictionary): NavItem[] {
  const tracks = d.partners.tracks;
  return [
    { label: tracks.referral.t, href: "/partners", desc: tracks.referral.d },
    { label: tracks.resellers.t, href: "/partners/resellers", desc: tracks.resellers.d },
    { label: tracks.implementers.t, href: "/partners/implementers", desc: tracks.implementers.d },
    { label: tracks.technology.t, href: "/partners/technology", desc: tracks.technology.d },
  ];
}

export function productNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of productSlugs) out[s] = d.products.items[s].name;
  return out;
}

export function solutionNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of solutionSlugs) out[s] = d.solutions.items[s].name;
  return out;
}

export function serviceNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of serviceSlugs) out[s] = d.services.items[s].name;
  return out;
}

export function caseStudyNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of caseStudySlugs) out[s] = d.caseStudies.items[s].title;
  return out;
}

export function platformNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of platformSlugs) out[s] = d.platform.sub[s].eyebrow;
  return out;
}

export function partnerNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {
    referral: d.partners.tracks.referral.t,
  };
  for (const s of partnerSlugs) out[s] = d.partners.tracks[s].t;
  return out;
}

export type ProductCard = {
  slug: string;
  glyph: string;
  name: string;
  short: string;
  oneLiner: string;
  vertical: string;
};

export function productsList(d: Dictionary): ProductCard[] {
  return productSlugs.map((s) => {
    const p = d.products.items[s];
    return { slug: s, glyph: p.glyph, name: p.name, short: p.short, oneLiner: p.oneLiner, vertical: p.vertical };
  });
}

export type SolutionCard = {
  slug: string;
  name: string;
  audience: string;
  summary: string;
};

export function solutionsList(d: Dictionary): SolutionCard[] {
  return solutionSlugs.map((s) => {
    const it = d.solutions.items[s];
    return { slug: s, name: it.name, audience: it.audience, summary: it.summary };
  });
}

export type ServiceCard = {
  slug: string;
  glyph: string;
  name: string;
  short: string;
  oneLiner: string;
};

export function servicesList(d: Dictionary): ServiceCard[] {
  return serviceSlugs.map((s) => {
    const it = d.services.items[s];
    return { slug: s, glyph: it.glyph, name: it.name, short: it.short, oneLiner: it.oneLiner };
  });
}

export type CaseStudyCard = {
  slug: string;
  glyph: string;
  title: string;
  industry: string;
  type: string;
  meta: string;
  excerpt: string;
};

export function caseStudiesList(d: Dictionary): CaseStudyCard[] {
  return caseStudySlugs.map((s) => {
    const it = d.caseStudies.items[s];
    return { slug: s, glyph: it.glyph, title: it.title, industry: it.industry, type: it.type, meta: it.meta, excerpt: it.excerpt };
  });
}

export type PlatformCard = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
};

export function platformCards(d: Dictionary): PlatformCard[] {
  return platformSlugs.map((s) => {
    const p = d.platform.sub[s];
    return { slug: s, eyebrow: p.eyebrow, title: p.title, intro: p.intro };
  });
}

export function platformCard(d: Dictionary, slug: string): PlatformCard | undefined {
  if (!(platformSlugs as readonly string[]).includes(slug)) return undefined;
  const p = d.platform.sub[slug as (typeof platformSlugs)[number]];
  return { slug, eyebrow: p.eyebrow, title: p.title, intro: p.intro };
}

export type AppCard = {
  slug: string;
  glyph: string;
  name: string;
  short: string;
  category: string;
  status: string;
  oneLiner: string;
};

export function appsList(d: Dictionary): AppCard[] {
  return componentSlugs.map((s) => {
    const a = d.apps.items[s];
    return {
      slug: s,
      glyph: a.glyph,
      name: a.name,
      short: a.short,
      category: a.category,
      status: a.status,
      oneLiner: a.oneLiner,
    };
  });
}

export function appNames(d: Dictionary): Record<string, string> {
  const out: Record<string, string> = {};
  for (const s of componentSlugs) out[s] = d.apps.items[s].name;
  return out;
}

export function appItem(d: Dictionary, slug: string) {
  if (!(componentSlugs as readonly string[]).includes(slug)) return undefined;
  return d.apps.items[slug as (typeof componentSlugs)[number]];
}

export type RoadmapCard = {
  slug: string;
  name: string;
  status: string;
  summary: string;
};

export function roadmapList(d: Dictionary): RoadmapCard[] {
  return roadmapSlugs.map((s) => {
    const r = d.apps.roadmap[s];
    return { slug: s, name: r.name, status: r.status, summary: r.summary };
  });
}
