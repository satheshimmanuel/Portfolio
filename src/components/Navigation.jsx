import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Palette, Menu, X, Command, Sun, Moon } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

const ACCENT_COLORS = ['blue', 'purple', 'cyan', 'emerald', 'orange', 'red'];

const Navigation = () => {
  const { theme, setTheme, accent, setAccent } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '75px',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'blur(14px)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Brand */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} style={{ fontSize: '1.4rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
          <span className="text-accent" style={{ fontSize: '1.75rem' }}>S</span>
          <span style={{ letterSpacing: '0.05em' }}>Sathesh.</span>
        </a>

        {/* Center Links with animated active underline & hover */}
        <div style={{ display: 'none', gap: '2.25rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                style={{ 
                  fontSize: '1rem', 
                  fontWeight: isActive ? 700 : 500, 
                  color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)', 
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0'
                }}
              >
                {item.label}
                <span className="nav-underline" />
              </button>
            );
          })}
        </div>

        {/* Actions & Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem', marginRight: '0.5rem', borderRight: '1px solid var(--border-color)', paddingRight: '1.25rem' }} className="desktop-socials">
            <a href="https://www.linkedin.com/in/sathesh-immanuel-0680672b4/" target="_blank" rel="noopener noreferrer" className="nav-social" title="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="https://github.com/satheshimmanuel" target="_blank" rel="noopener noreferrer" className="nav-social" title="GitHub"><FaGithub size={20} /></a>
            <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank" rel="noopener noreferrer" className="nav-social" title="Indeed"><SiIndeed size={20} /></a>
          </div>

          {/* Dark / Light Mode Toggle */}
          <button 
            onClick={toggleTheme}
            style={{ padding: '0.6rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.2s' }}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Color Picker Toggle */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowColorPicker(!showColorPicker)}
              style={{ padding: '0.6rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <Palette size={20} className="text-accent" />
            </button>

            {showColorPicker && (
              <div 
                className="glass"
                style={{ position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem', padding: '1rem', borderRadius: '1rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', zIndex: 100 }}
              >
                {ACCENT_COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => { setAccent(color); setShowColorPicker(false); }}
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      backgroundColor: `var(--accent-${color})`,
                      border: accent === color ? '2px solid var(--text-primary)' : '2px solid transparent',
                      transition: 'transform 0.2s',
                    }}
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-menu-toggle" 
            style={{ padding: '0.6rem', color: 'var(--text-primary)', cursor: 'pointer' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Sidebar */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '80%',
              maxWidth: '320px',
              height: '100vh',
              backgroundColor: 'var(--bg-secondary)',
              borderLeft: '1px solid var(--border-color)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.25)',
              overflowY: 'auto'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  <span className="text-accent">S</span> Sathesh.
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)', padding: '0.4rem' }}>
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button 
                      key={item.id} 
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: isActive ? 700 : 500, 
                        color: isActive ? 'var(--accent-color)' : 'var(--text-primary)', 
                        textAlign: 'left',
                        padding: '0.85rem 1.25rem',
                        borderRadius: '0.85rem',
                        backgroundColor: isActive ? 'var(--bg-tertiary)' : 'transparent',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--border-color)' : 'transparent',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      {item.label}
                      {isActive && <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer Social Links */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="https://www.linkedin.com/in/sathesh-immanuel-0680672b4/" target="_blank" rel="noopener noreferrer" className="nav-social" title="LinkedIn"><FaLinkedin size={22} /></a>
              <a href="https://github.com/satheshimmanuel" target="_blank" rel="noopener noreferrer" className="nav-social" title="GitHub"><FaGithub size={22} /></a>
              <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank" rel="noopener noreferrer" className="nav-social" title="Indeed"><SiIndeed size={22} /></a>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-socials { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
        @media (max-width: 1023px) {
          .mobile-menu-toggle { display: block !important; }
        }
        .nav-link-item {
          position: relative;
        }
        .nav-link-item .nav-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 3px;
          background-color: var(--accent-color);
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .nav-link-item:hover {
          color: var(--text-primary) !important;
          transform: translateY(-1px);
        }
        .nav-link-item:hover .nav-underline {
          width: 60%;
        }
        .nav-link-item.active {
          color: var(--accent-color) !important;
        }
        .nav-link-item.active .nav-underline {
          width: 100% !important;
          background-color: var(--accent-color);
        }
        .nav-social { color: var(--text-secondary); transition: all 0.3s; }
        .nav-social:hover { color: var(--accent-color); transform: translateY(-2px); }
      `}</style>
    </header>
  );
};

export default Navigation;
