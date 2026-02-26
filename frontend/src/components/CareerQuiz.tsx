"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Layout, Server, Cloud, Code, Smartphone, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- Quiz Data & Logic ---

type Category = "Frontend" | "Backend" | "Full-Stack" | "Mobile";

interface Option {
    text: string;
    category: Category;
    icon: React.ReactNode;
}

interface Question {
    id: number;
    question: string;
    options: Option[];
}

const quizQuestions: Question[] = [
    {
        id: 1,
        question: "What sounds like the most fun Friday afternoon project?",
        options: [
            { text: "Building an end-to-end web application from scratch", category: "Full-Stack", icon: <Layers className="w-5 h-5" /> },
            { text: "Making a button trigger a cool animation", category: "Frontend", icon: <Sparkles className="w-5 h-5" /> },
            { text: "Solving a complex data processing logic puzzle", category: "Backend", icon: <Server className="w-5 h-5" /> },
            { text: "Creating an app that runs perfectly on your phone", category: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
        ],
    },
    {
        id: 2,
        question: "When you look at a new app, what do you notice first?",
        options: [
            { text: "How fast it loads and processes data", category: "Backend", icon: <Server className="w-5 h-5" /> },
            { text: "How well the entire system flows together", category: "Full-Stack", icon: <Layers className="w-5 h-5" /> },
            { text: "The smooth touch interactions and mobile layout", category: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
            { text: "The colors, animations, and visual polish", category: "Frontend", icon: <Sparkles className="w-5 h-5" /> },
        ],
    },
    {
        id: 3,
        question: "You're building a house. What is your role?",
        options: [
            { text: "Laying the foundation and plumbing", category: "Backend", icon: <Brain className="w-5 h-5" /> },
            { text: "Painting and decorating the interior", category: "Frontend", icon: <Code className="w-5 h-5" /> },
            { text: "Managing the whole construction from start to finish", category: "Full-Stack", icon: <Layers className="w-5 h-5" /> },
            { text: "Building a custom mobile interface for home automation", category: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
        ],
    },
    {
        id: 4,
        question: "Which approach to learning excites you the most?",
        options: [
            { text: "Mastering the entire web development lifecycle", category: "Full-Stack", icon: <Layers className="w-5 h-5" /> },
            { text: "Crafting beautiful, responsive user interfaces", category: "Frontend", icon: <Sparkles className="w-5 h-5" /> },
            { text: "Architecting secure, scalable server systems", category: "Backend", icon: <Server className="w-5 h-5" /> },
            { text: "Developing native-like cross-platform apps", category: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
        ],
    },
    {
        id: 5,
        question: "How do you prefer to solve problems?",
        options: [
            { text: "Testing how it feels in your hands on a device", category: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
            { text: "Writing an efficient, clean background algorithm", category: "Backend", icon: <Code className="w-5 h-5" /> },
            { text: "Building a working visual prototype quickly", category: "Frontend", icon: <Sparkles className="w-5 h-5" /> },
            { text: "Architecting the big picture before diving in", category: "Full-Stack", icon: <Layers className="w-5 h-5" /> },
        ],
    },
];

const resultsData: Record<Category, { title: string; description: string; role: string; programId: string; color: string; bg: string }> = {
    "Frontend": {
        title: "The Visual Creator",
        role: "React.js Frontend Developer",
        programId: "react",
        description: "You have a great eye for detail and love seeing your code come to life. Our specialized React.js program is the perfect match for you to master modern UI development and state management.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    "Backend": {
        title: "The Logic Mastermind",
        role: "Node.js Backend Developer",
        programId: "nodejs",
        description: "You love solving complex puzzles and building the engine that powers the car. Our Node.js Backend program will teach you to build secure, scalable APIs and robust database-driven architectures.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    "Full-Stack": {
        title: "The All-Rounder Architect",
        role: "MERN Stack Full-Stack Developer",
        programId: "mern",
        description: "You think big picture and enjoy connecting all the dots. Our intensive MERN Stack program is ideal for you to master both the frontend and backend, building comprehensive web applications.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
    "Mobile": {
        title: "The App Innovator",
        role: "Flutter Developer",
        programId: "flutter",
        description: "You want your creations in the hands of users everywhere. Our Flutter Developer program is exactly what you need to build stunning, natively compiled applications for mobile from a single codebase.",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
    },
};

// --- Animations ---
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 50 : -50,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
    }),
};

export default function CareerQuiz() {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [scores, setScores] = useState<Record<Category, number>>({
        "Frontend": 0,
        "Backend": 0,
        "Full-Stack": 0,
        "Mobile": 0,
    });
    const [showResult, setShowResult] = useState(false);
    const [direction, setDirection] = useState(1);

    const handleAnswer = (category: Category) => {
        // Increment score
        const newScores = { ...scores, [category]: scores[category] + 1 };
        setScores(newScores);

        // Go to next question or show results
        if (currentQuestionIdx < quizQuestions.length - 1) {
            setDirection(1);
            setCurrentQuestionIdx((prev) => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const getTopCategory = (): Category => {
        return Object.keys(scores).reduce((a, b) => (scores[a as Category] > scores[b as Category] ? a : b)) as Category;
    };

    const currentQuestion = quizQuestions[currentQuestionIdx];
    const progressPercentage = ((currentQuestionIdx) / quizQuestions.length) * 100;

    return (
        <section id="career-quiz" className="p-1 md:p-16 relative overflow-hidden bg-background">
            {/* Decorative Background */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="section-container flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
                {!showResult ? (
                    <div className="w-full">
                        {/* Header & Progress */}
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-4 py-1 text-sm rounded-full">
                                Career Path Matcher
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display">Discover Your <span className="gradient-text">Tech Persona</span></h2>

                            {/* Progress Bar */}
                            <div className="w-full bg-secondary rounded-full h-2.5 mb-2 overflow-hidden">
                                <motion.div
                                    className="bg-primary h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground text-right relative z-10">
                                Question {currentQuestionIdx + 1} of {quizQuestions.length}
                            </p>
                        </div>

                        {/* Question Card */}
                        <div className="relative">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentQuestionIdx}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="w-full"
                                >
                                    <div className="border border-border/50 bg-card/60 backdrop-blur-md shadow-lg rounded-xl overflow-hidden">
                                        <div className="p-4 md:p-10">
                                            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground leading-tight">
                                                {currentQuestion.question}
                                            </h3>

                                            <div className="grid grid-cols-1 gap-4">
                                                {currentQuestion.options.map((option, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => handleAnswer(option.category)}
                                                        className="bg-background hover:bg-secondary border border-border/50 hover:border-primary/50 text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-4 group shadow-sm hover:shadow-md"
                                                    >
                                                        <div className="bg-secondary/50 p-3 rounded-lg text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                                            {option.icon}
                                                        </div>
                                                        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                                                            {option.text}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
                    /* Results Screen */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="w-full"
                    >
                        {(() => {
                            const topCat = getTopCategory();
                            const result = resultsData[topCat];
                            return (
                                <div className="text-center">
                                    <Badge className="mb-6 px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none">
                                        Quiz Complete!
                                    </Badge>

                                    <div className="border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden relative rounded-xl">
                                        <div className={`absolute top-0 left-0 w-full h-2 ${result.bg}`} />

                                        <div className="p-10 md:p-14">
                                            <div className={`inline-flex items-center justify-center p-6 rounded-full ${result.bg} ${result.color} mb-8`}>
                                                {topCat === "Frontend" && <Sparkles className="w-12 h-12" />}
                                                {topCat === "Backend" && <Brain className="w-12 h-12" />}
                                                {topCat === "Full-Stack" && <Layers className="w-12 h-12" />}
                                                {topCat === "Mobile" && <Smartphone className="w-12 h-12" />}
                                            </div>

                                            <h3 className="text-4xl md:text-5xl font-black mb-2 text-foreground">
                                                {result.title}
                                            </h3>
                                            <p className={`text-xl font-bold mb-8 ${result.color}`}>
                                                Ideal Match: {result.role}
                                            </p>

                                            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                                                {result.description}
                                            </p>

                                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                <Link href={`/programs?tab=${result.programId}`}>
                                                    <Button size="lg" className="w-full sm:w-auto rounded-full px-8 gap-2 h-14 text-lg shadow-lg hover:shadow-primary/25 transition-all">
                                                        View Matching Program
                                                        <ArrowRight className="w-5 h-5" />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    size="lg"
                                                    variant="outline"
                                                    className="w-full sm:w-auto rounded-full h-14"
                                                    onClick={() => {
                                                        setScores({ "Frontend": 0, "Backend": 0, "Full-Stack": 0, "Mobile": 0 });
                                                        setCurrentQuestionIdx(0);
                                                        setShowResult(false);
                                                    }}
                                                >
                                                    Retake Quiz
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
