import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";

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

const siteUrl = siteConfig.siteUrl;

/**
 * Metadata SEO untuk seluruh website.
 * Nilai domain diambil dari NEXT_PUBLIC_SITE_URL (environment variable)
 * sehingga mudah disesuaikan saat deployment ke Vercel tanpa mengubah kode.
 */
export const metadata: Metadata = {
  title: {
    template: "%s | Muhammad Rafly",
    default: "Muhammad Rafly — Frontend Developer Portfolio",
  },
  description:
    "Personal portfolio of Muhammad Rafly, a Frontend Developer focused on building modern, responsive, and performant web applications.",
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
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Muhammad Rafly — Frontend Developer Portfolio",
    description:
      "Building thoughtful digital experiences through kinetic craft and engineering precision.",
    siteName: "Muhammad Rafly Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Muhammad Rafly — Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafly — Frontend Developer Portfolio",
    description:
      "Building thoughtful digital experiences through kinetic craft and engineering precision.",
    images: ["/og-image.svg"],
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
  // Verifikasi Google Search Console (diisi via env GOOGLE_SITE_VERIFICATION)
  ...(siteConfig.googleSiteVerification && {
    verification: {
      google: siteConfig.googleSiteVerification,
    },
  }),
};

/**
 * Structured Data JSON-LD: Person dan WebSite.
 * Hanya berisi informasi yang benar-benar ditampilkan di website.
 * Tidak menambahkan pekerjaan, organisasi, alamat, atau penghargaan palsu.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Rafly",
  jobTitle: "Frontend Developer",
  url: siteUrl,
  sameAs: ["https://github.com/benarr", "https://linkedin.com/in/rn2116"],
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

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Rafly Portfolio",
  url: siteUrl,
  description:
    "Personal portfolio of Muhammad Rafly, a Frontend Developer focused on building modern, responsive, and performant web applications.",
  publisher: personJsonLd,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
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
