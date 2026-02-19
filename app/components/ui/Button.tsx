'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

type AnimatedButtonProps = {
  text: string;
  variants?: Variants;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
};

const AnimatedButton = ({
  text,
  variants,
  type = 'button',
  onClick,
  className = '',
}: AnimatedButtonProps) => {
  return (
    <motion.button
      variants={variants}
      type={type}
      onClick={onClick}
      className={className}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedButton;
