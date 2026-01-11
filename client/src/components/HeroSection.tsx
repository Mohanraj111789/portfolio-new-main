import { motion } from "framer-motion";
import { ChevronDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background" />
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-purple-400 bg-clip-text text-transparent">
                Mohanraj S
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12"
          >
            <Typewriter
              options={{
                strings: [
                  "AI Enthusiast",
                  "Web Developer",
                  "Innovator",
                  "Problem Solver",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Engineering Student at KIT Coimbatore, passionate about Artificial
            Intelligence, Machine Learning, and Full-Stack Web Development
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full gap-2"
              data-testid="button-hire-me"
            >
              <Mail className="w-4 h-4" />
              Hire Me
            </Button>
   <Button
  size="lg"
  variant="outline"
  className="rounded-full gap-2"
  onClick={() => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Mohanraj S_Updated CV.pdf`;
    link.download = 'Mohanraj_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  <Download className="w-4 h-4" />
  Download CV
</Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover-elevate p-2 rounded-full"
            data-testid="button-scroll-down"
          >
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
