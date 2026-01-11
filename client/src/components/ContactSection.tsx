import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com/Mohanraj111789",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://www.linkedin.com/in/mohanrajselvarasu/",
      color: "hover:text-blue-500",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mohantsk381@gmail.com",
      color: "hover:text-primary",
    },
  ];

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
    <section id="contact" className="py-24 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl lg:text-5xl font-bold text-center mb-8"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-5 gap-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-3">
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    rows={6}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 rounded-full"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="p-8 border-border/50 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl hover-elevate transition-all ${link.color}`}
                    data-testid={`link-social-${link.name.toLowerCase()}`}
                  >
                    <div className="p-3 bg-background/80 rounded-lg">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-muted-foreground">
                        @mohanraj
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
