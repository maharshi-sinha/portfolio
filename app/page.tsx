import { NotebookShell } from "@/components/notebook/NotebookShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <NotebookShell>
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <StackSection />
      <WritingSection />
      <ContactSection />
    </NotebookShell>
  );
}
