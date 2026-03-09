"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Rocket, Trophy, Briefcase, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const courseData = {
    mern: {
        title: "MERN Stack Full-Stack Developer",
        description: "A comprehensive 12-week program covering MongoDB, Express.js, React, and Node.js for modern full-stack web development.",
        overview: [
            { week: "Week 1", topic: "Web fundamentals & HTML" },
            { week: "Week 2", topic: "CSS & Responsive Design" },
            { week: "Week 3", topic: "JavaScript Basics" },
            { week: "Week 4", topic: "Advanced JS & DOM" },
            { week: "Week 5", topic: "React Basics" },
            { week: "Week 6", topic: "Node.js Intro" },
            { week: "Week 7", topic: "REST APIs" },
            { week: "Week 8", topic: "MongoDB" },
            { week: "Week 9", topic: "Auth & Security" },
            { week: "Week 10", topic: "Full Stack Integration" },
            { week: "Week 11", topic: "Mini Project" },
            { week: "Week 12", topic: "Capstone + Interviews" },
        ],
        phases: [
            {
                title: "Phase 1: Web & JavaScript Foundations (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "Web fundamentals, HTML5 & Semantic HTML, CSS3 basics", output: "Static Responsive Website" },
                    { week: 2, topics: "Responsive design (Flexbox), Advanced CSS (Grid, Media Queries)", output: "Interactive Web Pages" },
                    { week: 3, topics: "JavaScript basics, Variables, Data Types, Functions, DOM manipulation", output: "JS-based Mini App" },
                    { week: 4, topics: "JavaScript ES6+, Arrow functions, Destructuring, Events & Forms validation, Git & GitHub", output: "Mini Project 1: JS Web App" },
                ]
            },
            {
                title: "Phase 2: Backend Development (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "NPM basics, Intro to Node.js, Basic backend concepts", output: "Basic REST API" },
                    { week: 6, topics: "Node.js architecture, Express.js setup, REST API concepts, Routing & Controllers", output: "Database-driven API" },
                    { week: 7, topics: "MongoDB fundamentals, Mongoose ODM, CRUD operations, Schema design", output: "Auth-enabled Backend" },
                    { week: 8, topics: "Authentication & Authorization, JWT & bcrypt, Role-based access, API security basics, MVC architecture", output: "Mini Project 2: Backend API" },
                ]
            },
            {
                title: "Phase 3: Frontend + Full-Stack Integration (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "React fundamentals, Components & Props, State & Hooks, JSX", output: "React UI App" },
                    { week: 10, topics: "React Router, API integration (Axios), Forms & Validation, Context API", output: "Connected Frontend" },
                    { week: 11, topics: "Full-stack integration, Auth integration (JWT), Protected routes, Environment variables", output: "Full-Stack App" },
                    { week: 12, topics: "Deployment (Frontend + Backend), MongoDB Atlas, Performance basics, Final project demo", output: "Capstone Project" },
                ]
            }
        ],
        outcomes: {
            certificate: "MERN Stack Full-Stack Developer",
            portfolio: "GitHub + Live Project",
            career: "Internship / Junior Full-Stack Role"
        }
    },
    nodejs: {
        title: "Node.js Backend Developer",
        description: "An intensive 12-week backend specialization focusing on Node.js, Express, MongoDB, and production-ready API development.",
        overview: [
            { week: "Week 1", topic: "Node Architecture" },
            { week: "Week 2", topic: "Express & Routing" },
            { week: "Week 3", topic: "API Design" },
            { week: "Week 4", topic: "MongoDB" },
            { week: "Week 5", topic: "JWT Auth" },
            { week: "Week 6", topic: "Roles & Permissions" },
            { week: "Week 7", topic: "Error Handling" },
            { week: "Week 8", topic: "Performance" },
            { week: "Week 9", topic: "Security" },
            { week: "Week 10", topic: "Deployment" },
            { week: "Week 11", topic: "Backend Project" },
            { week: "Week 12", topic: "Mock Interviews" },
        ],
        phases: [
            {
                title: "Phase 1: Backend & JavaScript Foundations (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "Backend fundamentals, How internet & servers work, HTTP/HTTPS", output: "JS logic programs" },
                    { week: 2, topics: "JavaScript basics for backend, ES6+, Async JS, Async/Await, Error handling", output: "Async JS practice" },
                    { week: 3, topics: "Node.js architecture, Event loop, NPM, File system & core modules", output: "Node CLI utilities" },
                    { week: 4, topics: "Express.js basics, Routing & middleware, Request/Response cycle, REST API intro", output: "Mini Project 1: Basic REST API" },
                ]
            },
            {
                title: "Phase 2: Database & Secure APIs (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "MongoDB fundamentals, NoSQL concepts, Mongoose schemas & models, CRUD operations", output: "Database-driven APIs" },
                    { week: 6, topics: "Advanced queries, Indexing & relations, Pagination & filtering, Aggregation basics", output: "Optimized APIs" },
                    { week: 7, topics: "Authentication & Authorization, JWT flow, Password hashing (bcrypt), Role-based access control", output: "Secure Auth APIs" },
                    { week: 8, topics: "API architecture (MVC), Centralized error handling, Validation (Joi / Zod), API testing with Postman", output: "Mini Project 2: Auth-Based Backend" },
                ]
            },
            {
                title: "Phase 3: Production-Ready Backend (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "Environment configuration, Logging & monitoring, File uploads (Multer), Email service integration", output: "Feature-rich APIs" },
                    { week: 10, topics: "Performance optimization, Rate limiting, Caching (Redis), Security best practices", output: "Optimized Backend" },
                    { week: 11, topics: "Deployment concepts, MongoDB Atlas, Environment variables, API documentation (Swagger)", output: "Live Backend" },
                    { week: 12, topics: "Capstone backend project, Code review & refactoring, API documentation, Final demo", output: "Final Backend Project" },
                ]
            }
        ],
        outcomes: {
            certificate: "Node.js Backend Developer",
            portfolio: "GitHub + Live APIs",
            career: "Backend Intern / Junior Backend Engineer"
        }
    },
    react: {
        title: "React.js Frontend Developer",
        description: "A specialized 12-week program focused on modern React development, UI/UX best practices, and production-ready frontend applications.",
        overview: [
            { week: "Week 1", topic: "Modern JavaScript" },
            { week: "Week 2", topic: "React Basics" },
            { week: "Week 3", topic: "State & Props" },
            { week: "Week 4", topic: "Hooks" },
            { week: "Week 5", topic: "Routing & Forms" },
            { week: "Week 6", topic: "API Integration" },
            { week: "Week 7", topic: "Next.js Basics" },
            { week: "Week 8", topic: "SSR & SEO" },
            { week: "Week 9", topic: "Performance" },
            { week: "Week 10", topic: "UI Best Practices" },
            { week: "Week 11", topic: "Frontend Project" },
            { week: "Week 12", topic: "Portfolio Prep" },
        ],
        phases: [
            {
                title: "Phase 1: JavaScript & React Foundations (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "JavaScript refresher (ES6+), Variables, Functions, Arrays, Objects, Arrow functions & Destructuring", output: "JS Logic Programs" },
                    { week: 2, topics: "Module system, How React works, Project setup (Vite), JSX & Virtual DOM, Components", output: "Basic React App" },
                    { week: 3, topics: "Props & State, Event handling, Conditional rendering, Lists & keys", output: "Dynamic UI Components" },
                    { week: 4, topics: "React Hooks (useState, useEffect), Component lifecycle basics, Basic folder structure", output: "Mini Project 1: React UI App" },
                ]
            },
            {
                title: "Phase 2: Intermediate React Development (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "Forms & Controlled Components, Validation logic, Refs (useRef), Lifting state up", output: "Form-Based React App" },
                    { week: 6, topics: "API integration (Fetch / Axios), Async/Await, Loading & error states, Environment variables", output: "API-Driven App" },
                    { week: 7, topics: "React Router, Dynamic routing, Protected routes, Layout components", output: "Multi-Page React App" },
                    { week: 8, topics: "State management basics, Context API, Reusable components, Folder architecture", output: "Mini Project 2: React + API App" },
                ]
            },
            {
                title: "Phase 3: Production-Ready React Applications (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "Advanced Hooks (useMemo, useCallback), Performance optimization, Custom hooks", output: "Optimized React App" },
                    { week: 10, topics: "Styling approaches, Tailwind / CSS Modules, UI libraries (shadcn/ui), Figma to React", output: "Professional UI" },
                    { week: 11, topics: "Authentication flow (JWT-based UI), Role-based UI handling, Error boundaries, Testing basics", output: "Secure React App" },
                    { week: 12, topics: "Build optimization, Deployment (Vercel), Final project demo, Code review", output: "Capstone Project" },
                ]
            }
        ],
        outcomes: {
            certificate: "React.js Frontend Developer",
            portfolio: "GitHub + Live Deployed Apps",
            career: "Frontend Intern / Junior React Developer"
        }
    },
    flutter: {
        title: "Flutter Developer",
        description: "A comprehensive 12-week mobile development program covering Flutter, Dart, Firebase, and cross-platform app development for iOS and Android.",
        overview: [
            { week: "Week 1", topic: "Dart Basics" },
            { week: "Week 2", topic: "Widgets" },
            { week: "Week 3", topic: "Layouts" },
            { week: "Week 4", topic: "State Management" },
            { week: "Week 5", topic: "API Integration" },
            { week: "Week 6", topic: "Local Storage" },
            { week: "Week 7", topic: "Firebase" },
            { week: "Week 8", topic: "Auth" },
            { week: "Week 9", topic: "Optimization" },
            { week: "Week 10", topic: "Deployment" },
            { week: "Week 11", topic: "App Project" },
            { week: "Week 12", topic: "Store Readiness" },
        ],
        phases: [
            {
                title: "Phase 1: Flutter Foundations (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "Introduction to Mobile Development, Flutter ecosystem, Dart Basics, OOP in Dart", output: "Dart programs + logic exercises" },
                    { week: 2, topics: "Flutter project structure, Widgets (Stateless/Stateful), Layout widgets, Material UI", output: "Static UI App" },
                    { week: 3, topics: "Navigation & Routing, Forms & Validation, setState, Snackbars & Dialogs", output: "Multi-screen Form App" },
                    { week: 4, topics: "ListView & GridView, Custom list items, Local data handling, Git & GitHub basics", output: "Mini Project 1: Notes / Task App" },
                ]
            },
            {
                title: "Phase 2: Intermediate Flutter (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "State Management concept, Provider setup, ChangeNotifier, App-wide state handling", output: "Refactor Mini Project using Provider" },
                    { week: 6, topics: "REST API concepts, HTTP/Dio integration, JSON parsing, Error handling", output: "API-based App (News / Product App)" },
                    { week: 7, topics: "Local storage (SharedPreferences), Secure storage, Firebase setup, Authentication (Login / Signup)", output: "Auth-based App" },
                    { week: 8, topics: "App architecture (MVC/MVVM), Reusable widgets, Responsive UI, Performance optimization", output: "Optimized Intermediate App" },
                ]
            },
            {
                title: "Phase 3: Advanced & Production Ready (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "Custom UI components, Animations, Bottom Navigation, Dark Mode", output: "Animated & polished UI screens" },
                    { week: 10, topics: "Push notifications (Firebase), Image picker & camera, File upload, Location / Maps (Intro)", output: "Feature-rich App" },
                    { week: 11, topics: "Testing basics, App signing, Build APK / AAB, Play Store guidelines", output: "Deployment-ready build" },
                    { week: 12, topics: "Capstone project development, Code review & optimization, Final demo & documentation", output: "Final Project Submission" },
                ]
            }
        ],
        outcomes: {
            certificate: "Flutter Developer (Beginner–Intermediate)",
            portfolio: "GitHub with live projects",
            career: "Internship / Junior Flutter Developer"
        }
    },
    manual_testing: {
        title: "Manual Quality Assurance Tester",
        description: "A comprehensive 12-week program focused on manual software testing, test case design, defect tracking, and QA methodologies.",
        overview: [
            { week: "Week 1", topic: "Software Testing Basics" },
            { week: "Week 2", topic: "SDLC & STLC" },
            { week: "Week 3", topic: "Test Scenarios & Cases" },
            { week: "Week 4", topic: "Test Execution & Jira" },
            { week: "Week 5", topic: "Agile & Scrum QA" },
            { week: "Week 6", topic: "API Testing (Postman)" },
            { week: "Week 7", topic: "Web & Mobile App Testing" },
            { week: "Week 8", topic: "SQL Basics for QA" },
            { week: "Week 9", topic: "Defect Life Cycle" },
            { week: "Week 10", topic: "Performance & Security QA" },
            { week: "Week 11", topic: "Live Project Testing" },
            { week: "Week 12", topic: "QA Interviews & Resume" },
        ],
        phases: [
            {
                title: "Phase 1: QA Fundamentals & Test Design (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "Fundmentals of Software Testing, Types of Testing, Verification vs Validation", output: "Testing Concept Models" },
                    { week: 2, topics: "Software Development Life Cycle (SDLC) & Software Testing Life Cycle (STLC), Agile concept", output: "SDLC & STLC Flow design" },
                    { week: 3, topics: "Writing Test Scenarios, Test Case documentation, Test data preparation, Equivalence Partitioning", output: "Test Case Document" },
                    { week: 4, topics: "Test Execution, Jira Tool introduction, Defect tracking basics, Bug reporting", output: "Jira Dashboard setup" },
                ]
            },
            {
                title: "Phase 2: Specialized Testing & Tools (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "Agile Methodology, Scrum framework, Sprint Planning from QA perspective, User Stories", output: "Agile Test Plan" },
                    { week: 6, topics: "API basics, JSON/XML, Manual API Testing using Postman, Status codes validation", output: "Postman Collections" },
                    { week: 7, topics: "Web vs Mobile App testing challenges, Cross-browser testing, Responsive testing tools", output: "Responsive Testing Report" },
                    { week: 8, topics: "Relational Database concepts, Basic SQL Queries, Data validation testing", output: "SQL Validation Queries" },
                ]
            },
            {
                title: "Phase 3: QA Lifecycle & Real-World Projects (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "Defect Life Cycle in-depth, Root Cause Analysis, Severity vs Priority, Bug Triage meetings", output: "Defect Report" },
                    { week: 10, topics: "Introduction to Non-Functional Testing, Performance Testing basics, Security Testing awareness", output: "Performance Metrics Doc" },
                    { week: 11, topics: "Live implementation: Testing an E-commerce or Healthcare application end-to-end", output: "End-to-End Test Report" },
                    { week: 12, topics: "Test summary reports, QA process refinement, Resume building, Mock interviews", output: "Final QA Portfolio" },
                ]
            }
        ],
        outcomes: {
            certificate: "QA Manual Tester",
            portfolio: "Jira Boards, Test Suites, Bug Reports",
            career: "QA Analyst / Junior Software Tester"
        }
    },
    ui_ux: {
        title: "UI/UX Designer",
        description: "An intensive 12-week design boot-camp teaching user research, wireframing, prototyping, and modern interface design using Figma.",
        overview: [
            { week: "Week 1", topic: "Design Principles" },
            { week: "Week 2", topic: "User Research" },
            { week: "Week 3", topic: "Information Architecture" },
            { week: "Week 4", topic: "Wireframing" },
            { week: "Week 5", topic: "Figma Fundamentals" },
            { week: "Week 6", topic: "UI Design & Typography" },
            { week: "Week 7", topic: "Design Systems" },
            { week: "Week 8", topic: "High-Fidelity Prototyping" },
            { week: "Week 9", topic: "Usability Testing" },
            { week: "Week 10", topic: "Web vs Mobile UX" },
            { week: "Week 11", topic: "Portfolio Development" },
            { week: "Week 12", topic: "Case Study Presentation" },
        ],
        phases: [
            {
                title: "Phase 1: UX Foundations & Strategy (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "Intro to UI vs UX, Gestalt Principles, Color theory, Typography basics", output: "Visual Design Exercises" },
                    { week: 2, topics: "UX Research methods, User Interviews, Creating User Personas, Empathy Mapping", output: "User Persona Document" },
                    { week: 3, topics: "User Journeys, User Flows, Information Architecture, Card Sorting", output: "Sitemap & User Flow Diagram" },
                    { week: 4, topics: "Ideation, Sketching, Low-fidelity wireframing, Paper prototypes", output: "Low-Fi Wireframes" },
                ]
            },
            {
                title: "Phase 2: UI Design & Prototyping (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "Figma masterclass, Workspace, Tools, Frames, Constraints, Auto-layout", output: "Figma Replicas" },
                    { week: 6, topics: "Visual Hierarchy, Micro-interactions, Accessibility (A11y) in UI, Spacing rules", output: "High-Fi Screen Designs" },
                    { week: 7, topics: "Component libraries, Variants, Figma Tokens, Building a small Design System", output: "Mini Design System" },
                    { week: 8, topics: "Interactive Prototyping, Smart Animate, Page transitions, Designing for states", output: "Interactive Prototype" },
                ]
            },
            {
                title: "Phase 3: Validation & Portfolio (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "Usability Testing methods, A/B Testing, Heuristic Evaluation, Feedback synthesis", output: "Usability Test Report" },
                    { week: 10, topics: "Platform guidelines (Material Design vs Guidelines), Responsive layout design", output: "Cross-platform Designs" },
                    { week: 11, topics: "Building a portfolio, Writing UX Case Studies, Presenting design decisions", output: "Behance/Notion Portfolio" },
                    { week: 12, topics: "Final capstone project design iteration, Mock design interviews, Design handoff to devs", output: "Final Case Study Portfolio" },
                ]
            }
        ],
        outcomes: {
            certificate: "UI/UX Designer",
            portfolio: "Figma Prototypes & 2 Case Studies",
            career: "Junior UI/UX Designer / Product Designer"
        }
    },
    project_manager: {
        title: "IT Project Manager",
        description: "A 12-week program on managing software projects, Agile/Scrum methodologies, team coordination, and project delivery.",
        overview: [
            { week: "Week 1", topic: "Project Management Basics" },
            { week: "Week 2", topic: "SDLC & PM Frameworks" },
            { week: "Week 3", topic: "Agile & Scrum Deep Dive" },
            { week: "Week 4", topic: "Jira & Confluence Core" },
            { week: "Week 5", topic: "Requirement Gathering" },
            { week: "Week 6", topic: "Timeline & Estimation" },
            { week: "Week 7", topic: "Risk Management" },
            { week: "Week 8", topic: "Stakeholder Comms" },
            { week: "Week 9", topic: "Sprint Execution" },
            { week: "Week 10", topic: "Quality & Metrics" },
            { week: "Week 11", topic: "Capstone Sandbox" },
            { week: "Week 12", topic: "Certifications Prep" },
        ],
        phases: [
            {
                title: "Phase 1: PM Fundamentals & Agile (Weeks 1-4)",
                weeks: [
                    { week: 1, topics: "Role of a Tech PM, Triple Constraint, Waterfall vs Agile, Project Life Cycle", output: "Project Charter Document" },
                    { week: 2, topics: "Software Development Life Cycle (SDLC) for PMs, Methodologies comparison", output: "Methodology Selection Matrix" },
                    { week: 3, topics: "Scrum framework, Roles (PO, SM, Dev), Ceremonies, Artifacts, Kanban boards", output: "Scrum Ceremony Plan" },
                    { week: 4, topics: "Atlassian Suite: Jira (Epics, Stories, Tasks), Confluence setup, Boards configuration", output: "Jira Project Setup" },
                ]
            },
            {
                title: "Phase 2: Planning & Execution (Weeks 5-8)",
                weeks: [
                    { week: 5, topics: "Requirement engineering, Writing PRDs (Product Requirement Docs), Acceptance Criteria", output: "PRD & Backlog Creation" },
                    { week: 6, topics: "Story Point estimation, Planning Poker, Velocity tracking, Gantt charts, Roadmapping", output: "Project Roadmap & Schedule" },
                    { week: 7, topics: "Identifying project risks, Risk registry, Mitigation strategies, Issue management", output: "Risk Management Plan" },
                    { week: 8, topics: "Communication plans, Status reporting, Managing client expectations, Conflict resolution", output: "Status Report Template" },
                ]
            },
            {
                title: "Phase 3: Delivery & Leadership (Weeks 9-12)",
                weeks: [
                    { week: 9, topics: "Running Sprints, Backlog grooming, Removing blockers, Handling scope requirements", output: "Sprint Backlog Refinement" },
                    { week: 10, topics: "Tracking PM metrics (Burndown charts, Cycle time), Delivery quality, Post-mortems", output: "Sprint Retrospective Report" },
                    { week: 11, topics: "Simulated software delivery lifecycle: Managing a mock project from ideation to delivery", output: "Capstone PM Delivery" },
                    { week: 12, topics: "Scrum Master / PMP certification overview, Interview prep for PM roles, Leadership skills", output: "Interview Ready Profile" },
                ]
            }
        ],
        outcomes: {
            certificate: "IT Project Manager / Scrum Master",
            portfolio: "Jira Roadmaps, PRDs, Project Plans",
            career: "Junior Project Manager / Associate Scrum Master"
        }
    }
};

export default function ProgramsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 pb-16 flex items-center justify-center">Loading programs...</div>}>
            <ProgramsContent />
        </Suspense>
    );
}

function ProgramsContent() {
    const searchParams = useSearchParams();
    const defaultTab = searchParams.get("tab") || "mern";

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                        Professional Training Programs
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                        Full-Stack & <span className="gradient-text">Specialized</span> Development
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        12-Week Intensive Bootcamp designed to take you from beginner to industry-ready developer.
                    </p>
                </motion.div>

                {/* Course Tabs */}
                <Tabs defaultValue={defaultTab} className="w-full">
                    <TabsList className="flex flex-wrap items-center justify-center w-full h-auto p-1.5 bg-muted/50 backdrop-blur-sm rounded-xl mb-12 gap-1 md:gap-2">
                        <TabsTrigger value="mern" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">MERN Stack</TabsTrigger>
                        <TabsTrigger value="nodejs" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">Node.js</TabsTrigger>
                        <TabsTrigger value="react" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">React.js</TabsTrigger>
                        <TabsTrigger value="flutter" className="flex-1 min-w-[120px] max-w-[180px] py-2 md:py-3 text-xs md:text-sm rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-lg whitespace-nowrap">Flutter</TabsTrigger>
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
                                                <CardTitle className="text-3xl font-display">{course.title}</CardTitle>
                                                <CardDescription className="text-lg pt-2">{course.description}</CardDescription>
                                            </div>
                                            <div className="flex flex-col items-start sm:items-end bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                                                <span className="text-2xl font-bold font-display text-primary">₹15,000</span>
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
                                    Learning Path
                                </h2>
                                <div className="grid gap-6">
                                    {course.phases.map((phase, idx) => (
                                        <Card key={idx} className="glass-card border-none overflow-hidden">
                                            <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                                                <h3 className="font-semibold text-primary">{phase.title}</h3>
                                            </div>
                                            <CardContent className="p-0">
                                                {/* Desktop View - Hidden on Mobile */}
                                                <div className="hidden md:block">
                                                    <Table>
                                                        <TableHeader>
                                                            <TableRow className="hover:bg-transparent border-none">
                                                                <TableHead className="w-[100px] pl-6">Week</TableHead>
                                                                <TableHead>Topics Covered</TableHead>
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

                                                {/* Mobile View - Visible on Mobile Only */}
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

                            {/* Capstone & Evaluation */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card className="glass-card border-none">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Code className="text-primary" size={20} />
                                            Capstone Project Options
                                        </CardTitle>
                                        <CardDescription>Choose your domain for the final 12th week project</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4">
                                            {key === 'mern' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">E-commerce</p>
                                                            <p className="text-sm text-muted-foreground">Product store with cart & checkout system</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Social Platform</p>
                                                            <p className="text-sm text-muted-foreground">Real-time user posts & interactions</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Business CRM</p>
                                                            <p className="text-sm text-muted-foreground">Lead Management & Client relations system</p>
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'nodejs' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">E-commerce API</p>
                                                            <p className="text-sm text-muted-foreground">Scaleable products, orders, and users system</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">FinTech Backend</p>
                                                            <p className="text-sm text-muted-foreground">Secure wallet & transaction processing APIs</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Social API</p>
                                                            <p className="text-sm text-muted-foreground">Users, posts, and real-time interactions</p>
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'react' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">E-commerce UI</p>
                                                            <p className="text-sm text-muted-foreground">High-performance product listing & cart UI</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Analytics Dashboard</p>
                                                            <p className="text-sm text-muted-foreground">Business intelligence & data visualization</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Content Platform</p>
                                                            <p className="text-sm text-muted-foreground">Modern blog or high-end portfolio platform</p>
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'flutter' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <p className="font-medium">E-commerce / Booking App</p>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <p className="font-medium">Social Networking App</p>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <p className="font-medium">e-Learning Platform</p>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'manual_testing' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">E-commerce End-to-End Testing</p>
                                                            <p className="text-sm text-muted-foreground">Comprehensive test suite for shopping flows</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Healthcare App QA Sandbox</p>
                                                            <p className="text-sm text-muted-foreground">Compliance and security validation testing</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">FinTech API Testing Toolkit</p>
                                                            <p className="text-sm text-muted-foreground">Postman suites for financial APIs</p>
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'ui_ux' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">FinTech App Redesign</p>
                                                            <p className="text-sm text-muted-foreground">UX modernization for a banking application</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">On-Demand Delivery App</p>
                                                            <p className="text-sm text-muted-foreground">Consumer & Delivery driver interfaces</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Enterprise SaaS Dashboard</p>
                                                            <p className="text-sm text-muted-foreground">Complex data visualization & controls</p>
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                            {key === 'project_manager' && (
                                                <>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">EdTech Delivery Operations Plan</p>
                                                            <p className="text-sm text-muted-foreground">End-to-end launch of an education platform</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">Marketplace App Launch Strategy</p>
                                                            <p className="text-sm text-muted-foreground">Scrum rollout for a multi-vendor store</p>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                        <div>
                                                            <p className="font-medium">SaaS Integration Agile Delivery</p>
                                                            <p className="text-sm text-muted-foreground">Managing 3rd party API integration sprints</p>
                                                        </div>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="glass-card border-none">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <GraduationCap className="text-primary" size={20} />
                                            Evaluation Criteria
                                        </CardTitle>
                                        <CardDescription>How we measure your progress</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Weekly Assignments</span>
                                                    <span className="font-semibold">40%</span>
                                                </div>
                                                <div className="h-2 bg-muted rounded-full">
                                                    <div className="h-full bg-primary w-[40%] rounded-full" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Mini Projects</span>
                                                    <span className="font-semibold">30%</span>
                                                </div>
                                                <div className="h-2 bg-muted rounded-full">
                                                    <div className="h-full bg-accent w-[30%] rounded-full" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-muted-foreground">Final Capstone Project</span>
                                                    <span className="font-semibold">30%</span>
                                                </div>
                                                <div className="h-2 bg-muted rounded-full">
                                                    <div className="h-full bg-primary w-[30%] rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
