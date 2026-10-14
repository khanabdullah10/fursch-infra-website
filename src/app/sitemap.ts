import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { verifiedCaseStudies } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://furschinfra.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/expertise`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sectors`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 7 substantive service routes
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/expertise/${service.slug}`,
    lastModified: new Date("2026-10-13"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Only verified case studies (excluding thin draft pages per requirements)
  const projectRoutes: MetadataRoute.Sitemap = verifiedCaseStudies.map(
    (project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
