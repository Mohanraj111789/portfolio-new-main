import { ScrollToTop } from "../ScrollToTop";
import { ThemeProvider } from "../ThemeProvider";

export default function ScrollToTopExample() {
  return (
    <ThemeProvider>
      <div className="min-h-[200vh] bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Scroll down to see the button appear</p>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
