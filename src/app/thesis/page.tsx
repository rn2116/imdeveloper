import { Metadata } from "next";
import Link from "next/link";
import {
  thesisMeta,
  educationProfile,
  researchOverview,
  thesisDocument,
} from "@/data/thesis";
import {
  GmmClusters,
  CarLdrScatter,
  MembershipProbabilities,
  FuzzyBoundary,
  HardVsSoft,
} from "@/components/sections/thesis/Visualizations";
import { ArrowUpRight, ExternalLink, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `${thesisMeta.title} | Muhammad Rafly`,
  description:
    "Skripsi S1 Teknik Informatika Universitas Hasanuddin: penerapan Gaussian Mixture Model (GMM) untuk segmentasi pola kinerja keuangan Bank Himbara berdasarkan rasio CAR dan LDR. Tugas akhir oleh Muhammad Rafly, lulusan 2026.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafly.dev"}/thesis`,
  },
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafly.dev"}/thesis`,
    title: thesisMeta.titleEn,
    description:
      "Skripsi S1 Teknik Informatika Universitas Hasanuddin tentang aplikasi Gaussian Mixture Model (GMM) dalam segmentasi kinerja keuangan Bank Himbara.",
    siteName: "Muhammad Rafly Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: thesisMeta.titleEn,
    description:
      "Skripsi S1 Teknik Informatika Universitas Hasanuddin tentang aplikasi Gaussian Mixture Model (GMM) dalam segmentasi kinerja keuangan Bank Himbara.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ThesisPage() {
  return (
    <article className="min-h-screen bg-background text-foreground flex flex-col selection:bg-foreground selection:text-background">
      {/* Header */}
      <header className="border-b border-line py-6 sm:py-8 sticky top-0 z-40 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-foreground-muted hover:text-foreground transition-colors mb-3 block"
          >
            <ChevronLeft className="w-3 h-3" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-foreground-muted mb-4">
            <span className="font-bold text-foreground">THESIS // DETAIL</span>
            <span>•</span>
            <span>{thesisMeta.type}</span>
            <span>•</span>
            <span>{thesisMeta.year}</span>
            <span>•</span>
            <span>{educationProfile.department}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-sans leading-snug">
            {thesisMeta.title}
          </h1>

          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-sans mb-4 max-w-3xl italic">
            {thesisMeta.titleEn}
          </p>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-foreground-muted">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              <span>Pembimbing: {thesisMeta.supervisor}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              <span>{thesisMeta.institution}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
              <span>Tahun: {thesisMeta.year}</span>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-16 md:space-y-24">

          {/* 1. Research Overview */}
          <section id="research-overview" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Research Overview
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Latar Belakang Penelitian
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans mb-6 max-w-xl">
              {researchOverview.background.body}
            </p>
            <div className="bg-[#0E0E0E] border border-line p-5 sm:p-6 rounded">
              <p className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-2">
                Konteks
              </p>
              <p className="text-sm text-foreground muted leading-relaxed">
                Setiap entitas dalam kelompok Bank Himbara memiliki karakteristik
                solvabilitas dan likuiditas yang berbeda, sementara pendekatan hard
                clustering konvensional terbatas dalam menangani data keuangan yang
                saling tumpang tindih.
              </p>
            </div>
          </section>

          {/* 2. Research Problem */}
          <section id="research-problem" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Research Problem
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Permasalahan Penelitian
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="shrink-0 font-mono text-xs text-foreground-muted w-8">
                  01
                </span>
                <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                  Data keuangan perbankan menunjukkan pola yang saling overlapping,
                  sehingga penetapan klaster tunggal (hard assignment) kurang
                  merepresentasikan ketidakpastian kinerja.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 font-mono text-xs text-foreground-muted w-8">
                  02
                </span>
                <p className="text-sm text-foreground-muted leading-relaxed font-sans">
                  Rasio solvabilitas (CAR) dan likuiditas (LDR) perlu dipadangkan
                  dalam satu analisis segmentasi untuk menangkap risiko yang
                  berbeda antar entitas Bank Himbara.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Research Objective */}
          <section id="research-objective" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Research Objective
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Tujuan Penelitian
              </span>
            </div>
            <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans mb-6 max-w-xl">
              {researchOverview.objective.body}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 border border-line bg-[#0E0E0E] rounded">
                <p className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-2">
                  Objek penelitian
                </p>
                <ul className="text-xs text-foreground space-y-1 font-sans leading-relaxed" role="list">
                  {researchOverview.objective.banks.map((bank, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      <span>{bank}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border border-line bg-[#0E0E0E] rounded">
                <p className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-2">
                  Rasio yang digunakan
                </p>
                <ul className="text-xs text-foreground space-y-1 font-sans leading-relaxed" role="list">
                  {researchOverview.objective.ratios.map((ratio, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      <span>{ratio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <CarLdrScatter className="mt-8" />
            <p className="mt-4 text-[10px] font-mono text-foreground-muted text-center max-w-xs mx-auto">
              Ilustrasi konseptual posisi bank pada ruang CAR–LDR, bukan koordinat
              data asli dari penelitian.
            </p>
          </section>

          {/* 4. Dataset */}
          <section id="dataset" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Dataset
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Sumber Data Penelitian
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 border border-line bg-[#0E0E0E] rounded text-center">
                <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                  Tipe data
                </span>
                <span className="text-sm font-mono text-foreground font-bold">
                  {researchOverview.dataset.type}
                </span>
              </div>
              <div className="p-5 border border-line bg-[#0E0E0E] rounded text-center">
                <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                  Periode
                </span>
                <span className="text-sm font-mono text-foreground font-bold">
                  {researchOverview.dataset.period}
                </span>
              </div>
              <div className="p-5 border border-line bg-[#0E0E0E] rounded text-center">
                <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                  Observasi
                </span>
                <span className="text-sm font-mono text-foreground font-bold">
                  {researchOverview.dataset.observations}
                </span>
              </div>
            </div>
            <p className="mt-8 text-sm text-foreground-muted leading-relaxed font-sans max-w-xl">
              Dataset terdiri dari data panel triwulanan kelompok Bank Himbara
              (BRI, BNI, BTN, dan Bank Mandiri) selama periode 2015–2025, yang
              dikumpulkan untuk dianalisis menggunakan rasio Capital Adequacy
              Ratio (CAR) dan Loan to Deposit Ratio (LDR).
            </p>
          </section>

          {/* 5. Methodology */}
          <section id="methodology" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Methodology
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Metode Penelitian
              </span>
            </div>
            <div className="relative border-l border-line pl-4 sm:pl-6 space-y-8 md:space-y-10">
              {researchOverview.methodology.steps.map((step, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[6px] sm:left-[calc(50%-6px)] top-2 w-3 h-3 rounded-full bg-foreground border-2 border-surface group-hover:scale-110 transition-transform" />
                  <div className="p-4 sm:p-5 border border-line bg-[#0E0E0E] rounded-l sm:rounded-none">
                    <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider block mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-foreground muted leading-relaxed font-sans">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center justify-center">
              <GmmClusters />
            </div>
            <p className="mt-4 text-[10px] font-mono text-foreground-muted text-center max-w-xs mx-auto">
              Ilustrasi konseptual dua cluster GMM overlapping, bukan plot hasil
              clustering data asli.
            </p>
          </section>

          {/* 6. Key Findings */}
          <section id="key-findings" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Key Findings
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Hasil Penelitian Utama
              </span>
            </div>

            {/* Metrics strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-5 border border-line bg-[#0E0E0E] rounded text-center">
                <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                  Optimal cluster
                </span>
                <span className="text-sm font-mono text-foreground font-bold">
                  {researchOverview.results.optimalClusters}
                </span>
              </div>
              <div className="p-5 border border-line bg-[#0E0E0E] rounded text-center">
                <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                  BIC
                </span>
                <span className="text-sm font-mono text-foreground font-bold">
                  {researchOverview.results.bic}
                </span>
              </div>
              <div className="p-5 border border-line bg-[#0E0E0E] rounded text-center">
                <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                  Silhouette score
                </span>
                <span className="text-sm font-mono text-foreground font-bold">
                  {researchOverview.results.silhouette}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
              <div className="p-5 border border-line bg-[#0E0E0E] rounded">
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-3">
                  {researchOverview.results.clusterStable.name}
                </h3>
                <p className="text-sm text-foreground muted leading-relaxed font-sans mb-3">
                  {researchOverview.results.clusterStable.description}
                </p>
                <ul className="text-xs font-mono text-foreground-muted space-y-1" role="list">
                  {researchOverview.results.clusterStable.banks.map((bank, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                      <span>{bank}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-line/40">
                  <span className="block font-mono text-[10px] text-foreground-muted uppercase tracking-wider mb-1">
                    Rata-rata probabilitas keanggotaan
                  </span>
                  <span className="text-xs font-mono text-foreground font-bold">
                    {researchOverview.results.clusterStable.probability}
                  </span>
                </div>
              </div>
              <div className="p-5 border border-line bg-[#0E0E0E] rounded">
                <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-3">
                  {researchOverview.results.clusterRisk.name}
                </h3>
                <p className="text-sm text-foreground muted leading-relaxed font-sans mb-3">
                  {researchOverview.results.clusterRisk.description}
                </p>
                <div className="flex items-start gap-2 mb-3">
                  <span className="shrink-0 font-mono text-xs text-foreground-muted">Bank</span>
                  <span className="text-xs font-mono text-foreground font-bold">
                    {researchOverview.results.clusterRisk.bank}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="shrink-0 font-mono text-xs text-foreground-muted">Pemicu</span>
                  <span className="text-xs font-mono text-foreground">
                    {researchOverview.results.clusterRisk.reason}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-4">
                {researchOverview.results.fuzzyBoundary.title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <MembershipProbabilities className="mb-4" />
                  <ul className="text-xs font-mono text-foreground-muted space-y-1.5 max-w-sm" role="list">
                    {researchOverview.results.fuzzyBoundary.probabilities.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-foreground muted leading-relaxed font-sans mb-4">
                    Posisi historis {researchOverview.results.fuzzyBoundary.bank}
                    pada zona transisi antara kedua cluster, dengan probabilitas
                    keanggotaan yang terbagi hampir rata, mengindikasikan
                    ketidakpastian yang teridentifikasi oleh pendekatan soft
                    clustering.
                  </p>
                  <FuzzyBoundary className="mt-4" />
                </div>
              </div>
              <p className="mt-4 text-[10px] font-mono text-foreground-muted text-center max-w-xs mx-auto">
                Ilustrasi konseptual fuzzy boundary dan probabilitas keanggotaan,
                bukan output model asli.
              </p>
            </div>

            <div className="bg-[#0E0E0E] border border-line p-5 sm:p-6 rounded">
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-3">
                Keunggulan GMM
              </h3>
              <p className="text-sm text-foreground muted leading-relaxed font-sans">
                {researchOverview.results.gmmAdvantage}
              </p>
            </div>
          </section>

          {/* Hard vs Soft visualization */}
          <section className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                Konsep: Hard vs Soft Clustering
              </h2>
            </div>
            <HardVsSoft />
            <p className="mt-4 text-[10px] font-mono text-foreground-muted text-center max-w-xs mx-auto">
              Ilustrasi konseptual membandingkan penetapan klaster tunggal
              (hard) dengan probabilitas keanggotaan (soft), bukan hasil uji
              model.
            </p>
          </section>

          {/* 7. Conclusion */}
          <section id="conclusion" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Conclusion
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Kesimpulan Penelitian
              </span>
            </div>
            <div className="p-6 bg-[#0E0E0E] border border-line rounded-lg text-center">
              <p className="text-sm sm:text-base text-foreground leading-relaxed font-sans italic max-w-xl mx-auto mb-4">
                {researchOverview.conclusion.body}
              </p>
              <p className="text-xs font-mono text-foreground-muted">
                GMM terbukti menjadi pendekatan yang fleksibel dan efektif dalam
                memetakan dinamika serta ketidakpastian kinerja keuangan
                perbankan secara probabilistik.
              </p>
            </div>
          </section>

          {/* 8. Research Document */}
          <section id="research-document" className="border border-line bg-surface p-6 sm:p-8 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-bold">
                  Research Document
                </h2>
              </div>
              <span className="font-mono text-[10px] text-foreground-muted uppercase tracking-wider">
                Dokumen Skripsi
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-sm text-foreground muted leading-relaxed font-sans mb-8 max-w-lg">
                  Dokumen skripsi lengkap tersedia melalui Google Drive. Klik
                  tombol di bawah untuk membaca penelitian secara utas.
                </p>

                <a
                  href={thesisDocument.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
                  aria-label="Buka dokumen skripsi di Google Drive"
                >
                  {thesisDocument.label}
                  <ExternalLink className="w-4 h-4" />
                </a>

                <p className="mt-6 text-[10px] font-mono text-foreground-muted max-w-sm">
                  Dokumen dibuka di jendela baru (Google Drive). Jika tautan tidak
                  dapat diakses, silakan hubungi penulis melalui halaman Contact.
                </p>
              </div>

              <div className="p-6 border border-line bg-[#0E0E0E] rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 font-mono text-xs text-foreground-muted">
                      Judul
                    </div>
                    <p className="text-xs text-foreground font-sans leading-relaxed">
                      {thesisMeta.title}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 font-mono text-xs text-foreground-muted">
                      Pembimbing
                    </div>
                    <p className="text-xs text-foreground-muted">
                      {thesisMeta.supervisor}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 font-mono text-xs text-foreground-muted">
                      Institusi
                    </div>
                    <p className="text-xs text-foreground-muted">
                      {thesisMeta.institution}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 font-mono text-xs text-foreground-muted">
                      Tahun
                    </div>
                    <p className="text-xs text-foreground-muted">
                      {thesisMeta.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-line pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs font-mono text-foreground-muted">
                © {new Date().getFullYear()} Muhammad Rafly • Skripsi S1
                Teknik Informatika, Universitas Hasanuddin
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-line bg-surface hover:bg-surface-hover text-foreground font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Kembali ke Portofolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

        </div>
      </main>
    </article>
  );
}
