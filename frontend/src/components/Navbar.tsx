"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Latest Trends", href: "/latest-trends" },
  { label: "Mentors", href: "#mentors" },
  { label: "Office", href: "#office" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="flex -ml-12 gap-2">
          <Image
            src="/logo.png"
            alt="Skill Shiksha Logo"
            width={250}
            height={50}
            // className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/apply">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Apply Now
            </Button>
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
