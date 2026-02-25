"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mentors = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Specializes in scalable distributed systems and AI infrastructure. Over 8 years of experience building exabyte-scale data processing pipelines.",
    expertise: ["Distributed Systems", "Go", "Cloud Architecture"],
    companyColor: "text-blue-500",
    companyBg: "bg-blue-500/10",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Cloud Solutions Architect",
    company: "Microsoft",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Expert in enterprise cloud migrations and security architectures. Passionate about helping startups scale their backend on Azure securely.",
    expertise: ["System Architecture", "Security", "Azure"],
    companyColor: "text-sky-500",
    companyBg: "bg-sky-500/10",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Engineering Manager",
    company: "Amazon",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Leads global fulfillment optimization teams. Extensive background in engineering leadership, agile methodologies, and AWS serverless tech.",
    expertise: ["Engineering Leadership", "AWS Serverless", "System Design"],
    companyColor: "text-orange-500",
    companyBg: "bg-orange-500/10",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MentorSection = () => {
  return (
    <section id="mentors" className="py-8 lg:py-10 relative overflow-hidden bg-secondary/10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none hidden md:block" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-4 py-1 text-sm rounded-full">
            Industry Experts
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Learn from <span className="gradient-text">The Best</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
            Our mentors are seasoned professionals from top global tech companies. Get 1-on-1 guidance, career advice, and insider industry knowledge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto border-t-0"
        >
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} variants={itemVariants}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image Header */}
                  <div className="relative md:h-104 h-80 w-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                      <Link href="#" className="p-1.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-1.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-foreground">{mentor.name}</h3>
                        <p className="text-muted-foreground font-medium flex items-center gap-1.5 text-sm">
                          <Briefcase className="w-4 h-4" />
                          {mentor.role}
                        </p>
                        <p className="text-muted-foreground/70 flex items-center gap-1.5 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          {mentor.location}
                        </p>
                      </div>
                      <Badge variant="outline" className={`${mentor.companyBg} ${mentor.companyColor} border-none font-bold px-3 py-1 shadow-sm`}>
                        {mentor.company}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {mentor.bio}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/50 font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link href="/mentors">
                        <Button className="w-full group/btn transition-all" variant="outline">
                          Request Mentorship
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/mentors">
            <Button size="lg" className="rounded-full shadow-md hover:shadow-primary/20 bg-primary hover:bg-primary/90 text-primary-foreground">
              See All Mentors Profiles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
