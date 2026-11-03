import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profileData } from "@/data/profile";
import { educationProfile } from "@/data/thesis";
import { Code2, Gauge, Eye, Terminal, BookOpen } from "lucide-react";

const principles = [
  {
    icon: Code2,
    code: "01",
    title: "Code as Craft",
    description:
      "Struktur kode yang bersih, modular, dan terdokumentasi dengan baik sama pentingnya dengan visual antarmuka pengguna.",
  },
  {
    icon: Gauge,
    code: "02",
    title: "Performance First",
    description:
      "Aplikasi web harus cepat secara inheren. Menghindari pembengkakan JavaScript runtime dan memprioritaskan Core Web Vitals.",
  },
  {
    icon: Eye,
    code: "03",
    title: "Accessibility by Default",
    description:
      "Desain inklusif bukan fitur tambahan, melainkan keharusan: navigasi keyboard, kontras rasio tinggi, dan semantik HTML.",
  },
  {
    icon: Terminal,
    code: "04",
    title: "Kinetic Restraint",
    description:
      "Animasi harus memiliki tujuan fungsional untuk membimbing perhatian pengguna, bukan sekadar dekorasi yang membebani CPU.",
  },
];

export function About() {
  return (
    <section id="about" aria-label="About Section" className="py-20 md:py-28 border-b border-line">
      <SectionHeader
        number="01"
        title="About Me"
        subtitle="Crafting digital spaces where visual restraint, typography, and engineering rigor converge."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Editorial Narrative */}
        <div className="lg:col-span-7 space-y-6 text-foreground-muted text-base sm:text-lg leading-relaxed font-sans">
          {profileData.bio.map((paragraph, idx) => (
            <p key={idx} className="first-of-type:text-foreground first-of-type:font-normal">
              {paragraph}
            </p>
          ))}

          <p>
            Pendekatan saya bertumpu pada pemahaman mendalam terhadap platform web: memanfaatkan kapabilitas
            native browser, Server Components, CSS modern, serta pengoptimalan aset sebelum tergesa-gesa
            menambahkan library eksternal berukuran besar.
          </p>

          {/* Education Card */}
          <div className="mt-2 border border-line bg-surface p-5 sm:p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3 font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
              <BookOpen className="w-3 h-3" />
              <span>Education</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground mb-1 font-sans">
              {educationProfile.degree}
            </h3>
            <p className="text-sm text-foreground font-medium mb-1">
              {educationProfile.university}
            </p>
            <p className="text-xs font-mono text-foreground-muted">
              {educationProfile.faculty} • {educationProfile.department} •
              Lulusan: {educationProfile.graduatedAt}
            </p>
          </div>

          <div className="pt-4 border-t border-line/60 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <span className="text-foreground font-semibold block mb-1">CORE DISCIPLINE</span>
              <span className="text-foreground-muted">Frontend Architecture</span>
            </div>
            <div>
              <span className="text-foreground font-semibold block mb-1">DESIGN ETHOS</span>
              <span className="text-foreground-muted">Monochrome Editorial</span>
            </div>
            <div>
              <span className="text-foreground font-semibold block mb-1">EXPERIENCE TARGET</span>
              <span className="text-foreground-muted">Instant &amp; Accessible</span>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Guiding Principles Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="p-5 border border-line bg-surface hover:bg-surface-hover hover:border-foreground/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3 font-mono text-xs text-foreground-muted">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-foreground" aria-hidden="true" />
                    <span className="font-semibold text-foreground">{item.title}</span>
                  </div>
                  <span>{item.code}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
