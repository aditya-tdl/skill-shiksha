"use client";

import { motion } from "framer-motion";
import { Clock, Users, IndianRupee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const programs = [
  {
    title: "Full-Stack MERN Internship",
    description: "Master MongoDB, Express, React & Node.js by building 3+ production apps.",
    duration: "3 Months",
    price: "₹15,000",
    seats: 12,
    seatsLeft: 4,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    popular: true,
  },
  {
    title: "React Frontend Internship",
    description: "Deep dive into React, TypeScript, state management & modern UI development.",
    duration: "2 Months",
    price: "₹15,000",
    seats: 15,
    seatsLeft: 7,
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    popular: false,
  },
  {
    title: "Backend & API Internship",
    description: "Build scalable APIs, work with databases, authentication & deployment.",
    duration: "2 Months",
    price: "₹15,000",
    seats: 10,
    seatsLeft: 3,
    tags: ["Node.js", "PostgreSQL", "REST", "Docker"],
    popular: false,
  },
];

const InternshipPrograms = () => {
  return (
    <section id="programs" className="py-8 lg:py-10 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Internship <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on, in-office training programs designed to make you job-ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 border glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${p.popular ? "border-primary/50" : "border-border/50"
                }`}
            >
              {p.popular && (
                <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/20">
                  Most Popular
                </Badge>
              )}
              <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-5 border-t border-border/50 pt-5">
                <span className="flex items-center gap-1"><Clock size={14} /> {p.duration}</span>
                <span className="flex items-center gap-1"><Users size={14} /> {p.seatsLeft} seats left</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold font-display">{p.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">/ EMI available</span>
                </div>
                <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1">
                  <Link href="/apply">
                    Apply <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipPrograms;
