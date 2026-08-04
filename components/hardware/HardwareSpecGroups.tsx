import type { Dictionary } from "@/lib/dictionaries/types";
import { Section, SectionHeader } from "@/components/ui";

type Props = {
  copy: Dictionary["hardware"]["kits"][keyof Dictionary["hardware"]["kits"]];
  labels: Dictionary["hardware"]["kitsSection"];
};

export function HardwareSpecGroups({ copy, labels }: Props) {
  return (
    <Section>
      <SectionHeader eyebrow={labels.specsLabel} title={labels.specsLabel} />
      <div className="mt-12 grid gap-px md:grid-cols-3 hairline bg-line">
        {copy.specGroups.map((group) => (
          <div key={group.title} className="bg-bg p-7 md:p-8 min-w-0">
            <h3 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted">
              {group.title}
            </h3>
            <dl className="mt-6 flex flex-col gap-5">
              {group.specs.map((spec) => (
                <div key={spec.label} className="min-w-0">
                  <dt className="text-sm font-medium text-ink">{spec.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-secondary">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="mt-8 text-xs leading-relaxed text-muted max-w-3xl">
        {labels.scopeNote}
      </p>
    </Section>
  );
}
