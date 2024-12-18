import React, { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Fixed Portfolio Title */}
      <a className={styles.fixedTitle} href="/">Portfolio</a>
      
      {/* Navbar Menu */}
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? '/assets/nav/closeIcon.png' : '/assets/nav/menuIcon.png'}
          alt="Menu Icon"
          onClick={toggleMenu}
        />
        <ul
          className={`${styles.menuitems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.title}><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
         
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  );
};
