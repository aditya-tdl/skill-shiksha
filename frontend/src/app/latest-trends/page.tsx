"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Cloud,
    Shield,
    Cpu,
    Globe,
    Code,
    ArrowRight,
    Sparkles,
    Smartphone,
    Database
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const trends = [
    {
        id: "gen-ai",
        title: "Generative AI & LLMs",
        description: "The integration of advanced AI models into everyday applications, transforming how we write code, generate content, and solve complex problems.",
        icon: Brain,
        tags: ["ChatGPT", "Copilot", "LangChain"],
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        id: "cloud-native",
        title: "Cloud-Native Architecture",
        description: "Building scalable and resilient applications using microservices, containers, and serverless computing technologies.",
        icon: Cloud,
        tags: ["Kubernetes", "Docker", "Serverless"],
        color: "text-sky-500",
        bg: "bg-sky-500/10",
    },
    {
        id: "cybersecurity",
        title: "Zero Trust Security",
        description: "A security model that requires strict identity verification for every person and device trying to access resources on a private network.",
        icon: Shield,
        tags: ["DevSecOps", "IAM", "Encryption"],
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        id: "edge-computing",
        title: "Edge Computing",
        description: "Processing data closer to where it's being generated, enabling greater speeds and volumes, leading to greater action-led results in real time.",
        icon: Cpu,
        tags: ["IoT", "5G", "Real-time Processing"],
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
    {
        id: "web3",
        title: "Web3 & Decentralization",
        description: "The next generation of the internet, focusing on decentralized networks, blockchain technologies, and token-based economics.",
        icon: Globe,
        tags: ["Blockchain", "Smart Contracts", "DeFi"],
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    {
        id: "low-code",
        title: "Low-Code/No-Code",
        description: "Platforms that allow developers and non-developers alike to build applications through graphical user interfaces and configuration instead of traditional programming.",
        icon: Code,
        tags: ["Rapid Development", "Automation", "Visual Programming"],
        color: "text-pink-500",
        bg: "bg-pink-500/10",
    },
    {
        id: "ar-vr",
        title: "Spatial Computing",
        description: "Blurring the lines between the physical and digital worlds through Augmented Reality (AR) and Virtual Reality (VR) applications.",
        icon: Sparkles,
        tags: ["Vision Pro", "Meta Quest", "WebXR"],
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
    },
    {
        id: "cross-platform",
        title: "Cross-Platform Dev",
        description: "Writing code once and deploying it across multiple platforms, from mobile devices to desktop applications.",
        icon: Smartphone,
        tags: ["React Native", "Flutter", "MAUI"],
        color: "text-teal-500",
        bg: "bg-teal-500/10",
    },
    {
        id: "data-engineering",
        title: "Modern Data Stack",
        description: "New approaches to collecting, processing, and analyzing massive amounts of data efficiently and in real-time.",
        icon: Database,
        tags: ["Data Mesh", "dbt", "Snowflake"],
        color: "text-rose-500",
        bg: "bg-rose-500/10",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function LatestTrendsPage() {
    return (
        <div className="min-h-screen bg-background pt-[120px] pb-16 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center space-y-6 mb-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-2 px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Technology Radar 2026
                        </Badge>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70"
                    >
                        Latest Trends in <span className="text-primary italic">Development</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl leading-relaxed"
                    >
                        Explore the cutting-edge technologies and paradigms shaping the future of software development, digital transformation, and the global tech ecosystem.
                    </motion.p>
                </div>

                {/* Trends Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {trends.map((trend) => (
                        <motion.div key={trend.id} variants={itemVariants} className="h-full">
                            <Card className="h-full border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col group overflow-hidden relative">

                                {/* Subtle gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-colors duration-500" />

                                <CardHeader className="relative z-10">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${trend.bg} group-hover:scale-110 transition-transform duration-500 ease-out`}>
                                        <trend.icon className={`w-7 h-7 ${trend.color}`} />
                                    </div>
                                    <CardTitle className="text-2xl font-semibold tracking-tight">{trend.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col relative z-10">
                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                                        {trend.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {trend.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-background/80 hover:bg-background border-border/50 text-xs py-1 px-3">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-24 text-center pb-8"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/50 to-muted/80 border border-border/50 p-10 md:p-16 max-w-4xl mx-auto shadow-sm">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                                Ready to Master These Technologies?
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                                Join our comprehensive internship programs to get hands-on experience with these cutting-edge tools, frameworks, and methodologies.
                            </p>
                            <Link href="/programs">
                                <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-primary/25 transition-all duration-300">
                                    Explore Our Programs
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
