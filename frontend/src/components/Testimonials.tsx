"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Gupta",
    role: "Now at TCS Digital",
    text: "The office internship experience was nothing like online courses. I built a real e-commerce platform and got placed within 2 weeks of completing.",
    rating: 5,
    avatar: "AG",
  },
  {
    name: "Meera Joshi",
    role: "Now at Infosys",
    text: "Working alongside mentors in their office completely changed my understanding of production code. The hands-on experience is invaluable.",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Vikram Singh",
    role: "Now at Wipro",
    text: "I tried many online courses but nothing clicked until I joined CodeCraft. The office environment and real deadlines made me a much better developer.",
    rating: 5,
    avatar: "VS",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-8 lg:py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't take our word for it — hear from our alumni who are now working at top companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-border/50 flex flex-col"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground mb-6 flex-1">{t.text}</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-display">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
