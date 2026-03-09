import React from 'react';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    title: 'KOIN',
    role: 'Full Stack AI Finance Platform',
    date: 'October 2025 – Present',
    tech: ['Next.js App Router', 'Supabase (PostgreSQL)', 'Prisma', 'Inngest', 'Gemini API', 'ArcJet'],
    architecture: 'Serverless architecture integrating AI-driven insights via Gemini API and automated background workflows using Inngest.',
    impact: 'Engineered real-time financial dashboards and transaction analysis, significantly reducing user overspending through preemptive AI-driven budgeting alerts.',
    links: { github: 'https://github.com/LITHISHWRAN/Koin.git' }
  },
  {
    title: 'FLIPS',
    role: 'Real-time Fashion E-Commerce Platform',
    date: 'April 2025 – May 2025',
    tech: ['MongoDB Atlas', 'Express.js', 'React', 'Node.js', 'Socket.IO', 'JWT'],
    architecture: 'Event-driven WebSocket architecture for real-time customer-designer collaboration and secure JWT authentication layer.',
    impact: 'Deployed a scalable platform that empowered designers with global reach, incorporating real-time messaging and seamless e-commerce transactions.',
    links: { github: 'https://github.com/LITHISHWRAN/Fllips.git', figma: 'https://www.figma.com/design/VV2Q48XjwVoJQHgW7lCSTT/CapeStone-Highfid?node-id=0-1&t=P30bMHN2XvbvD49g-1' }
  }
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className={`container`}>
        <div className={styles.header}>
          <div className={styles.label}>// SYSTEM IMPLEMENTATIONS</div>
          <h2 className={styles.heading}>Selected Projects</h2>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectDate}>{project.date}</span>
              </div>
              <div className={styles.projectRole}>{project.role}</div>

              <div className={styles.techStack}>
                {project.tech.map((t, idx) => (
                  <span key={idx} className={styles.techItem}>{t}</span>
                ))}
              </div>

              <div className={styles.details}>
                <div className={styles.detailBlock}>
                  <h4>Architecture / Core Logic</h4>
                  <p>{project.architecture}</p>
                </div>
                <div className={styles.detailBlock}>
                  <h4>Impact / Usage</h4>
                  <p>{project.impact}</p>
                </div>
              </div>

              <div className={styles.actions}>
                <a href={project.links.github} className={styles.actionBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76 0-1.5-.5-2.8-1.4-3.8.1-.3.6-1.8-.1-3.8 0 0-1.2-.4-3.8 1.4-1.1-.3-2.3-.4-3.4-.4s-2.3.1-3.4.4C7.2 1.6 6 2 6 2c-.7 2-.2 3.5-.1 3.8C5 6.8 4.5 8.1 4.5 9.6c0 5.2 3 6.4 6 6.76-.7.6-1 1.7-1 3.24v4"></path>
                    <path d="M9 18c-3.1 1-5-1-5-3"></path>
                  </svg>
                  Repository
                </a>
                {project.links.figma && (
                  <a href={project.links.figma} className={styles.actionBtn}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                    </svg>
                    Figma
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
