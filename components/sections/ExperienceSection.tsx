import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { StampBadge } from "@/components/notebook/StampBadge";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 border-b border-ink-border/80 dark:border-paper-dark-border/80">
      {/* Notebook Section Header & Page Marker */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-dashed border-ink-border dark:border-paper-dark-border text-xs font-mono text-ink-muted dark:text-ink-faint">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink-primary dark:text-ink-white">[ SECTION 02 ]</span>
          <span>// CHRONOLOGICAL EXPERIENCE LOG</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 02</span>
          <span className="opacity-40">•</span>
          <span className="font-handwritten text-sm">{portfolioData.experiences.length} engineering logs</span>
        </div>
      </div>

      <div className="space-y-10">
        {portfolioData.experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="group relative p-6 sm:p-7 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border shadow-xs hover:border-ink-muted dark:hover:border-paper-dark-border/80 transition-all duration-200"
          >
            {/* Header / Company & Role */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-dashed border-ink-border/60 dark:border-paper-dark-border/60">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-primary dark:text-ink-white">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <StampBadge variant="red" rotation="none" size="sm">
                      {exp.badge}
                    </StampBadge>
                  )}
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm font-mono text-ink-secondary dark:text-ink-white-muted flex-wrap">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-ink-primary dark:text-ink-white hover:underline underline-offset-4"
                  >
                    <span>{exp.company}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <span className="opacity-40">•</span>
                  <span>{exp.employmentType}</span>
                </div>
              </div>

              {/* Timeframe & Location */}
              <div className="sm:text-right font-mono text-xs text-ink-muted dark:text-ink-faint space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-paper-subtle dark:bg-paper-dark-subtle border border-ink-border/50 dark:border-paper-dark-border/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1 text-[11px] opacity-80">
                  <MapPin className="w-3 h-3" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary dark:text-ink-white-muted font-normal">
              {exp.description}
            </p>

            {/* Bullet Points */}
            <ul className="mt-4 space-y-2.5">
              {exp.bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary dark:text-ink-white-muted leading-relaxed">
                  <span className="text-ink-muted dark:text-ink-faint mt-1 shrink-0 font-mono text-xs">
                    ›
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="mt-6 pt-4 border-t border-ink-border/40 dark:border-paper-dark-border/40 flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono text-ink-muted uppercase mr-1">
                STACK:
              </span>
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-paper-subtle dark:bg-paper-dark-subtle border border-ink-border/60 dark:border-paper-dark-border/60 text-ink-secondary dark:text-ink-white-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
