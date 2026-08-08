import type { ReactNode } from "react";

function IconFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? "h-5 w-5"}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function solutionMegaIcon(icon: string, className?: string) {
  switch (icon) {
    case "industry":
      return (
        <IconFrame className={className}>
          <path d="M4 20V9l6-4 6 4v11" />
          <path d="M10 20v-5h4v5" />
          <path d="M16 11h4v9H4" />
        </IconFrame>
      );
    case "coverage":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
        </IconFrame>
      );
    case "scale":
      return (
        <IconFrame className={className}>
          <path d="M4 20V10M9 20V6M14 20v-8M19 20V4" />
        </IconFrame>
      );
    case "insights":
      return (
        <IconFrame className={className}>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </IconFrame>
      );
    case "business":
      return (
        <IconFrame className={className}>
          <path d="M4 20V8l6-3 6 3v12" />
          <path d="M10 20v-5h4v5" />
          <path d="M2 20h20" />
        </IconFrame>
      );
    case "operation":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
        </IconFrame>
      );
    case "role":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.2-3.2 3.5-5 7-5s5.8 1.8 7 5" />
        </IconFrame>
      );
    case "goal":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8.5 12.5 11 15l4.5-5" />
        </IconFrame>
      );
    case "retail":
      return (
        <IconFrame className={className}>
          <path d="M6 8h12l-1 12H7L6 8Z" />
          <path d="M9 8V6.5A3 3 0 0 1 12 3.5 3 3 0 0 1 15 6.5V8" />
        </IconFrame>
      );
    case "restaurants":
      return (
        <IconFrame className={className}>
          <path d="M8 3v8M8 11c0 2.2-1.3 3.5-3 3.5V21" />
          <path d="M8 7H5.5M8 7h2.5" />
          <path d="M16 3v18" />
          <path d="M16 3c2.5 0 4 1.8 4 4.5S18.5 12 16 12" />
        </IconFrame>
      );
    case "clinics":
      return (
        <IconFrame className={className}>
          <path d="M12 20s-7-4.2-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.8-7 10-7 10Z" />
        </IconFrame>
      );
    case "smes":
      return (
        <IconFrame className={className}>
          <circle cx="9" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2H18" />
          <path d="M8 8h12l-1.2 6H9.2" />
        </IconFrame>
      );
    case "multi":
      return (
        <IconFrame className={className}>
          <path d="M3 10.5 12 4l9 6.5V20H3v-9.5Z" />
          <path d="M9 20v-6h6v6" />
        </IconFrame>
      );
    case "more":
      return (
        <IconFrame className={className}>
          <circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </IconFrame>
      );
    case "grid":
      return (
        <IconFrame className={className}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </IconFrame>
      );
    case "shield":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
          <path d="M10 12l1.5 1.5L14.5 10" />
        </IconFrame>
      );
    case "expert":
      return (
        <IconFrame className={className}>
          <path d="M4 14v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1" />
          <path d="M12 14v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1" />
          <path d="M4 14h4v4H4zM16 14h4v4h-4z" />
          <path d="M8 16h8" />
        </IconFrame>
      );
    default:
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="8" />
        </IconFrame>
      );
  }
}

export const solutionTintClass: Record<string, string> = {
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
  green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
  mute: "bg-surface-2 text-ink",
};
