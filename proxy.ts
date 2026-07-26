import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

const localePattern = (locales as readonly string[]).join("|");

/** public/* files — must never be locale-redirected */
const PUBLIC_FILE = /\.(?:png|jpe?g|gif|webp|svg|ico|woff2?|ttf|txt|xml|json|mp4|webm)$/i;

/**
 * Next.js 16 proxy (formerly middleware).
 *
 * 1. Passes through root-level public files (/logo.jpg, /estinad-hero.png, …)
 * 2. Rewrites locale-prefixed static assets back to the site root
 *    (/en/_next/…, /en/logo.jpg, …)
 * 3. Redirects page routes without a locale prefix to /en/…
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Next internals & API — never locale-redirect
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Root public assets — serve as-is (matcher may still invoke proxy on these)
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // /{locale}/_next/… | /{locale}/favicon.ico | /{locale}/public-file.ext
  const localePrefixed = pathname.match(
    new RegExp(`^\\/(${localePattern})\\/(.+)$`),
  );
  if (localePrefixed) {
    const rest = localePrefixed[2];
    if (
      rest.startsWith("_next") ||
      rest === "favicon.ico" ||
      PUBLIC_FILE.test(`/${rest}`)
    ) {
      const url = request.nextUrl.clone();
      url.pathname = `/${rest}`;
      return NextResponse.rewrite(url);
    }
  }

  const firstSegment = pathname.split("/")[1] ?? "";
  if ((locales as readonly string[]).includes(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const proxyConfig = {
  matcher: ["/((?!api|_next|favicon|sitemap.xml|robots.txt|.*\\..*).*)"],
};
