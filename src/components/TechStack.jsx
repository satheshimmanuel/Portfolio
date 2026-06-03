import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techList = [
    'React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 
    'AWS EC2', 'PM2', 'Nginx', 'Tailwind CSS', 'Redux', 'GraphQL'
  ];

  // Duplicate the list to create a seamless infinite loop
  const marqueeItems = [...techList, ...techList, ...techList];

  return (
    <section className="section" style={{ overflow: 'hidden', padding: '4rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <motion.div
          animate={{ x: [0, -1035] }} // Adjust value based on content width or use percent
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}
          style={{ display: 'flex', gap: '4rem', paddingRight: '4rem' }}
        >
          {marqueeItems.map((tech, index) => (
            <span 
              key={index} 
              style={{ 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'transparent',
                WebkitTextStroke: '1px var(--text-secondary)',
                opacity: 0.5,
                transition: 'all 0.3s'
              }}
              className="tech-item"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.WebkitTextStroke = '0px';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'transparent';
                e.currentTarget.style.WebkitTextStroke = '1px var(--text-secondary)';
                e.currentTarget.style.opacity = '0.5';
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
