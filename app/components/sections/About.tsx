"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Category {
  name: string;
  src: string;
}

const categories: Category[] = [
  { name: "Jewellery", src: "/Heroimage/image (5).webp" },
  { name: "Bags", src: "/Heroimage/image (6).webp" },
  { name: "Watches", src: "/Heroimage/image (7).webp" },
  { name: "Fragrances", src: "/Heroimage/image (8).webp" },
  { name: "Accessories", src: "/Heroimage/image (9).webp" },
  { name: "Gifts", src: "/Heroimage/image (10).webp" },
];

/* Parent stagger */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* Card / image animation */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

/* Text blur animation */
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const Categories: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.div
          className="text-center mb-16"
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-black">About Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 max-w-[1400px] mx-auto">
          <div className="hidden lg:block lg:col-span-6"></div>

          <motion.div
            className="lg:col-span-6 xl:col-span-5 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h3 variants={textVariants} className="text-2xl md:text-3xl font-semibold text-black mb-8">
              Brand Philosophy
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-4 text-[#000000] font-medium leading-relaxed font-garamond">
              <motion.p variants={textVariants}>
                At Auren, every creation begins with intention. We believe true luxury lies in restraint — in thoughtful design, precise detail, and pieces that endure beyond trends. From fine jewellery to modern essentials, each collection reflects a quiet confidence designed to accompany life’s most meaningful moments. Each piece is designed to stand alone, yet belong to a larger story of modern elegance. Our pieces are created using responsibly sourced materials and refined processes, balancing tradition with innovation. Every detail is carefully considered to ensure longevity, authenticity, and enduring beauty.
              </motion.p>
            </motion.div>

            <motion.div variants={textVariants} className="pt-4">
              <button className="text-[#9F8151] font-garamond tracking-widest text-sm uppercase border-b border-transparent hover:border-[#a38a5f] transition-all duration-300">
                Read More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="bg-white py-16 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12 text-black"
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            Shop by Category
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {categories.map((cat, index) => (
              <motion.div key={index} variants={cardVariants} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full aspect-square bg-gradient-to-b from-[#94ac8c] to-[#4a5d44] overflow-hidden mb-4">
                  <Image src={cat.src} alt={cat.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-lg font-garamond text-black">{cat.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Categories;
