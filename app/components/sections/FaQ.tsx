'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

type FAQ = {
  question: string;
  answer: string;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};

const FaQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    { question: 'Are Auren pieces certified?', answer: 'Yes, all our pieces come with official certification of authenticity.' },
    { question: 'Do you offer personalisation or engraving?', answer: 'We offer bespoke engraving services for selected items in our collection.' },
    { question: 'How do I care for my jewellery or accessories?', answer: 'Gently wipe with a soft cloth and store in the provided case to maintain luster.' },
    { question: 'What is your return policy?', answer: 'We offer a 30-day return window for items in their original, unworn condition.' },
  ];

  return (
    <section className="bg-white py-20 px-4 flex flex-col items-center overflow-hidden">

      <motion.div
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif text-[#000000] mb-2">
          Frequently Asked Questions
        </motion.h2>

        <motion.p variants={itemVariants} className="text-[#000000] font-semibold text-2xl font-garamond ">
          Everything You Need To Know!
        </motion.p>
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div
        className="w-full max-w-2xl space-y-4 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border border-[#B39359] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center p-4">
              <span className="text-[#1C1C1D] font-garamond font-semibold text-xl md:text-base">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="px-4 pb-4 text-sm text-gray-500 font-upright leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter */}
      <motion.div
        className="w-full max-w-2xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-serif  md:text-3xl  font-light text-[#000000] uppercase mb-6">
          SIGN UP FOR AUREN UPDATES
        </motion.h3>

        <motion.p variants={itemVariants} className="text-[#000000]  font-garamond font-bold text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Get exclusive updates on the collection&apos;s launch, personalized communication and the House&apos;s latest news.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-end justify-center gap-4 sm:gap-0">
          <div className="w-full sm:w-80">
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full border-b border-[#B39359] py-2 text-xs tracking-widest text-[#9F8151] font-semibold focus:outline-none placeholder:text-[#B39359]/60"
            />
          </div>

          <button className="border font-semibold border-[#B39359] px-8 py-2 text-xs tracking-widest text-[#B39359] uppercase hover:bg-[#B39359] hover:text-white transition-all duration-300 sm:ml-4">
            Sign Up
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FaQ;
