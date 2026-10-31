"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ArrowUpRight, Info } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" aria-label="Projects Section" className="py-20 md:py-28 border-b border-line">
      <SectionHeader
        number="03"
        title="Featured Projects"
        subtitle="Selected works with architectural focus and performance precision."
      />

      <div className="space-y-16 md:space-y-24">
        {projectsData.map((project, index) => {
          const projectNum = String(index + 1).padStart(2, "0");
          return (
            <article
              key={project.id}
              className="border border-line bg-surface overflow-hidden group hover:border-foreground/40 transition-colors duration-300"
            >
              {/* Card Header Strip */}
              <div className="px-6 py-4 border-b border-line flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-foreground-muted bg-[#0D0D0D]">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-foreground">PROJECT // {projectNum}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>
                <span>{project.year}</span>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div
                    className="relative aspect-video w-full border border-line overflow-hidden bg-[#0A0A0A] cursor-pointer group/img"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={`Mockup antarmuka ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/img:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-foreground text-background font-mono text-xs uppercase font-bold tracking-wider">
                        Buka Detail Studi Kasus
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content & Specs */}
                <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans mb-6">
                      {project.tagline}
                    </p>

                    {/* Key Metrics Chips */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 p-3 border border-line bg-[#0E0E0E] mb-6 font-mono text-xs">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <span className="block text-[10px] text-foreground-muted truncate">
                              {metric.label}
                            </span>
                            <span className="text-foreground font-bold text-xs truncate">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-mono border border-line bg-[#0E0E0E] text-foreground-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-line">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Studi Kasus</span>
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
                        aria-label={`Lihat repository GitHub untuk ${project.title}`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
