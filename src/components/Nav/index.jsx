'use client';
import React, {useState} from 'react';
import styles from './style.module.scss';
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import NavMenu from './NavMenu';
import { Link as ScrollLink } from 'react-scroll';

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className={`${styles.main} flex flex-row items-right justify-end pr-24`}>
    <div className='fixed top-0 z-10 lg:hidden xl:hidden flex text-right justify-right items-right flex-row p-4 mr-4'>
      <IoMenu
        className='text-[2rem] text-orange-400'
        onClick={toggleMenu}
        style={{ display: menuOpen ? 'none' : 'block' }}
      />
      <FaTimes
        className='text-[1.5rem] absolute top-8 right-6 z-10 text-white'
        onClick={toggleMenu}
        style={{ display: menuOpen ? 'block' : 'none' }}
      />
    </div>
    {menuOpen && <NavMenu />}

    
      <div className={`${styles.navContainer} flex flex-row gap-4 md:hidden xs:hidden sm:hidden lg:block xl:block mr-6`}>        
     <>
      {menuLinks.map((link, i) => (
        <ScrollLink
          key={i}
          to={link.href}
          spy={true}
          smooth={true}
          duration={500}
        >
          <a className=''>
            {link.title}
          </a>
        </ScrollLink>
        
      ))}
      </>
       
  
        
      
       
      </div>
      
    </div>
    </>
  )
}
