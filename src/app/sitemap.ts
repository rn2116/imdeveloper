import { MetadataRoute } from "next";
import { getAllProjectsBySlug } from "@/lib/projects";
import { siteConfig } from "@/data/config";

/**
 * Generator sitemap.xml untuk Next.js App Router.
 * URL diambil dari environment variable NEXT_PUBLIC_SITE_URL
 * sehingga otomatis menyesuaikan domain produksi saat deployment.
 *
 * Hanya menyertakan halaman publik yang benar-benar tersedia
 * (tidak ada anchor URL seperti #about yang bukan halaman nyata).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Tambahkan route detail proyek dari data lokal dan GitHub
  const projectRoutes: MetadataRoute.Sitemap = [];
  try {
    const allProjects = await getAllProjectsBySlug();
    for (const slug of allProjects.keys()) {
      projectRoutes.push({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  } catch {
    // Jika gagal mengambil data proyek, sitemap tetap memiliki route statis
  }

  return [...staticRoutes, ...projectRoutes];
}
