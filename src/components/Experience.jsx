import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '02-06-2025 - Current',
      role: 'MERN Stack Developer',
      company: 'Ocean Softwares, Chennai',
      description: 'Initially engineered CRM solutions, e-commerce platforms, and business forums. Later transitioned to building an ERP system, developing workflows, custom forms, and optimizing business processes.',
      highlight: true
    },
    {
      year: '01-02-2024 - 31-05-2025',
      role: 'Associate Full Stack Developer',
      company: 'Consortia 22, Chennai',
      description: 'Redesigned and modernized UI/UX for a vehicle sales dashboard, introducing Dark/Light Mode and improving user engagement. Revamped a car sales website with responsive design and theme toggle for better accessibility.',
      highlight: false
    },
    {
      year: 'Freelance',
      role: 'Full Stack Developer',
      company: 'Independent Contractor',
      description: 'Developed a comprehensive school data management system to streamline administrative tasks, and built a custom e-commerce platform from scratch tailored to a family business.',
      highlight: false
    },
    {
      year: 'April 2023 - Sep 2023',
      role: 'Front-End Development Course',
      company: 'Fabevy Institute of Technology, Tenkasi',
      description: 'Completed a comprehensive six-month course focusing on modern front-end technologies, strengthening skills in HTML, CSS, JavaScript, and React to build responsive web applications.',
      highlight: false
    },
    {
      year: 'Graduated 2023',
      role: 'BE in Mechanical Engineering (8.1 CGPA)',
      company: 'JP College of Engineering, Ayikudi',
      description: 'Completed bachelor\'s degree with a strong academic record, developing analytical and problem-solving skills before transitioning into software development.',
      highlight: false
    }
  ];

  return (
    <section className="container section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'radial-gradient(circle, transparent 0%, var(--bg-primary) 80%)', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
          Experience <span className="text-accent">& Education.</span>
        </h2>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        {/* Central Vertical Line */}
        <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--border-color)', transform: 'translateX(-50%)' }} />

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ 
                display: 'flex', 
                justifyContent: isEven ? 'flex-start' : 'flex-end', 
                paddingBottom: '4rem', 
                position: 'relative',
                width: '100%'
              }}
              className="timeline-item"
            >
              {/* Central Timeline Dot */}
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: exp.highlight ? 'var(--accent-color)' : 'var(--bg-secondary)',
                border: `4px solid var(--bg-primary)`,
                transform: 'translateX(-50%)',
                zIndex: 2,
                boxShadow: exp.highlight ? '0 0 15px var(--accent-color)' : 'none'
              }} />

              {/* Content Box */}
              <div 
                className="glass timeline-content" 
                style={{ 
                  width: '45%', 
                  padding: '2.5rem', 
                  borderRadius: '1.5rem', 
                  border: exp.highlight ? '1px solid var(--accent-color)' : '1px solid var(--border-color)', 
                  transition: 'transform 0.3s', 
                }}
              >
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {exp.year}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <div className="text-secondary" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 500 }}>{exp.company}</div>
                <p className="text-secondary" style={{ lineHeight: 1.8, fontSize: '1rem' }}>{exp.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .timeline-content:hover { transform: translateY(-5px); }
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; transform: none !important; }
          .timeline-item { justify-content: flex-end !important; }
          .timeline-dot { left: 20px !important; transform: translateX(-50%) !important; }
          .timeline-content { width: calc(100% - 50px) !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
