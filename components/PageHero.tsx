import Link from "next/link";
import type { ReactNode } from "react";
import { Monogram } from "./Monogram";

export function PageHero({
  eyebrow,
  title,
  intro,
  cta,
  secondaryCta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden hairline-b">
      <div className="absolute inset-0 grid-backdrop opacity-40" aria-hidden />
      <div className="shell relative py-20 md:py-28">
        <div className="max-w-3xl rise">
          <div className="flex items-center gap-3 mb-5">
            <Monogram className="h-4 w-4 text-accent" />
            <p className="eyebrow">{eyebrow}</p>
          </div>
          <h1 className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-ivory font-semibold">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg text-ivory-dim leading-relaxed">
              {intro}
            </p>
          )}
          {(cta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex items-center h-11 px-5 text-sm font-medium bg-accent text-base hover:bg-accent-dim border border-accent transition-colors"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center h-11 px-5 text-sm text-ivory border border-line-strong hover:border-ivory/40 transition-colors"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
