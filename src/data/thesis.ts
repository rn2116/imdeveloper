/**
 * Data tesis skripsi S1 Teknik Informatika.
 * Semua informasi dihasilkan dari abstrak penelitian yang tersedia.
 * Tidak ada klaim akademik tambahan, dan tidak ada statistik yang diarang.
 */

export interface EducationProfile {
  name: string;
  degree: string;
  degreeEn: string;
  university: string;
  faculty: string;
  department: string;
  graduatedAt: string;
  graduatedAtEn: string;
}

export interface ThesisMeta {
  title: string;
  titleEn: string;
  supervisor: string;
  institution: string;
  year: string;
  type: string;
}

export interface ResearchOverview {
  background: {
    title: string;
    body: string;
  };
  objective: {
    title: string;
    body: string;
    banks: string[];
    ratios: string[];
  };
  dataset: {
    title: string;
    type: string;
    period: string;
    observations: string;
  };
  methodology: {
    title: string;
    steps: string[];
  };
  results: {
    title: string;
    optimalClusters: string;
    bic: string;
    silhouette: string;
    clusterStable: {
      name: string;
      description: string;
      banks: string[];
      probability: string;
    };
    clusterRisk: {
      name: string;
      description: string;
      bank: string;
      reason: string;
    };
    fuzzyBoundary: {
      title: string;
      bank: string;
      probabilities: string[];
      note: string;
    };
    gmmAdvantage: string;
  };
  conclusion: {
    title: string;
    body: string;
  };
}

export interface ThesisDocument {
  label: string;
  url: string;
}

export const educationProfile: EducationProfile = {
  name: "Muhammad Rafly",
  degree: "Sarjana Teknik Informatika (S1)",
  degreeEn: "Bachelor of Informatics Engineering (S1)",
  university: "Universitas Hasanuddin",
  faculty: "Fakultas Teknik",
  department: "Departemen Teknik Informatika",
  graduatedAt: "27 Agustus 2026",
  graduatedAtEn: "27 August 2026",
};

export const thesisMeta: ThesisMeta = {
  title:
    "Penerapan Gaussian Mixture Model (GMM) dalam Segmentasi Pola Kinerja Keuangan Kelompok Bank Himbara Berdasarkan Rasio Likuiditas dan Solvabilitas",
  titleEn:
    "Application of Gaussian Mixture Model (GMM) for Financial Performance Pattern Segmentation of the Himbara Bank Group Based on Liquidity and Solvency Ratios",
  supervisor: "Novy Nur R.A Mokobombang",
  institution:
    "Departemen Teknik Informatika, Fakultas Teknik, Universitas Hasanuddin",
  year: "2026",
  type: "Skripsi (S1)",
};

export const researchOverview: ResearchOverview = {
  background: {
    title: "Research Background",
    body:
      "Kelompok Bank Himbara memegang peran strategis dalam stabilitas perekonomian nasional, namun setiap entitas memiliki karakteristik solvabilitas dan likuiditas yang berbeda. Pendekatan hard clustering konvensional memiliki keterbatasan dalam menangani data keuangan yang saling tumpang tindih (overlapping).",
  },
  objective: {
    title: "Research Objective",
    body:
      "Menerapkan Gaussian Mixture Model (GMM) sebagai pendekatan soft clustering untuk melakukan segmentasi pola kinerja keuangan Bank Himbara berdasarkan rasio likuiditas dan solvabilitas.",
    banks: [
      "Bank Rakyat Indonesia (BRI)",
      "Bank Negara Indonesia (BNI)",
      "Bank Tabungan Negara (BTN)",
      "Bank Mandiri",
    ],
    ratios: ["Capital Adequacy Ratio (CAR)", "Loan to Deposit Ratio (LDR)"],
  },
  dataset: {
    title: "Dataset",
    type: "Data panel triwulanan",
    period: "2015–2025",
    observations: "176 observasi",
  },
  methodology: {
    title: "Methodology",
    steps: [
      "Data preprocessing",
      "Standardisasi Z-Score",
      "Penentuan jumlah komponen optimal menggunakan Bayesian Information Criterion (BIC)",
      "Pemodelan Gaussian Mixture Model",
      "Evaluasi pemisahan menggunakan Silhouette Score",
      "Analisis probabilitas keanggotaan cluster",
    ],
  },
  results: {
    title: "Key Findings",
    optimalClusters: "K = 2",
    bic: "943,92",
    silhouette: "0,5424",
    clusterStable: {
      name: "Cluster Stable",
      description:
        "Didominasi oleh BRI, BNI, dan Mandiri dengan rata-rata probabilitas keanggotaan mendekati 1,00, yang merepresentasikan permodalan kuat dan likuiditas terjaga.",
      banks: ["BRI", "BNI", "Bank Mandiri"],
      probability: "≈ 1,00",
    },
    clusterRisk: {
      name: "Cluster Risk",
      description:
        "Mengidentifikasi anomali pada Bank BTN akibat rasio LDR yang fluktuatif.",
      bank: "Bank BTN",
      reason: "Rasio LDR yang fluktuatif",
    },
    fuzzyBoundary: {
      title: "Fuzzy Boundary",
      bank: "Bank BTN",
      probabilities: ["47,19%", "52,81%"],
      note:
        "Posisi historis Bank BTN pada zona transisi antara kedua cluster, mengindikasikan ketidakpastian keanggotaan yang diidentifikasi oleh pendekatan soft clustering.",
    },
    gmmAdvantage:
      "Kemampuan mengidentifikasi ketidakpastian keanggotaan cluster secara probabilistik dibandingkan pendekatan hard clustering.",
  },
  conclusion: {
    title: "Conclusion",
    body:
      "GMM terbukti menjadi pendekatan yang fleksibel dan efektif dalam memetakan dinamika serta ketidakpastian kinerja keuangan perbankan secara probabilistik.",
  },
};

export const thesisDocument: ThesisDocument = {
  label: "Read Thesis",
  url:
    "https://drive.google.com/file/d/15qL41Qt3h6iQYyCEHOkHb8OKCLaA5_Sk/view?usp=sharing",
};
