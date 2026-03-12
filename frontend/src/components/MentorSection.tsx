"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Twitter, MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    bio: "Experienced Backend Developer with decent experience and expertise. He builds secure RESTful APIs and highly efficient, scalable database systems.",
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
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between learning and industry with 1-on-1 mentorship from technical leaders. Master real-world skills through personalized guidance and deep industry insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto border-t-0 px-4 sm:px-6 lg:px-8"
        >
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} variants={itemVariants}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
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
                    {/* <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                      <Link href="#" className="p-1.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="p-1.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                      </Link>
                    </div> */}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="mb-4 w-full overflow-hidden">
                      <h3 className="text-xl font-bold mb-1 text-foreground truncate">{mentor.name}</h3>
                      <p className="text-muted-foreground font-medium flex items-center gap-1.5 text-sm min-w-0">
                        <Briefcase className="w-4 h-4 shrink-0" />
                        <span className="truncate" title={mentor.role}>{mentor.role}</span>
                      </p>
                      <p className="text-muted-foreground/70 flex items-center gap-1.5 text-sm mt-1 min-w-0">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="truncate" title={mentor.location}>{mentor.location}</span>
                      </p>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 md:line-clamp-4 min-h-[4.5rem] md:min-h-[6rem]">
                      {mentor.bio}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/50 font-normal">
                            {skill}
                          </Badge>
                        ))}
                      </div>
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
