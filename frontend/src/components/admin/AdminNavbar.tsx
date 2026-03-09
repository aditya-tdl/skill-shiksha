"use client";

import { useEffect, useState } from "react";
import { User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { ConfirmationModal } from "@/components/ui/confirmation-modal";
import Cookies from "js-cookie";
import { toast } from "sonner";

export function AdminNavbar() {
    const [adminData, setAdminData] = useState({ name: "Admin User", email: "admin@skillshiksha.com" });
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const data = localStorage.getItem("adminData");
        if (data) {
            try {
                const parsed = JSON.parse(data);
                setAdminData({
                    name: parsed.name || "Admin User",
                    email: parsed.email || "admin@skillshiksha.com"
                });
            } catch (e) {
                // ignore
            }
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove("adminToken");
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
        toast.info("You have successfully logged out");
        router.push("/admin/login");
    };

    return (
        <>
            <header className="h-16 bg-card border-b border-border flex items-center justify-end px-6 sticky top-0 z-10">
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <User className="h-5 w-5" />
                        </div>
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="text-sm font-semibold text-foreground">
                                {adminData.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {adminData.email}
                            </span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-border hidden sm:block"></div>
                    <button
                        onClick={() => setIsLogoutModalOpen(true)}
                        className="flex items-center text-sm font-medium text-destructive hover:text-destructive/80 transition-colors bg-destructive/10 px-3 py-1.5 rounded-md"
                    >
                        <LogOut className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Logout</span>
                    </button>
                </div>
            </header>

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
