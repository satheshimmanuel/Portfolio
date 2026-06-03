import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Total Exp', value: '2.5+ Yrs' },
    { label: 'Companies', value: '3' },
    { label: 'Freelance Projects', value: '3+' },
  ];

  return (
    <section className="container section" style={{ position: 'relative', minHeight: 'calc(100vh - 5rem)', display: 'flex', alignItems: 'center' }}>
      
      {/* VS Code / Coding Screen Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay-radial)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', zIndex: 10 }}>
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1.5, minWidth: '300px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--accent-color)' }} />
            <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>About Me</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            I build digital <span className="text-accent">solutions</span> that scale.
          </h2>
          
          <p className="text-secondary" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '600px' }}>
            As a Full Stack Developer, I have a diverse background working across three different tech companies alongside a successful freelance career. I specialize in engineering bespoke ERP systems, dynamic e-commerce platforms, and data management tools. My focus is turning complex business requirements into clean, maintainable, and highly performant software.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem' }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', borderLeft: '2px solid var(--accent-color)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', fontWeight: 600, color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image/Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
        >
          <div className="glass" style={{ width: '100%', maxWidth: '400px', padding: '2rem', borderRadius: '2rem', border: '1px solid var(--border-color)', position: 'relative' }}>
             <img 
               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" 
               alt="Code Workspace" 
               style={{ width: '100%', borderRadius: '1rem', marginBottom: '1.5rem' }} 
             />
             <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Corporate & Freelance</h3>
             <p className="text-secondary">Extensive experience across startups and enterprise environments.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
