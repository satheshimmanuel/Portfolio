import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CommandMenu from './components/CommandMenu';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

// Global Background Animation
const GlobalBackground = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: -10, pointerEvents: 'none', overflow: 'hidden' }}>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -1000],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: 'linear',
          delay: Math.random() * 10
        }}
        style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          bottom: '-10%',
          width: `${Math.random() * 4 + 1}px`,
          height: `${Math.random() * 20 + 10}px`,
          backgroundColor: 'var(--accent-color)',
          borderRadius: '10px'
        }}
      />
    ))}
  </div>
);

const PageWrapper = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Puzzle Loader Blocks */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, width: '25vw', height: '100vh', background: 'var(--bg-primary)', zIndex: 100 }}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: '25vw', width: '25vw', height: '100vh', background: 'var(--bg-secondary)', zIndex: 100 }}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: '50vw', width: '25vw', height: '100vh', background: 'var(--bg-tertiary)', zIndex: 100 }}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: '75vw', width: '25vw', height: '100vh', background: 'var(--bg-secondary)', zIndex: 100 }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        style={{ paddingBottom: '4rem' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><><About /><Skills /></></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/projects/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <GlobalBackground />
          <Navigation />
          <CommandMenu />
          
          <main style={{ flex: 1, paddingTop: '70px' }}>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
