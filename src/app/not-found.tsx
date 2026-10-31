import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-6 sm:p-12 md:p-20 font-mono selection:bg-foreground selection:text-background">
      <div className="flex items-center justify-between border-b border-line pb-4 text-xs text-foreground-muted">
        <span>ERROR 404 // NOT FOUND</span>
        <span>MUHAMMAD RAFLY</span>
      </div>

      <div className="max-w-2xl my-auto py-12">
        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-foreground mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 font-sans">
          Halaman yang Anda tuju tidak ditemukan.
        </h2>
        <p className="text-sm text-foreground-muted leading-relaxed font-sans mb-8">
          Tautan mungkin telah berpindah, terhapus, atau URL yang dimasukkan salah.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-wider font-bold hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <div className="border-t border-line pt-4 text-xs text-foreground-muted">
        <span>© {new Date().getFullYear()} Muhammad Rafly • Frontend Developer</span>
      </div>
    </div>
  );
}
