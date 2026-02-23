"use client";

import { motion } from "framer-motion";

const partners = [
  "TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Cognizant", "Tech Mahindra", "Accenture"
];

const PlacementPartners = () => {
  return (
    <section className="py-8 lg:py-10 border-y border-border/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl font-bold mb-2">
            Our Alumni Work At
          </h2>
          <p className="text-sm text-muted-foreground">Trusted by leading tech companies across India</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-xl bg-secondary/50 border border-border/30 text-muted-foreground font-semibold text-sm hover:text-foreground hover:border-primary/30 transition-all"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
