import type { ProductStatus } from "@/lib/i18n-config";
import {
  statusBadgeClass,
  statusDotClass,
  statusSpectrumBadgeClass,
  statusSpectrumDotClass,
} from "@/lib/product-status";

type Props = {
  status: ProductStatus;
  label: string;
  size?: "sm" | "md";
  showDot?: boolean;
  tone?: "default" | "inverse" | "spectrum";
};

export function ProductStatusBadge({
  status,
  label,
  size = "sm",
  showDot = true,
  tone = "default",
}: Props) {
  const sizeClass =
    size === "md"
      ? "px-3 py-1 text-[0.68rem] tracking-[0.14em]"
      : "px-2.5 py-0.5 text-[0.62rem] tracking-[0.16em]";

  const toneClass =
    tone === "inverse"
      ? status === "available"
        ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-300"
        : "border-bg/30 text-bg bg-bg/10"
      : tone === "spectrum"
        ? statusSpectrumBadgeClass(status)
        : statusBadgeClass(status);

  const dotClass =
    tone === "inverse" && status === "available"
      ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]"
      : tone === "inverse"
        ? "bg-bg shadow-[0_0_8px_rgba(255,255,255,0.35)]"
        : tone === "spectrum"
          ? statusSpectrumDotClass(status)
          : statusDotClass(status);

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono uppercase ${sizeClass} ${toneClass}`}
    >
      {showDot ? (
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass} ${
            status === "available" ? "animate-pulse" : ""
          }`}
          aria-hidden
        />
      ) : null}
      {label}
    </span>
  );
}
