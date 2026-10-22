import { portfolioData } from "@/data/portfolioData";
import { StickyNote } from "@/components/notebook/StickyNote";
import { 
  Smartphone, 
  Code2, 
  Cpu, 
  Layers, 
  Globe, 
  Code, 
  FileCode2, 
  Palette, 
  Flame, 
  Server, 
  Binary, 
  Network, 
  GitBranch, 
  Send, 
  Figma, 
  Workflow,
  Cloud,
  Database,
  Box
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-4 h-4" />,
  Code2: <Code2 className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  FileCode2: <FileCode2 className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Binary: <Binary className="w-4 h-4" />,
  Network: <Network className="w-4 h-4" />,
  GitBranch: <GitBranch className="w-4 h-4" />,
  Send: <Send className="w-4 h-4" />,
  Figma: <Figma className="w-4 h-4" />,
  Workflow: <Workflow className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Box: <Box className="w-4 h-4" />,
};

export function StackSection() {
  return (
    <section id="stack" className="relative py-16 border-b border-ink-border/80 dark:border-paper-dark-border/80">
      {/* Notebook Section Header & Page Marker */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-dashed border-ink-border dark:border-paper-dark-border text-xs font-mono text-ink-muted dark:text-ink-faint">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink-primary dark:text-ink-white">[ SECTION 04 ]</span>
          <span>// TECHNICAL WORKBENCH & CRAFT</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PAGE 04</span>
          <span className="opacity-40">•</span>
          <span className="font-handwritten text-sm">tools of precision</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Stack Categories */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolioData.techCategories.map((category) => (
              <div
                key={category.title}
                className="p-5 rounded-md bg-paper-card dark:bg-paper-dark-elevated border border-ink-border dark:border-paper-dark-border shadow-xs space-y-3"
              >
                <div className="pb-2 border-b border-dashed border-ink-border/60 dark:border-paper-dark-border/60">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink-primary dark:text-ink-white">
                    {category.title}
                  </h3>
                  <p className="text-[11px] font-mono text-ink-muted dark:text-ink-faint">
                    {category.subtitle}
                  </p>
                </div>

                <div className="space-y-2.5">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-2 rounded bg-paper-subtle/50 dark:bg-paper-dark-subtle/40 border border-ink-border/40 dark:border-paper-dark-border/40 text-xs font-mono"
                    >
                      <div className="flex items-center gap-2 text-ink-primary dark:text-ink-white font-medium">
                        <span className="text-ink-muted">
                          {ICON_MAP[item.iconName] || <Code className="w-4 h-4" />}
                        </span>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-paper-card dark:bg-paper-dark border border-ink-border/50 text-ink-muted dark:text-ink-faint">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Engineering Rules & Sticky Note */}
        <div className="lg:col-span-4 space-y-6">
          <StickyNote title="CORE PRINCIPLES" rotation="left" className="w-full">
            <div className="space-y-2 text-stone-800 dark:text-stone-100 text-sm">
              <p className="font-semibold text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">
                How I write software:
              </p>
              <ul className="space-y-1.5 text-xs font-mono leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span>1.</span>
                  <span><strong>Modularity first:</strong> Isolate UI state from business domain logic.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>2.</span>
                  <span><strong>60 FPS standard:</strong> Eliminate unnecessary widget rebuilds.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>3.</span>
                  <span><strong>Predictable errors:</strong> Offline fallbacks &amp; graceful degradation.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span>4.</span>
                  <span><strong>Subtle aesthetics:</strong> Restraint is more impactful than loudness.</span>
                </li>
              </ul>
            </div>
          </StickyNote>

          {/* Quick specs box */}
          <div className="p-4 rounded-md border border-dashed border-ink-border dark:border-paper-dark-border bg-paper-subtle/30 dark:bg-paper-dark-subtle/20 font-mono text-xs text-ink-muted space-y-2">
            <span className="text-[10px] uppercase tracking-wider font-semibold block text-ink-primary dark:text-ink-white">
              DAILY DRIVER SPECS
            </span>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>IDE:</span>
                <span className="text-ink-secondary dark:text-ink-white-muted">VS Code &amp; Android Studio</span>
              </div>
              <div className="flex justify-between">
                <span>Terminal:</span>
                <span className="text-ink-secondary dark:text-ink-white-muted">Zsh + Starship</span>
              </div>
              <div className="flex justify-between">
                <span>VCS:</span>
                <span className="text-ink-secondary dark:text-ink-white-muted">Git CLI / Conventional Commits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
