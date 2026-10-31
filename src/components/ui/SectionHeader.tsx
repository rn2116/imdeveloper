import React from "react";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ number, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 border-b border-line pb-6 ${className}`}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground-muted mb-3">
        <span>{number}</span>
        <span className="w-8 h-[1px] bg-line" aria-hidden="true" />
        <span>{title}</span>
      </div>
      {subtitle && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl leading-snug">
          {subtitle}
        </h2>
      )}
    </div>
  );
}
