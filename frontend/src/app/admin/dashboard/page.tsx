"use client";

import { useEffect, useState } from "react";
import { Users, BookOpen, Clock, Activity } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
    const router = useRouter();
    const [stats, setStats] = useState({
        totalStudents: 0,
        recentApplications: 0,
        activePrograms: 0
    });

    useEffect(() => {
        // Check auth
        const token = localStorage.getItem("adminToken");
        if (!token) {
            router.push("/admin/login");
            return;
        }

        const fetchStats = async () => {
            try {
                const headers = { "Authorization": `Bearer ${token}` };

                // Fetch admission stats
                const admRes = await fetch("http://localhost:5000/api/admission", { headers });
                let admissions = [];
                if (admRes.ok) {
                    const data = await admRes.json();
                    admissions = data.data || [];
                }

                // Fetch internships stats
                const intRes = await fetch("http://localhost:5000/api/internships", { headers });
                let activeProgramsCount = 0;
                if (intRes.ok) {
                    const data = await intRes.json();
                    activeProgramsCount = data.count || 0;
                }

                setStats({
                    totalStudents: admissions.length,
                    recentApplications: admissions.filter((a: any) => a.status === 'Pending').length || 0,
                    activePrograms: activeProgramsCount
                });
            } catch (err) {
                console.error("Failed to fetch stats", err);
            }
        };

        fetchStats();
    }, [router]);

    const statCards = [
        { name: "Total Applications", value: stats.totalStudents, icon: Users, color: "bg-blue-500" },
        { name: "Pending Approvals", value: stats.recentApplications, icon: Clock, color: "bg-orange-500" },
        { name: "Active Programs", value: stats.activePrograms, icon: BookOpen, color: "bg-green-500" },
        { name: "System Status", value: "Online", icon: Activity, color: "bg-indigo-500" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
                <p className="mt-1 text-sm text-muted-foreground">Welcome to the TechDock Admin Portal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.name} className="bg-card rounded-xl shadow-sm border border-border p-6 flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center`}>
                                <Icon className={`h-6 w-6 text-foreground`} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                                <p className="text-2xl font-semibold text-foreground mt-1">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-card rounded-xl shadow-sm border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <button
                        onClick={() => router.push("/admin/dashboard/students")}
                        className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors border border-border"
                    >
                        <Users className="h-8 w-8 text-primary mb-2" />
                        <span className="font-medium text-foreground">Manage Students</span>
                    </button>
                    <button
                        onClick={() => router.push("/admin/dashboard/internships")}
                        className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors border border-border"
                    >
                        <BookOpen className="h-8 w-8 text-primary mb-2" />
                        <span className="font-medium text-foreground">Manage Programs</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
