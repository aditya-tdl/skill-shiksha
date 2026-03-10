import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Professional Training Programs | Skill Shiksha",
    description: "Explore our 12-week intensive bootcamps in MERN Stack, Node.js, React, Flutter, DevOps, QA Testing, UI/UX, and Project Management. Launch your tech career today.",
    keywords: [
        "tech courses",
        "bootcamp",
        "MERN stack development",
        "Node.js developer",
        "React frontend developer",
        "Flutter app development",
        "DevOps training",
        "QA manual testing",
        "UI/UX design course",
        "IT project management",
        "full stack developer course",
        "12-week bootcamp",
        "tech internships",
        "mobile app development",
        "android app development",
        "ios app development",
        "flutter app development",
        "mern stack development",
        "devops",
        "docker",
        "kubernetes",
        "cloud computing",
        "aws",
        "google cloud",
        "azure",
        "cloud computing",
        "project management",
        "agile methodology",
        "scrum methodology",
        "product development",
        "product management",
        "product design",
        "ui/ux",
        "ui/ux",
        "ui/ux design",
        "ui/ux development",
        "software development",
        "web development",
        "website development",
        "lucknow",
        "up",
        "up internship",
        "lucknow internship",
        "up internship program",
        "lucknow internship program",
    ],
    openGraph: {
        title: "Professional Training Programs | Skill Shiksha",
        description: "Launch your tech career with our 12-week intensive bootcamps. Top courses in full-stack, frontend, mobile app development, and more.",
        url: "https://skillshiksha.ai/programs",
        siteName: "Skill Shiksha",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional Training Programs | Skill Shiksha",
        description: "Launch your tech career with our 12-week intensive bootcamps in MERN, React, Flutter, and more.",
    },
};

export default function ProgramsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
