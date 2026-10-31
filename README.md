# Muhammad Rafly — Personal Portfolio Website

Website portofolio developer modern dengan filosofi desain **Monochrome + Editorial Minimalism + Kinetic Typography**. Dibangun menggunakan **Next.js 15 App Router**, **React 19**, **TypeScript**, dan **Tailwind CSS**.

---

## ✦ Filosofi & Identitas Visual

- **Palet Warna Monokrom**:
  - Background Utama: `#0A0A0A`
  - Permukaan Sekunder: `#151515`
  - Teks Utama: `#F5F5F5`
  - Teks Sekunder: `#A3A3A3`
  - Border Pemisah: `#303030`
- **Kinetic Typography**:
  - Efek reveal staggered letter pada display name di Hero section menggunakan keyframes CSS murni (GPU-accelerated `transform` & `opacity`).
  - Menghormati pengaturan aksesibilitas sistem pengguna (`prefers-reduced-motion`).
- **Performance & a11y First**:
  - Arsitektur Server Components secara default dengan batas Client Components terisolasi.
  - Zero Cumulative Layout Shift (CLS 0.000).
  - Rasio kontras teks tinggi memenuhi standar WCAG 2.2 Level AAA (18.4:1).
  - Dilengkapi *skip to content link* untuk navigasi ramah pembaca layar (screen reader) dan keyboard.

---

## ✦ Struktur Proyek

```
imdeveloper/
├── public/
│   ├── projects/
│   │   ├── kinetix.svg         # Preview grafis proyek Kinetix Design System
│   │   ├── devpulse.svg        # Preview grafis proyek DevPulse Telemetry
│   │   └── docucraft.svg       # Preview grafis proyek DocuCraft Studio
├── src/
│   ├── app/
│   │   ├── globals.css         # Variabel CSS monokrom, keyframe kinetic, dan reduced motion
│   │   ├── layout.tsx          # RootLayout, next/font, SEO metadata, JSON-LD schema
│   │   ├── page.tsx            # Halaman utama (Server Component assembly)
│   │   ├── not-found.tsx       # Halaman 404 custom monokrom
│   │   ├── robots.ts           # Konfigurasi robots.txt untuk crawler
│   │   └── sitemap.ts          # Generator sitemap.xml otomatis
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigasi sticky, active spy, & mobile drawer
│   │   │   └── Footer.tsx      # Footer editorial, back-to-top, & status
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Kinetic typography display & quick metadata
│   │   │   ├── About.tsx       # Narasi editorial & 4 prinsip rekayasa web
│   │   │   ├── TechStack.tsx   # Grid keahlian terkelompok & status penguasaan
│   │   │   ├── Projects.tsx    # Kartu proyek editorial & preview metrik
│   │   │   ├── Experience.tsx  # Timeline perjalanan & tonggak pembelajaran
│   │   │   └── Contact.tsx     # Direct email, copy button feedback, & tautan sosmed
│   │   └── ui/
│   │       ├── Icons.tsx       # Ikon SVG mandiri (GitHub, LinkedIn)
│   │       ├── ProjectModal.tsx# Dialog detail studi kasus & tantangan/solusi
│   │       └── SectionHeader.tsx# Header nomor bab editorial (01 // TITLE)
│   └── data/
│       ├── profile.ts          # Informasi profil, kontak, & ketersediaan kerja
│       ├── projects.ts         # Data proyek terstruktur (masalah, solusi, stack, metrik)
│       ├── skills.ts           # Daftar keahlian teknis terkelompok
│       └── experience.ts       # Rekam jejak & capaian nyata
├── tailwind.config.ts          # Desain token warna & animasi CSS kustom
├── postcss.config.mjs          # Konfigurasi PostCSS
├── tsconfig.json               # Konfigurasi TypeScript ketat
└── package.json
```

---

## ✦ Cara Menjalankan Proyek Secara Lokal

Pastikan Anda memiliki **Node.js** (v18.18+ atau v20+) dan **npm**.

1. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Jalankan pemeriksaan kode (Lint & Type Check)**:
   ```bash
   npm run lint
   ```

3. **Kompilasi build produksi**:
   ```bash
   npm run build
   ```

4. **Jalankan hasil build produksi**:
   ```bash
   npm run start
   ```

---

## ✦ Panduan Kustomisasi Data

Semua data portofolio telah dipisahkan dari komponen UI sehingga sangat mudah diperbarui:

1. **Mengubah Informasi Pribadi & Kontak**:
   Buka file [src/data/profile.ts](file:///home/rafly/Web%20Project/imdeveloper/src/data/profile.ts) dan sesuaikan nama, bio, email, serta link GitHub/LinkedIn.
2. **Menambah / Mengubah Proyek**:
   Buka file [src/data/projects.ts](file:///home/rafly/Web%20Project/imdeveloper/src/data/projects.ts). Anda dapat memperbarui deskripsi, tantangan, solusi, serta metrik performa masing-masing proyek.
3. **Mengubah Daftar Tech Stack**:
   Buka file [src/data/skills.ts](file:///home/rafly/Web%20Project/imdeveloper/src/data/skills.ts) untuk memperbarui kategori dan daftar teknologi yang dikuasai.
4. **Mengubah Pengalaman / Milestone**:
   Buka file [src/data/experience.ts](file:///home/rafly/Web%20Project/imdeveloper/src/data/experience.ts).
