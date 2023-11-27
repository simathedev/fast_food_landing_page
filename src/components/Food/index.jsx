'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import MenuIcons from './MenuIcons';
import MenuItems from './MenuItems';
import { Burgers, Pizzas, Drinks, Sides } from './data'; 

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className={`${styles.main}`}>
      <MenuIcons setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <MenuItems
        Burgers={Burgers}
        Pizzas={Pizzas}
        Drinks={Drinks}
        Sides={Sides}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
