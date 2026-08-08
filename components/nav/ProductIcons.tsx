import type { ReactNode } from "react";

/** Thin-stroke product icons for the Products mega menu. */

type IconProps = { className?: string };

function IconFrame({ className, children }: IconProps & { children: ReactNode }) {
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

export function productIcon(slug: string, className?: string) {
  switch (slug) {
    case "retail":
      return (
        <IconFrame className={className}>
          <path d="M4 7h16l-1.2 12.2A2 2 0 0 1 16.8 21H7.2a2 2 0 0 1-2-1.8L4 7Z" />
          <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        </IconFrame>
      );
    case "restaurant":
      return (
        <IconFrame className={className}>
          <path d="M8 3v8M8 11c0 2.2-1.3 3.5-3 3.5V21" />
          <path d="M8 7H5.5M8 7h2.5" />
          <path d="M16 3v18" />
          <path d="M16 3c2.5 0 4 1.8 4 4.5S18.5 12 16 12" />
        </IconFrame>
      );
    case "inventory":
      return (
        <IconFrame className={className}>
          <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" />
          <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
          <path d="M12 13v7.5" />
        </IconFrame>
      );
    case "invoices":
      return (
        <IconFrame className={className}>
          <path d="M7 3h8l4 4v14H7V3Z" />
          <path d="M15 3v4h4" />
          <path d="M10 12h6M10 16h4" />
        </IconFrame>
      );
    case "workforce":
      return (
        <IconFrame className={className}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
          <path d="M14 14.2c1.5-.4 3.1-.2 4.5 1.1.7.7 1.2 1.7 1.5 2.7" />
        </IconFrame>
      );
    case "clinic":
      return (
        <IconFrame className={className}>
          <path d="M8 3h8v5h5v8h-5v5H8v-5H3V8h5V3Z" />
        </IconFrame>
      );
    case "central":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="12" cy="4.5" r="1.5" />
          <circle cx="12" cy="19.5" r="1.5" />
          <circle cx="4.5" cy="12" r="1.5" />
          <circle cx="19.5" cy="12" r="1.5" />
          <path d="M12 6.2v3M12 14.8v3M6.2 12h3M14.8 12h3" />
        </IconFrame>
      );
    case "platform":
      return (
        <IconFrame className={className}>
          <rect x="4" y="4" width="7" height="7" rx="1.2" />
          <rect x="13" y="4" width="7" height="7" rx="1.2" />
          <rect x="4" y="13" width="7" height="7" rx="1.2" />
          <rect x="13" y="13" width="7" height="7" rx="1.2" />
        </IconFrame>
      );
    case "insights":
      return (
        <IconFrame className={className}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </IconFrame>
      );
    case "secure":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
          <path d="M10 12l1.5 1.5L14.5 10" />
        </IconFrame>
      );
    case "scale":
      return (
        <IconFrame className={className}>
          <path d="M4 20V10M9 20V6M14 20v-8M19 20V4" />
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
    case "help":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.2-3.2 3.5-5 7-5s5.8 1.8 7 5" />
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
