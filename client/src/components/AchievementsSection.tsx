import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code, Lightbulb, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "Competitive Programming",
    description:
      "Active participant in coding competitions and hackathons. Solved 200+ problems on various platforms including LeetCode and HackerRank.",
    color: "text-yellow-500",
  },
  {
    icon: Code,
    title: "Hackathon Finalist",
    description:
      "Reached finals in multiple inter-college hackathons. Built innovative solutions addressing real-world problems using AI/ML.",
    color: "text-blue-500",
  },
  {
    icon: Lightbulb,
    title: "AI Project Recognition",
    description:
      "Developed AI-powered applications that received recognition from faculty and industry experts for innovation and practical impact.",
    color: "text-purple-500",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Consistently maintaining high academic performance while actively participating in technical clubs and workshops.",
    color: "text-green-500",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="achievements" className="py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Achievements & <span className="text-primary">Recognition</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              data-testid={`card-achievement-${index}`}
            >
              <Card className="p-6 border-border/50 hover-elevate h-full">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-background/80 rounded-xl ${achievement.color}`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
