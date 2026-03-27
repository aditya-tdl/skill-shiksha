"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, LogOut, Settings, Briefcase, MessageSquare, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ConfirmationModal } from "@/components/ui/confirmation-modal";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface AdminSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    const handleLogout = () => {
        Cookies.remove("adminToken");
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
        toast.info("You have successfully logged out");
        router.push("/admin/login");
    };

    const navItems = [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "Students", href: "/admin/dashboard/students", icon: Users },
        { name: "Internships", href: "/admin/dashboard/internships", icon: Briefcase },
        { name: "Testimonials", href: "/admin/dashboard/testimonials", icon: MessageSquare },
    ];

    const sidebarContent = (
        <aside className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border z-50 flex flex-col h-full">
            <div className="flex items-center justify-between h-16 border-b border-border px-4">
                <Link href="/" className="flex gap-2">
                    <Image
                        src="/logo.png?v=2"
                        alt="Skill Shiksha Logo"
                        width={200}
                        height={30}
                        priority
                    />
                </Link>
                <button
                    onClick={onClose}
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-3">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = item.href === "/admin/dashboard"
                            ? pathname === item.href
                            : pathname === item.href || pathname.startsWith(`${item.href}/`);
                        const Icon = item.icon;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={() => {
                                        if (window.innerWidth < 768) onClose();
                                    }}
                                    className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        }`}
                                >
                                    <Icon className={`mr-3 h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="p-4 border-t border-border">
                <button
                    onClick={() => setIsLogoutModalOpen(true)}
                    className="flex items-center w-full px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                </button>
            </div>
        </aside>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                {sidebarContent}
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 z-[70] md:hidden"
                        >
                            {sidebarContent}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <ConfirmationModal
                isOpen={isLogoutModalOpen}
                onClose={() => setIsLogoutModalOpen(false)}
                onConfirm={handleLogout}
                title="Confirm Logout"
                description="Are you sure you want to logout from the admin portal? You will need to sign in again to access the dashboard."
                confirmText="Log Out"
                type="logout"
            />
        </>
    );
}
