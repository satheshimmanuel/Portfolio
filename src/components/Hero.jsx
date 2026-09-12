import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiMysql } from 'react-icons/si';

const skillsOrbit = [
  { icon: <FaReact color="#61dafb" size={24} />, name: 'React' },
  { icon: <FaJs color="#f7df1e" size={24} />, name: 'JavaScript' },
  { icon: <SiTypescript color="#3178c6" size={22} />, name: 'TypeScript' },
  { icon: <FaNodeJs color="#339933" size={24} />, name: 'Node.js' },
  { icon: <SiExpress color="var(--text-primary)" size={22} />, name: 'Express' },
  { icon: <SiMongodb color="#47a248" size={24} />, name: 'MongoDB' },
  { icon: <SiMysql color="#4479a1" size={24} />, name: 'MySQL' },
  { icon: <FaGitAlt color="#f05032" size={24} />, name: 'Git' }
];

const Hero = () => {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: 'calc(100vh - 70px)', backgroundColor: 'var(--bg-primary)', overflow: 'hidden', display: 'flex', alignItems: 'center', width: '100%', transition: 'background-color 0.3s ease', padding: '2rem 0' }}>

      {/* Background Pattern - subtle dots */}
      <div style={{ position: 'absolute', inset: 0, opacity: 'var(--bg-image-opacity, 0.05)', backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse', width: '100%', height: '100%', zIndex: 10 }}>

        {/* Left Content Area */}
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem 4rem', minWidth: '300px' }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', maxWidth: '600px' }}
          >
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: '10px' }}>
              <span>Hi, I'm Sathesh @ Immanuel</span>
              <span style={{ fontSize: '0.65em', color: 'var(--accent-color)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                A <span style={{ marginLeft: '10px', color: 'var(--text-primary)' }}><Typewriter words={['Full Stack Developer', 'MERN Stack Developer', 'Designer']} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={2000} /></span>
              </span>
            </h1>

            {/* Description */}
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '450px', marginBottom: '3rem', lineHeight: 1.8 }}>
              I'm a passionate and dedicated developer with extensive experience for over 2.5 years. My expertise is to create and design scalable web applications, modern UIs, and many more...
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'flex-start' }}>
              <a href="#projects" style={{ textDecoration: 'none' }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '0.8rem 2.5rem', borderRadius: '3rem', backgroundColor: 'var(--accent-color)', color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', border: 'none', cursor: 'pointer', letterSpacing: '1px', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)' }}>
                  MY WORK
                </motion.button>
              </a>
              <a href="/images/sathesh@immanuel.pdf" download="Sathesh_Immanuel_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '0.8rem 2.5rem', borderRadius: '3rem', backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.85rem', border: '1px solid var(--border-color)', cursor: 'pointer', letterSpacing: '1px' }}>
                  HIRE ME
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Image Area with Orbit Circle & Rotating Icons */}
        <div style={{ flex: '1 1 50%', position: 'relative', minHeight: '560px', minWidth: '340px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '580px', height: '580px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* Multi Concentric Orbit Rings behind image matching reference image */}
            <div 
              style={{
                position: 'absolute',
                width: '115%',
                height: '115%',
                borderRadius: '50%',
                border: '1.5px solid var(--border-color)',
                opacity: 0.45,
                pointerEvents: 'none'
              }} 
            />
            <div 
              style={{
                position: 'absolute',
                width: '95%',
                height: '95%',
                borderRadius: '50%',
                border: '1.5px solid var(--border-color)',
                opacity: 0.55,
                pointerEvents: 'none'
              }} 
            />
            <div 
              style={{
                position: 'absolute',
                width: '75%',
                height: '75%',
                borderRadius: '50%',
                border: '1.5px solid var(--border-color)',
                opacity: 0.65,
                pointerEvents: 'none'
              }} 
            />

            {/* Profile Image (Centered in foreground overlapping ring arcs - Perfectly Blended) */}
            <div style={{ width: '98%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10 }}>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src="/images/profile.png"
                alt="Sathesh Immanuel"
                style={{
                  width: '100%',
                  maxHeight: '620px',
                  objectFit: 'contain',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.3) 88%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.3) 88%, transparent 100%)',
                  filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.12))'
                }}
              />
            </div>

            {/* Rotating Skill Icons Container revolving around the profile image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                zIndex: 15
              }}
            >
              {skillsOrbit.map((skill, index) => {
                const total = skillsOrbit.length;
                const angle = (index / total) * 360;
                const radius = 250; // Orbit distance radius in pixels
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: `calc(50% + ${y}px - 27px)`,
                      left: `calc(50% + ${x}px - 27px)`,
                      width: '54px',
                      height: '54px',
                    }}
                  >
                    {/* Counter-rotate badge so icons remain upright while revolving */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="orbit-icon-badge"
                      title={skill.name}
                    >
                      {skill.icon}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </div>

      </div>

      <style>{`
        .orbit-icon-badge {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          border: 1.5px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .orbit-icon-badge:hover {
          transform: scale(1.15);
          border-color: var(--accent-color);
        }
      `}</style>
    </section>
  );
};

export default Hero;
