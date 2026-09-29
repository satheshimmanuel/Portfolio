import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Home, User, Briefcase, Mail, Layers, GraduationCap, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'HOME', id: 'hero', icon: <Home size={20} /> },
  { label: 'ABOUT', id: 'about', icon: <User size={20} /> },
  { label: 'PORTFOLIO', id: 'projects', icon: <Briefcase size={20} /> },
  { label: 'STACK', id: 'skills', icon: <Layers size={20} /> },
  { label: 'EXPERIENCE', id: 'experience', icon: <GraduationCap size={20} /> },
  { label: 'CONTACT', id: 'contact', icon: <Mail size={20} /> },
];

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'services', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i] === 'services' ? 'skills' : sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {/* Top Right Floating Dark/Light Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        style={{
          position: 'fixed',
          top: '25px',
          right: '25px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          zIndex: 100,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)'
        }}
      >
        {theme === 'dark' ? <Sun size={20} color="var(--accent-color)" /> : <Moon size={20} color="var(--accent-color)" />}
      </motion.button>

      {/* Tunis Desktop Right-Side Vertical Floating Icon Navigation */}
      <div className="tunis-desktop-nav">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-end' }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredNav === item.id;

            return (
              <div
                key={item.id}
                style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {/* Expanding Hover Label */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: -10 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        position: 'absolute',
                        right: '100%',
                        padding: '0.45rem 1.25rem 0.45rem 1.5rem',
                        backgroundColor: 'var(--accent-color)',
                        color: '#111111',
                        borderRadius: '30px',
                        fontWeight: 800,
                        fontSize: '0.78rem',
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        zIndex: 10
                      }}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Circular Icon Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? 'var(--accent-color)' : 'var(--bg-card)',
                    color: isActive ? '#111111' : 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 0 20px var(--accent-glow)' : '0 4px 15px rgba(0,0,0,0.12)',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  {item.icon}
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tunis Mobile Floating Bottom Navigation Bar */}
      <div className="tunis-mobile-nav">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'var(--glass-bg)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-color)',
            padding: '0.5rem 0.75rem',
            borderRadius: '9999px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            width: '92%',
            maxWidth: '420px',
            margin: '0 auto'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? 'var(--accent-color)' : 'transparent',
                  color: isActive ? '#111111' : 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease'
                }}
              >
                {item.icon}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .tunis-desktop-nav {
          position: fixed;
          right: 30px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 99;
          display: flex;
        }

        .tunis-mobile-nav {
          display: none;
          position: fixed;
          bottom: 20px;
          left: 0;
          right: 0;
          z-index: 99;
        }

        @media (max-width: 992px) {
          .tunis-desktop-nav {
            display: none !important;
          }
          .tunis-mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;


