import type { MetadataRoute } from "next";
import { seoPages, siteConfig } from "@/lib/seo";
import { serviceSlugs } from "@/lib/data/services";
import { priceSlugs } from "@/lib/data/pricing";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages = Object.values(seoPages).map((page) => ({
    url: new URL(page.path, siteConfig.url).toString(),
    lastModified
  }));

  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${siteConfig.url}/servicii/${slug}`,
    lastModified
  }));

  const priceEntries = priceSlugs.map((slug) => ({
    url: `${siteConfig.url}/preturi/${slug}`,
    lastModified
  }));

  return [...staticPages, ...serviceEntries, ...priceEntries];
}
