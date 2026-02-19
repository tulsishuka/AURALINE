'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

/* Parent stagger */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

/* Card animation */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

/* Text blur → clear */
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
};

const Feature: React.FC = () => {
  const features = [
    {
      title: 'THE SIGNATURE TIMEPIECE',
      description:
        'A study in precision and restraint, where form meets function in perfect balance.',
      image: '/Heroimage/image (11).webp',
    },
    {
      title: 'THE SIGNATURE SCENT',
      description:
        "An intimate composition that leaves its mark long after the moment has passed.",
      image: '/Heroimage/image (12).webp',
    },
    {
      title: 'THE CARRY ICON',
      description:
        'Crafted lines and purposeful design, created to accompany every movement.',
      image: '/Heroimage/image (13).webp',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-16"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
          Lifestyle Feature Section
        </h2>
      </motion.div>

      {/* Feature Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1400px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full  aspect-square overflow-hidden mb-8">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <motion.h3
              variants={textVariants}
              className="text-xl font-semibold tracking-widest uppercase mb-4 text-black  font-playfair"
            >
              {item.title}
            </motion.h3>

            <motion.p
              variants={textVariants}
              className="text-[#000000] font-semibold font-garamond leading-relaxed italic mb-4 max-w-[300px]"
            >
              {item.description}
            </motion.p>

            <motion.a
              variants={textVariants}
              href="#"
              className="text-[#a38a5f] font-garamond text-sm tracking-widest uppercase border-b border-[#a38a5f] pb-1 hover:opacity-70 transition-all"
            >
              Discover
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feature;
