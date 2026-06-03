import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Code2, Zap } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { label: 'Lines of Code', value: '500K+', icon: <Code2 size={24} /> },
    { label: 'Happy Users', value: '10K+', icon: <Users size={24} /> },
    { label: 'Uptime', value: '99.9%', icon: <Zap size={24} /> },
    { label: 'Awards Won', value: '3', icon: <Trophy size={24} /> },
  ];

  return (
    <section className="section container">
      <div 
        className="glass"
        style={{ 
          padding: '4rem', 
          borderRadius: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          textAlign: 'center',
          background: 'linear-gradient(145deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-color)' }}>
              {stat.icon}
            </div>
            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {stat.value}
            </div>
            <div className="text-secondary" style={{ fontSize: '1rem', fontWeight: 500 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
