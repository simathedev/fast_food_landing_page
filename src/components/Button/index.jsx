'use client';
import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-scroll';

export default function index({title}) {
  return (
    <Link
    to="Food"
    spy={true}
    smooth={true}
    duration={500} className={`${styles.buttonContainer} py-3 px-2 w-[50%] text-center`}>
      <h1>{title}</h1>
      </Link>
  )
}
