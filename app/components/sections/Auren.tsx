'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import AnimatedButton from '../ui/Button';

/* Animation variants */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
};

const Six: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* <Image
          src="/HeroImage/contact.webp"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
          width={2000}
          height={1500}
        /> */}
        <div className="absolute inset-0 bg-black/5"></div>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="relative z-10 w-full max-w-md bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >

        {/* Header */}
        <motion.div className="text-center mb-10" variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium font-playfair tracking-wide text-[#1C1C1D] mb-2">
            GET IN TOUCH
          </motion.h2>

          <motion.p variants={itemVariants} className="text-[#1C1C1D] font-playfair font-medium italic">
            You can reach us anytime
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form className="space-y-5" variants={containerVariants}>
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1D] font-garamond ml-1">First Name</label>
              <input type="text" className="w-full border border-[#9F8151] rounded-full py-2 px-4 focus:outline-none focus:border-stone-400 transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1D] font-garamond ml-1">Last Name</label>
              <input type="text" className="w-full border border-[#9F8151] rounded-full py-2 px-4 focus:outline-none focus:border-stone-400 transition-colors" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1D] font-garamond ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input type="email" className="w-full border border-[#9F8151] rounded-full py-2 pl-11 pr-4 focus:outline-none focus:border-stone-400 transition-colors" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-[#1C1C1D] font-garamond ml-1">
              Tell us how we can help you
            </label>
            <textarea
              rows={4}
              className="w-full border border-[#9F8151] rounded-3xl py-3 px-4 focus:outline-none focus:border-stone-400 transition-colors resize-none"
            />
          </motion.div>

        

          <AnimatedButton
  text="Submit"
  type="submit"
  variants={itemVariants}
  className="w-full bg-[#A38A5F] hover:bg-[#8E774F] text-white
  font-semibold py-3 rounded-full font-garamond text-lg
  tracking-wide transition-colors shadow-md"
/>

        </motion.form>

        {/* Footer text */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center text-[15px] text-[#1C1C1D] font-garamond font-bold leading-relaxed  tracking-tighter"
        >
          <p>By interacting, you agree to our</p>
          <p>Terms of Service & Privacy Policy</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Six;
