"use client";

import Link from "next/link";
import Image from "next/image";
import { thesisMeta, educationProfile } from "@/data/thesis";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AcademicThesis() {
  return (
    <section
      id="academic"
      aria-label="Academic Thesis Showcase Section"
      className="py-20 md:py-28 border-b border-line"
    >
      <SectionHeader
        number="05"
        title="Academic Thesis Showcase"
        subtitle="Final year research in Informatics Engineering — a complement to frontend engineering practice."
      />

      <div className="max-w-4xl mx-auto">
        {/* Education Profile Strip */}
        <div
          className="mb-16 border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-foreground-muted mb-6 border-b border-line/60 pb-4">
            <span className="font-bold text-foreground uppercase tracking-wider">
              Education // {educationProfile.degreeEn.split("(")[0].trim()}
            </span>
            <span>{educationProfile.graduatedAtEn}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2 font-sans">
                {educationProfile.name}
              </h3>
              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed mb-3 font-sans">
                {educationProfile.degree} • {educationProfile.university}
              </p>
              <div className="text-xs font-mono text-foreground-muted space-y-1">
                <span>
                  {educationProfile.faculty} • {educationProfile.department}
                </span>
                <span>
                  Lulusan: {educationProfile.graduatedAt}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end sm:items-start text-right sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-line bg-[#0E0E0E] rounded font-mono text-xs text-foreground muted">
                <span>S1</span>
                <span>•</span>
                <span>Teknik Informatika</span>
              </div>
              <p className="mt-4 text-[11px] font-mono text-foreground-muted max-w-xs leading-relaxed">
                Pendidikan formal sebagai landasan analitis dan penelitian
                berbasis data.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Thesis Card */}
        <article className="border border-line bg-surface overflow-hidden group hover:border-foreground/40 transition-colors duration-300">
          <div className="px-6 py-4 border-b border-line flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-foreground-muted bg-[#0D0D0D]">
            <div className="flex items-center gap-3">
              <span className="font-bold text-foreground">THESIS // FEATURED</span>
              <span>•</span>
              <span>{thesisMeta.type}</span>
            </div>
            <span>{thesisMeta.year}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 md:p-10 items-start">
            {/* Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                className="relative aspect-video w-full border border-line overflow-hidden bg-[#0A0A0A] cursor-pointer group/img"
              >
                <Image
                  src="/thesis-hero.svg"
                  alt={`Ilustrasi konseptual ${thesisMeta.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/img:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-foreground text-background font-mono text-xs uppercase font-bold tracking-wider">
                    Buka Detail Penelitian
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3 font-sans leading-snug">
                  {thesisMeta.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans mb-6 max-w-lg">
                  Penelitian skripsi mengenai segmentasi pola kinerja keuangan
                  kelompok Bank Himbara menggunakan pendekatan soft clustering
                  Gaussian Mixture Model (GMM) berdasarkan rasio CAR dan LDR.
                </p>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2.5 py-1 text-[11px] font-mono border border-line bg-[#0E0E0E] text-foreground-muted">
                    {thesisMeta.supervisor}
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-mono border border-line bg-[#0E0E0E] text-foreground-muted">
                    Universitas Hasanuddin
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-mono border border-line bg-[#0E0E0E] text-foreground-muted">
                    Soft Clustering • GMM
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto pt-6 border-t border-line flex flex-wrap items-center gap-3">
                <Link
                  href="/thesis"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
                >
                  <span>Read Thesis</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Discuss Research</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
