import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa';

const Hero = () => {
  return (
    <section style={{ position: 'relative', height: 'calc(100vh - 5rem)', maxHeight: 'calc(100vh - 5rem)', backgroundColor: '#050507', overflow: 'hidden', display: 'flex', alignItems: 'center', width: '100%' }}>

      {/* Background Pattern - subtle dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse', width: '100%', height: '100%', zIndex: 10 }}>

        {/* Left Content Area */}
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem 4rem', minWidth: '300px' }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', maxWidth: '600px' }}
          >
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '-0.02em', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '10px' }}>
              <span>Hi, I'm Sathesh @ Immanuel</span>
              <span style={{ fontSize: '0.65em', color: '#3b82f6', marginTop: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                A <span style={{ marginLeft: '10px', color: '#ffffff' }}><Typewriter words={['Full Stack Developer', 'MERN Stack Developer', 'Designer']} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={2000} /></span>
              </span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', color: '#888888', maxWidth: '450px', marginBottom: '3rem', lineHeight: 1.8 }}>
              I'm a passionate and dedicated developer with extensive experience for over 2.5 years. My expertise is to create and design scalable web applications, modern UIs, and many more...
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'flex-start' }}>
              <a href="#projects" style={{ textDecoration: 'none' }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '0.8rem 2.5rem', borderRadius: '3rem', backgroundColor: '#3b82f6', color: 'white', fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer', letterSpacing: '1px', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)' }}>
                  MY WORK
                </motion.button>
              </a>
              <a href="/images/sathesh@immanuel.pdf" download="Sathesh_Immanuel_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '0.8rem 2.5rem', borderRadius: '3rem', backgroundColor: '#ffffff', color: '#000000', fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer', letterSpacing: '1px' }}>
                  HIRE ME
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <div style={{ flex: '1 1 50%', position: 'relative', height: '100%', minWidth: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '85%', height: '85%' }}>
            {/* Left mask fade */}
            <div style={{ position: 'absolute', inset: 0, WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)', maskImage: 'linear-gradient(to right, transparent 0%, black 25%)' }}>
              {/* Bottom mask fade */}
              <div style={{ position: 'absolute', inset: 0, WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)', maskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}>
                <img
                  src="/images/profile.png"
                  alt="Sathesh Immanvel"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', filter: 'grayscale(100%) contrast(110%) brightness(85%)' }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
