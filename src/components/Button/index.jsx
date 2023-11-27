import React from 'react';
import styles from './style.module.scss';

export default function index({title}) {
  return (
    <div className={`${styles.buttonContainer} py-3 px-2 w-[50%] text-center`}><h1>{title}</h1></div>
  )
}
