import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Offline IT Internship in Lucknow | Skill Shiksha",
    description: "Join the best physical tech internship in Lucknow. Get hands-on training in MERN, React, HTML, CSS at our Lucknow center. Start your IT career today.",
    keywords: [
        "offline internship lucknow",
        "physical internship lucknow",
        "IT training lucknow",
        "lucknow tech courses",
        "offline MERN stack lucknow",
        "offline react course lucknow",
        "best software training in lucknow",
        "lucknow software development internship"
    ],
    openGraph: {
        title: "Offline IT Internship in Lucknow | Skill Shiksha",
        description: "Join the best physical tech internship in Lucknow. Get hands-on training at our development center.",
        url: "https://skillshiksha.ai/offline-internship-lucknow",
        siteName: "Skill Shiksha",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Offline IT Internship in Lucknow",
        description: "Start your IT career with hands-on, face-to-face mentorship at our Lucknow physical center.",
    },
};

export default function LucknowLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
