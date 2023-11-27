'use client'
import React from 'react'
import styles from './style.module.scss'

export default function index({title}) {
  return (
    <div className={`${styles.main}`}>
        <h1> {title}</h1>
    {/* <h3>Serving sizzlin' satisfaction</h3> */}
    </div>
  )
}
