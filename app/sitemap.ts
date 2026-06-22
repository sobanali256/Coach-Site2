import type { MetadataRoute } from "next";
import { CASE_STUDIES, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/case-studies", "/contact", "/blog"];
  const staticPages = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const caseStudyPages = CASE_STUDIES.map((s) => ({
    url: `${SITE.url}/case-studies/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages];
}
