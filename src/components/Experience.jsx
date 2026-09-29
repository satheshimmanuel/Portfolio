import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Building2, Award } from 'lucide-react';

const workExperiences = [
  {
    period: '2025 – PRESENT',
    role: 'MERN Stack Software Engineer',
    company: 'Ocean Softwares',
    location: 'Chennai, India',
    current: true,
    highlights: [
      'Architecting enterprise ERP core modules, custom form engines, and quotation automation.',
      'Engineered automated B2B quotation generation using PDF-Lib, accelerating client cycle time by 40%.',
      'Developed high-performance RESTful APIs & MongoDB aggregation pipelines for high-traffic apps.'
    ]
  },
  {
    period: '2024 – 2025',
    role: 'Associate Full Stack Developer',
    company: 'Consortia 22',
    location: 'Chennai, India',
    current: false,
    highlights: [
      'Engineered vehicle sales dashboards with reactive state control and clean component architecture.',
      'Designed responsive theme design systems, improving accessibility and user retention.',
      'Integrated payment gateways and optimized client-side bundle size with Vite.'
    ]
  },
  {
    period: '2023 – 2024',
    role: 'Full Stack Contractor',
    company: 'Independent Freelance',
    location: 'Remote',
    current: false,
    highlights: [
      'Developed school data management platform to eliminate manual paper records and automate grades.',
      'Built custom retail e-commerce solutions with cart logic and inventory control.'
    ]
  }
];

const educationExperiences = [
  {
    period: '2023',
    role: 'Full-Stack & React Immersion',
    company: 'Fabevy Institute of Technology',
    location: 'Tenkasi, India',
    current: false,
    highlights: [
      '6 months of intensive production training in modern web engineering and REST APIs.',
      'Deep dive into React lifecycle, asynchronous JS, and database architecture.'
    ]
  },
  {
    period: '2019 – 2023',
    role: 'B.E. in Mechanical Engineering',
    company: 'JP College of Engineering',
    location: 'Ayikudi, India',
    current: false,
    highlights: [
      'Graduated with First Class Academic Distinction (8.1 CGPA).',
      'Developed solid analytical problem-solving skills and structured system design thinking.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container" style={{ position: 'relative', zIndex: 2 }}>
      {/* Tunis Section Header */}
      <div className="tunis-section-title-wrap">
        <div className="tunis-watermark">EXPERIENCE</div>
        <h2 className="tunis-title-foreground">
          EXPERIENCE & <span>EDUCATION</span>
        </h2>
      </div>

      {/* 2-Column Split: Experience & Education with Elevated Cards */}
      <div className="tunis-resume-grid">
        {/* Left Column: Work Experience */}
        <div className="resume-column">
          <div className="resume-col-header">
            <div className="resume-col-icon">
              <Briefcase size={20} />
            </div>
            <h3 className="resume-col-title">EXPERIENCE</h3>
          </div>

          <div className="tunis-timeline-list">
            {workExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="tunis-timeline-wrapper"
              >
                <div className="tunis-timeline-card">
                  <div className="timeline-card-header">
                    <span className={`tunis-date-badge ${exp.current ? 'current' : ''}`}>
                      {exp.period}
                    </span>
                    <div className="tunis-item-location">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>

                  <h4 className="tunis-item-title">{exp.role}</h4>
                  <div className="tunis-item-company">
                    <Building2 size={14} />
                    <span>{exp.company}</span>
                  </div>

                  <ul className="tunis-item-desc">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="resume-column">
          <div className="resume-col-header">
            <div className="resume-col-icon">
              <GraduationCap size={20} />
            </div>
            <h3 className="resume-col-title">EDUCATION</h3>
          </div>

          <div className="tunis-timeline-list">
            {educationExperiences.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="tunis-timeline-wrapper"
              >
                <div className="tunis-timeline-card">
                  <div className="timeline-card-header">
                    <span className="tunis-date-badge">
                      {edu.period}
                    </span>
                    <div className="tunis-item-location">
                      <MapPin size={12} /> {edu.location}
                    </div>
                  </div>

                  <h4 className="tunis-item-title">{edu.role}</h4>
                  <div className="tunis-item-company">
                    <Award size={14} />
                    <span>{edu.company}</span>
                  </div>

                  <ul className="tunis-item-desc">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tunis-resume-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          margin-top: 1rem;
          position: relative;
          z-index: 2;
        }

        .resume-column {
          display: flex;
          flex-direction: column;
        }

        .resume-col-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .resume-col-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-highlight);
          color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .resume-col-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.04em;
          margin: 0;
        }

        .tunis-timeline-list {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tunis-timeline-wrapper {
          position: relative;
          width: 100%;
        }

        .tunis-timeline-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          padding: 1.5rem 1.65rem;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          z-index: 2;
        }

        .tunis-timeline-card:hover {
          border-color: var(--border-highlight);
          transform: translateY(-4px);
          box-shadow: 0 16px 35px -8px rgba(0, 0, 0, 0.55);
        }

        .timeline-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .tunis-date-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--accent-color);
          background-color: var(--accent-soft);
          border: 1px solid var(--border-highlight);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          letter-spacing: 0.05em;
        }

        .tunis-date-badge.current {
          background: var(--accent-gradient);
          color: #111111;
          border-color: var(--accent-color);
        }

        .tunis-item-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .tunis-item-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: 0.35rem;
        }

        .tunis-item-company {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 0.85rem;
        }

        .tunis-item-desc {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tunis-item-desc li {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 1.15rem;
        }

        .tunis-item-desc li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
          font-size: 1.15rem;
          line-height: 1;
        }

        @media (max-width: 992px) {
          .tunis-resume-grid {
            grid-template-columns: 1fr;
            gap: 2.75rem;
          }
        }

        @media (max-width: 600px) {
          .tunis-timeline-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
