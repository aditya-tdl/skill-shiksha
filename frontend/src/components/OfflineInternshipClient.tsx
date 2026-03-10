"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Rocket, Trophy, Briefcase, MapPin } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { courseData } from "@/app/programs/page";

interface Props {
    locationName: string;
}

export default function OfflineInternshipClient({ locationName }: Props) {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 pb-16 flex items-center justify-center">Loading offline programs...</div>}>
            <OfflineProgramsContent locationName={locationName} />
        </Suspense>
    );
}

function OfflineProgramsContent({ locationName }: Props) {
    const searchParams = useSearchParams();
    const defaultTab = searchParams?.get("tab") || "mern";

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-3 py-1 flex items-center gap-1 w-fit mx-auto">
                        <MapPin size={14} />
                        Physical Center in {locationName}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight">
                        Best Offline IT Internships in <span className="gradient-text">{locationName}</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Join our exclusive 12-week physical bootcamp in {locationName}. Experience hands-on, face-to-face mentorship with industry experts. Transform from a beginner to an industry-ready professional directly at our physical development center.
                    </p>
                </motion.div>

                {/* Course Tabs */}
                <Tabs defaultValue={defaultTab} className="w-full">
                    <TabsList className="flex flex-wrap items-center justify-center w-full h-auto p-1.5 bg-muted/50 backdrop-blur-sm rounded-xl mb-12 gap-1 md:gap-2">
                        <TabsTrigger value="mern" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">MERN Stack</TabsTrigger>
                        <TabsTrigger value="nodejs" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">Node.js</TabsTrigger>
                        <TabsTrigger value="react" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">React.js</TabsTrigger>
                        <TabsTrigger value="flutter" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">Flutter</TabsTrigger>
                        <TabsTrigger value="devops" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">DevOps</TabsTrigger>
                        <TabsTrigger value="manual_testing" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">QA Manual</TabsTrigger>
                        <TabsTrigger value="ui_ux" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">UI/UX Design</TabsTrigger>
                        <TabsTrigger value="project_manager" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">Project Manager</TabsTrigger>
                    </TabsList>

                    {Object.entries(courseData).map(([key, course]) => (
                        <TabsContent key={key} value={key} className="space-y-12">
                            {/* Course Intro */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                <Card className="lg:col-span-2 glass-card border-none">
                                    <CardHeader>
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                            <div>
                                                <CardTitle className="text-3xl font-display">{course.title} (Offline)</CardTitle>
                                                <CardDescription className="text-lg pt-2">{course.description}</CardDescription>
                                            </div>
                                            <div className="flex flex-col items-start sm:items-end bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                                                <span className="text-2xl font-bold font-display text-primary">₹20,000</span>
                                                <span className="text-xs text-muted-foreground mr-1">/ EMI available</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid sm:grid-cols-3 gap-6 mt-4">
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <Trophy className="text-primary" size={20} />
                                                </div>
                                                <p className="text-xs text-muted-foreground uppercase font-semibold">Certificate</p>
                                                <p className="text-sm font-medium">{course.outcomes.certificate}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                                    <Code className="text-accent" size={20} />
                                                </div>
                                                <p className="text-xs text-muted-foreground uppercase font-semibold">Portfolio</p>
                                                <p className="text-sm font-medium">{course.outcomes.portfolio}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <Briefcase className="text-primary" size={20} />
                                                </div>
                                                <p className="text-xs text-muted-foreground uppercase font-semibold">Outcome</p>
                                                <p className="text-sm font-medium">{course.outcomes.career}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="glass-card border-none">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <BookOpen size={20} className="text-primary" />
                                            Weekly Overview
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="max-h-[300px] overflow-y-auto pr-2">
                                        <Table>
                                            <TableBody>
                                                {course.overview.map((item) => (
                                                    <TableRow key={item.week} className="hover:bg-transparent">
                                                        <TableCell className="font-medium h-auto py-2 text-xs">{item.week}</TableCell>
                                                        <TableCell className="h-auto py-2 text-xs text-muted-foreground">{item.topic}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Learning Path */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-bold font-display flex items-center gap-2">
                                    <Rocket className="text-primary" size={24} />
                                    12-Week Offline Schedule
                                </h2>
                                <div className="grid gap-6">
                                    {course.phases.map((phase, idx) => (
                                        <Card key={idx} className="glass-card border-none overflow-hidden">
                                            <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                                                <h3 className="font-semibold text-primary">{phase.title}</h3>
                                            </div>
                                            <CardContent className="p-0">
                                                {/* Desktop View */}
                                                <div className="hidden md:block">
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow className="hover:bg-transparent border-none">
                                                                <TableHead className="w-[100px] pl-6">Week</TableHead>
                                                                <TableHead>Topics Covered (In-Office)</TableHead>
                                                                <TableHead className="text-right pr-6">Practical Output</TableHead>
                                                            </TableRow>
                                                        </TableHeader>
                                                        <TableBody>
                                                            {phase.weeks.map((week) => (
                                                                <TableRow key={week.week} className="hover:bg-primary/5 transition-colors">
                                                                    <TableCell className="font-medium pl-6">Week {week.week}</TableCell>
                                                                    <TableCell className="text-muted-foreground max-w-md">{week.topics}</TableCell>
                                                                    <TableCell className="text-right pr-6">
                                                                        <Badge variant="secondary" className="font-normal bg-accent/10 text-accent border-none hover:bg-accent hover:text-white transition-colors cursor-default whitespace-nowrap">
                                                                            {week.output}
                                                                        </Badge>
                                                                    </TableCell>
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </div>

                                                {/* Mobile View */}
                                                <div className="md:hidden divide-y divide-primary/10">
                                                    {phase.weeks.map((week) => (
                                                        <div key={week.week} className="p-5 space-y-3 hover:bg-primary/5 transition-colors">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-sm font-bold text-primary px-2 py-0.5 bg-primary/10 rounded">Week {week.week}</span>
                                                                <Badge variant="secondary" className="font-normal bg-accent/10 text-accent border-none text-[10px] py-0 px-2">
                                                                    {week.output}
                                                                </Badge>
                                                            </div>
                                                            <div className="space-y-1">
                                                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Topics Covered</p>
                                                                <p className="text-sm leading-relaxed">{week.topics}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
