import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillsData } from "@/data/skills";
import { Layers } from "lucide-react";

export function TechStack() {
  return (
    <section id="stack" aria-label="Tech Stack Section" className="py-20 md:py-28 border-b border-line">
      <SectionHeader
        number="02"
        title="Tech Stack &amp; Tools"
        subtitle="Deliberate tooling, disciplined execution."
      />

      <p className="text-foreground-muted max-w-2xl text-sm sm:text-base mb-12 -mt-6">
        Berikut adalah teknologi dan instrumen yang secara aktif saya gunakan dalam pengembangan antarmuka web.
        Fokus utama saya adalah keandalan, efisiensi eksekusi, serta kode yang mudah dirawat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="border border-line bg-surface p-6 sm:p-7 flex flex-col justify-between hover:border-foreground/40 transition-colors duration-200"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-line mb-4">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-foreground-muted" aria-hidden="true" />
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-foreground-muted">
                  {group.skills.length} TOOLS
                </span>
              </div>

              <p className="text-xs text-foreground-muted mb-6">
                {group.description}
              </p>

              {/* Skills List */}
              <ul className="space-y-3" role="list">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 border border-line/60 bg-[#0A0A0A] hover:border-line transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2 mb-1 sm:mb-0">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full" aria-hidden="true" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      {skill.focus && (
                        <span className="text-foreground-muted hidden sm:inline">
                          {skill.focus}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded border border-line bg-surface text-foreground-muted">
                        {skill.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
