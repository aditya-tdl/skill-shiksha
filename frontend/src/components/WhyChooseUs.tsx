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
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "Get interview prep, resume reviews, and direct referrals to our hiring partners.",
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
              className="glass-card rounded-2xl p-6 border border-border/50 glow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
