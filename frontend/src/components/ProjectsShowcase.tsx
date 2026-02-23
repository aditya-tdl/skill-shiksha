"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
    <section id="projects" className="py-8 lg:py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Real <span className="gradient-text">Projects</span> Built by Interns
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our interns don't just learn — they ship real products used by real users.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-border/50 glow-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                  {p.type}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                  <ExternalLink size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
