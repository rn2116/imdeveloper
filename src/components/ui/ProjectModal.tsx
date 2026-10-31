"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#101010] border border-line p-6 sm:p-8 md:p-10 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-foreground-muted hover:text-foreground border border-line bg-surface hover:bg-surface-hover transition-colors"
          aria-label="Tutup detail proyek"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-line pb-6 pr-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-foreground-muted mb-2">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            {project.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-foreground-muted font-sans">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Preview */}
        <div className="relative w-full aspect-video border border-line mb-8 overflow-hidden bg-surface">
          <Image
            src={project.image}
            alt={`Tampilan antarmuka ${project.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Key Metrics Strip if available */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 p-4 border border-line bg-surface mb-8 font-mono text-xs">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="block text-foreground-muted text-[11px] mb-1">
                  {metric.label.toUpperCase()}
                </span>
                <span className="text-foreground font-bold text-sm sm:text-base">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Breakdown: Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="p-5 border border-line/80 bg-[#0C0C0C]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              <span>Tantangan &amp; Masalah</span>
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-5 border border-line/80 bg-[#0C0C0C]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-foreground" />
              <span>Solusi &amp; Implementasi</span>
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-foreground-muted mb-3">
            Teknologi yang Digunakan
          </h4>
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

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-line">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
            >
              <span>Repository &amp; Dokumen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Lihat Kode Sumber</span>
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto font-mono text-xs text-foreground-muted hover:text-foreground py-2"
          >
            Tutup Dialog
          </button>
        </div>
      </div>
    </div>
  );
}
