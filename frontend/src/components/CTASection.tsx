"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-8 lg:py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute inset-0 bg-background/10 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary-foreground">
              Join the Next Batch
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Begin your upskilling Journey with one <span className="text-white font-bold underline underline-offset-4 Decoration-accent">Free Session</span>. Limited seats available. Apply now and start your journey to becoming a professional developer.
            </p>

            <Link href="/apply">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 text-base gap-2 font-semibold"
              >
                Apply Now <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
