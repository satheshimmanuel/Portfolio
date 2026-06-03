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
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '70px',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        
        {/* Brand */}
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
          <span className="text-accent" style={{ fontSize: '1.5rem' }}>S</span>
          <span style={{ letterSpacing: '0.05em' }}>Sathesh.</span>
        </Link>

        {/* Center Links */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {['Home', 'About', 'Services', 'Projects', 'Experience', 'Contact'].map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Link 
                key={item} 
                to={path}
                className="nav-link" 
                style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: 500, 
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)', 
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                  position: 'relative'
                }}
              >
                {item}
                {isActive && (
                  <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--accent-color)', borderRadius: '2px' }} />
                )}
              </Link>
            )
          })}
        </div>

        {/* Actions & Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem', marginRight: '1rem', borderRight: '1px solid var(--border-color)', paddingRight: '1rem' }} className="desktop-socials">
            <a href="#" className="nav-social" title="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="#" className="nav-social" title="GitHub"><FaGithub size={18} /></a>
            <a href="#" className="nav-social" title="Instagram"><FaInstagram size={18} /></a>
            <a href="#" className="nav-social" title="Indeed"><SiIndeed size={18} /></a>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={() => {
              const themes = ['dark', 'midnight', 'dim', 'light'];
              const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
              setTheme(themes[nextIndex]);
            }}
            style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
            title={`Current Theme: ${theme}`}
          >
            {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Color Picker Toggle */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowColorPicker(!showColorPicker)}
              style={{ padding: '0.5rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Palette size={18} className="text-accent" />
            </button>

            {showColorPicker && (
              <div 
                className="glass"
                style={{ position: 'absolute', top: '100%', right: 0, marginTop: '0.5rem', padding: '1rem', borderRadius: '1rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}
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

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            style={{ display: 'none', padding: '0.5rem' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-socials { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--text-primary) !important; }
        .nav-social { color: var(--text-secondary); transition: all 0.3s; }
        .nav-social:hover { color: var(--accent-color); transform: translateY(-2px); }
      `}</style>
    </header>
  );
};

export default Navigation;
