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

export function restaurantIcon(icon: string, className?: string) {
  switch (icon) {
    case "kitchen":
      return (
        <IconFrame className={className}>
          <path d="M8 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
          <path d="M10 12v9" />
          <path d="M16 3v18" />
          <path d="M16 3c2.2 0 3.5 1.6 3.5 4S18.2 11 16 11" />
        </IconFrame>
      );
    case "floor":
      return (
        <IconFrame className={className}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
          <path d="M14 14.2c1.5-.4 3.1-.2 4.5 1.1.7.7 1.2 1.7 1.5 2.7" />
        </IconFrame>
      );
    case "orders":
      return (
        <IconFrame className={className}>
          <path d="M7 3h8l4 4v14H7V3Z" />
          <path d="M15 3v4h4" />
          <path d="M10 12h5M10 16h3" />
        </IconFrame>
      );
    case "unified":
      return (
        <IconFrame className={className}>
          <rect x="4" y="4" width="7" height="7" rx="1.2" />
          <rect x="13" y="4" width="7" height="7" rx="1.2" />
          <rect x="4" y="13" width="7" height="7" rx="1.2" />
          <rect x="13" y="13" width="7" height="7" rx="1.2" />
        </IconFrame>
      );
    case "faster":
      return (
        <IconFrame className={className}>
          <path d="M13 3 6 14h5l-1 7 8-12h-5l0-6Z" />
        </IconFrame>
      );
    case "insights":
      return (
        <IconFrame className={className}>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </IconFrame>
      );
    case "enterprise":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
          <path d="M10 12l1.5 1.5L14.5 10" />
        </IconFrame>
      );
    case "utensils":
      return (
        <IconFrame className={className}>
          <path d="M8 3v8M8 11c0 2.2-1.3 3.5-3 3.5V21" />
          <path d="M8 7H5.5M8 7h2.5" />
          <path d="M16 3v18" />
          <path d="M16 3c2.5 0 4 1.8 4 4.5S18.5 12 16 12" />
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
