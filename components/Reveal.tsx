'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

type RevealProps = MotionProps & {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
