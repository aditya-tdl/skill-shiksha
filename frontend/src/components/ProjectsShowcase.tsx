"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Rocket, Monitor, Smartphone } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const CATEGORIES = ["Website Platforms", "Mobile Applications"];

const projects = [
  // Website Platforms
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with payments, admin dashboard & analytics.",
    tags: ["React", "Node.js", "Stripe"],
    type: "Client Project",
    category: "Website Platforms",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare SaaS",
    description: "Appointment booking system for a chain of clinics with 10K+ users.",
    tags: ["MERN", "Socket.io", "AWS"],
    type: "Startup App",
    category: "Website Platforms",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time metrics tracking platform with customizable charting and reports.",
    tags: ["Next.js", "Tailwind CSS", "Recharts"],
    type: "Client Project",
    category: "Website Platforms",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Content Generator",
    description: "Web application that creates SEO-optimized blog posts using LLM APIs.",
    tags: ["Vue.js", "Node.js", "GPT-4"],
    type: "Student Project",
    category: "Website Platforms",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  // Mobile Applications
  {
    title: "AI Resume Analyzer",
    description: "Intelligent platform that scores resumes against job descriptions using NLP.",
    tags: ["React Native", "Python API", "OpenAI"],
    type: "Student Project",
    category: "Mobile Applications",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Social Learning App",
    description: "Community platform for peer learning with real-time chat & video.",
    tags: ["React Native", "Firebase", "WebRTC"],
    type: "Student Project",
    category: "Mobile Applications",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Inventory Management",
    description: "ERP-lite system used by 3 small businesses for daily operations.",
    tags: ["Flutter", "PostgreSQL", "Docker"],
    type: "Client Project",
    category: "Mobile Applications",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  // Mobile Applications (Native iOS)
  {
    title: "Fitness Tracker Pro",
    description: "Advanced workout logger with health kit integration and AI insights.",
    tags: ["Swift", "CoreData", "HealthKit"],
    type: "Client Project",
    category: "Mobile Applications",
    image: "https://images.unsplash.com/photo-1526506159805-3c593f65333d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Finance Dashboard UI",
    description: "Beautiful budgeting application showcasing fluid Apple-like animations.",
    tags: ["SwiftUI", "Combine", "Charts"],
    type: "Startup App",
    category: "Mobile Applications",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a6a38b4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);

  const filteredProjects = projects.filter(p => p.category === activeTab);

  const getIconForCategory = (cat: string) => {
    switch (cat) {
      case "Website Platforms": return <Monitor className="w-5 h-5 sm:mr-2" />;
      case "Mobile Applications": return <Smartphone className="w-5 h-5 sm:mr-2" />;
      default: return null;
    }
  };

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
          className="text-center mb-12 sm:mb-16"
        >
          {/* Punchline Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center sm:space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6 shadow-sm">
            <span className="flex items-center">
              <Rocket className="w-5 h-5 text-primary animate-bounce mr-2 sm:mr-0" />
              <span className="text-primary font-bold tracking-wider text-xs md:text-sm mx-2 text-center">
                OVER 50+ LIVE PROJECTS BUILT BY OUR STUDENTS
              </span>
              <Rocket className="w-5 h-5 text-primary animate-bounce ml-2 sm:ml-0 hidden sm:block" />
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black mb-6">
            Real <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Projects</span> Built by Interns
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Our interns don't just learn — they ship real production-grade products used by real users across the globe.
          </p>
        </motion.div>

        {/* Tabs Grid/Flex */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 lg:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 overflow-hidden ${activeTab === cat
                ? 'text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent dark:border-transparent hover:border-slate-200 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-sm'
                }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full shadow-lg shadow-primary/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex flex-col sm:flex-row items-center gap-1 sm:gap-0">
                {getIconForCategory(cat)}
                <span>{cat}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                key={p.title}
                className="relative group p-[1px] rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500"
              >
                {/* Animated Background Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/10 to-transparent dark:from-white/20 dark:via-slate-700/80 dark:to-black/60 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphic Inner Container */}
                <div className="relative h-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2rem] overflow-hidden z-10 border border-black/5 dark:border-white/5 flex flex-col shadow-xl shadow-black/5 dark:shadow-none group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500">
                  {/* Inner glow effects */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />

                  {/* Image Cover */}
                  <div className="relative w-full h-56 overflow-hidden border-b border-black/5 dark:border-white/5">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Top Right Badges overlaid on image */}
                    {/* <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <div className="p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-md opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all cursor-pointer shadow-md">
                        <Github size={16} />
                      </div>
                      <div className="p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-md opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all cursor-pointer shadow-md" style={{ transitionDelay: '50ms' }}>
                        <ExternalLink size={16} />
                      </div>
                    </div> */}

                    <span className="absolute bottom-4 left-6 text-[10px] px-3 py-1 rounded-full bg-black/40 text-white font-bold backdrop-blur-md border border-white/20">
                      {p.type}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="font-display text-slate-900 dark:text-white text-2xl font-black mb-3 relative z-20 group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 flex-1 leading-relaxed relative z-20 line-clamp-2">
                      {p.description}
                    </p>

                    <div className="relative z-20 flex gap-2 flex-wrap mt-auto pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-3 py-1 rounded-lg bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-semibold tracking-wide shadow-sm backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
