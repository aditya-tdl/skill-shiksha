import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 lg:py-16">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <Link href="/" className="inline-block -ml-7 mb-2 flex items-start justify-start">
              <Image
                src="/logo.png"
                alt="Skill Shiksha Logo"
                width={150}
                height={40}
                className="h-8 md:h-10  object-cover"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              India's premier offline internship & training institute for aspiring developers.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((s) => (
                <Link key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/programs" className="hover:text-foreground transition-colors">MERN Internship</Link></li>
              <li><Link href="/programs" className="hover:text-foreground transition-colors">React Internship</Link></li>
              <li><Link href="/programs" className="hover:text-foreground transition-colors">Backend Internship</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/mentors" className="hover:text-foreground transition-colors">Mentors</Link></li>
              <li><Link href="/testimonials" className="hover:text-foreground transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>3/5 vijayant khand, lucknow, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 7905339856</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <span>hello@skillshiksha.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-10 pt-6 text-center text-xs text-muted-foreground">
          © 2026 SkillShiksha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
