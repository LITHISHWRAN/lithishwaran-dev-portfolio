'use client';

import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const COMMAND_SEQUENCE = [
  { cmd: '> whoami', output: 'Lithishwaran V' },
  { cmd: '> cat role.txt', output: 'Software Product Engineer' },
  { cmd: '> ls tech_stack/', output: 'Node.js   Python   Next.js   React   PostgreSQL   MongoDB   Docker   AWS' },
  { cmd: '> ./deploy_to.sh --target="Google"', output: '[OK] Scalability: High\n[OK] Performance: Optimized\n[OK] Ready to innovate.' }
];

export default function Hero() {
  const [lines, setLines] = useState<{ type: 'cmd' | 'out', text: string }[]>([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentCmdIndex >= COMMAND_SEQUENCE.length) return;

    const currentCmd = COMMAND_SEQUENCE[currentCmdIndex];

    if (charIndex < currentCmd.cmd.length) {
      const timeout = setTimeout(() => {
        setCharIndex(p => p + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines(prev => [
          ...prev,
          { type: 'cmd', text: currentCmd.cmd },
          { type: 'out', text: currentCmd.output }
        ]);
        setCurrentCmdIndex(p => p + 1);
        setCharIndex(0);
      }, 500); // Delay before next command
      return () => clearTimeout(timeout);
    }
  }, [currentCmdIndex, charIndex]);

  return (
    <section className={styles.heroSection}>
      {/* Background SVG Grid */}
      <div className={styles.bgGrid}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className={`${styles.container} container`}>
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.macButtons}>
              <span className={styles.close}></span>
              <span className={styles.minimize}></span>
              <span className={styles.maximize}></span>
            </div>
            <div className={styles.terminalTitle}>bash - root@lithishwaran:~</div>
          </div>
          <div className={styles.terminalBody}>
            {lines.map((line, i) => (
              <div key={i} className={line.type === 'cmd' ? styles.cmdLine : styles.outLine}>
                {line.text}
              </div>
            ))}

            {currentCmdIndex < COMMAND_SEQUENCE.length && (
              <div className={styles.currentTyping}>
                {COMMAND_SEQUENCE[currentCmdIndex].cmd.substring(0, charIndex)}
                <span className={styles.caret}></span>
              </div>
            )}
            {currentCmdIndex >= COMMAND_SEQUENCE.length && (
              <div className={styles.currentTyping}>
                <span className={styles.caret}></span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Architecting <span className={styles.highlight}>Scalable</span> Solutions.
          </h1>
          <p className={styles.description}>
            I engineer resilient full-stack systems, optimize data pipelines, and craft high-performance applications tailored to enterprise demands.
          </p>
        </div>
      </div>
    </section>
  );
}
