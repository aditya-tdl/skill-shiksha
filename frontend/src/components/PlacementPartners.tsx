"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  { name: "TCS", domain: "tcs.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "HCL", domain: "hcltech.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "Cognizant", domain: "cognizant.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Accenture", domain: "accenture.com" },
];

const PlacementPartners = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            Placement Network
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Our Alumni <span className="gradient-text">Work At</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by the top engineering and technology companies across India and the globe.
          </p>
        </motion.div>

        {/* CSS Marquee Container */}
        <div className="relative flex overflow-hidden group">
          <div className="flex gap-4 md:gap-6 animate-[infinite-scroll_25s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <motion.div
                key={`${partner.name}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.4 }}
                className="relative p-[1px] rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 shrink-0"
              >
                {/* Dynamic Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent dark:from-white/20 dark:to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                <div className="relative bg-secondary/50 dark:bg-slate-900/40 backdrop-blur-sm flex items-center justify-center gap-3 px-6 py-3 rounded-xl z-10 border border-border/30 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
                  {/* Free Google Favicon Fetcher */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?sz=128&domain=${partner.domain}`}
                      alt={`${partner.name} Logo`}
                      className="w-full h-full object-contain drop-shadow-sm"
                      loading="lazy"
                    />
                  </div>
                  {/* Company Name */}
                  <span className="font-semibold text-muted-foreground hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
