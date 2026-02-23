"use client";

import { motion } from "framer-motion";
import { Quote, Award, Sparkles, BookOpen } from "lucide-react";
import Image from "next/image";

const FounderStory = () => {
    return (
        <section className="py-8 lg:py-10 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="section-container relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-border/50">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                alt="Founder of Skill Shiksha"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl border-white/10">
                                <h3 className="text-xl font-bold font-display text-muted-foreground italic">"Education is not just about learning facts, but training the mind to think."</h3>
                            </div>
                        </div>

                        {/* Decorative cards */}
                        <div className="absolute -top-6 -right-6 lg:-right-10 p-4 glass-card rounded-xl border border-border/50 shadow-xl animate-float z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-semibold">Experience</p>
                                    <p className="text-sm font-bold">12+ Years in Tech</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 lg:-left-10 p-4 glass-card rounded-xl border border-border/50 shadow-xl animate-float-delayed z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase font-semibold">Mission</p>
                                    <p className="text-sm font-bold">Empowering 10k Developers</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold mb-6">
                                <BookOpen size={14} />
                                <span>Founder's Journey</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display leading-[1.1] mb-6">
                                From a Humble Beginning to <span className="gradient-text">Empowering Thousands.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6 py-2">
                                "I started this journey with a simple realization: the gap between academic knowledge and industry demands was wider than ever. Skill Shiksha was born out of a passion to bridge that gap and create a platform where real learning happens."
                            </p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Our founder, with over a decade of experience in building scalable tech products, envisioned a space where students don't just learn codes but understand the architecture of solutions.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                <div className="p-4 rounded-2xl bg-secondary/30 border border-border/50 group hover:border-primary/50 transition-colors">
                                    <p className="font-bold text-primary mb-1">Our Vision</p>
                                    <p className="text-sm text-muted-foreground">To become India's leading hub for practical tech education.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-primary/5 border border-border/50 group hover:border-accent/50 transition-colors">
                                    <p className="font-bold text-accent mb-1">Our Values</p>
                                    <p className="text-sm text-muted-foreground">Integrity, Practicality, and Relentless Innovation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-primary/50" />
                                <div>
                                    <h4 className="text-xl font-bold font-display">Aditya Vardhan</h4>
                                    <p className="text-sm text-primary font-medium uppercase tracking-widest">CEO & Founder, Skill Shiksha</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FounderStory;
