import { fetchGitHubRepos, categorizeRepos, type GitHubRepo } from "@/lib/github";
import { siteConfig } from "@/data/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";

interface GitHubProjectCardProps {
  repo: GitHubRepo;
  isFeatured?: boolean;
}

/**
 * Kartu proyek GitHub dengan desain monokom konsisten dengan website.
 * Menampilkan nama, deskripsi, bahasa, topik, stars, tanggal update,
 * tombol View Repository, dan Live Demo (jika homepage tersedia).
 */
function GitHubProjectCard({ repo, isFeatured = false }: GitHubProjectCardProps) {
  const updatedDate = new Date(repo.updated_at).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const primaryLanguage = repo.language ?? "Tidak ditentukan";
  const displayTopics = repo.topics.slice(0, 4);

  return (
    <article
      className="border border-line bg-surface overflow-hidden group hover:border-foreground/40 transition-colors duration-300"
    >
      {/* Card Header Strip */}
      <div className="px-6 py-4 border-b border-line flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-foreground-muted bg-[#0D0D0D]">
        <div className="flex items-center gap-3">
          {isFeatured && (
            <span className="px-2 py-0.5 rounded border border-[#B91C1C] bg-[#B91C1C]/10 text-[#B91C1C] font-bold text-[10px] uppercase">
              Featured
            </span>
          )}
          <span className="font-bold text-foreground">GITHUB // REPO</span>
          <span>•</span>
          <span>{primaryLanguage}</span>
        </div>
        <span className="font-mono text-xs">
          {new Date(repo.updated_at).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Card Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10 items-center">
        {/* Visual Preview (GitHub repo placeholder using octocat-style SVG or repo image) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div
            className="relative aspect-video w-full border border-line overflow-hidden bg-[#0A0A0A]"
          >
            {/* Simple repo avatar placeholder rendered via next/image */}
            <Image
              src={`https://github.com/${repo.full_name}.png?size=120`}
              alt={`Avatar repositori ${repo.full_name}`}
              fill
              className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono text-foreground-muted uppercase tracking-wider">
                  Repository GitHub
                </span>
                <span className="text-xs font-mono text-foreground font-bold">
                  {repo.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content & Specs */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
              {repo.name}
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans mb-6">
              {repo.description ?? "Tidak ada deskripsi yang tersedia."}
            </p>

            {/* Topics / Tech tags */}
            {displayTopics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-6">
                {displayTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 text-[11px] font-mono border border-line bg-[#0E0E0E] text-foreground-muted"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            )}

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-2 p-3 border border-line bg-[#0E0E0E] mb-6 font-mono text-xs">
              <div className="text-center">
                <span className="block text-[10px] text-foreground-muted truncate">
                  Bahasa
                </span>
                <span className="text-foreground font-bold text-xs truncate">
                  {primaryLanguage}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] text-foreground-muted truncate">
                  Stars
                </span>
                <span className="text-foreground font-bold text-xs truncate">
                  {repo.stargazers_count.toLocaleString()}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] text-foreground-muted truncate">
                  Diperbarui
                </span>
                <span className="text-foreground font-bold text-xs truncate">
                  {updatedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-line">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
              aria-label={`Lihat repositori GitHub ${repo.full_name}`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted" />
            </a>

            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
                aria-label={`Buka live demo untuk ${repo.name}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

interface GitHubProjectsProps {
  className?: string;
}

/**
 * Section GitHub Project Showcase.
 * Mengambil data dari GitHub API di sisi server, dikategorikan,
 * dan ditampilkan dalam tiga kategori: Featured, Web Development, Other.
 * Jika API gagal, section tidak menampilkan error teknis kepada pengunjung.
 */
export default async function GitHubProjects({
  className = "",
}: GitHubProjectsProps) {
  const username = siteConfig.githubUsername;

  // Jika username tidak dikonfigurasi, render section kosong (tidak ada error teknis)
  if (!username) {
    return (
      <section
        id="github-projects"
        aria-label="GitHub Projects Section"
        className={`py-20 md:py-28 border-b border-line ${className}`}
      >
        <SectionHeader
          number="06"
          title="GitHub Projects"
          subtitle="Proyek-proyek open source dari GitHub akan ditampilkan di sini setelah dikonfigurasi."
        />
        <p className="text-sm text-foreground-muted max-w-2xl">
          Konfigurasikan environment variable <code>GITHUB_USERNAME</code> di Vercel
          untuk menampilkan proyek GitHub Anda secara otomatis.
        </p>
      </section>
    );
  }

  const result = await fetchGitHubRepos(username);

  // Jika API gagal, jangan tampilkan error teknis kepada pengunjung.
  // Render section dengan pesan yang ramah dan tidak mengungkap detail teknis.
  if (result.error || result.repos.length === 0) {
    return (
      <section
        id="github-projects"
        aria-label="GitHub Projects Section"
        className={`py-20 md:py-28 border-b border-line ${className}`}
      >
        <SectionHeader
          number="06"
          title="GitHub Projects"
          subtitle="Proyek-proyek open source dari GitHub akan ditampilkan di sini."
        />
        <p className="text-sm text-foreground-muted max-w-2xl">
          Data proyek GitHub sedang disiapkan. Silakan kunjungi
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground-muted underline decoration-line underline-offset-4"
          >
            profil GitHub
          </a>
          untuk melihat repositori terbaru.
        </p>
      </section>
    );
  }

  const { featured, webDevelopment, other } = categorizeRepos(result.repos);

  return (
    <section
      id="github-projects"
      aria-label="GitHub Projects Section"
      className={`py-20 md:py-28 border-b border-line ${className}`}
    >
      <SectionHeader
        number="06"
        title="GitHub Projects"
        subtitle="Proyek open source dan kolaborasi dari GitHub, difetch langsung dari API."
      />

      {/* Featured Projects */}
      {featured.length > 0 && (
        <div className="space-y-16 md:space-y-24 mb-20 md:mb-28">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Featured Projects
            </h2>
            <span className="px-2 py-0.5 rounded border border-[#B91C1C] bg-[#B91C1C]/10 text-[#B91C1C] font-mono text-[10px] uppercase font-bold">
              Dipilih
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((repo) => (
              <GitHubProjectCard key={repo.id} repo={repo} isFeatured />
            ))}
          </div>
        </div>
      )}

      {/* Web Development */}
      {webDevelopment.length > 0 && (
        <div className="space-y-16 md:space-y-24 mb-20 md:mb-28">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            Web Development
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevelopment.map((repo) => (
              <GitHubProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {other.length > 0 && (
        <div className="space-y-16 md:space-y-24">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
            Other Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {other.map((repo) => (
              <GitHubProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
