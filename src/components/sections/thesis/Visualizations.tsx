/**
 * Visualisasi konseptual untuk halaman detail tesis.
 * Semua gambar di bawah ini adalah ILUSTRASI KONSESEPTUAL yang dibantu
 * penyajian, bukan grafik empiris dari dataset asli penelitian.
 * Tidak ada data mentah yang diarang; semua digambar sebagai representasi
 * visual dari konsep GMM, fuzzy boundary, dan perbandingan hard vs soft
 * clustering berdasarkan deskripsi abstrak yang tersedia.
 */

interface VizProps {
  className?: string;
}

export function GmmClusters({ className = "" }: VizProps) {
  return (
    <svg
      role="img"
      aria-label="Ilustrasi konseptual: dua cluster GMM overlapping (Cluster Stable dan Cluster Risk)"
      viewBox="0 0 600 340"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto max-w-md ${className}`}
    >
      <defs>
        <radialGradient id="clusterAGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F5F5F5" stop-opacity="0.20" />
          <stop offset="100%" stop-color="#F5F5F5" stop-opacity="0.00" />
        </radialGradient>
        <radialGradient id="clusterBGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#A3A3A3" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#A3A3A3" stop-opacity="0.00" />
        </radialGradient>
        <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <rect width="600" height="340" fill="#0A0A0A" />

      {/* Overlap zone (drawn first, behind) */}
      <ellipse cx="220" cy="170" rx="130" ry="85" fill="#1A1A1A" opacity="0.6" />

      {/* Cluster A: Stable */}
      <ellipse cx="220" cy="150" rx="125" ry="80" fill="url(#clusterAGrad)" filter="url(#softBlur)" />
      <ellipse cx="220" cy="150" rx="90" ry="58" fill="none" stroke="#F5F5F5" stroke-width="1.5" stroke-opacity="0.6" stroke-dasharray="6 4" />
      <circle cx="220" cy="150" r="5" fill="#F5F5F5" />

      {/* Cluster B: Risk */}
      <ellipse cx="390" cy="190" rx="110" ry="75" fill="url(#clusterBGrad)" filter="url(#softBlur)" />
      <ellipse cx="390" cy="190" rx="78" ry="54" fill="none" stroke="#A3A3A3" stroke-width="1.5" stroke-opacity="0.55" stroke-dasharray="6 4" />
      <circle cx="390" cy="190" r="5" fill="#A3A3A3" />

      <g font-family="var(--font-geist-sans), sans-serif" text-anchor="middle" fill="#F5F5F5">
        <text x="220" y="134" font-size="13" font-weight="600" letter-spacing="0.05em">Cluster Stable</text>
        <text x="220" y="149" font-size="10" font-family="var(--font-geist-mono), monospace" fill="#A3A3A3" letter-spacing="0.02em">BRI • BNI • Mandiri</text>
        <text x="220" y="163" font-size="10" font-family="var(--font-geist-mono), monospace" fill="#A3A3A3" letter-spacing="0.02em">P ≈ 1,00</text>

        <text x="390" y="174" font-size="13" font-weight="600" letter-spacing="0.05em">Cluster Risk</text>
        <text x="390" y="189" font-size="10" font-family="var(--font-geist-mono), monospace" fill="#A3A3A3" letter-spacing="0.02em">BTN (LDR fluktuatif)</text>
      </g>

      {/* Fuzzy bridge between centers */}
      <path d="M270 165 Q300 170 340 175" fill="none" stroke="#F5F5F5" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="3 3" />
      <g fill="#F5F5F5" opacity="0.3">
        <circle cx="285" cy="167" r="2.5" />
        <circle cx="315" cy="171" r="2" />
        <circle cx="345" cy="174" r="2.5" />
      </g>

      <text x="300" y="320" font-size="10" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">
        Ilustrasi konseptual — overlapping soft cluster, bukan hasil empiris
      </text>
    </svg>
  );
}

export function CarLdrScatter({ className = "" }: VizProps) {
  return (
    <svg
      role="img"
      aria-label="Ilustrasi konseptual: hubungan CAR dan LDR, bank Himbara pada dua zona cluster"
      viewBox="0 0 600 340"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto max-w-md ${className}`}
    >
      <defs>
        <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <rect width="600" height="340" fill="#0A0A0A" />

      {/* Axes */}
      <g stroke="#1A1A1A" stroke-width="1">
        <line x1="50" y1="280" x2="550" y2="280" />
        <line x1="50" y1="280" x2="50" y2="60" />
      </g>
      <g font-size="10" fill="#A3A3A3" font-family="var(--font-geist-mono), monospace">
        <text x="50" y="295" text-anchor="start">CAR →</text>
        <text x="30" y="60" text-anchor="end">LDR →</text>
      </g>

      {/* Stable zone (high CAR, steady LDR) - left */}
      <path d="M90 90 L210 90 L230 250 L110 250 Z" fill="#F5F5F5" fill-opacity="0.04" />
      <text x="150" y="75" font-size="10" fill="#A3A3A3" font-family="var(--font-geist-mono), monospace" text-anchor="middle">Zona stabil</text>

      {/* Risk zone (fluctuating LDR) - right */}
      <path d="M390 90 L510 90 L510 250 L390 250 Z" fill="#A3A3A3" fill-opacity="0.04" />
      <text x="450" y="75" font-size="10" fill="#A3A3A3" font-family="var(--font-geist-mono), monospace" text-anchor="middle">Zona risiko</text>

      {/* Points: Stable banks (BRI, BNI, Mandiri) */}
      <g filter="url(#nodeGlow)">
        <circle cx="130" cy="140" r="5" fill="#F5F5F5" opacity="0.9" />
        <circle cx="150" cy="160" r="5" fill="#F5F5F5" opacity="0.85" />
        <circle cx="170" cy="130" r="5" fill="#F5F5F5" opacity="0.9" />
        <circle cx="140" cy="180" r="5" fill="#F5F5F5" opacity="0.8" />
      </g>
      <g font-size="9" fill="#F5F5F5" font-family="var(--font-geist-mono), monospace" text-anchor="middle">
        <text x="130" y="126">BRI</text>
        <text x="150" y="146">BNI</text>
        <text x="170" y="116">Mandiri</text>
      </g>

      {/* Point: BTN (risk, fluctuating) */}
      <circle cx="440" cy="200" r="6" fill="none" stroke="#A3A3A3" stroke-width="1.5" stroke-dasharray="4 2" />
      <circle cx="440" cy="200" r="3" fill="#A3A3A3" />
      <text x="440" y="186" font-size="9" fill="#A3A3A3" font-family="var(--font-geist-mono), monospace" text-anchor="middle">BTN</text>

      <text x="300" y="320" font-size="10" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">
        Ilustrasi konseptual — posisi representatif, bukan koordinat data asli
      </text>
    </svg>
  );
}

export function MembershipProbabilities({ className = "" }: VizProps) {
  return (
    <svg
      role="img"
      aria-label="Ilustrasi konseptual: probabilitas keanggotaan cluster Bank BTN 47,19% dan 52,81%"
      viewBox="0 0 600 300"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto max-w-md ${className}`}
    >
      <rect width="600" height="300" fill="#0A0A0A" />

      {/* Stable bank: near-certain membership */}
      <g>
        <circle cx="170" cy="150" r="60" fill="none" stroke="#F5F5F5" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="4 4" />
        <circle cx="170" cy="150" r="52" fill="none" stroke="#F5F5F5" stroke-width="3" stroke-dasharray="314 10" stroke-dashoffset="0" />
        <circle cx="170" cy="150" r="8" fill="#F5F5F5" />
        <text x="170" y="225" font-size="11" fill="#F5F5F5" font-family="var(--font-geist-sans), sans-serif" font-weight="600" text-anchor="middle">Stabil (BRI / BNI / Mandiri)</text>
        <text x="170" y="241" font-size="10" font-family="var(--font-geist-mono), monospace" fill="#A3A3A3" text-anchor="middle">P ≈ 1,00</text>
      </g>

      {/* BTN: fuzzy membership split */}
      <g>
        <circle cx="430" cy="150" r="60" fill="none" stroke="#A3A3A3" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="4 4" />
        {/* Arc 47.19% of 360 = 169.88 deg */}
        <path
          d="M430 90 A 60 60 0 0 1 490 150"
          fill="none"
          stroke="#F5F5F5"
          stroke-width="4"
          stroke-linecap="round"
        />
        {/* Arc 52.81% of 360 = 190.12 deg */}
        <path
          d="M490 150 A 60 60 0 0 1 370 150"
          fill="none"
          stroke="#A3A3A3"
          stroke-width="4"
          stroke-linecap="round"
        />
        <circle cx="430" cy="150" r="8" fill="#A3A3A3" />
        <text x="430" y="225" font-size="11" fill="#F5F5F5" font-family="var(--font-geist-sans), sans-serif" font-weight="600" text-anchor="middle">BTN — Fuzzy Boundary</text>
        <text x="430" y="241" font-size="10" font-family="var(--font-geist-mono), monospace" fill="#A3A3A3" text-anchor="middle">47,19% / 52,81%</text>
      </g>

      <g font-size="10" fill="#666666" font-family="var(--font-geist-mono), monospace">
        <text x="170" y="55" text-anchor="middle">Keanggotaan pasti (hard-like)</text>
        <text x="430" y="55" text-anchor="middle">Keanggotaan probabilistik (soft)</text>
      </g>

      <text x="300" y="285" font-size="10" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">
        Ilustrasi konseptual — proporsi visual, bukan output model asli
      </text>
    </svg>
  );
}

export function FuzzyBoundary({ className = "" }: VizProps) {
  return (
    <svg
      role="img"
      aria-label="Ilustrasi konseptual: zona transisi fuzzy boundary antara dua cluster"
      viewBox="0 0 600 260"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto max-w-md ${className}`}
    >
      <rect width="600" height="260" fill="#0A0A0A" />

      {/* Left cluster territory */}
      <rect x="0" y="0" width="290" height="260" fill="#0F0F0F" />
      {/* Right cluster territory */}
      <rect x="310" y="0" width="290" height="260" fill="#0F0F0F" />

      {/* Boundary line */}
      <line x1="300" y1="20" x2="300" y2="240" stroke="#F5F5F5" stroke-width="1" stroke-dasharray="5 5" />

      {/* Fuzzy gradient zone */}
      <linearGradient id="fuzzyGrad" x1="270" x2="330" y1="0" y2="0">
        <stop offset="0%" stop-color="#F5F5F5" stop-opacity="0.0" />
        <stop offset="50%" stop-color="#F5F5F5" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#F5F5F5" stop-opacity="0.0" />
      </linearGradient>
      <rect x="270" y="40" width="60" height="180" fill="url(#fuzzyGrad)" />

      <g fill="#F5F5F5" font-family="var(--font-geist-mono), monospace" font-size="10">
        <text x="145" y="30" text-anchor="middle">Cluster Stable</text>
        <text x="455" y="30" text-anchor="middle">Cluster Risk</text>
        <text x="300" y="130" text-anchor="middle">Zona transisi</text>
        <text x="300" y="144" font-size="9" fill="#A3A3A3" text-anchor="middle">BTN: 47,19% / 52,81%</text>
      </g>

      {/* Probability arrows into boundary */}
      <g stroke="#F5F5F5" stroke-width="1" stroke-opacity="0.5" marker-end="url(#arr)">
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0 0 L0 6 L6 3 Z" fill="#F5F5F5" />
          </marker>
        </defs>
        <line x1="250" y1="110" x2="280" y2="130" />
        <line x1="350" y1="150" x2="320" y2="130" />
      </g>

      <text x="300" y="245" font-size="10" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">
        Ilustrasi konseptual — zona ketidakpastian keanggotaan, bukan hasil empiris
      </text>
    </svg>
  );
}

export function HardVsSoft({ className = "" }: VizProps) {
  return (
    <svg
      role="img"
      aria-label="Ilustrasi konseptual: perbedaan hard clustering dan soft clustering"
      viewBox="0 0 600 300"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto max-w-md ${className}`}
    >
      <rect width="600" height="300" fill="#0A0A0A" />

      {/* Left panel: Hard Clustering */}
      <g>
        <rect x="20" y="40" width="260" height="220" fill="#0F0F0F" stroke="#1A1A1A" stroke-width="1" />
        <line x1="150" y1="50" x2="150" y2="250" stroke="#F5F5F5" stroke-width="1.5" stroke-dasharray="6 4" />
        <text x="150" y="25" font-size="11" fill="#F5F5F5" font-family="var(--font-geist-sans), sans-serif" font-weight="600" text-anchor="middle">Hard Clustering</text>
        <text x="150" y="39" font-size="9" fill="#A3A3A3" font-family="var(--font-geist-mono), monospace" text-anchor="middle">Satu label pasti per titik</text>
        {/* Points left */}
        <circle cx="90" cy="100" r="3" fill="#F5F5F5" opacity="0.9" />
        <circle cx="110" cy="130" r="3" fill="#F5F5F5" opacity="0.9" />
        <circle cx="70" cy="160" r="3" fill="#F5F5F5" opacity="0.9" />
        {/* Points right */}
        <circle cx="210" cy="120" r="3" fill="#A3A3A3" opacity="0.9" />
        <circle cx="230" cy="150" r="3" fill="#A3A3A3" opacity="0.9" />
        <circle cx="190" cy="180" r="3" fill="#A3A3A3" opacity="0.9" />
        {/* Border point forced */}
        <circle cx="150" cy="190" r="3" fill="#F5F5F5" stroke="#A3A3A3" stroke-width="1" />
        <text x="150" y="230" font-size="8" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">Dipaksa ke satu sisi</text>
      </g>

      {/* Right panel: Soft Clustering */}
      <g>
        <rect x="320" y="40" width="260" height="220" fill="#0F0F0F" stroke="#1A1A1A" stroke-width="1" />
        <ellipse cx="380" cy="140" rx="80" ry="60" fill="none" stroke="#F5F5F5" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="4 4" />
        <ellipse cx="500" cy="140" rx="80" ry="60" fill="none" stroke="#A3A3A3" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="4 4" />
        <text x="450" y="25" font-size="11" fill="#F5F5F5" font-family="var(--font-geist-sans), sans-serif" font-weight="600" text-anchor="middle">Soft Clustering (GMM)</text>
        <text x="450" y="39" font-size="9" fill="#A3A3A3" font-family="var(--font-geist-mono), monospace" text-anchor="middle">Probabilitas keanggotaan per cluster</text>
        {/* Gradient points */}
        <circle cx="360" cy="100" r="4" fill="#F5F5F5" opacity="1" />
        <circle cx="400" cy="130" r="4" fill="#F5F5F5" opacity="0.55" />
        <circle cx="440" cy="140" r="4" fill="#A3A3A3" opacity="0.5" />
        <circle cx="470" cy="160" r="4" fill="#A3A3A3" opacity="0.8" />
        <circle cx="490" cy="190" r="4" fill="#A3A3A3" opacity="1" />
        <text x="450" y="230" font-size="8" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">Opacity = probabilitas keanggotaan</text>
      </g>

      <text x="300" y="285" font-size="10" fill="#666666" font-family="var(--font-geist-mono), monospace" text-anchor="middle">
        Ilustrasi konseptual — pembanding konsep, bukan hasil uji model
      </text>
    </svg>
  );
}
