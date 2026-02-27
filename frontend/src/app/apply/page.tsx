"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Mail, Phone, BookOpen, Briefcase,
    ChevronRight, ChevronLeft, CheckCircle2,
    ArrowRight, MessageSquare, ShieldCheck,
    Star, Users, Trophy, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

const steps = [
    { title: "Identity", icon: <User size={18} /> },
    { title: "Path", icon: <BookOpen size={18} /> },
    { title: "Background", icon: <Sparkles size={18} /> }
];

const programs = [
    { id: "mern", label: "MERN Stack", desc: "Fullstack Mastery", icon: <BookOpen size={16} /> },
    { id: "nodejs", label: "Node.js", desc: "Backend Expert", icon: <ArrowRight size={16} /> },
    { id: "react", label: "React.js", desc: "Frontend Master", icon: <ArrowRight size={16} /> },
    { id: "flutter", label: "Flutter", desc: "Mobile Apps", icon: <ArrowRight size={16} /> },
];

const statuses = [
    { id: "student", label: "Student" },
    { id: "graduate", label: "Graduate" },
    { id: "working", label: "Professional" },
    { id: "other", label: "Other" },
];

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        program: "mern",
        status: "student",
        gender: "male",
        background: ""
    });
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/admission/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                toast({
                    title: "Registration Successful",
                    description: "Your application has been received.",
                });
            } else {
                const error = await response.json();
                toast({
                    variant: "destructive",
                    title: "Submission Failed",
                    description: error.message || "Registration failed. Please try again.",
                });
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong. Please check your connection.",
            });
        } finally {
            setLoading(false);
        }
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 3));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    if (success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full glass-card p-12 text-center rounded-[3rem] border border-primary/20 shadow-2xl"
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="text-primary w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Application Sent!</h2>
                    <p className="text-muted-foreground mb-10 leading-relaxed text-sm">
                        Our academy admission team will review your profile and reach out within 24 hours.
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl py-6 font-bold shadow-lg">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background flex flex-col lg:flex-row overflow-hidden py-10 lg:py-10 transition-colors duration-500 px-0 md:px-20">
            {/* Left Side: Branding & Visuals */}
            <div className="lg:w-[40%] bg-zinc-50 dark:bg-zinc-950 relative flex flex-col justify-center p-8 lg:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-border/10">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full opacity-50 dark:opacity-100">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                            <Sparkles size={12} /> Tech Shiksha Admission
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
                            Start Your <span className="text-primary italic">Success</span> Story Today.
                        </h1>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm lg:text-base leading-relaxed max-w-sm">
                            Join 500+ professionals who transformed their careers through our industry-immersion programs.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            { icon: <Star />, text: "Ranked #1 for Tech Placement", sub: "Based on 2025 Industry Reports" },
                            { icon: <Users />, text: "1:1 Mentorship Included", sub: "Learn from top industry veterans" },
                            { icon: <Trophy />, text: "Job Placement Guarantee", sub: "Support until you get hired" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-start gap-4 p-4  rounded-2xl bg-white dark:bg-zinc-900/50 border border-border/10 dark:border-zinc-800 hover:border-primary/30 dark:hover:border-zinc-700 transition-all group shadow-sm dark:shadow-none"
                            >
                                <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-primary group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-zinc-900 dark:text-white text-sm font-bold tracking-wide">{item.text}</h4>
                                    <p className="text-zinc-500 dark:text-zinc-500 text-[11px] mt-0.5">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Step-based Form */}
            <div className="lg:w-[60%] flex flex-col items-center justify-center p-6 lg:p-20 bg-background relative">
                <div className="max-w-2xl w-full">
                    {/* Progress Header */}
                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-6">
                            {steps.map((s, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 relative">
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${step > i + 1 ? "bg-primary text-white" :
                                        step === i + 1 ? "bg-primary/20 text-primary ring-2 ring-primary/30" :
                                            "bg-muted text-muted-foreground"
                                        }`}>
                                        {step > i + 1 ? <CheckCircle2 size={18} /> : s.icon}
                                    </div>
                                    <span className={`text-[10px] uppercase tracking-widest font-bold ${step === i + 1 ? "text-foreground" : "text-muted-foreground opacity-50"
                                        }`}>
                                        {s.title}
                                    </span>
                                    {/* Link line */}
                                    {i < steps.length - 1 && (
                                        <div className="absolute left-[2.5rem] top-5 w-[calc(100vw/5)] lg:w-32 h-[1px] bg-muted -z-10" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="relative">
                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-bold tracking-tight">Personal Details</h2>
                                            <p className="text-muted-foreground text-sm">Tell us who you are so we can personalize your journey.</p>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase font-bold text-muted-foreground">Full Name*</Label>
                                                <Input
                                                    name="name"
                                                    placeholder="John Doe"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="rounded-xl h-12 bg-muted/30 border-none focus:ring-2 focus:ring-primary/20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase font-bold text-muted-foreground">Email Address*</Label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="rounded-xl h-12 bg-muted/30 border-none focus:ring-2 focus:ring-primary/20"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase font-bold text-muted-foreground">Phone Number*</Label>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="rounded-xl h-12 bg-muted/30 border-none focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>
                                        <Button type="button" onClick={nextStep} className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-md font-bold group shadow-xl transition-all">
                                            Continue to Program
                                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2 text-center lg:text-left">
                                            <h2 className="text-3xl font-bold tracking-tight">Choose Your Career Path</h2>
                                            <p className="text-muted-foreground text-sm">Select the program you're most interested in mastering.</p>
                                        </div>
                                        <RadioGroup
                                            name="program"
                                            value={formData.program}
                                            onValueChange={(val) => setFormData({ ...formData, program: val })}
                                            className="grid sm:grid-cols-2 gap-4"
                                        >
                                            {programs.map((p) => (
                                                <div key={p.id}>
                                                    <RadioGroupItem value={p.id} id={p.id} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={p.id}
                                                        className="flex items-start gap-4 p-5 rounded-2xl border-2 border-transparent bg-muted/30 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all h-full"
                                                    >
                                                        <div className="p-3 rounded-xl bg-background shadow-sm text-primary">
                                                            {p.icon}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-sm tracking-wide">{p.label}</span>
                                                            <span className="text-[10px] text-muted-foreground font-medium uppercase mt-1 tracking-tighter opacity-70">
                                                                {p.desc}
                                                            </span>
                                                        </div>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                        <div className="flex gap-4 pt-4">
                                            <Button type="button" variant="outline" onClick={prevStep} className="h-14 w-20 rounded-xl border-muted hover:bg-muted/50 text-foreground">
                                                <ChevronLeft />
                                            </Button>
                                            <Button type="button" onClick={nextStep} className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-md font-bold group shadow-xl transition-all">
                                                Next Step
                                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-bold tracking-tight">Final Details</h2>
                                            <p className="text-muted-foreground text-sm">Almost there! Share a bit about your background.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div className="space-y-3">
                                                    <Label className="text-[10px] uppercase font-bold text-muted-foreground">Current Status</Label>
                                                    <RadioGroup
                                                        name="status"
                                                        value={formData.status}
                                                        onValueChange={(val) => setFormData({ ...formData, status: val })}
                                                        className="flex flex-wrap gap-2"
                                                    >
                                                        {statuses.map((s) => (
                                                            <div key={s.id}>
                                                                <RadioGroupItem value={s.id} id={s.id + "_3"} className="peer sr-only" />
                                                                <Label
                                                                    htmlFor={s.id + "_3"}
                                                                    className="px-4 py-2 rounded-xl text-[10px] font-bold border border-muted  peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white cursor-pointer transition-all uppercase tracking-wider"
                                                                >
                                                                    {s.label}
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </div>
                                                <div className="space-y-3">
                                                    <Label className="text-[10px] uppercase font-bold text-muted-foreground">Gender</Label>
                                                    <RadioGroup
                                                        name="gender"
                                                        value={formData.gender}
                                                        onValueChange={(val) => setFormData({ ...formData, gender: val })}
                                                        className="flex gap-2"
                                                    >
                                                        {["Male", "Female", "Other"].map((g) => (
                                                            <div key={g}>
                                                                <RadioGroupItem value={g.toLowerCase()} id={g} className="peer sr-only" />
                                                                <Label
                                                                    htmlFor={g}
                                                                    className="px-4 py-2 rounded-xl text-[10px] font-bold border border-muted  peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-white cursor-pointer transition-all uppercase tracking-wider"
                                                                >
                                                                    {g}
                                                                </Label>
                                                            </div>
                                                        ))}
                                                    </RadioGroup>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase font-bold text-muted-foreground">Background (Optional)</Label>
                                                <Textarea
                                                    name="background"
                                                    placeholder="Share your goals or past experience..."
                                                    value={formData.background}
                                                    onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                                                    className="rounded-xl min-h-[100px] bg-muted/30 border-none focus:ring-2 focus:ring-primary/20 text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <Button type="button" variant="outline" onClick={prevStep} className="h-14 w-20 rounded-xl border-muted hover:bg-muted/50 text-foreground hover:text-black">
                                                <ChevronLeft />
                                            </Button>
                                            <Button type="submit" disabled={loading} className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-md font-bold group shadow-xl transition-all">
                                                {loading ? "Sending..." : "Complete Application"}
                                                {!loading && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
                                            </Button>
                                        </div>

                                        <div className="flex items-center justify-center gap-2 text-muted-foreground opacity-60 text-[9px] uppercase tracking-[0.2em] pt-4">
                                            <ShieldCheck size={14} /> Data protected with end-to-end encryption
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
