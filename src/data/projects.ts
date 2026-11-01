export type ProjectSource = "local" | "github";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  source?: ProjectSource;
  slug?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "kinetix-ui",
    title: "Kinetix Design System",
    category: "Design System & UI Library",
    year: "2024",
    tagline: "High-performance typography-driven design system & UI tokens library",
    problem:
      "Banyak design system modern membebani browser dengan JavaScript runtime besar dan style generic yang mengorbankan performa first-render serta aksesibilitas kontras.",
    solution:
      "Membangun design system modular berbasis CSS custom properties murni tanpa JavaScript runtime, memanfaatkan fluid typography via clamp(), dan menguji kepatuhan kontras WCAG 2.2 Level AAA.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "CSS Custom Properties", "WCAG AAA"],
    image: "/projects/kinetix.svg",
    demoUrl: "https://github.com/rn2116/kinetix-design-system",
    repoUrl: "https://github.com/rn2116/kinetix-design-system",
    featured: true,
    source: "local",
    slug: "kinetix-ui",
    metrics: [
      { label: "Runtime JS", value: "0.0 KB" },
      { label: "Contrast Ratio", value: "18.4 : 1" },
      { label: "Performance Score", value: "100" },
    ],
  },
  {
    id: "devpulse-telemetry",
    title: "DevPulse Web Performance Telemetry",
    category: "Performance Engineering",
    year: "2024",
    tagline: "Real-time Core Web Vitals telemetry monitor & INP diagnostics",
    problem:
      "Developer kesulitan mendeteksi lonjakan latency interaksi (INP) dan pergeseran layout (CLS) secara langsung pada beragam tipe perangkat pengguna.",
    solution:
      "Mengembangkan dashboard telemetri berbasis Next.js App Router dengan visualisasi SVG native 60fps tanpa canvas besar, mengumpulkan metrik LCP, INP, dan CLS dengan latensi sub-frame.",
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "SVG Native Charts", "Performance API"],
    image: "/projects/devpulse.svg",
    demoUrl: "https://github.com/rn2116/devpulse-telemetry",
    repoUrl: "https://github.com/rn2116/devpulse-telemetry",
    featured: true,
    source: "local",
    slug: "devpulse-telemetry",
    metrics: [
      { label: "INP Latency", value: "< 24 ms" },
      { label: "Layout Shift", value: "0.000 CLS" },
      { label: "LCP", value: "0.82 s" },
    ],
  },
  {
    id: "docucraft-studio",
    title: "DocuCraft Markdown Studio",
    category: "Web Application",
    year: "2024",
    tagline: "Distraction-free editorial workspace with AST typesetting & instant export",
    problem:
      "Banyak aplikasi catatan dan editor markdown dijejali toolbar membingungkan, font yang tidak proporsional, serta loading lambat karena dependensi cloud.",
    solution:
      "Merancang editor lokal offline-first yang berfokus pada estetika tipografi editorial monokrom, parsing AST instan, navigasi keyboard-first, dan ekspor cepat tanpa distraksi.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Local Storage API", "Web Animations"],
    image: "/projects/docucraft.svg",
    demoUrl: "https://github.com/rn2116/docucraft-studio",
    repoUrl: "https://github.com/rn2116/docucraft-studio",
    featured: true,
    source: "local",
    slug: "docucraft-studio",
    metrics: [
      { label: "Load Time", value: "0.2s" },
      { label: "Offline First", value: "100%" },
      { label: "Dependencies", value: "Minimal" },
    ],
  },
];
