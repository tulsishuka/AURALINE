"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnimatedButton from "../ui/Button";
/* Stagger parent */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* Image animation */
const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

/* Text blur → clear */
const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 overflow-hidden">

      {/* Images */}
      <motion.div
        className="max-w-[1400px] mx-auto flex flex-nowrap items-center justify-center gap-2 md:gap-4 lg:gap-5 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={imageVariants} className="relative w-[18%] aspect-[3/4]">
          <Image src="/Heroimage/image.webp" alt="Jewellery" fill className="object-cover" />
        </motion.div>

        <motion.div variants={imageVariants} className="relative w-[14%] aspect-[3/4] self-start mt-4">
          <Image src="/Heroimage/image (1).webp" alt="Interior" fill className="object-cover" />
        </motion.div>

        <motion.div variants={imageVariants} className="relative w-[14%] aspect-square self-end mb-4">
          <Image src="/Heroimage/image (2).webp" alt="Bag and Watch" fill className="object-cover" />
        </motion.div>

        <motion.div variants={imageVariants} className="relative w-[14%] aspect-[3/4] self-start mt-4">
          <Image src="/Heroimage/ring.webp" alt="Ring" fill className="object-cover" />
        </motion.div>

        <motion.div variants={imageVariants} className="relative w-[20%] aspect-square self-start">
          <Image src="/Heroimage/image (3).webp" alt="Necklace" fill className="object-cover" />
        </motion.div>

        <motion.div variants={imageVariants} className="relative w-[14%] aspect-[4/5] self-end mb-8">
          <Image src="/Heroimage/image (4).webp" alt="Perfume" fill className="object-cover" />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.h1
          variants={textVariants}
          className="text-3xl font-serif md:text-4xl lg:text-4xl  tracking-tight text-[#1C1C1D] mb-3"
        >
          Crafted to Be Remembered, Worn to Be Felt
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl font-garamond font-semibold text-[#1C1C1D] mb-8"
        >
          Fine jewellery & modern luxury essentials
        </motion.p>


       <AnimatedButton
  text="Explore Collections"
  variants={textVariants}
  className="bg-[#a38a5f] font-garamond font-semibold hover:bg-[#8e7751]
  text-white px-12 py-3.5 text-xs tracking-[0.2em] uppercase
  transition-all duration-300"
/>

      </motion.div>

    </section>
  );
};

export default Hero;
