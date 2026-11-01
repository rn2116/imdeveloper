import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllProjectsBySlug } from "@/lib/projects";
import { siteConfig } from "@/data/config";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectPageProps {
  params: { slug: string };
}

/**
 * Metadata dinamis untuk setiap halaman detail proyek.
 * Digunakan oleh Next.js untuk <title>, <meta description>, Open Graph, dll.
 */
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
      description: "Halaman proyek yang Anda cari tidak tersedia.",
    } as unknown as Metadata;
  }

  const title = `${project.title} | Muhammad Rafly`;
  const description =
    project.tagline ||
    `Studi kasus proyek ${project.title} oleh Muhammad Rafly, Frontend Developer.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/projects/${params.slug}`,
    },
    openGraph: {
      type: "website",
      url: `${siteConfig.siteUrl}/projects/${params.slug}`,
      title,
      description,
      siteName: "Muhammad Rafly Portfolio",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
  };
}

/**
 * Daftar slug yang akan di-pre-render saat build.
 * Digunakan Next.js untuk generate static pages untuk semua proyek.
 */
export async function generateStaticParams() {
  const all = await getAllProjectsBySlug();
  return Array.from(all.keys()).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const updatedDate = new Date(
    project.year ?? new Date().toISOString()
  ).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-line py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-foreground-muted hover:text-foreground transition-colors mb-6 block"
          >
            <span>← Kembali ke Beranda</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-foreground-muted mb-4">
            <span className="font-bold text-foreground">PROJECT // DETAIL</span>
            <span>•</span>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.source === "github" ? "GitHub" : "Lokal"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-sans mb-6 max-w-2xl">
            {project.tagline}
          </p>

          {project.source === "github" && project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Lihat di GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted" />
            </a>
          )}
        </div>
      </header>

      <main id="main-content" className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Image */}
        <div className="relative aspect-video w-full border border-line overflow-hidden bg-[#0A0A0A] mb-8">
          <Image
            src={project.image}
            alt={`Tampilan antarmuka ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Problem & Solution */}
        {(project.problem || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border border-line bg-surface">
              <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <span>Tantangan &amp; Masalah</span>
              </h2>
              <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                {project.problem || "Tidak ada informasi tantangan yang tersedia."}
              </p>
            </div>

            <div className="p-6 border border-line bg-surface">
              <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <span>Solusi &amp; Implementasi</span>
              </h2>
              <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                {project.solution || "Tidak ada informasi solusi yang tersedia."}
              </p>
            </div>
          </div>
        )}

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="mb-12">
            <h2 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-4">
              Teknologi yang Digunakan
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono border border-line bg-surface text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-line mb-12">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted" />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Footer Info */}
        <div className="border-t border-line pt-8 mt-12 font-mono text-xs text-foreground-muted">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-foreground font-medium">
                © {new Date().getFullYear()} Muhammad Rafly • Frontend Developer
              </p>
              <p className="text-sm">
                Proyek diperbarui terakhir: {updatedDate}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Kembali ke Proyek
              </Link>
              <Link
                href="/#contact"
                className="hover:text-foreground transition-colors"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}
