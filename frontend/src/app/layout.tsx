import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Skill Shiksha - Real Skills, Real Experience | Top Tech Courses",
  description:
    "Join our hands-on internship programs. Work on live projects, learn from industry mentors, and launch your tech career. Top courses in development, React, UI/UX, and more.",
  keywords: [
    "skill",
    "skill tech",
    "skill shiksha",
    "development",
    "react top course",
    "web development internship",
    "tech courses",
    "learn react",
    "hands on coding",
    "live projects",
    "IT certifications",
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
    "Ui/UX",
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
    ""
  ],
  authors: [{ name: "Skill Shiksha" }],
  openGraph: {
    title: "Skill Shiksha - Top Tech Courses & Internships",
    description: "Work on live projects, learn from industry mentors, and launch your tech career with Skill Shiksha's hands-on programs.",
    url: "https://skillshiksha.ai",
    siteName: "Skill Shiksha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Shiksha - Real Skills, Real Experience",
    description: "Launch your tech career with top courses in development, React, and hands-on internships.",
  },
  icons: {
    icon: "/logo.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${outfit.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Google tag (gtag.js) */}
          <GoogleAnalytics gaId="AW-17997259530" />
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
