import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const locales = "en|fr|ar";
    return [
      // Partners elevated from Company
      {
        source: `/:locale(${locales})/company/partners`,
        destination: "/:locale/partners",
        permanent: true,
      },
      // Duplicate case-studies listing → canonical hub
      {
        source: `/:locale(${locales})/resources/case-studies`,
        destination: "/:locale/case-studies",
        permanent: true,
      },
      // Restaurant bundles → main restaurant product line
      {
        source: `/:locale(${locales})/products/:slug(restaurant-ecosystem|restaurant-pos)`,
        destination: "/:locale/products/restaurant",
        permanent: true,
      },
      // Components moved under /products/components/
      {
        source: `/:locale(${locales})/products/:slug(pos|waiter|kds|core|ui|native|importer)`,
        destination: "/:locale/products/components/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
