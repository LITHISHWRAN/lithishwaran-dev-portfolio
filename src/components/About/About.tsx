import React from 'react';
import styles from './About.module.css';

const SKILLS = [
  { category: 'Languages', items: ['Python [Adv]', 'TypeScript', 'JavaScript', 'Java', 'C++'] },
  { category: 'Frontend Ecosystem', items: ['Next.js', 'React.js', 'Vite', 'Tailwind CSS'] },
  { category: 'Backend & APIs', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Inngest'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma', 'Supabase'] },
  { category: 'Infrastructure & Tools', items: ['Docker', 'AWS', 'Linux', 'Git', 'Vercel', 'n8n', 'Figma'] }
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.statementArea}>
          <div className={styles.label}>// SYSTEM ARCHITECTURE & ENGINEERING</div>
          <h2 className={styles.heading}>Building High-Performance Systems</h2>
          <p className={styles.paragraph}>
            I am a Software Product Engineer specializing in modern full-stack development. 
            My expertise lies in architecting scalable applications with secure authentication, 
            complex database structures, and seamless cloud deployments. 
          </p>
          <p className={styles.paragraph}>
            Beyond writing code, I focus on system design, API optimization, and creating resilient infrastructure 
            using tools like Docker and AWS to ensure products scale effortlessly.
          </p>

          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>Advanced</span>
              <span className={styles.metricLabel}>Python Scripting</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>Full-Stack</span>
              <span className={styles.metricLabel}>Next.js / Node.js</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>Deployed</span>
              <span className={styles.metricLabel}>Cloud & Docker</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsArea}>
          <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
              <span>cat system_capabilities.json</span>
            </div>
            <div className={styles.terminalBody}>
              {SKILLS.map((skillGroup, i) => (
                <div key={i} className={styles.skillGroup}>
                  <div className={styles.skillCategory}>{skillGroup.category}:</div>
                  <div className={styles.skillItems}>
                    {skillGroup.items.map((item, j) => (
                      <span key={j} className={styles.skillBadge}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
