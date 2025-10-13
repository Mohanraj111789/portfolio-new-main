import { Footer } from "../Footer";
import { ThemeProvider } from "../ThemeProvider";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background flex flex-col justify-end">
        <Footer />
      </div>
    </ThemeProvider>
  );
}
