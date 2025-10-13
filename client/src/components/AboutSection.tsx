import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <Card className="p-8 space-y-6 border-border/50 hover-elevate">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-muted-foreground">
                      B.Tech in Artificial Intelligence & Machine Learning
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      KIT – Kalaignar Karunanidhi Institute of Technology
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Coimbatore, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Age</h3>
                    <p className="text-muted-foreground">18 years</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Passionate Engineering Student
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm an enthusiastic engineering student passionate about
                Artificial Intelligence, Machine Learning, and Full-Stack Web
                Development. I enjoy building innovative solutions and exploring
                real-world applications of AI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in programming and a keen interest in
                emerging technologies, I constantly strive to learn and apply
                cutting-edge AI/ML techniques to solve complex problems. My goal
                is to create impactful solutions that bridge the gap between
                technology and real-world challenges.
              </p>
              <div className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">
                      Technologies Mastered
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
