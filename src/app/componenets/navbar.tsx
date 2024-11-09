import React from 'react';
import Link from 'next/link';
import styles from '../style/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Sana Khalid</h1>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#home" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link href="#about" className={styles.link}>About</Link>
          </li>
          <li>
            <Link href="#skills" className={styles.link}>Skills</Link>
          </li>
          <li>
            <Link href="#services" className={styles.link}>Services</Link>
          </li>
          <li>
            <Link href="#projects" className={styles.link}>Projects</Link>
          </li>
          <li>
            <Link href="#contact" className={`${styles.link} ${styles.marginRight}`}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
