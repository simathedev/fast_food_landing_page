import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import styles from './style.module.scss';
import Image from 'next/image';
import ContactUsSVG from '../../../public/ContactUs.svg';

export default function Index() {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`${styles.main} flex flex-col items-center justify-center`}
    >
      {/* Top Bun */}
      <div className="h-16  xs:w-[80%] sm:w-[80%] md:w-[65%] lg:w-[65%] xl:w-[65%] w-[65%] bg-yellow-300 rounded-t-xl mb-4"></div>
      {/* Middle Layer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="bg-orange-400 xs:w-[80%] sm:w-[80%] md:w-[65%] lg:w-[65%] xl:w-[65%] w-[65%] h-50 mb-4 flex flex-col items-center justify-center py-8 rounded-md"
      >
        <motion.h2 variants={textVariants} className="py-4 text-[1.6rem] font-bold">
          Contact Us
        </motion.h2>
        <FaLocationArrow />
        <motion.p variants={textVariants} className="pb-4 pt-2">
          32 Diners St, Rosebank, Sandton, 2196
        </motion.p>
        <FaEnvelope />
        <motion.p variants={textVariants} className="pb-4 pt-2">
          hello@sizzlestacks.co.za
        </motion.p>
        <FaPhoneAlt />
        <motion.p variants={textVariants} className="pb-4 pt-2">
          +27114559090
        </motion.p>
      </motion.div>
      {/* Bottom Bun */}
      <div className="h-16 xs:w-[80%] sm:w-[80%] md:w-[65%] lg:w-[65%] xl:w-[65%] w-[65%] bg-yellow-300 rounded-b-xl"></div>
    </motion.div>
  );
}
