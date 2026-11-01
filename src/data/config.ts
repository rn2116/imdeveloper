/**
 * Konfigurasi terpusat untuk informasi pribadi yang mudah berubah.
 * Semua nilai diambil dari environment variable agar mudah disesuaikan
 * saat development atau deployment ke Vercel.
 *
 * Jangan menambahkan secret (API key, token pribadi) ke dalam NEXT_PUBLIC_*.
 */

export interface SiteConfig {
  siteUrl: string;
  whatsappNumber: string | null;
  githubUsername: string | null;
  googleSiteVerification: string | null;
}

/**
 * Membaca environment variable dengan fallback yang aman.
 * Tidak menghasilkan nomor WhatsApp palsu: jika env tidak tersedia,
 * whatsappNumber akan bernilai null dan tombol WhatsApp tidak akan menampilkan nomor buatan.
 */
export function getSiteConfig(): SiteConfig {
  return {
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafly.dev",
    whatsappNumber:
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? null,
    githubUsername:
      process.env.GITHUB_USERNAME ?? null,
    googleSiteVerification:
      process.env.GOOGLE_SITE_VERIFICATION ?? null,
  };
}

export const siteConfig = getSiteConfig();
