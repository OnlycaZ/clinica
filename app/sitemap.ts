import type { MetadataRoute } from "next";
import { seoPages, siteConfig } from "@/lib/utils/seo";
import { serviceSlugs } from "@/data/data/services";
import { priceSlugs } from "@/data/data/pricing";

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
