import Image from "next/image";
import type { HTMLProps } from "react";

/**
 * ESTINAD monogram — rendered from the official logo asset (public/logo-pos.jpg).
 *
 * The mark is a light plate on a dark background (or vice versa under the
 * dark theme). The `logo-lockup-image` class keys the blend per theme:
 * multiply + invert on light grounds, screen on dark grounds — so only the
 * interlocking E/T geometry remains, true to the monochrome system.
 */
export function Monogram({
  className,
  ...props
}: Omit<HTMLProps<HTMLSpanElement>, "ref">) {
  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      {...props}
    >
      <Image
        src="/logo-pos.jpg"
        alt="ESTINAD monogram"
        fill
        sizes="320px"
        className="logo-lockup-image object-contain pointer-events-none select-none"
      />
    </span>
  );
}

/** Full lockup for dark surfaces — public/full-logo.png (1014×330). */
const FULL_LOGO_ASPECT = 1014 / 330;

/** Wordmark lockup: full logo asset, or monogram-only when `showWordmark` is false. */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  if (!showWordmark) {
    return <Monogram className={className ?? "h-6 w-6"} />;
  }

  return (
    <span
      className={`logo-lockup relative inline-block h-6 ${className ?? ""}`}
      style={{ aspectRatio: FULL_LOGO_ASPECT }}
    >
      <Image
        src="/full-logo.png"
        alt="ESTINAD"
        fill
        sizes="160px"
        priority
        className="logo-lockup-image object-contain object-left pointer-events-none select-none"
      />
    </span>
  );
}
