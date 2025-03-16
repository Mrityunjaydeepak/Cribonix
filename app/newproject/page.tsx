"use client";

import React from 'react';
import {
  motion,
  useViewportScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import office from './images/Container.png'; // Ensure the path is correct
import Link from 'next/link';

// Define animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50 },
  },
};

const textRevealVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1, ease: 'easeInOut' },
  },
};

export default function Newproject() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useViewportScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="bg-[#040404]">
      {/* Image Section with Parallax Effect */}
      <motion.div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 1.1 },
          visible: { scale: 1, transition: { duration: 1 } },
        }}
        style={shouldReduceMotion ? {} : { y: yParallax }}
      >
        {/* Parallax Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${office.src})` }}
          initial={{ y: 0 }}
          animate={
            shouldReduceMotion ? {} : { y: [0, -50, 0] }
          }
          transition={
            shouldReduceMotion
              ? {}
              : { duration: 10, repeat: Infinity, ease: 'linear' }
          }
        />

        {/* Overlay Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-12 bg-black bg-opacity-50"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center leading-tight"
            variants={itemVariants}
          >Wait for the DHAMAKA!!
            <motion.span
              className="block overflow-hidden"
              variants={textRevealVariants}
            >
             
            </motion.span>
            <motion.span
              className="block mt-4 flex-col"
              variants={itemVariants}
            >
              
              <span className="text-[#FF7E5F]">Coming Soon!!</span>
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Decorative Animated Elements */}
        {/* Bottom-Right Decorative Element */}
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Top-Left Decorative Element */}
        <motion.div
          className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-[#6A11CB] to-[#2575FC] rounded-full opacity-70"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          },
        }}
      >
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-3xl mx-auto"
          whileHover={{ scale: 2.05, color: '#FF7E5F' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link href="/Contact">
            Ready to bring your vision to life? Let's connect and
            create something amazing together.
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
