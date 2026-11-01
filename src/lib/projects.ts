/**
 * Helper untuk mencari dan menyusun data proyek dari berbagai sumber
 * (data lokal dan GitHub API) untuk halaman detail proyek.
 */

import { projectsData, type ProjectItem } from "@/data/projects";
import { fetchGitHubRepos } from "@/lib/github";

/**
 * Menghasilkan slug URL-friendly dari nama repository GitHub.
 * Contoh: "kinetix-design-system" -> "kinetix-design-system"
 */
export function repoToSlug(repoName: string): string {
  return repoName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Gabungkan semua proyek (lokal + GitHub) menjadi satu daftar yang dapat dicari
 * berdasarkan slug. Digunakan untuk halaman detail proyek dan sitemap.
 *
 * Jika GitHub API gagal, hanya proyek lokal yang digunakan (fallback aman).
 */
export async function getAllProjectsBySlug(): Promise<Map<string, ProjectItem>> {
  const map = new Map<string, ProjectItem>();

  // Tambahkan proyek lokal
  for (const project of projectsData) {
    const slug = project.slug ?? repoToSlug(project.title);
    map.set(slug, { ...project, source: "local" });
  }

  // Coba tambahkan proyek GitHub (jika username dikonfigurasi)
  const username = process.env.GITHUB_USERNAME;
  if (username) {
    try {
      const result = await fetchGitHubRepos(username);
      if (!result.error && result.repos.length > 0) {
        for (const repo of result.repos) {
          const slug = repoToSlug(repo.name);
          // Jika slug sudah ada dari lokal, jangan timpa (lokal lebih prioritas)
          if (!map.has(slug)) {
            map.set(slug, {
              id: String(repo.id),
              title: repo.name,
              category: "GitHub Repository",
              year: new Date(repo.updated_at).toLocaleDateString("id-ID", {
                year: "numeric",
              }),
              tagline: repo.description ?? "Repository open source dari GitHub.",
              problem: "",
              solution: "",
              technologies: repo.language ? [repo.language] : [],
              image: `/projects/${slug}.svg`,
              demoUrl: repo.homepage ?? undefined,
              repoUrl: repo.html_url,
              featured: repo.topics.some((t) =>
                ["featured", "portfolio-featured"].includes(t.toLowerCase())
              ),
              source: "github",
              slug,
            });
          }
        }
      }
    } catch {
      // Jika gagal, diam saja — proyek lokal tetap tersedia sebagai fallback
    }
  }

  return map;
}

/**
 * Mencari satu proyek berdasarkan slug.
 * Mengembalikan null jika tidak ditemukan.
 */
export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  const all = await getAllProjectsBySlug();
  return all.get(slug) ?? null;
}
