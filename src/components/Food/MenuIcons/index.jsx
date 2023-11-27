import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import {
  GiHamburger,
  GiFullPizza,
  GiFrenchFries,
  GiBoba,
  GiMeal,
} from 'react-icons/gi';
import styles from './style.module.scss';

export default function MenuIcons({ setSelectedCategory, selectedCategory }) {
  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${styles.main} flex flex-row items-center text-center justify-center`}>
      <div className={`${styles.iconsContainer} flex flex-row items-center text-center justify-center grid xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 w-[60%]`}>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.iconContainer} ${selectedCategory === 'All' ? styles.selected : ''}`}
          onClick={() => setSelectedCategory('All')}
        >
          <GiMeal />
          <h3>All</h3>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.iconContainer} ${selectedCategory === 'Burgers' ? styles.selected : ''}`}
          onClick={() => setSelectedCategory('Burgers')}
        >
          <GiHamburger />
          <h3>Burgers</h3>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.iconContainer} ${selectedCategory === 'Pizzas' ? styles.selected : ''}`}
          onClick={() => setSelectedCategory('Pizzas')}
        >
          <GiFullPizza />
          <h3>Pizzas</h3>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.iconContainer} ${selectedCategory === 'Sides' ? styles.selected : ''}`}
          onClick={() => setSelectedCategory('Sides')}
        >
          <GiFrenchFries />
          <h3>Sides</h3>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.iconContainer} ${selectedCategory === 'Drinks' ? styles.selected : ''}`}
          onClick={() => setSelectedCategory('Drinks')}
        >
          <GiBoba />
          <h3>Drinks</h3>
        </motion.div>
      </div>
    </div>
  );
}

