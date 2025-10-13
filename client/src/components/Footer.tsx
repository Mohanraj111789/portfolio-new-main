import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-muted-foreground text-center flex items-center gap-2">
            © 2025 Mohanraj S | Designed & Developed with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
}
