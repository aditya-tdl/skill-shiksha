import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Offline IT Internships in Uttar Pradesh | Skill Shiksha",
    description: "Looking for offline tech internships in UP? Skill Shiksha offers intensive physical bootcamps across Uttar Pradesh. Master MERN, React, Flutter, and more.",
    keywords: [
        "offline internship UP",
        "physical internship uttar pradesh",
        "IT training UP",
        "software training institute uttar pradesh",
        "best tech courses UP",
        "offline coding classes UP"
    ],
    openGraph: {
        title: "Top Offline IT Internships in Uttar Pradesh",
        description: "Skill Shiksha offers intensive physical bootcamps across UP. Launch your tech career with offline mentorship.",
        url: "https://skillshiksha.ai/offline-internship-uttar-pradesh",
        siteName: "Skill Shiksha",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Offline IT Internships in Uttar Pradesh",
        description: "Skill Shiksha offers intensive physical bootcamps across UP for aspiring developers.",
    },
};

export default function UPLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
