import { ProjectsSection } from "../ProjectsSection";
import { ThemeProvider } from "../ThemeProvider";

export default function ProjectsSectionExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <ProjectsSection />
      </div>
    </ThemeProvider>
  );
}
