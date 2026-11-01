import { siteConfig } from "@/data/config";

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  location: string;
  timezone: string;
  availability: {
    status: "available" | "busy";
    label: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    whatsapp: string | null;
  };
}

export const profileData: ProfileData = {
  name: "MUHAMMAD RAFLY",
  role: "Frontend Developer",
  tagline: "Building thoughtful digital experiences through kinetic craft and engineering precision.",
  bio: [
    "Saya adalah Frontend Developer yang berfokus pada pembangunan antarmuka web modern dengan standar performa tinggi, tipografi presisi, dan aksesibilitas menyeluruh.",
    "Bagi saya, kode adalah sebuah keahlian (craft). Setiap transisi, kontras warna, dan interaksi dirancang secara sengaja untuk memberikan pengalaman pengguna yang tenang, cepat, dan bermakna tanpa ornamen berlebih.",
  ],
  location: "Indonesia",
  timezone: "Asia/Jakarta (UTC+8)",
  availability: {
    status: "available",
    label: "Available for new projects & full-time roles",
  },
  contact: {
    email: "rncyber21@gmail.com",
    github: "https://github.com/rn2116",
    linkedin: "https://www.linkedin.com/in/muhammadrafly21",
    whatsapp: siteConfig.whatsappNumber ?? '628114532019'
  },
};
