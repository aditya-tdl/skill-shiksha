"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { apiFetch } from "@/lib/api";
import { GlobalLoader } from "@/components/ui/global-loader";

type Testimonial = {
  _id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await apiFetch("/testimonials");
        setTestimonials(data.data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-12 lg:py-20 relative overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Star className="w-5 h-5 text-primary fill-primary animate-pulse" />
            <span className="text-primary font-bold tracking-wider text-sm">
              50+ STUDENTS SECURED THE JOB AT SKILLSHIKSHA
            </span>
            <Star className="w-5 h-5 text-primary fill-primary animate-pulse" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Don't take our word for it — hear from our alumni who transformed their careers and are now working at top tech companies.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <GlobalLoader message="Loading testimonials..." />
          </div>
        ) : error ? (
          <div className="text-center text-destructive py-12">{error}</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            More success stories coming soon!
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group p-[1px] rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Animated Background Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/10 to-transparent dark:from-white/20 dark:via-slate-800/80 dark:to-black/60 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glassmorphic Inner Container */}
                <div className="relative h-full bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl px-8 py-10 rounded-3xl overflow-hidden z-10 border border-black/5 dark:border-white/5 flex flex-col">
                  {/* Inner glow effects */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

                  <Quote size={40} className="text-primary/20 dark:text-primary/40 mb-6 drop-shadow-sm" />

                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 flex-1 leading-relaxed relative z-20">
                    "{t.text}"
                  </p>

                  <div className="relative z-20 mt-auto pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={16} className="fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 text-white flex items-center justify-center font-black text-lg shadow-inner ring-2 ring-primary/20">
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-lg">{t.name}</div>
                        <div className="text-sm font-medium text-primary dark:text-primary/80">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
