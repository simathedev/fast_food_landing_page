'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { Burgers, Pizzas, Drinks, Sides } from '../data';
import styles from './style.module.scss';

const CategoryContainer = ({ items, category, selectedCategory }) => {
  if (selectedCategory !== 'All' && selectedCategory !== category) {
    return null; // Hide if not 'All' and not the selected category
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className="mb-8 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%]">
        {items
          .filter((item) => selectedCategory === 'All' || item.category === selectedCategory)
          .map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden ${styles.card} flex flex-col`}
            >
              <div className="relative min-h-64 xs:min-h-44 sm:min-h-44 md:min-h-64 lg:min-h-64 xl:min-h-64 flex flex-col">
                <Image src={item.image} alt={item.name} width={200} height={200} className="w-full" />
              </div>
              <div className="p-4">
                <h2 className="text-xl mb-2">{item.name}</h2>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

const MenuItems = ({ selectedCategory }) => {
  return (
    <div className="container mx-auto py-8">
      <CategoryContainer items={Burgers} category="Burgers" selectedCategory={selectedCategory} />
      <CategoryContainer items={Pizzas} category="Pizzas" selectedCategory={selectedCategory} />
      <CategoryContainer items={Drinks} category="Drinks" selectedCategory={selectedCategory} />
      <CategoryContainer items={Sides} category="Sides" selectedCategory={selectedCategory} />
    </div>
  );
};

export default MenuItems;


/*import React from 'react';
import Image from 'next/image';
import { Burgers, Pizzas, Drinks, Sides } from '../data';
import styles from './style.module.scss';

const CategoryContainer = ({ items, category }) => {
  return (
    <div className="mb-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%]">
        {items.map((item) => (
          <div key={item.id} className={`bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden ${styles.card} flex flex-col`}>
            <div className="relative min-h-64 xs:min-h-44 sm:min-h-44 md:min-h-64 lg:min-h-64 xl:min-h-64 flex flex-col">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className='w-full'
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div className="container mx-auto py-8">
      <CategoryContainer items={Burgers} category="Burgers" />
      <CategoryContainer items={Pizzas} category="Pizzas" />
      <CategoryContainer items={Drinks} category="Drinks" />
      <CategoryContainer items={Sides} category="Sides" />
    </div>
  );
}*/
