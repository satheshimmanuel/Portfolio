import React from 'react';
import { motion } from 'framer-motion';

// High-Tech Aerodynamic Cyber Race Car SVG Vector
const CyberRaceCar = ({ primaryColor = '#06B6D4', glowColor = 'rgba(6, 182, 212, 0.6)' }) => {
  return (
    <div style={{ position: 'relative', width: '130px', height: '65px', filter: `drop-shadow(0 0 15px ${glowColor})` }}>
      <svg
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Speed trail glow lines */}
        <path d="M 0 50 L 60 50" stroke={primaryColor} strokeWidth="3" strokeDasharray="8 4" opacity="0.6" />
        <path d="M 10 35 L 70 35" stroke={primaryColor} strokeWidth="2" strokeDasharray="12 6" opacity="0.4" />
        <path d="M 10 65 L 70 65" stroke={primaryColor} strokeWidth="2" strokeDasharray="12 6" opacity="0.4" />

        {/* Chassis / Aerodynamic Body */}
        <path
          d="M 50 50 Q 70 25 120 28 L 165 42 Q 185 48 190 52 L 180 58 Q 165 62 140 65 L 80 65 Q 55 60 50 50 Z"
          fill="url(#carBodyGrad)"
          stroke={primaryColor}
          strokeWidth="2"
        />

        {/* Cockpit Canopy */}
        <path
          d="M 95 36 Q 115 32 140 40 L 135 50 L 90 48 Z"
          fill={primaryColor}
          opacity="0.8"
        />

        {/* Rear Wing / Spoiler */}
        <path d="M 42 22 L 62 22 L 58 35 L 38 35 Z" fill={primaryColor} opacity="0.9" />
        <line x1="50" y1="35" x2="50" y2="48" stroke={primaryColor} strokeWidth="2.5" />

        {/* Front Splitter & Headlight Beams */}
        <polygon points="180,48 195,50 185,55" fill="#FFFFFF" />
        <circle cx="188" cy="50" r="3" fill="#FFFFFF" />
        <path d="M 188 50 L 260 30 L 260 70 Z" fill={`url(#headlightBeam-${primaryColor.replace('#','')})`} opacity="0.35" />

        {/* Wheels (3D Perspective Alloy Rims) */}
        {/* Rear Wheel */}
        <ellipse cx="78" cy="62" rx="14" ry="7" fill="#0E121A" stroke={primaryColor} strokeWidth="2.5" />
        <ellipse cx="78" cy="62" rx="6" ry="3" fill={primaryColor} />
        {/* Front Wheel */}
        <ellipse cx="152" cy="58" rx="13" ry="6.5" fill="#0E121A" stroke={primaryColor} strokeWidth="2.5" />
        <ellipse cx="152" cy="58" rx="5.5" ry="2.8" fill={primaryColor} />

        {/* Neon Underglow Line */}
        <line x1="65" y1="65" x2="165" y2="62" stroke={primaryColor} strokeWidth="3" opacity="0.9" />

        {/* Gradients */}
        <defs>
          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B0F19" />
            <stop offset="50%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id={`headlightBeam-${primaryColor.replace('#','')}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor={primaryColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const BackgroundRaceCars = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        perspective: '1200px'
      }}
      aria-hidden="true"
    >
      {/* Race Car 1: Cruising Diagonally from Top-Left to Bottom-Right */}
      <motion.div
        initial={{
          x: '-25vw',
          y: '-15vh',
          rotate: 26,
          rotateX: 25,
          scale: 0.95,
          opacity: 0
        }}
        animate={{
          x: ['-25vw', '125vw'],
          y: ['-15vh', '115vh'],
          opacity: [0, 0.45, 0.45, 0]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 3
        }}
        style={{
          position: 'absolute',
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity'
        }}
      >
        <div style={{ position: 'relative' }}>
          {/* Luminous Motion Trail */}
          <div
            style={{
              position: 'absolute',
              right: '90%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '280px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0) 20%, rgba(6, 182, 212, 0.8) 100%)',
              boxShadow: '0 0 15px #06B6D4'
            }}
          />
          <CyberRaceCar primaryColor="#06B6D4" glowColor="rgba(6, 182, 212, 0.7)" />
        </div>
      </motion.div>

      {/* Race Car 2: Cruising Diagonally from Bottom-Left to Top-Right */}
      <motion.div
        initial={{
          x: '-25vw',
          y: '115vh',
          rotate: -28,
          rotateX: -22,
          scale: 0.85,
          opacity: 0
        }}
        animate={{
          x: ['-25vw', '125vw'],
          y: ['115vh', '-20vh'],
          opacity: [0, 0.4, 0.4, 0]
        }}
        transition={{
          duration: 21,
          delay: 7,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 4
        }}
        style={{
          position: 'absolute',
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity'
        }}
      >
        <div style={{ position: 'relative' }}>
          {/* Luminous Motion Trail */}
          <div
            style={{
              position: 'absolute',
              right: '90%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '240px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(244, 63, 94, 0) 20%, rgba(244, 63, 94, 0.8) 100%)',
              boxShadow: '0 0 15px #F43F5E'
            }}
          />
          <CyberRaceCar primaryColor="#F43F5E" glowColor="rgba(244, 63, 94, 0.7)" />
        </div>
      </motion.div>
    </div>
  );
};

export default BackgroundRaceCars;
