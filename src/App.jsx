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
import CustomCursor from './components/CustomCursor';
import AmbientMesh from './components/AmbientMesh';
import FallingRainLines from './components/FallingRainLines';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';

const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', zIndex: 10 }}
    >
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTop />
      
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <AmbientMesh />
          <FallingRainLines />
          <CustomCursor />
          <Navigation />
          <CommandMenu />
          
          <main style={{ flex: 1, position: 'relative' }}>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
