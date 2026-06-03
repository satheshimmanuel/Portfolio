import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, User, Settings, Briefcase, Mail, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { accent, setAccent, theme, setTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commands = [
    { id: 'home', title: 'Home', icon: <Home size={18} />, type: 'nav', path: '/' },
    { id: 'about', title: 'About', icon: <User size={18} />, type: 'nav', path: '/about' },
    { id: 'services', title: 'Services', icon: <Settings size={18} />, type: 'nav', path: '/services' },
    { id: 'projects', title: 'Projects', icon: <Briefcase size={18} />, type: 'nav', path: '/projects' },
    { id: 'contact', title: 'Contact', icon: <Mail size={18} />, type: 'nav', path: '/contact' },
    { id: 'theme-dark', title: 'Dark Theme', icon: <Palette size={18} />, type: 'theme', value: 'dark' },
    { id: 'theme-light', title: 'Light Theme', icon: <Palette size={18} />, type: 'theme', value: 'light' },
    { id: 'theme-midnight', title: 'Midnight Theme', icon: <Palette size={18} />, type: 'theme', value: 'midnight' },
    { id: 'theme-dim', title: 'Dim Theme', icon: <Palette size={18} />, type: 'theme', value: 'dim' },
    { id: 'color-blue', title: 'Blue Accent', icon: <Palette size={18} color="#3b82f6" />, type: 'accent', value: 'blue' },
    { id: 'color-purple', title: 'Purple Accent', icon: <Palette size={18} color="#a855f7" />, type: 'accent', value: 'purple' },
    { id: 'color-emerald', title: 'Emerald Accent', icon: <Palette size={18} color="#10b981" />, type: 'accent', value: 'emerald' },
    { id: 'color-rose', title: 'Rose Accent', icon: <Palette size={18} color="#f43f5e" />, type: 'accent', value: 'rose' },
    { id: 'color-amber', title: 'Amber Accent', icon: <Palette size={18} color="#f59e0b" />, type: 'accent', value: 'amber' },
    { id: 'color-cyan', title: 'Cyan Accent', icon: <Palette size={18} color="#06b6d4" />, type: 'accent', value: 'cyan' },
  ];

  const filteredCommands = commands.filter(cmd => cmd.title.toLowerCase().includes(search.toLowerCase()));

  const executeCommand = (item) => {
    if (item.type === 'nav') {
      navigate(item.path);
    } else if (item.type === 'theme') {
      setTheme(item.value);
    } else if (item.type === 'accent') {
      setAccent(item.value);
    }
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
          style={{ position: 'fixed', inset: 0, zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10vh' }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: -20 }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: '100%', maxWidth: '600px', backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>
              <Search size={20} className="text-secondary" style={{ marginRight: '1rem' }} />
              <input
                autoFocus
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--text-primary)', fontSize: '1.125rem', outline: 'none' }}
              />
            </div>

            <div style={{ maxHeight: '300px', overflowY: 'auto', padding: '0.5rem' }}>
              {filteredCommands.map((cmd) => (
                <div
                  key={cmd.id}
                  onClick={() => executeCommand(cmd)}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', cursor: 'pointer', borderRadius: '0.5rem', color: 'var(--text-primary)', transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span className="text-secondary">{cmd.icon}</span>
                  <span style={{ fontWeight: 500 }}>{cmd.title}</span>
                  <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{cmd.type}</span>
                </div>
              ))}
              {filteredCommands.length === 0 && (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>No results found.</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandMenu;
