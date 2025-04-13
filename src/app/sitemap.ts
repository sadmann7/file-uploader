import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [""].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const externalRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.links.docs,
      lastModified: new Date().toISOString(),
    },
  ];

  return [...routes, ...externalRoutes];
}
