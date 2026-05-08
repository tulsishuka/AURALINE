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

type Service = {
  title: string;
  desc: string;
  link: string;
};

const FeaturedContent: React.FC = () => {
  const explorations = [
    {
      title: 'A New Chapter Unfolds',
      desc: 'An evolution of form and feeling — our latest creations arrive soon',
      link: 'Sign Up For Emails',
      img: '/Heroimage/image (13).webp',
    },
    {
      title: 'Redefining Everyday Luxury',
      desc: 'Designed to move effortlessly through modern life.',
      link: 'Discover the Collection',
      img: '/Heroimage/image (12).webp',
    },
    {
      title: 'The Story Behind the Craft',
      desc: 'A journey shaped by precision, passion, and purpose.',
      link: 'Explore Our Story',
      img: '/Heroimage/image (13).webp',
    },
    {
      title: 'Beyond Jewellery',
      desc: 'A considered selection of accessories - watches, fragrance, and refined essentials.',
      link: 'Explore Accessories',
      img: '/Heroimage/image (19).webp',
    },
  ];

  const services: Service[] = [
    { title: 'Book an Appointment', desc: 'Contact us to book in store or virtual appointments.', link: 'BOOK AN APPOINTMENT',  },
    { title: 'Shipping & Returns', desc: 'Complimentary shipping and returns on all orders.', link: 'LEARN MORE',  },
    { title: 'At Your Service', desc: 'Our client advisors are always here to help.', link: 'CONTACT US', },
    { title: 'Gift Services', desc: 'Add a personalized touch', link: 'SEE ALL GIFTS',  },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10 mx-auto overflow-hidden">
      {/* More to Explore */}
      <motion.div
        className="text-center mb-12"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-3xl font-serif text-gray-900">More to Explore</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {explorations.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="text-center flex flex-col items-center"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 w-full">
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <motion.h3 variants={textVariants} className="font-medium font-playfair text-xl mb-3">
              {item.title}
            </motion.h3>

            <motion.p
              variants={textVariants}
              className="text-sm text-[#000000] mb-4 font-bold font-garamond leading-relaxed max-w-[250px] h-12"
            >
              {item.desc}
            </motion.p>

            <motion.a
              variants={textVariants}
              href="#"
              className="text-xs font-garamond uppercase tracking-widest text-[#C5A059] border-b border-[#C5A059] pb-0.5 hover:opacity-70 transition-opacity"
            >
              {item.link}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Auren Services */}
      <motion.div
        className="text-center mb-16"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-3xl font-medium font-serif tracking-[0.1em] text-[#000000] uppercase">
          AUREN SERVICES
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="flex flex-col items-center text-center"
          >
           

            <motion.h3 variants={textVariants} className="text-lg font-playfair text-[#000000] font-semibold mb-4">
              {service.title}
            </motion.h3>

            <motion.p
              variants={textVariants}
              className="text-sm text-[#000000] mb-6 font-garamond font-semibold leading-relaxed max-w-[200px]"
            >
              {service.desc}
            </motion.p>

            <motion.a
              variants={textVariants}
              href="#"
              className="text-[10px] font-medium font-garamond tracking-widest text-[#9F8151] border-b border-[#C5A059] pb-0.5 hover:opacity-70 transition-opacity"
            >
              {service.link}
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedContent;
