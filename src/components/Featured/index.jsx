import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Button from '../Button';
import New from '../../../public/New.svg';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      whileInView={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      transition={{ duration: 0.5 }} // Animation duration
      className={`${styles.main} justify-center items-center`}
    >
      <div className={`${styles.container} flex grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg: grid-cols-2 xl: grid-cols-2 w-[70%]`}>
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Initial animation properties for this div
          whileInView={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          className="flex flex-col justify-center p-4"
        >
          <Image src={New} alt="new burger SVG" className=' w-[50%] xs:w-[50%]  sm:w-[40%]  md:w-[80%] lg:w-[65%]  xl:w-[65%] ' />
          <h2 className="text-2xl mb-2 font-bold">Black Mamba Burger</h2>
          <h3>R89,99</h3>
          <p className="w-64 mb-4 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nulla ad illum soluta, perferendis deleniti deserunt enim quis voluptatum numquam.</p>
          <Button title='Try It Out' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Initial animation properties for this div
          whileInView={{ opacity: 1, x: 0 }} // Animation properties when component is mounted
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
          className="flex justify-left items-left"
        >
          <Image
            src={`/assets/main2.png`}
            alt={'burger image'}
            width={400}
            height={400}
            className='w-full'
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
