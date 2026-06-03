import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: 'Present',
      role: 'Full Stack Developer',
      company: 'Current Company',
      description: 'Currently spearheading backend and frontend development for enterprise software solutions. Responsible for system architecture, API optimization, and leading feature implementations.',
      highlight: true
    },
    {
      year: '1 Year',
      role: 'Web Developer',
      company: 'Previous Company (2nd)',
      description: 'Developed responsive web applications and scalable APIs. Streamlined data pipelines and improved application load times by optimizing database queries and asset delivery.',
      highlight: false
    },
    {
      year: '1.5 Years',
      role: 'Junior Developer',
      company: 'Previous Company (1st)',
      description: 'Started my career building UI components and managing minor backend tasks. Rapidly grew into handling core features and complex state management using React and Node.js.',
      highlight: false
    },
    {
      year: 'Ongoing',
      role: 'Freelance Developer',
      company: 'Independent Contractor',
      description: 'Successfully completed 3 major freelance projects, including a fully custom E-Commerce platform, a School Data Management system, and a dynamic Quotation Generator for a B2B client.',
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
          Work <span className="text-accent">Experience.</span>
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
