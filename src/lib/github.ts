/**
 * Client GitHub REST API untuk mengambil data repository publik.
 *
 * Prinsip yang diikuti:
 * - Tidak mengekspos personal access token di client-side (fetch di server saja).
 * - Repositori publik dapat diakses tanpa token (tergantung rate limit GitHub).
 * - Menggunakan next.js caching/revalidation agar tidak request berulang.
 * - Tangani kegagalan API dengan baik: jangan tampilkan error teknis kepada pengunjung.
 * - Fallback ke data lokal jika API gagal.
 */

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
  archived: boolean;
  disabled: boolean;
  fork: boolean;
}

export interface GitHubFetchResult {
  repos: GitHubRepo[];
  error: string | null;
  fromCache: boolean;
}

/**
 * Daftar topik yang dianggap relevan dengan pengembangan web dan Next.js.
 * Repositori yang memiliki salah satu topik ini akan diprioritaskan.
 */
const WEB_RELEVANT_TOPICS = [
  "nextjs",
  "react",
  "typescript",
  "tailwindcss",
  "javascript",
  "web",
  "frontend",
  "web-development",
  "webdev",
  "portfolio",
  "website",
];

/**
 * Topik yang menandai repositori sebagai featured.
 * Admin dapat menambahkan topik "featured" ke repositori di GitHub
 * agar tampil di bagian Featured Projects.
 */
const FEATURED_TOPICS = ["featured", "portfolio-featured", "pin"];

const GITHUB_API_BASE = "https://api.github.com";

/**
 * Mengambil daftar repository publik milik pengguna GitHub.
 *
 * Menggunakan cache 1 jam (3600 detik) melalui next.fetch
 * untuk menghindari rate limit dan request berulang.
 *
 * @param username GitHub username
 * @returns Hasil fetch bersama informasi error dan sumber data
 */
export async function fetchGitHubRepos(
  username: string
): Promise<GitHubFetchResult> {
  if (!username) {
    return { repos: [], error: "Username GitHub tidak tersedia", fromCache: false };
  }

  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated&direction=desc`,
      {
        // Cache 1 jam, revalidasi di background
        next: { revalidate: 3600, tags: [`github-repos-${username}`] },
        headers: {
          // Gunakan Accept header untuk API versi terbaru
          Accept: "application/vnd.github+json",
          "User-Agent": "imdeveloper-portfolio",
        },
      }
    );

    if (response.status === 403) {
      // Rate limit terlampaui
      return {
        repos: [],
        error: "Rate limit GitHub API tercapai. Menggunakan data lokal sebagai fallback.",
        fromCache: false,
      };
    }

    if (response.status === 404) {
      return {
        repos: [],
        error: `Pengguna GitHub "${username}" tidak ditemukan.`,
        fromCache: false,
      };
    }

    if (!response.ok) {
      return {
        repos: [],
        error: `Gagal mengambil data GitHub (${response.status}).`,
        fromCache: false,
      };
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter: hanya repositori publik, tidak diarsipkan, tidak disabled, bukan fork
    const publicRepos = repos.filter(
      (repo) => !repo.archived && !repo.disabled && !repo.fork
    );

    return {
      repos: publicRepos,
      error: null,
      fromCache: false,
    };
  } catch {
    // Jaringan gangguan atau error lain: jangan tampilkan error teknis kepada pengunjung
    return {
      repos: [],
      error: "Tidak dapat menghubungkan GitHub API. Menggunakan data lokal.",
      fromCache: false,
    };
  }
}

/**
 * Memfilter repositori yang relevan dengan pengembangan web dan Next.js.
 * Prioritaskan repositori yang memiliki topik terkait web.
 */
export function filterWebRelevantRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.filter((repo) => {
    const repoTopics = repo.topics.map((t) => t.toLowerCase());
    const hasRelevantTopic = WEB_RELEVANT_TOPICS.some((topic) =>
      repoTopics.includes(topic)
    );
    const hasRelevantLanguage =
      repo.language &&
      ["JavaScript", "TypeScript", "CSS", "HTML", "Vue", "React"].includes(
        repo.language
      );

    return hasRelevantTopic || hasRelevantLanguage;
  });
}

/**
 * Memisahkan repositori menjadi featured dan non-featured.
 * Repositori dianggap featured jika memiliki topik featured.
 */
export function splitFeaturedRepos(
  repos: GitHubRepo[]
): { featured: GitHubRepo[]; regular: GitHubRepo[] } {
  const featured: GitHubRepo[] = [];
  const regular: GitHubRepo[] = [];

  for (const repo of repos) {
    const repoTopics = repo.topics.map((t) => t.toLowerCase());
    const isFeatured = FEATURED_TOPICS.some((topic) =>
      repoTopics.includes(topic)
    );

    if (isFeatured) {
      featured.push(repo);
    } else {
      regular.push(repo);
    }
  }

  // Urutkan berdasarkan stars (descending)
  featured.sort((a, b) => b.stargazers_count - a.stargazers_count);
  regular.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return { featured, regular };
}

/**
 * Mengkategorikan repositori ke dalam:
 * - Featured Projects
 * - Web Development
 * - Other Projects
 */
export function categorizeRepos(
  repos: GitHubRepo[]
): {
  featured: GitHubRepo[];
  webDevelopment: GitHubRepo[];
  other: GitHubRepo[];
} {
  const { featured, regular } = splitFeaturedRepos(repos);
  const webRelevant = filterWebRelevantRepos(regular);

  const webDevelopment = webRelevant.filter((repo) => !featured.includes(repo));
  const other = regular.filter((repo) => !webRelevant.includes(repo));

  return { featured, webDevelopment, other };
}
