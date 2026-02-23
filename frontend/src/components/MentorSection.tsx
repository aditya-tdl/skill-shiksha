"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const mentors = [
  {
    name: "Arjun Mehta",
    role: "Senior Full-Stack Developer",
    company: "Ex-Razorpay",
    experience: "6+ years",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Architect",
    company: "Ex-Flipkart",
    experience: "5+ years",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Backend Engineer",
    company: "Ex-Swiggy",
    experience: "7+ years",
    avatar: "RV",
  },
  {
    name: "Sneha Patel",
    role: "DevOps & Cloud Expert",
    company: "Ex-Freshworks",
    experience: "4+ years",
    avatar: "SP",
  },
];

const MentorSection = () => {
  return (
    <section id="mentors" className="py-8 lg:py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Learn from <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our mentors come from top tech companies and bring real-world expertise to every session.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-border/50 text-center glow-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold font-display bg-primary/20 text-primary">
                {m.avatar}
              </div>
              <h3 className="font-display font-bold text-lg">{m.name}</h3>
              <p className="text-sm text-primary mb-1">{m.company}</p>
              <p className="text-sm text-muted-foreground mb-1">{m.role}</p>
              <p className="text-xs text-muted-foreground mb-4">{m.experience}</p>
              <Linkedin
                size={18}
                className="mx-auto text-muted-foreground group-hover:text-primary transition-colors cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
