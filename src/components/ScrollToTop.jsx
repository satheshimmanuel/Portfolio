import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0) {
        setScrollProgress(Math.min((currentScroll / totalHeight) * 100, 100));
      }

      setIsVisible(currentScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          title="Scroll to Top"
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-card)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 8px 24px -4px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 85,
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
        >
          {/* Circular SVG Progress Ring */}
          <svg
            width="46"
            height="46"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'rotate(-90deg)',
              pointerEvents: 'none'
            }}
          >
            <circle
              cx="23"
              cy="23"
              r={radius}
              stroke="var(--border-color)"
              strokeWidth="2.5"
              fill="transparent"
              opacity="0.3"
            />
            <circle
              cx="23"
              cy="23"
              r={radius}
              stroke="var(--accent-color)"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>

          <ArrowUp size={18} className="text-accent" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
