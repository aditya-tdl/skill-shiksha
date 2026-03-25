import { MapPin, Phone, Mail, Building, Users, Target, Rocket } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="section-container">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                        <Building size={12} /> Our Story
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Transforming Careers Through <span className="text-primary italic">Real-World</span> Learning
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        Skill Shiksha is India's premier offline training institute for aspiring developers. We bridge the gap between academic knowledge and industry expectations.
                    </p>
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="p-10 rounded-3xl bg-muted/30 border border-border/50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-primary/10" />
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
                        <p className="text-muted-foreground leading-relaxed relative z-10 text-lg">
                            To empower students with practical, industry-relevant skills that make them job-ready from day one. We believe in learning by doing, prioritizing hands-on experience over theoretical lectures.
                        </p>
                    </div>

                    <div className="p-10 rounded-3xl bg-muted/30 border border-border/50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-blue-500/10" />
                        <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                            <Rocket size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
                        <p className="text-muted-foreground leading-relaxed relative z-10 text-lg">
                            To become the leading catalyst for technological innovation by nurturing the next generation of top-tier software engineers, designers, and tech leaders in India.
                        </p>
                    </div>
                </div>

                {/* Why We Started */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/10">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Students collaborating"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why We Started</h2>
                        <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We observed a massive disconnect between what universities teach and what modern tech companies actually need. Millions of students graduate every year, yet companies struggle to find candidates who can build robust, production-ready applications.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Skill Shiksha was born out of this necessity. We discarded the traditional classroom model in favor of an immersive "agency-style" environment where students work on live projects, collaborate with peers, and are mentored by industry veterans.
                        </p>
                    </div>
                </div>

                {/* Stats / Impact */}
                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-16 mb-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Students Trained" },
                            { value: "50+", label: "Live Projects" },
                            { value: "95%", label: "Placement Rate" },
                            { value: "10+", label: "Tech Stacks" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center space-y-2">
                                <span className="text-4xl md:text-5xl font-extrabold text-foreground">{stat.value}</span>
                                <span className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide our teaching and community.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {[
                        { title: "Practical First", desc: "Theory is worthless without application. We code from day one." },
                        { title: "Industry Mentorship", desc: "Learn from those who have actually been in the trenches building scalable apps." },
                        { title: "Community Driven", desc: "Surround yourself with ambitious peers. Your network is your net worth." }
                    ].map((value, i) => (
                        <div key={i} className="bg-background border border-border/50 hover:border-primary/30 p-8 rounded-3xl transition-all shadow-sm">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-6 text-primary font-bold text-xl">
                                0{i + 1}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-zinc-950 dark:bg-zinc-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-zinc-300 text-lg mb-10">
                            Join the next cohort of aspiring developers and transform your career with Skill Shiksha.
                        </p>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-8 text-lg font-bold">
                            <Link href="/apply">
                                Apply Now <MoveRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
