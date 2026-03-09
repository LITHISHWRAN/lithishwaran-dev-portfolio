import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Lithishwaran V</span>
          <span className={styles.role}>Software Product Engineer</span>
        </div>

        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/lithishwaran-v-" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/LITHISHWRAN" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/lithishvivek/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}
