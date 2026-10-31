"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for backdrop blur and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = ["about", "stack", "projects", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-line py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#"
            className="group flex items-center gap-2 text-foreground font-mono font-bold tracking-tighter text-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            aria-label="Muhammad Rafly - Kembali ke atas"
          >
            <span className="w-2 h-2 bg-foreground rounded-full transition-transform duration-300 group-hover:scale-125" />
            <span>M. RAFLY</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                    isActive ? "text-foreground font-semibold" : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Availability Status & Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-surface text-xs font-mono text-foreground-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
              </span>
              <span>Available</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono uppercase tracking-wider bg-foreground text-background font-semibold hover:bg-neutral-200 transition-colors duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Tutup navigasi" : "Buka navigasi"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-[#0A0A0A] border-t border-line z-40 md:hidden flex flex-col justify-between p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <nav className="flex flex-col space-y-6 pt-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold tracking-tight text-foreground hover:text-foreground-muted transition-colors flex items-center justify-between border-b border-line pb-4"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-foreground-muted">
                  {link.href.replace("#", "").toUpperCase()}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-line space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-foreground-muted">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              <span>{profileData.availability.label}</span>
            </div>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="block w-full text-center py-3 text-sm font-mono uppercase tracking-wider bg-foreground text-background font-bold hover:bg-neutral-200 transition-colors"
            >
              {profileData.contact.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
