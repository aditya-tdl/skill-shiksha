"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import vivekImg from "@/assets/vivek_singh.png";
import javedImg from "@/assets/javed_akhtar.png";
import adityaImg from "@/assets/aditya_bharti1.png";
import ashishImg from "@/assets/ashish_kumar1.png";

const mentors = [
  {
    id: 1,
    name: "Javed Akhtar",
    role: "Chief Technical Officer (CTO)",
    company: "TechDock Labs",
    location: "India",
    image: javedImg,
    bio: "As CTO, Javed drives technical strategy and scalable MERN architectures. He leads teams to build robust, high-performance web applications.",
    expertise: ["Technical Leadership", "MERN Stack", "Scalable Systems"],
    companyColor: "text-green-500",
    companyBg: "bg-green-500/10",
  },
  {
    id: 2,
    name: "Vivek Singh",
    role: "Full Stack Mobile Developer",
    company: "TechDock Labs",
    location: "India",
    image: vivekImg,
    bio: "Full Stack Mobile Developer with decent experience and expertise. He specializes in building seamless, high-performance cross-platform applications.",
    expertise: ["Flutter", "Mobile Architecture", "Full Stack"],
    companyColor: "text-blue-500",
    companyBg: "bg-blue-500/10",
  },
  {
    id: 3,
    name: "Aditya Bharti",
    role: "MERN Stack Developer",
    company: "TechDock Labs",
    location: "India",
    image: adityaImg,
    bio: "Passionate MERN stack developer with decent experience and expertise. He excels in crafting responsive interfaces and robust database integrations.",
    expertise: ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "PostgreSQL"],
    companyColor: "text-orange-500",
    companyBg: "bg-orange-500/10",
  },
  {
    id: 4,
    name: "Ashish Kumar",
    role: "Backend Developer",
    company: "TechDock Labs",
    location: "India",
    image: ashishImg,
    bio: "Backend Developer specializing in Node.js, Express.js, and MongoDB, experienced in building scalable APIs and backend systems for real-world applications. He mentors developers in backend architecture, REST API design, database optimization, and building production-ready applications.",
    expertise: ["Node.js", "MongoDB", "Express.js", "PostgreSQL", "Architecture"],
    companyColor: "text-purple-500",
    companyBg: "bg-purple-500/10",
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

const MentorBio = ({
  bio,
  isExpanded,
  onToggle
}: {
  bio: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const maxLength = 120;
  const shouldTruncate = bio.length > maxLength;
  const truncatedBio = bio.slice(0, maxLength);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative overflow-hidden">
        <motion.p
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground text-sm leading-relaxed"
        >
          {isExpanded ? bio : (shouldTruncate ? `${truncatedBio}...` : bio)}
        </motion.p>
      </div>
      {shouldTruncate && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          className="text-xs font-semibold text-primary hover:underline w-fit transition-all flex items-center gap-1"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

const MentorSection = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleBio = (id: number) => {
    setExpandedIds((prev) => {
      const isCurrentlyExpanded = prev.includes(id);
      if (isCurrentlyExpanded) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

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
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between learning and industry with 1-on-1 mentorship from technical leaders. Master real-world skills through personalized guidance and deep industry insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto border-t-0 px-4 sm:px-6 lg:px-8 items-start"
        >
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              variants={itemVariants}
              layout
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image Header */}
                  <div className="relative h-80 sm:h-72 w-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1 gap-4">
                    <div className="w-full overflow-hidden">
                      <h3 className="text-xl font-bold mb-1 text-foreground truncate">{mentor.name}</h3>
                      <div className="flex flex-col gap-1.5">
                        <p className="text-muted-foreground font-medium flex items-center gap-1.5 text-sm min-w-0">
                          <Briefcase className="w-4 h-4 shrink-0 text-primary/70" />
                          <span className="truncate" title={mentor.role}>{mentor.role}</span>
                        </p>
                        <p className="text-muted-foreground/70 flex items-center gap-1.5 text-sm min-w-0">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span className="truncate" title={mentor.location}>{mentor.location}</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Core Expertise</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/40 hover:bg-secondary/60 font-normal text-[11px] px-2 py-0 border-none transition-colors">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator className="opacity-50" />

                    <div className="mt-auto">
                      <MentorBio
                        bio={mentor.bio}
                        isExpanded={expandedIds.includes(mentor.id)}
                        onToggle={() => toggleBio(mentor.id)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MentorSection;
