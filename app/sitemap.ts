import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.yadhronics.com";
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/training",
    "/colleges",
    "/industry",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const courseRoutes = courses.map((c) => ({
    url: `${base}/training/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...courseRoutes,
  ];
}