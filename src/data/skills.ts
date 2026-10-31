export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Advanced", "Familiar"
    focus?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Core",
    description: "Fondasi utama dalam membangun antarmuka web modern, cepat, dan semantik.",
    skills: [
      { name: "React & Next.js", level: "Proficient", focus: "App Router, Server Components" },
      { name: "TypeScript", level: "Proficient", focus: "Type Safety & Interfaces" },
      { name: "HTML5 & Semantic Web", level: "Advanced", focus: "Clean DOM & ARIA" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", focus: "Grid, Flexbox, Fluid Clamp" },
      { name: "Tailwind CSS", level: "Proficient", focus: "Design Tokens & Utility Architecture" },
    ],
  },
  {
    category: "Performance & Quality",
    description: "Teknik dan prinsip untuk menjaga aplikasi tetap ringan dan dapat diakses.",
    skills: [
      { name: "Core Web Vitals", level: "Proficient", focus: "LCP, INP, and CLS Optimization" },
      { name: "Web Accessibility (a11y)", level: "Proficient", focus: "WCAG 2.2 & Screen Reader Support" },
      { name: "Kinetic Typography", level: "Proficient", focus: "CSS Transforms & Easing Curves" },
      { name: "SEO Optimization", level: "Proficient", focus: "Metadata, OpenGraph & Microdata" },
    ],
  },
  {
    category: "Backend & Data Flow",
    description: "Konektivitas data dan arsitektur pengiriman konten web.",
    skills: [
      { name: "RESTful APIs", level: "Familiar", focus: "Data Fetching & Cache Handlers" },
      { name: "Node.js Environment", level: "Familiar", focus: "Tooling & Package Ecosystem" },
      { name: "Static Site Generation", level: "Proficient", focus: "Next.js Pre-rendering & Caching" },
    ],
  },
  {
    category: "Tooling & Workflow",
    description: "Alat pengembang untuk kolaborasi, versioning, dan deployment.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", focus: "Branching & Version Control" },
      { name: "VS Code / Modern IDEs", level: "Advanced", focus: "Productivity & Debugging" },
      { name: "Chrome DevTools", level: "Proficient", focus: "Lighthouse, Network, Performance Profiling" },
      { name: "Figma to Code", level: "Proficient", focus: "Pixel-accurate & Responsive Translation" },
    ],
  },
];
