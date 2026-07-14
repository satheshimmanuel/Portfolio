import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const techSkills = [
    'React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 
    'Material UI', 'Typescript', 'Node.js', 'Express.js', 'MySQL', 
    'MongoDB', 'Git', 'GitHub', 'RESTful APIs', 'Postman', 'Python'
  ];

  return (
    <div style={{ padding: '2rem 0', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ position: 'relative', display: 'flex', whiteSpace: 'nowrap' }}>
        
        {/* Left Fade */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-secondary), transparent)', zIndex: 10 }} />
        
        {/* Marquee Content */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '3rem', paddingRight: '3rem' }}
        >
          {/* Double array to create seamless loop */}
          {[...techSkills, ...techSkills].map((skill, index) => (
            <div 
              key={index} 
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                color: 'var(--text-primary)', 
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {skill}
              <span style={{ color: 'var(--accent-color)' }}>•</span>
            </div>
          ))}
        </motion.div>

        {/* Right Fade */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-secondary), transparent)', zIndex: 10 }} />
      </div>
    </div>
  );
};

export default Skills;
