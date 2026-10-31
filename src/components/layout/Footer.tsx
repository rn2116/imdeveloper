"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-line font-mono text-xs text-foreground-muted" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-line/60">
          <div>
            <div className="flex items-center gap-2 text-foreground font-bold text-sm tracking-tight mb-1">
              <span className="w-2 h-2 bg-foreground rounded-full" />
              <span>MUHAMMAD RAFLY</span>
            </div>
            <p className="text-foreground-muted text-[11px]">
              Frontend Developer • Kinetic Typography &amp; Web Performance
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-line bg-surface hover:bg-surface-hover text-foreground transition-colors self-start sm:self-auto"
            aria-label="Kembali ke bagian atas halaman"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px]">
          <div>
            <p>© {new Date().getFullYear()} Muhammad Rafly. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GITHUB
            </a>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-foreground transition-colors"
            >
              EMAIL
            </a>
          </div>

          <div className="text-foreground-muted/80">
            <span>BUILT WITH NEXT.JS 15 &amp; TAILWIND CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
