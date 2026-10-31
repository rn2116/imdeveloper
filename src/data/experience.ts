export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 — Sekarang",
    role: "Independent Frontend Developer",
    organization: "Personal & Open Source Projects",
    description:
      "Membangun aplikasi web dan komponen UI modern dengan Next.js App Router, TypeScript, dan Tailwind CSS, berfokus pada efisiensi rendering dan aksesibilitas.",
    highlights: [
      "Mengembangkan portofolio dan proyek dengan arsitektur Server Components",
      "Menerapkan Core Web Vitals profiling dengan target 95+ di Lighthouse",
      "Merancang sistem tipografi responsif dan kinetic animation tanpa beban runtime JS",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Frontend Development Journey & Exploration",
    organization: "Self-Directed Learning & Practice",
    description:
      "Mendalami fondasi web modern secara komprehensif, mulai dari semantik HTML5, CSS layouting lanjutan, JavaScript ES6+, hingga ekosistem React.",
    highlights: [
      "Menyelesaikan berbagai studi kasus antarmuka responsif mobile-first",
      "Mempelajari standar aksesibilitas web (WCAG 2.1 & 2.2)",
      "Membangun alur kerja version control menggunakan Git dan GitHub",
    ],
  },
];
