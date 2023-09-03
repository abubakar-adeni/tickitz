import React from 'react';
import styles from '../styles/Loader.module.css'

const Loader = () => {

  const isResponsive = window.innerWidth >= 370 && window.innerWidth <= 760;

  return (
    <div className={`${styles.container} ${isResponsive ? styles.responsive : ''}`}>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <div className={styles.ring}></div>
      <span className={styles.loading}>Loading...</span>
    </div>
  );
};

export default Loader;
