import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { HardwareKitDefinition } from "@/lib/hardware";
import { Section, SectionHeader } from "@/components/ui";

type Props = {
  kit: HardwareKitDefinition;
  copy: Dictionary["hardware"]["kits"][keyof Dictionary["hardware"]["kits"]];
  labels: Dictionary["hardware"]["kitsSection"];
};

export function HardwareKitGallery({ kit, copy, labels }: Props) {
  const shots = [
    {
      key: "detail" as const,
      asset: kit.media.detail,
      alt: copy.media.detail.alt,
      caption: copy.media.detail.caption,
    },
    {
      key: "deployment" as const,
      asset: kit.media.deployment,
      alt: copy.media.deployment.alt,
      caption: copy.media.deployment.caption,
    },
  ];

  return (
    <Section>
      <SectionHeader
        eyebrow={labels.galleryLabel}
        title={copy.name}
        intro={labels.galleryIntro}
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {shots.map((shot) => (
          <figure key={shot.key} className="min-w-0">
            <div
              className={`relative overflow-hidden bg-surface ${
                shot.key === "detail" ? "aspect-[4/3]" : "aspect-video"
              }`}
            >
              <Image
                src={shot.asset.src}
                alt={shot.alt}
                width={shot.asset.width}
                height={shot.asset.height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-ink-secondary">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
