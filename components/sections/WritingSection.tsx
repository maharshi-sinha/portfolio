import { portfolioData } from "@/data/portfolioData";
import { BookOpen, ExternalLink, Clock, Newspaper } from "lucide-react";

export function WritingSection() {
  return (
    <section id="writing" className="relative py-12 sm:py-16 border-b border-ink-border/80 dark:border-paper-dark-border/80">
      {/* Notebook Section Header & Page Marker */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-dashed border-ink-border dark:border-paper-dark-border text-xs font-mono text-ink-muted dark:text-ink-faint gap-1.5 sm:gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink-primary dark:text-ink-white">[ SECTION 05 ]</span>
          <span>// WRITINGS &amp; TECHNICAL DISPATCHES</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 05</span>
          <span className="opacity-40">•</span>
          <span className="font-handwritten text-sm">published on Hashnode</span>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {portfolioData.articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 sm:p-6 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border hover:border-ink-muted dark:hover:border-paper-dark-border/80 transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted dark:text-ink-faint pb-3 border-b border-dashed border-ink-border/50 dark:border-paper-dark-border/50">
                  <div className="flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span className="uppercase">{article.platform}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold tracking-tight text-ink-primary dark:text-ink-white group-hover:underline underline-offset-4 mt-3 leading-snug">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-ink-secondary dark:text-ink-white-muted leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-border/40 dark:border-paper-dark-border/40 flex items-center justify-between">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-paper-subtle dark:bg-paper-dark-subtle text-ink-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-ink-primary dark:text-ink-white group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All Writings on Hashnode */}
        <div className="p-4 rounded-md border border-dashed border-ink-border dark:border-paper-dark-border bg-paper-subtle/30 dark:bg-paper-dark-subtle/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-ink-muted" />
            <span className="text-ink-secondary dark:text-ink-white-muted">
              More guides, architectural musings, and mobile breakdowns on Hashnode.
            </span>
          </div>

          <a
            href={portfolioData.profile.socials.hashnode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-ink-primary dark:text-ink-white hover:underline underline-offset-4 shrink-0"
          >
            <span>Visit Hashnode Blog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
