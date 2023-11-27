import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Heading from './Heading';
import Description from './Description';
import SizzleStacksSVG from '../../../public/SizzlingStacks1.svg';
import description from '../../../public/description.svg';
import { GiFireBowl } from "react-icons/gi";
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function Index() {
  return (
    <>
      {/* Wrap homeContainer with motion.div */}
      <div
        className={`${styles.homeContainer} relative overflow-hidden flex justify-center items-center`}
      >
        {/* SVGs in the center */}
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} // Initial animation properties
        whileInView={{ opacity: 1, scale: 1 }} // Animation properties when component is mounted
        transition={{ duration: 0.4 }} // Animation duration
        className="absolute z-10 flex flex-col items-center">
          <Image src={SizzleStacksSVG} alt="SizzleStacks SVG" className=' w-[60%] xs:w-[80%]  sm:w-[80%]  md:w-[80%] lg:w-[80%]  xl:w-[80%] ' />
          <Image src={description} alt="description SVG" className='w-[40%] xs:w-[60%] sm:w-[60%] md:w-[40%] lg:w-[45%] xl:w-[45%] my-2' />
          
          {/* Use motion.button for animated button */}
          <motion.button
            whileHover={{ scale: 1.1 }} // Scale animation on hover
            whileTap={{ scale: 0.9 }} // Scale animation on tap
            className='gap-1 hover:bg-orange-800 xs:text-[16px] sm:text-[16px] md:text-[22px] lg:text-[22px] xl:text-[22px] bg-orange-500 text-bold text-white py-3 xs:w-[40%] sm:w-[40%] md:w-[30%] lg:w-[30%] xl:w-[30%] my-7 rounded-[12px] flex flex-row items-center justify-center'
          >
            <GiFireBowl />View Deals
          </motion.button>
        </motion.div>

        {/* Image behind the SVGs */}
        <motion.div
          initial={{ opacity: 0,scale: 0.2 }} // Initial scale is smaller
          whileInView={{ opacity: 1, scale: 1 }} // Scale on hover (2x bigger)
           // Scale on tap (back to original)
           transition={{ duration: 0.4 }}
          className='z-0'
        >
          <Image
            src={`/assets/main1.png`}
            alt={'burger image'}
            width={700}
            height={500}
            priority={true}
          />
        </motion.div>
        </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="z-0">
        <path fill="#FAD961" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,101.3C480,96,600,96,720,128C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
    </>
  );
}
