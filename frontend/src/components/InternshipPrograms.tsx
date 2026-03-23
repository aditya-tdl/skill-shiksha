"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { apiFetch } from "@/lib/api";
import { GlobalLoader } from "@/components/ui/global-loader";

type Internship = {
  _id: string;
  title: string;
  description: string;
  badge: string;
  tags: string[];
  duration: string;
  totalSeats?: number;
  seatsLeft: number;
  price: number;
  emiAvailable: boolean;
};

const InternshipPrograms = () => {
  const [programs, setPrograms] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true);
        const data = await apiFetch("/internships");
        setPrograms(data.data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load internship programs");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

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

        {loading ? (
          <div className="flex justify-center py-12">
            <GlobalLoader message="Loading programs..." />
          </div>
        ) : error ? (
          <div className="text-center text-destructive py-12">{error}</div>
        ) : programs.length === 0 ? (
          <div className="text-center text-muted-foreground py-12">
            No internship programs available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-6 border glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${p.badge ? "border-primary/50" : "border-border/50"
                  }`}
              >
                {p.badge && (
                  <Badge className="w-fit mb-4 bg-primary/20 text-primary border-primary/30 hover:bg-primary/20">
                    {p.badge}
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
                  <span className="flex items-center gap-1"><Users size={14} /> {p.seatsLeft} seats</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    {/* <span className="text-2xl font-bold font-display">₹{p.price.toLocaleString()}</span>
                    {p.emiAvailable && (
                      <span className="text-xs text-muted-foreground ml-1">/ EMI available</span>
                    )} */}
                  </div>
                  <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-1">
                    <Link href={`/apply?program=${p._id}`}>
                      Apply <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipPrograms;
