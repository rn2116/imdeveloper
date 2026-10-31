"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profileData } from "@/data/profile";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" aria-label="Contact Section" className="py-20 md:py-28 border-b border-line">
      <SectionHeader
        number="05"
        title="Contact"
        subtitle="Let's build something exceptional together."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Communication Overview */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-base sm:text-lg text-foreground font-sans leading-relaxed">
            Apakah Anda memiliki proyek yang membutuhkan perhatian mendalam terhadap performa web,
            arsitektur Next.js, dan tipografi modern? Saya terbuka untuk diskusi kolaborasi, proyek lepas,
            maupun posisi penuh waktu.
          </p>

          <p className="text-sm text-foreground-muted leading-relaxed font-sans">
            Saya mengutamakan komunikasi yang jelas, terstruktur, dan tepat waktu.
            Silakan hubungi saya melalui email langsung atau jaringan profesional di bawah ini.
          </p>

          {/* Primary Email Direct Box */}
          <div className="p-6 border border-line bg-surface mt-8 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted">
              <Mail className="w-4 h-4 text-foreground" aria-hidden="true" />
              <span>DIRECT EMAIL</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="text-lg sm:text-xl font-bold tracking-tight text-foreground hover:text-foreground-muted transition-colors underline decoration-line underline-offset-4"
              >
                {profileData.contact.email}
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono border border-line bg-[#0E0E0E] hover:border-foreground/40 text-foreground transition-colors"
                  aria-label="Salin alamat email ke clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-foreground" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-foreground-muted" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
                >
                  <span>Kirim Pesan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Accessibility live region for copy confirmation */}
            <div className="sr-only" aria-live="polite">
              {copied ? "Alamat email berhasil disalin ke clipboard." : ""}
            </div>
          </div>
        </div>

        {/* Right: Availability & Social Links */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status Box */}
          <div className="p-6 border border-line bg-surface">
            <div className="flex items-center gap-2 font-mono text-xs text-foreground-muted mb-2">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span>CURRENT STATUS</span>
            </div>
            <p className="text-foreground font-semibold text-sm mb-1">
              {profileData.availability.label}
            </p>
            <p className="text-xs text-foreground-muted font-mono">
              Timezone: {profileData.timezone}
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="space-y-3">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-line bg-surface hover:bg-surface-hover hover:border-foreground/40 transition-colors text-foreground group"
              aria-label="Kunjungi profil GitHub Muhammad Rafly"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-foreground-muted group-hover:text-foreground transition-colors" />
                <div>
                  <span className="font-mono text-xs text-foreground block font-bold">GITHUB</span>
                  <span className="text-xs text-foreground-muted font-mono">@rn2116</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-line bg-surface hover:bg-surface-hover hover:border-foreground/40 transition-colors text-foreground group"
              aria-label="Kunjungi profil LinkedIn Muhammad Rafly"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-foreground-muted group-hover:text-foreground transition-colors" />
                <div>
                  <span className="font-mono text-xs text-foreground block font-bold">LINKEDIN</span>
                  <span className="text-xs text-foreground-muted font-mono">in/rn2116</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
