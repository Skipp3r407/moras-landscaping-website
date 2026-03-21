import type { MetadataRoute } from "next";

const base = "https://moras-landscaping.local";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/services",
    "/gallery",
    "/testimonials",
    "/contact",
    "/service-areas",
    "/faq"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}
