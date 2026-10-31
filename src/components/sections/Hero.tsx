import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const firstName = "MUHAMMAD";
  const lastName = "RAFLY";

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 border-b border-line"
    >
      {/* Top Editorial Metadata Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-foreground-muted tracking-widest uppercase border-b border-line/60 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
          <span>PORTFOLIO // 2024</span>
        </div>
        <div>
          <span>LOCATION: {profileData.location.toUpperCase()} (UTC+8)</span>
        </div>
        <div className="hidden sm:block">
          <span>ROLE: {profileData.role.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Kinetic Typography Headline */}
      <div className="my-auto py-12 md:py-16">
        <div className="mb-4">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-foreground-muted px-2.5 py-1 border border-line bg-surface">
            {profileData.role}
          </span>
        </div>

        {/* Big Staggered Kinetic Headline */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-foreground leading-[0.92] select-none"
          aria-label={`${firstName} ${lastName}`}
        >
          {/* First Name with staggered letters */}
          <div className="block overflow-hidden pb-1 sm:pb-2">
            <span className="inline-flex">
              {firstName.split("").map((char, index) => (
                <span
                  key={`first-${index}`}
                  className="kinetic-char"
                  style={{
                    animationDelay: `${index * 45}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </div>

          {/* Last Name with staggered letters */}
          <div className="block overflow-hidden pb-1 sm:pb-2">
            <span className="inline-flex">
              {lastName.split("").map((char, index) => (
                <span
                  key={`last-${index}`}
                  className="kinetic-char"
                  style={{
                    animationDelay: `${360 + index * 45}ms`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </div>
        </h1>

        {/* Narrative Tagline */}
        <div className="mt-8 md:mt-10 max-w-2xl">
          <p
            className="text-lg sm:text-xl md:text-2xl text-foreground font-light leading-relaxed animate-fade-up"
            style={{ animationDelay: "700ms" }}
          >
            {profileData.tagline}
          </p>

          <p
            className="mt-4 text-sm sm:text-base text-foreground-muted leading-relaxed font-sans max-w-xl animate-fade-up"
            style={{ animationDelay: "850ms" }}
          >
            Menghadirkan antarmuka web modern dengan performa tinggi, tipografi editorial yang presisi,
            serta kepatuhan penuh pada standar aksesibilitas web.
          </p>
        </div>

        {/* Action CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "950ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-all duration-200"
          >
            <span>Lihat Karya Pilihan</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-4 h-4 text-foreground-muted" />
          </a>
        </div>
      </div>

      {/* Bottom Hero Engineering Specs Strip */}
      <div className="pt-6 border-t border-line/60 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
        <div>
          <span className="text-foreground-muted block mb-1">FOUNDATION</span>
          <span className="text-foreground font-medium">Next.js App Router</span>
        </div>
        <div>
          <span className="text-foreground-muted block mb-1">STYLING</span>
          <span className="text-foreground font-medium">Tailwind CSS + Tokens</span>
        </div>
        <div>
          <span className="text-foreground-muted block mb-1">CORE METRIC</span>
          <span className="text-foreground font-medium">0.000 CLS (Zero Shift)</span>
        </div>
        <div>
          <span className="text-foreground-muted block mb-1">STATUS</span>
          <span className="text-foreground font-medium">Open to Inquiries</span>
        </div>
      </div>
    </section>
  );
}
