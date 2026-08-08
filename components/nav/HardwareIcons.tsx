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

export function hardwareMegaIcon(icon: string, className?: string) {
  switch (icon) {
    case "check":
      return (
        <IconFrame className={className}>
          <circle cx="12" cy="12" r="8" />
          <path d="M8.5 12.2 11 14.7 15.5 9.5" />
        </IconFrame>
      );
    case "overview":
      return (
        <IconFrame className={className}>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </IconFrame>
      );
    case "compat":
      return (
        <IconFrame className={className}>
          <circle cx="11" cy="11" r="6" />
          <path d="M20 20l-3.5-3.5" />
        </IconFrame>
      );
    case "standards":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5 6.5v5c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5v-5L12 3Z" />
          <path d="M10 12l1.5 1.5L14.5 10" />
        </IconFrame>
      );
    case "lifecycle":
      return (
        <IconFrame className={className}>
          <path d="M4 12a8 8 0 0 1 13.5-5.8" />
          <path d="M20 12a8 8 0 0 1-13.5 5.8" />
          <path d="M17 3v4h4M7 21v-4H3" />
        </IconFrame>
      );
    case "expert":
      return (
        <IconFrame className={className}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
          <path d="M14 14.2c1.5-.4 3.1-.2 4.5 1.1.7.7 1.2 1.7 1.5 2.7" />
        </IconFrame>
      );
    default:
      return (
        <IconFrame className={className}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
        </IconFrame>
      );
  }
}
