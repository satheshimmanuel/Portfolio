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

// Global Background Animation & Ambient Mesh
const GlobalBackground = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: -10, pointerEvents: 'none', overflow: 'hidden' }}>
    {/* Soft Ambient Mesh Blobs for Rich Depth */}
    <div style={{
      position: 'absolute',
      top: '-15%',
      left: '-10%',
      width: '50vw',
      height: '50vw',
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
      opacity: 0.12,
      filter: 'blur(80px)'
    }} />
    <div style={{
      position: 'absolute',
      top: '40%',
      right: '-15%',
      width: '45vw',
      height: '45vw',
      borderRadius: '50%',
      background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
      opacity: 0.1,
      filter: 'blur(90px)'
    }} />
    <div style={{
      position: 'absolute',
      bottom: '-10%',
      left: '20%',
      width: '40vw',
      height: '40vw',
      borderRadius: '50%',
      background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
      opacity: 0.08,
      filter: 'blur(80px)'
    }} />

    {/* Floating Particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -1000],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: Math.random() * 12 + 12,
          repeat: Infinity,
          ease: 'linear',
          delay: Math.random() * 10
        }}
        style={{
          position: 'absolute',
          left: `${Math.random() * 100}%`,
          bottom: '-10%',
          width: `${Math.random() * 4 + 2}px`,
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

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <Skills />
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><MainPage /></PageWrapper>} />
        <Route path="/projects/:id" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
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
