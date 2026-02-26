"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, Users, Calendar, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-8 sm:pt-0 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="section-container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
              <MapPin size={14} />
              <span>Offline Internship · In-Office Training</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn Real Skills in{" "}
              <span className="gradient-text">Real Office Environment</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-lg">
              Join our hands-on internship programs. Work on live projects, learn from industry mentors, and launch your tech career — all from our modern office.
            </p>

            <div className="mb-8 p-3 rounded-lg bg-accent/5 border border-accent/20 border-l-4 border-l-accent max-w-lg">
              <p className="text-sm font-medium text-foreground">
                <span className="text-accent font-bold">Offer:</span> Begin your upskilling Journey with one <span className="bg-accent/10 px-1.5 py-0.5 rounded text-accent">Free Session</span>
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/apply">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base gap-2 w-full sm:w-auto">
                  Apply Now <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="#career-quiz">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/50 text-primary hover:bg-primary/5 w-full sm:w-auto gap-2">
                  <Sparkles size={18} /> Take Career Quiz
                </Button>
              </Link>
            </div>

            <div className="flex gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <span>500+ Alumni</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                <span>Next Batch: Mar 2026</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl relative w-full aspect-video">
              <Image
                src={heroImage}
                alt="Students working in our modern tech office"
                fill
                className="object-cover"
                priority
                placeholder="blur"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 border border-border/50 animate-float">
              <div className="text-2xl font-bold font-display gradient-text">93%</div>
              <div className="text-xs text-muted-foreground">Placement Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
