"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monogram } from "@/components/Monogram";
import { Button } from "@/components/ui";
import { getDict } from "@/lib/i18n";
import { isLocale, lp, defaultLocale, type Locale } from "@/lib/i18n-config";

export default function NotFound() {
  const pathname = usePathname();
  const seg = pathname.split("/")[1] ?? "";
  const l: Locale = isLocale(seg) ? seg : defaultLocale;
  const d = getDict(l);
  const L = (h: string) => lp(l, h);
  const n = d.notFound;

  return (
    <section className="shell py-32 md:py-48 min-h-[60vh] flex flex-col items-center text-center">
      <Monogram className="h-12 w-12 text-ivory mb-8" />
      <span className="font-mono text-sm text-accent">{n.code}</span>
      <h1 className="mt-4 text-3xl md:text-4xl text-ivory font-semibold tracking-tight max-w-xl">
        {n.title}
      </h1>
      <p className="mt-4 text-base text-muted max-w-md">{n.body}</p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href={L("/")}>{n.cta1}</Button>
        <Link href={L("/products")} className="text-sm text-muted hover:text-ivory transition-colors">
          {n.cta2}
        </Link>
      </div>
    </section>
  );
}
