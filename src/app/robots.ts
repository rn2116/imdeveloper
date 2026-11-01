import { MetadataRoute } from "next";
import { siteConfig } from "@/data/config";

/**
 * Konfigurasi robots.txt untuk crawler mesin pencari.
 * Halaman publik diizinkan untuk di-crawl; tidak ada pembatasan keseluruhan website.
 * Referensi sitemap menggunakan domain dari NEXT_PUBLIC_SITE_URL.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
