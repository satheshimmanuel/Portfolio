import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover') ||
        target.closest('.bento-card') ||
        target.closest('.service-card') ||
        target.closest('.project-card-item') ||
        target.classList.contains('cursor-pointer');

      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Precision Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 0.6 : isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 1200, damping: 50 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--accent-color)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 10px var(--accent-color)'
        }}
      />

      {/* Trailing Aura Ring */}
      <motion.div
        animate={{
          x: mousePosition.x - (isHovering ? 26 : 18),
          y: mousePosition.y - (isHovering ? 26 : 18),
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          backgroundColor: isHovering ? 'var(--accent-soft)' : 'transparent',
          borderColor: 'var(--accent-color)',
          scale: isClicking ? 0.85 : 1,
          opacity: isVisible ? (isHovering ? 0.9 : 0.45) : 0
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1.5px solid var(--accent-color)',
          pointerEvents: 'none',
          zIndex: 99998,
          backdropFilter: isHovering ? 'blur(2px)' : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;

