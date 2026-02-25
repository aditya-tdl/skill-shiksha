"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileQuestion, Home, Compass, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-4">
            {/* Decorative Blur Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl mx-auto"
            >
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <FileQuestion className="w-32 h-32 md:w-48 md:h-48 text-primary opacity-80" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl md:text-6xl font-black text-foreground drop-shadow-md">404</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                    Oops! Page Not Found
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto">
                    It looks like the page you're searching for has moved, been renamed, or doesn't exist anymore on our platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full rounded-full gap-2 px-8">
                            <Home className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/programs" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full rounded-full gap-2">
                            <Compass className="w-4 h-4" />
                            Explore Programs
                        </Button>
                    </Link>
                    <Link href="/latest-trends" className="w-full sm:w-auto">
                        <Button size="lg" variant="ghost" className="w-full rounded-full gap-2 border border-transparent hover:border-border">
                            <BookOpen className="w-4 h-4" />
                            Read Latest Trends
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
