"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { BASE_URL } from "@/lib/api";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch(`${BASE_URL}/auth/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }

            // Save token in cookie properly for Next.js SSR middleware
            Cookies.set("adminToken", data.token, { expires: 30 }); // 30 days

            // We can still optionally save non-sensitive UI data in localStorage if needed for immediate display
            localStorage.setItem("adminData", JSON.stringify({ name: data.name, email: data.email, role: data.role }));

            toast.success("Login successful! Welcome back.");

            // Redirect to dashboard
            router.push("/admin/dashboard");
        } catch (err: any) {
            setError(err.message);
            toast.error(err.message || "Failed to sign in");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 relative overflow-hidden">
            {/* Soft Ambient Background Gradient */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/10 blur-[100px] opacity-70"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-md relative z-10 bg-white dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-slate-800"
            >
                <div className="text-center flex flex-col items-center">
                    <Link href="/" className="inline-block  mb-2 flex items-start justify-start">
                        <Image
                            src="/logo.png?v=2"
                            alt="Skill Shiksha Logo"
                            width={190}
                            height={40}
                            className="h-8 md:h-10  object-cover"
                            priority
                        />
                    </Link>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Sign In</h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Enter your credentials to access the dashboard</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-destructive/10 text-destructive p-3.5 rounded-xl text-sm flex items-center justify-center font-medium border border-destructive/20"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                            <div className="relative group">

                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none rounded-xl relative block w-full px-3 py-3 pl-11 border border-slate-200 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 sm:text-sm shadow-sm"
                                    placeholder="admin@skillshiksha.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                            </div>
                            <div className="relative group">

                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none rounded-xl relative block w-full px-3 py-3 pl-11 pr-11 border border-slate-200 dark:border-slate-700 placeholder-slate-400 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 sm:text-sm shadow-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex items-center justify-center border border-transparent text-md   font-semibold rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-70 shadow-md hover:shadow-lg"
                        >
                            {loading ? (
                                <div className="flex items-center">
                                    <div className="w-5 h-5 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                                    Signing in...
                                </div>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
