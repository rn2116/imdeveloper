import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experienceData } from "@/data/experience";
import { Check } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience Section" className="py-20 md:py-28 border-b border-line">
      <SectionHeader
        number="04"
        title="Journey &amp; Milestones"
        subtitle="Continuous learning, practical exploration, and engineering growth."
      />

      <div className="relative border-l border-line ml-3 sm:ml-6 space-y-12">
        {experienceData.map((item, index) => (
          <div key={index} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-foreground group-hover:scale-125 transition-transform" />

            {/* Content Box */}
            <div className="border border-line bg-surface p-6 sm:p-8 hover:border-foreground/30 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-foreground-muted tracking-wider uppercase">
                  {item.period}
                </span>
                <span className="font-mono text-xs text-foreground-muted">
                  {item.organization}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
                {item.role}
              </h3>

              <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-sans mb-6">
                {item.description}
              </p>

              <div className="space-y-2 border-t border-line/60 pt-4">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-foreground-muted mb-2">
                  Key Learnings &amp; Milestones
                </span>
                {item.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                    <Check className="w-3.5 h-3.5 text-foreground-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
