'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

type Section = {
  title: string;
  description: string;
  linkText: string;
  image: string;
  isReversed: boolean;
};

const FeatureCards: React.FC = () => {
  const sections: Section[] = [
    {
      title: 'For the Moments That Matter',
      description:
        "Some moments deserve more than words. Mark life's most meaningful occasions with pieces chosen to last — from intimate celebrations to milestones remembered forever.",
      linkText: 'Discover Gifts by Occasion',
      image: '/Heroimage/image (1).webp',
      isReversed: false,
    },
    {
      title: 'A Gesture, Perfected',
      description:
        'A gift is never just an object. It is intention, emotion, and memory, crafted with care and wrapped in timeless design — made to be treasured long after it is given.',
      linkText: 'Discover Signature Gifts',
      image: "/Heroimage/image (4).webp",
      isReversed: true,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col md:flex-row items-center ${
              item.isReversed ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-auto object-cover block shadow-sm"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-8 md:p-16 lg:p-24"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                {item.title}
              </h2>
              <p className="text-[#000000] leading-relaxed font-garamond mb-8 max-w-md font-bold">
                {item.description}
              </p>
              <a
                href="#"
                className="text-sm font-garamond tracking-widest text-[#C5A059] border-b border-[#C5A059] pb-1 hover:opacity-70 transition-opacity"
              >
                {item.linkText}
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
