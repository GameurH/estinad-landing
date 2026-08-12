import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "zhfietudqhbjuqjqfvpa.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
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
      // ESTINAD Cloud renamed to ESTINAD Central
      {
        source: `/:locale(${locales})/products/cloud`,
        destination: "/:locale/products/central",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/products/cloud/pricing`,
        destination: "/:locale/products/central",
        permanent: true,
      },
      // Coming-soon products: no public pricing pages
      {
        source: `/:locale(${locales})/products/:slug(restaurant|inventory|invoices|workforce|clinic|central)/pricing`,
        destination: "/:locale/products/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
