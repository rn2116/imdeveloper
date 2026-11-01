import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/data/config";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Tombol WhatsApp Click to Chat.
 * Membuka percakapan WhatsApp dengan pesan yang sudah diisi otomatis.
 * Pengunjung tetap harus menekan tombol Kirim sendiri di WhatsApp.
 *
 * Jika NEXT_PUBLIC_WHATSAPP_NUMBER tidak tersedia, tombol tidak dirender
 * (tidak menampilkan nomor palsu atau placeholder yang menyesatkan).
 */
export function WhatsAppButton({
  label = "Hubungi via WhatsApp",
  className = "",
  text,
  size = "md",
}: WhatsAppButtonProps) {
  const whatsappUrl = buildWhatsAppUrl(siteConfig.whatsappNumber, text);

  // Jika nomor WhatsApp belum dikonfigurasi, jangan render tombol palsu.
  if (!whatsappUrl) {
    return null;
  }

  const sizeClasses = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-4 py-2 text-xs",
    lg: "px-6 py-3 text-sm",
  }[size];

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 ${sizeClasses} font-mono uppercase tracking-wider font-bold bg-foreground text-background hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      aria-label={label}
      role="link"
    >
      <MessageCircle className={size === "lg" ? "w-4 h-4" : "w-3.5 h-3.5"} aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
