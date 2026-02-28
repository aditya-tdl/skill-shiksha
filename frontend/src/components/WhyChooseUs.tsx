"use client";

import { motion } from "framer-motion";
import { Building2, Code2, GraduationCap, Briefcase, Users } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "MNC Expert Sessions",
    description: "Weekly live sessions with Head Engineers from top MNCs for direct mentorship and industry insights.",
  },
  {
    icon: Building2,
    title: "Real Office Experience",
    description: "Work from our professional office space, just like a real job. No remote, no pre-recorded videos.",
  },
  {
    icon: Code2,
    title: "Live Client Projects",
    description: "Build production-grade applications for real startups and businesses during your internship.",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    description: "Learn directly from senior developers with 5+ years at top tech companies.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-8 lg:py-10 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Education That gets you hired
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Why Students <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not another online course. We bring you into our office and train you like a real employee.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-[1px] rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Animated Dark Border Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/10 to-transparent dark:from-white/20 dark:via-slate-800/80 dark:to-black/60 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl px-6 py-8 rounded-3xl overflow-hidden z-10 border border-black/5 dark:border-white/5">
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />

                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_4px_rgba(255,255,255,0.1)] relative z-20">
                  <f.icon size={28} className="text-primary group-hover:text-primary/80 dark:group-hover:text-white transition-colors drop-shadow-md" />
                </div>

                <h3 className="font-display text-slate-900 dark:text-white font-bold text-xl mb-3 relative z-20">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 relative z-20 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
