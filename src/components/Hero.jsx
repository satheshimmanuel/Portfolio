import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="container section" style={{ position: 'relative', minHeight: 'calc(100vh - 5rem)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Image & Overlays */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay)', pointerEvents: 'none' }} />
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', zIndex: 10 }}>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px' }}
        >
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
            FULL STACK DEVELOPER
          </span>

          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Hi, I'm Sathesh Immanvel <br />
            <span className="text-accent" style={{ display: 'inline-block', minHeight: '1.2em', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              <Typewriter words={['Full Stack Developer', 'MERN Stack Developer']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
            </span>
          </h1>
          
          <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            A passionate and dedicated Full-Stack Developer with 2.5 years of hands-on experience in building scalable web applications.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-accent" style={{ padding: '1rem 2rem', borderRadius: '3rem', color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', boxShadow: '0 10px 25px -5px var(--accent-color)', border: 'none', cursor: 'pointer' }}>
                View Work <ArrowRight size={20} />
              </motion.button>
            </a>
            <a href="/images/sathesh@immanuel.pdf" download="Sathesh_Immanuel_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '1rem 2rem', borderRadius: '3rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', cursor: 'pointer' }}>
                <Download size={20} /> Resume
              </button>
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
