import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { HardwareKitDefinition } from "@/lib/hardware";
import { Section, SectionHeader } from "@/components/ui";

type Props = {
  kit: HardwareKitDefinition;
  copy: Dictionary["hardware"]["kits"][keyof Dictionary["hardware"]["kits"]];
  labels: Dictionary["hardware"]["kitsSection"];
};

export function HardwareIncludes({ kit, copy, labels }: Props) {
  const included = kit.media.included;
  const includeOrder = new Map(copy.includes.map((item, i) => [item.id, i + 1]));
  const pinById = new Map(kit.includePins.map((pin) => [pin.id, pin]));

  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow={labels.includesLabel}
        title={labels.includesLabel}
        intro={labels.includesIntro}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <figure className="relative aspect-video overflow-hidden bg-bg min-w-0">
          <Image
            src={included.src}
            alt={copy.media.included.alt}
            width={included.width}
            height={included.height}
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="h-full w-full object-cover"
          />
          {copy.includes.map((item) => {
            const pin = pinById.get(item.id);
            if (!pin) return null;
            const n = includeOrder.get(item.id) ?? 0;
            return (
              <span
                key={item.id}
                className="pointer-events-none absolute z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-bg/95 text-[0.7rem] font-mono text-ink shadow-sm"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                aria-hidden
              >
                {String(n).padStart(2, "0")}
              </span>
            );
          })}
          <figcaption className="sr-only">{copy.media.included.caption}</figcaption>
        </figure>

        <ol className="flex flex-col gap-5 list-none min-w-0">
          {copy.includes.map((item, index) => (
            <li key={item.id} className="flex items-start gap-4 min-w-0">
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line font-mono text-[0.7rem] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                  {item.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
