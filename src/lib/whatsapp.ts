/**
 * Helper untuk membangun URL WhatsApp Click to Chat resmi.
 *
 * Format: https://wa.me/PHONE_NUMBER?text=ENCODED_MESSAGE
 *
 * Ketentuan yang diikuti:
 * - Nomor menggunakan format internasional (Indonesia diawali 62, tanpa nol di depan).
 * - Pesan di-encode dengan encodeURIComponent().
 * - Tidak ada klaim bahwa pesan sudah terkirim (pengunjung tetap menekan Kirim sendiri).
 */

const DEFAULT_MESSAGE =
  "Halo Rafly, saya mengunjungi website portofolio kamu. Saya tertarik untuk berdiskusi mengenai peluang kerja sama. Apakah kita bisa berbicara lebih lanjut?";

/**
 * Membersihkan nomor telepon: hanya menyisakan digit, menghapus tanda +
 * di awal, dan memastikan tidak ada nol leading setelah kode negara.
 */
function cleanPhoneNumber(raw: string): string {
  return raw.replace(/^\+/, "").replace(/\D/g, "");
}

/**
 * Memastikan nomor Indonesia tidak diawali 0 setelah kode negara 62.
 * Contoh: "6208123456789" -> "628123456789"
 */
function normalizeIndonesianNumber(number: string): string {
  if (number.startsWith("62") && number.length > 2 && number[2] === "0") {
    return "62" + number.slice(3);
  }
  return number;
}

/**
 * Membangun URL WhatsApp Click to Chat.
 *
 * @param phoneNumber Nomor telepon dalam format internasional (contoh: 628123456789)
 * @param text Pesan yang akan diisi otomatis (opsional, default digunakan jika kosong)
 * @returns URL lengkap yang sudah di-encode, atau null jika nomor tidak valid
 */
export function buildWhatsAppUrl(
  phoneNumber: string | null,
  text?: string
): string | null {
  if (!phoneNumber) {
    return null;
  }

  const cleaned = cleanPhoneNumber(phoneNumber);
  const normalized = normalizeIndonesianNumber(cleaned);

  // Validasi sederhana: nomor minimal 8 digit setelah dibersihkan
  if (!/^\d{8,}$/.test(normalized)) {
    return null;
  }

  const message = text ?? DEFAULT_MESSAGE;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${normalized}?text=${encodedMessage}`;
}

/**
 * Pesan default yang akan diisi otomatis di WhatsApp.
 * Dapat dioverride saat memanggil buildWhatsAppUrl.
 */
export { DEFAULT_MESSAGE };
