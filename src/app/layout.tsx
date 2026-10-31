import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rafly — Frontend Developer | Kinetic Typography & Web Performance",
  description:
    "Personal portfolio of Muhammad Rafly, a Frontend Developer crafting high-performance, accessible, and kinetic monochrome web experiences using Next.js and TypeScript.",
  keywords: [
    "Muhammad Rafly",
    "Frontend Developer",
    "Next.js Developer",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Performance",
    "Core Web Vitals",
    "Kinetic Typography",
    "Indonesia Developer",
  ],
  authors: [{ name: "Muhammad Rafly" }],
  creator: "Muhammad Rafly",
  metadataBase: new URL("https://rafly.dev"), // Canonical placeholder, mudah diubah saat deploy
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rafly.dev",
    title: "Muhammad Rafly — Frontend Developer",
    description:
      "Building thoughtful digital experiences through kinetic craft and engineering precision.",
    siteName: "Muhammad Rafly Portfolio",
    images: [
      {
        url: "/projects/kinetix.svg",
        width: 1200,
        height: 675,
        alt: "Muhammad Rafly — Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafly — Frontend Developer",
    description:
      "Building thoughtful digital experiences through kinetic craft and engineering precision.",
    images: ["/projects/kinetix.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Rafly",
    jobTitle: "Frontend Developer",
    url: "https://rafly.dev",
    sameAs: [
      "https://github.com/rn2116",
      "https://linkedin.com/in/rn2116",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Performance",
      "Web Accessibility",
      "Kinetic Typography",
    ],
  };

  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:font-mono focus:text-xs focus:uppercase focus:font-bold focus:shadow-lg"
        >
          Lewati ke Konten Utama
        </a>

        {children}
      </body>
    </html>
  );
}
