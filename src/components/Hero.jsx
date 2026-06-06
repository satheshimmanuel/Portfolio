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
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '4rem', flexWrap: 'wrap', zIndex: 10 }}>
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ flex: 1.2, minWidth: '300px' }}
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
          
          <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '500px', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            A passionate and dedicated Full-Stack Developer with 2.5 years of hands-on experience in building scalable web applications.
          </p>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
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

        {/* Right Side: Image with Orbiting Animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Orbiting Rings */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: '50%', left: '50%', width: '120%', height: '120%', border: '1px dashed var(--accent-color)', borderRadius: '50%', transform: 'translate(-50%, -50%)', opacity: 0.3 }}
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: '50%', left: '50%', width: '140%', height: '140%', border: '1px solid var(--border-color)', borderRadius: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}
          />
          
          {/* Main Image */}
          <div className="glass" style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', position: 'relative', border: '4px solid var(--bg-secondary)', boxShadow: '0 0 50px rgba(0,0,0,0.5)', zIndex: 2 }}>
             <img 
               src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" 
               alt="Sathesh - Developer" 
               style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
