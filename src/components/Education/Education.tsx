import React from 'react';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={`section ${styles.eduSection}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.eduBlock}>
          <div className={styles.label}>// ACADEMIC FOUNDATION</div>
          <h2 className={styles.heading}>Education</h2>
          <div className={styles.card}>
            <h3 className={styles.degree}>B.Tech in Computer Science (Software Product Engineering)</h3>
            <div className={styles.university}>Vels Institute of Science, Technology & Advanced Studies (VISTAS)</div>
            <div className={styles.program}>Kalvium's Undergraduate Program | Chennai</div>
          </div>
        </div>

        <div className={styles.achievementsBlock}>
          <div className={styles.label}>// EXTRACURRICULARS</div>
          <h2 className={styles.heading}>Achievements & Contributions</h2>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <span className={styles.listIcon}>{'->'}</span>
              <div>
                <h4>Hackathons & Competitions</h4>
                <p>Delivered solutions under tight constraints in 2 hackathons and a debugging event.</p>
              </div>
            </div>
            <div className={styles.listItem}>
              <span className={styles.listIcon}>{'->'}</span>
              <div>
                <h4>Technical Contributions</h4>
                <p>Contributed to departmental coding club via code reviews, project discussions, and knowledge sharing.</p>
              </div>
            </div>
            <div className={styles.listItem}>
              <span className={styles.listIcon}>{'->'}</span>
              <div>
                <h4>Interests</h4>
                <p>Calisthenics, software bug fixing, and troubleshooting new operating systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
