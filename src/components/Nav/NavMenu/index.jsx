'use client';
import React from 'react';
import styles from './style.module.scss';
import { Link as ScrollLink } from 'react-scroll';

export default function index() {
    const menuLinks = [
        {
        title: "Home",
        href: "Home"
        },
        {
            title: "Featured",
            href: "Featured"
        },
        {
            title: "Menu",
            href: "Food"
        },
        {
            title: "Location",
            href: "Contact"
        },
        {
            title: "Contact",
            href: "Contact"
        }
]
return (
  <div className={`${styles.navContainer} xs:w-[60%] sm:w-[60%] md:w-[50%] shadow-md min-h-84 sticky top-4`}>
    <div className={`p-4 gap-4 flex flex-col text-center`}>
      {menuLinks.map((link, i) => (
        <ScrollLink
          key={i}
          to={link.href}
          spy={true}
          smooth={true}
          duration={500}
        >
          <a className='xs:text-[14px] sm:text-[14px] md:text-[22px] lg:text-[22px] xl:text-[22px]'>
            {link.title}
          </a>
        </ScrollLink>
      ))}
    </div>
  </div>
);
}
