import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Settings, Briefcase, Mail, Palette, Layers, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    { id: 'nav-hero', title: 'Go to Overview / Hero', icon: <Home size={18} />, type: 'Navigation', action: () => scrollTo('hero') },
    { id: 'nav-about', title: 'Go to About & Engineering Story', icon: <User size={18} />, type: 'Navigation', action: () => scrollTo('about') },
    { id: 'nav-skills', title: 'Go to Technical Stack & Architecture', icon: <Layers size={18} />, type: 'Navigation', action: () => scrollTo('skills') },
    { id: 'nav-services', title: 'Go to Enterprise Capabilities', icon: <Settings size={18} />, type: 'Navigation', action: () => scrollTo('services') },
    { id: 'nav-projects', title: 'Go to Case Studies & Projects', icon: <Briefcase size={18} />, type: 'Navigation', action: () => scrollTo('projects') },
    { id: 'nav-experience', title: 'Go to Career Track Record', icon: <Terminal size={18} />, type: 'Navigation', action: () => scrollTo('experience') },
    { id: 'nav-contact', title: 'Go to Contact & Connect', icon: <Mail size={18} />, type: 'Navigation', action: () => scrollTo('contact') },
    
    // Themes
    { id: 'theme-dark', title: 'Switch to Deep Mineral Dark Mode', icon: <Palette size={18} />, type: 'Theme', action: () => setTheme('dark') },
    { id: 'theme-light', title: 'Switch to Platinum Slate Light Mode', icon: <Palette size={18} />, type: 'Theme', action: () => setTheme('light') },
  ];

  const filteredCommands = commands.filter(cmd => cmd.title.toLowerCase().includes(search.toLowerCase()) || cmd.type.toLowerCase().includes(search.toLowerCase()));

  const executeCommand = (cmd) => {
    cmd.action();
    setIsOpen(false);
    setSearch('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(17, 26, 36, 0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '12vh',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, y: -15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: -15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="glass"
            style={{
              width: '100%',
              maxWidth: '580px',
              padding: 0,
              overflow: 'hidden',
              borderRadius: '1.25rem',
              backgroundColor: 'var(--bg-secondary)',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            {/* Search Input Bar */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <Search size={20} className="text-accent" style={{ marginRight: '1rem', flexShrink: 0 }} />
              <input
                autoFocus
                type="text"
                placeholder="Type a destination or theme command..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-tertiary)', padding: '0.2rem 0.5rem', borderRadius: '0.35rem', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)' }}>
                ESC
              </span>
            </div>

            {/* Commands List */}
            <div style={{ maxHeight: '340px', overflowY: 'auto', padding: '0.75rem' }}>
              {filteredCommands.map((cmd) => (
                <div
                  key={cmd.id}
                  onClick={() => executeCommand(cmd)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1rem',
                    cursor: 'pointer',
                    borderRadius: '0.75rem',
                    color: 'var(--text-primary)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-color)' }}>{cmd.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{cmd.title}</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', background: 'var(--bg-primary)', padding: '0.2rem 0.5rem', borderRadius: '0.35rem', border: '1px solid var(--border-color)' }}>
                    {cmd.type}
                  </span>
                </div>
              ))}

              {filteredCommands.length === 0 && (
                <div style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  No matching commands found for "{search}".
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;
