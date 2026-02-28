"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payments, admin dashboard & analytics.",
    tags: ["React", "Node.js", "Stripe"],
    type: "Client Project",
  },
  {
    title: "Healthcare SaaS",
    description: "Appointment booking system for a chain of clinics with 10K+ users.",
    tags: ["MERN", "Socket.io", "AWS"],
    type: "Startup App",
  },
  {
    title: "Social Learning App",
    description: "Community platform for peer learning with real-time chat & video.",
    tags: ["React", "Firebase", "WebRTC"],
    type: "Student Project",
  },
  {
    title: "Inventory Management",
    description: "ERP-lite system used by 3 small businesses for daily operations.",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
    type: "Client Project",
  },
];

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="py-12 lg:py-20 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Punchline Banner */}
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Rocket className="w-5 h-5 text-primary animate-bounce" />
            <span className="text-primary font-bold tracking-wider text-sm">
              OVER 50+ LIVE PROJECTS BUILT BY OUR STUDENTS
            </span>
            <Rocket className="w-5 h-5 text-primary animate-bounce" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black mb-6">
            Real <span className="gradient-text">Projects</span> Built by Interns
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Our interns don't just learn — they ship real production-grade products used by real users across the globe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group p-[1px] rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Animated Background Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/10 to-transparent dark:from-white/20 dark:via-slate-800/80 dark:to-black/60 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glassmorphic Inner Container */}
              <div className="relative h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl px-8 py-8 rounded-3xl overflow-hidden z-10 border border-black/5 dark:border-white/5 flex flex-col">
                {/* Inner glow effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

                <div className="relative z-20 flex items-center justify-between mb-6">
                  <span className="text-xs px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold border border-primary/20 shadow-sm">
                    {p.type}
                  </span>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-500 transition-colors cursor-pointer shadow-sm">
                      <Github size={18} className="transition-colors" />
                    </div>
                    <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-500 transition-colors cursor-pointer shadow-sm">
                      <ExternalLink size={18} className="transition-colors" />
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-slate-900 dark:text-white text-2xl font-black mb-3 relative z-20">
                  {p.title}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 mb-8 flex-1 leading-relaxed relative z-20">
                  {p.description}
                </p>

                <div className="relative z-20 flex gap-2 flex-wrap mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 font-medium tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
