import type { ReactNode } from "react";

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

export function navSectionIcon(
  kind: "products" | "solutions" | "hardware" | "resources" | "company" | "quote" | "shield" | "sun",
  className?: string,
) {
  switch (kind) {
    case "products":
      return (
        <IconFrame className={className}>
          <path d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z" />
          <path d="M3 8.5V16l9 4.5 9-4.5V8.5" />
          <path d="M12 13v7.5" />
        </IconFrame>
      );
    case "solutions":
      return (
        <IconFrame className={className}>
          <path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z" />
          <path d="M4 8l8 5 8-5" />
          <path d="M12 13v8" />
        </IconFrame>
      );
    case "hardware":
      return (
        <IconFrame className={className}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M10 10h4v4h-4z" />
          <path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2" />
        </IconFrame>
      );
    case "resources":
      return (
        <IconFrame className={className}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5Z" />
          <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5A2.5 2.5 0 0 1 20 21.5V5.5Z" />
        </IconFrame>
      );
    case "company":
      return (
        <IconFrame className={className}>
          <path d="M3 21h18" />
          <path d="M5 21V8l5-3v16" />
          <path d="M14 21V4h5v17" />
          <path d="M7.5 11h.01M7.5 14h.01M16.5 8h.01M16.5 11h.01M16.5 14h.01" />
        </IconFrame>
      );
    case "quote":
      return (
        <IconFrame className={className}>
          <path d="M7 4h8l4 4v12H7V4Z" />
          <path d="M15 4v4h4" />
          <path d="M10 12h5M10 16h3" />
          <circle cx="18.5" cy="17.5" r="3" />
          <path d="M17.5 17.5h2M18.5 16.5v2" />
        </IconFrame>
      );
    case "shield":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
          <path d="M10 12l1.5 1.5L14.5 10" />
        </IconFrame>
      );
    case "sun":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
        </IconFrame>
      );
    default:
      return null;
  }
}
