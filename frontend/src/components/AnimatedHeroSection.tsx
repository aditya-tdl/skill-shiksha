"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { FaReact, FaNodeJs, FaServer, FaGithub, FaCode } from "react-icons/fa";
import { SiJavascript, SiFlutter, SiMongodb, SiFigma } from "react-icons/si";
import { VscDebugAll } from "react-icons/vsc";

import { Button } from "@/components/ui/button";

const programs = [
    "MERN Stack",
    "Frontend",
    "Backend",
    "Flutter",
    "DevOps",
    "Manual Tester",
    "UI/UX Design",
    "Project Manager",
    "Manual Tester"
];

const FloatingIcon = ({ icon: Icon, className, glowColor, delay, duration }: { icon: any, className: string, glowColor: string, delay: number, duration: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: [0.95, 1.05, 0.95], y: ["-10px", "10px", "-10px"] }}
        transition={{
            opacity: { duration: 0.8, delay },
            scale: { repeat: Infinity, duration: duration * 1.2, ease: "easeInOut", delay },
            y: { repeat: Infinity, duration, ease: "easeInOut", delay }
        }}
        style={{
            boxShadow: `0 12px 32px -8px ${glowColor}60`
        }}
        className={`absolute flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 md:w-[72px] md:h-[72px] rounded-full 
            bg-white/40 dark:bg-white/5 backdrop-blur-xl 
            hover:scale-110 transition-all duration-300 z-20 ${className}`}
    >
        {/* Inner subtle glow matching the icon color */}
        <div
            className="absolute inset-0 rounded-full opacity-40 dark:opacity-20 mix-blend-plus-lighter pointer-events-none"
            style={{ background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent)` }}
        />

        {/* Light/Dark/Light/Dark Pattern Border (Glass Edge) */}
        <div
            className="absolute inset-0 rounded-full p-[1.5px] pointer-events-none"
            style={{
                background: 'conic-gradient(from 135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.8) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
            }}
        />

        {/* Inner shadow for 3D glass effect */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_8px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)] pointer-events-none" />

        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
    </motion.div>
);

const AnimatedHeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % programs.length);
        }, 2500); // Wait 2.5s before changing the word
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 bg-background">
            {/* Background Image Dotted Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}>
                </div>
                {/* Fade out at the bottom to merge with next section seamlessly */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
            </div>

            {/* Floating Tech Icons - Arranged clearly to the left and right, avoiding top-center */}
            {/* Left Side Group */}
            <FloatingIcon icon={FaReact} className="top-[9%] left-[18%] lg:top-[12%] lg:left-[10%] text-[#61DAFB]" glowColor="#61DAFB" delay={0.2} duration={4.2} />
            <FloatingIcon icon={FaNodeJs} className="top-[22%] left-[10%] lg:top-[35%] lg:left-[22%] text-[#339933]" glowColor="#339933" delay={0.5} duration={5.1} />
            <FloatingIcon icon={SiJavascript} className="top-[10%] left-[65%] lg:top-[55%] lg:left-[6%] text-[#F7DF1E]" glowColor="#F7DF1E" delay={0.8} duration={4.5} />
            <FloatingIcon icon={FaCode} className="bottom-[25%] left-[20%] lg:bottom-[25%] lg:left-[18%] text-indigo-500" glowColor="#6366f1" delay={0.4} duration={4.9} />
            <FloatingIcon icon={SiMongodb} className="bottom-[48%] left-[10%] lg:bottom-[8%] lg:left-[12%] text-[#47A248]" glowColor="#47A248" delay={0.7} duration={5} />

            {/* Right Side Group */}
            <FloatingIcon icon={SiFlutter} className="top-[25%] left-[80%] lg:left-auto lg:top-[15%] lg:right-[12%] text-[#02569B] dark:text-[#54C5F8]" glowColor="#54C5F8" delay={0.3} duration={5.5} />
            <FloatingIcon icon={FaServer} className="bottom-[25%] left-[80%] lg:bottom-auto lg:top-[38%] lg:left-auto lg:right-[22%] text-primary" glowColor="#a855f7" delay={0.6} duration={4.4} /> {/* DevOps */}
            <FloatingIcon icon={SiFigma} className="bottom-[45%] left-[80%] lg:bottom-auto lg:top-[60%] lg:left-auto lg:right-[8%] text-[#F24E1E]" glowColor="#F24E1E" delay={0.4} duration={4.6} />
            <FloatingIcon icon={FaGithub} className="bottom-[55%] left-[80%] lg:bottom-[25%] lg:left-auto lg:right-[18%] text-slate-800 dark:text-slate-200" glowColor="#94a3b8" delay={0.8} duration={5.2} />
            <FloatingIcon icon={VscDebugAll} className="bottom-[62%] left-[50%] lg:bottom-[10%] lg:left-auto lg:right-[28%] text-rose-400" glowColor="#fb7185" delay={0.9} duration={4.8} /> {/* Tester */}

            <div className="relative z-30 max-w-5xl mx-auto text-center pt-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-foreground tracking-wider mb-8">
                    <span className="block text-slate-800 dark:text-slate-200 mb-2">Master your skills in</span>
                    <span className="block text-slate-800 dark:text-slate-200 mb-2">Real Office Environment</span>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 md:mt-8">
                        <div className="relative inline-flex items-center justify-center w-full sm:w-auto mt-6">
                            {/* Decorative stars / sparks mimicking the reference image */}
                            <Sparkles className="absolute -top-4 -right-2 md:-top-6 md:-right-8 text-primary w-6 h-6 md:w-8 md:h-8 opacity-80 animate-pulse" />
                            <Sparkles className="absolute -bottom-3 -left-2 md:-bottom-5 md:-left-8 text-accent w-4 h-4 md:w-6 md:h-6 opacity-60 animate-pulse delay-150" />

                            <div className="relative px-6 py-2 md:px-10 md:py-4 border-2 md:border-[4px] border-primary/50 rounded-2xl md:rounded-3xl bg-background/50 shadow-inner overflow-hidden min-w-[200px] md:min-w-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="text-primary font-black"
                                    >
                                        {programs[index]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mt-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Turn your passion into a measurable career pipeline. Built for ambitious learners who want to build, scale, and ship real-world applications in our high-performance workspace.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                    <Link href="/apply" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full px-10 py-6 rounded-xl bg-primary text-primary-foreground text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/25">
                            Apply for Internship
                        </Button>
                    </Link>
                    <Link href="/programs" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full px-10 py-6 rounded-xl border border-border bg-background/50 hover:bg-accent/10 text-foreground text-lg font-bold transition-all backdrop-blur-sm">
                            View Curriculum
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AnimatedHeroSection;
