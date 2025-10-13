import { AchievementsSection } from "../AchievementsSection";
import { ThemeProvider } from "../ThemeProvider";

export default function AchievementsSectionExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <AchievementsSection />
      </div>
    </ThemeProvider>
  );
}
