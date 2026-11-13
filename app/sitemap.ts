import type { MetadataRoute } from "next";
import { MATERIALS } from "@/lib/cpns/materials";

const SITE_URL = "https://belajar-cpns-eta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/materi",
    "/kuis",
    "/tryout",
    "/checklist",
    "/tentang",
    "/privasi",
    "/syarat",
  ];
  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  for (const m of MATERIALS) {
    entries.push(
      { url: `${SITE_URL}/materi/${m.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${SITE_URL}/kuis/${m.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    );
  }
  return entries;
}
