"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import officeEnv from "@/assets/office-env.jpg";
import officeTeam from "@/assets/office-team.jpg";
import heroOffice from "@/assets/hero-office.jpg";

const images = [
  { src: heroOffice, alt: "Modern open-plan office workspace", span: "md:col-span-2" },
  { src: officeEnv, alt: "Developer workstation with dual monitors", span: "" },
  { src: officeTeam, alt: "Team collaboration session at whiteboard", span: "" },
];

const OfficeGallery = () => {
  return (
    <section id="office" className="py-8 lg:py-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Office Environment</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A professional workspace designed for learning and building real products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`rounded-2xl overflow-hidden border border-border/50 ${img.span} relative h-64 md:h-72`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default OfficeGallery;
