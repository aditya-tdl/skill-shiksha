"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs, FaServer } from "react-icons/fa";
import { SiJavascript, SiFlutter, SiMongodb } from "react-icons/si";
import { VscDebugAll } from "react-icons/vsc";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const FloatingIcon = ({ icon: Icon, className, delay, duration }: { icon: any, className: string, delay: number, duration: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.6, scale: 1, y: ["-15px", "15px", "-15px"] }}
    transition={{
      opacity: { delay, duration: 1 },
      scale: { delay, duration: 1 },
      y: { repeat: Infinity, duration, ease: "easeInOut" }
    }}
    className={`absolute hidden md:flex items-center justify-center p-3 rounded-2xl glass-card text-foreground/80 z-10 ${className}`}
  >
    <Icon className="w-8 h-8" />
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background z-10" />
        <Image
          src={heroImage}
          alt="Modern high-tech open office interior"
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
      </div>

      {/* Floating Tech Icons */}
      <FloatingIcon icon={FaReact} className="top-[25%] left-[10%] text-sky-400" delay={0.2} duration={4} />
      <FloatingIcon icon={FaNodeJs} className="top-[60%] left-[15%] text-green-500" delay={0.5} duration={5} />
      <FloatingIcon icon={SiJavascript} className="bottom-[20%] left-[25%] text-yellow-400" delay={0.8} duration={4.5} />

      <FloatingIcon icon={SiFlutter} className="top-[30%] right-[10%] text-cyan-400" delay={0.3} duration={5.5} />
      <FloatingIcon icon={FaServer} className="top-[65%] right-[18%] text-primary" delay={0.6} duration={4.2} /> {/* DevOps */}
      <FloatingIcon icon={VscDebugAll} className="bottom-[25%] right-[30%] text-rose-400" delay={0.9} duration={4.8} /> {/* Tester */}
      <FloatingIcon icon={SiMongodb} className="top-[15%] left-[50%] -translate-x-1/2 text-green-600" delay={0.7} duration={5} />

      <div className="relative z-20 max-w-4xl mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Admissions Open for 2026
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground drop-shadow-sm">
            Learn Real Skills in <br />
            <span className="text-primary">Real Office</span> Environment
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Stop watching tutorials. Start building production-grade software in our high-performance workspace with direct mentorship from Industry experts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-10 py-6 rounded-xl bg-primary text-primary-foreground text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/25">
                Apply for Internship
              </Button>
            </Link>
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full px-10 py-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:glass-card text-foreground text-lg font-bold transition-all">
                View Curriculum
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
