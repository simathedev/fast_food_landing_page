'use client';
import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import {menuLinks,contactLink} from './data.js';
import { FaTwitter,FaFacebook, FaLinkedin  } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import SizzleStacksSVG from '../../../public/SizzlingStacks1.svg';
import { Link as ScrollLink } from 'react-scroll';

export default function index() {
    const footerLinks = [
    {
        title: <FaFacebook />,
        href: "/"
    },
    {
        title: <FaLinkedin />,
        href: "/"
    },
    {
        title: <AiFillInstagram />,
        href: "/"
    },
    {
        title: <FaTwitter />,
        href: "/"
    }
]
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAD961" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,245.3C640,245,800,203,960,202.7C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    <div className={`${styles.main} grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 p-4 bg-[#FAD961] flex flex-row`}>
      <div className='flex flex-col gap-2'>
      <Image src={SizzleStacksSVG} alt="SizzleStacks SVG" className=' w-[50%] xs:w-[50%]  sm:w-[40%]  md:w-[30%] lg:w-[60%]  xl:w-[60%] ' />
      {/*<h1>SizzleStacks</h1>*/}
      <p className='w-[50%] lg:block xl:block xs:hidden sm:hidden md:hidden'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, eveniet!</p>
      </div>
      <div className={`${styles.footerlink} flex flex-col gap-2`}>
      <h3 className='font-bold text-[1.4rem]'>Menu</h3>
      {menuLinks.map((link, i) => (
        <ScrollLink
        key={i}
        to={link.href} // Use the href as the target ID
        spy={true}
        smooth={true}
        duration={500}
      >
    <a key={`${i}`} href={link.href} className='xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'>
      {link.title} {/* Use the 'title' property instead of 'svg' */}
    </a>
    </ScrollLink>
  ))}
      </div>
      <div className={`${styles.footerlink} flex flex-col gap-3`}>
        <h3 className='font-bold text-[1.4rem]'>Social Media</h3>
        {footerLinks.map((link, i) => (
          <a key={`${i}`} href={link.href} className='xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'>
            {link.title}
          </a>
        ))}
      </div>

      <div className={`${styles.footerlink} flex flex-col gap-3`}>
        <h3 className='font-bold text-[1.4rem]'>Contact</h3>
        {contactLink.map((link, i) => (
          <a key={`${i}`} href={link.href} className='xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'>
            {link.title}
          </a>
        ))}
      </div>
      
    </div>
    <div className={`${styles.copyright} grid grid-cols-1 w-full `}>
      <p className=' bg-[#FAD961] pb-4 pt-2 px-3 w-full  xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]'> © 2023 Sizzling Stacks. All rights reserved.</p>

      </div>
    </>
  )
}
