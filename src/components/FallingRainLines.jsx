import React, { useEffect, useState } from 'react';

const FallingRainLines = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Generate an array of 18 very soft, light lines with low opacity and slow drift
    const generated = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i / 18) * 96 + Math.random() * 2}%`,
      height: `${Math.floor(Math.random() * 30 + 20)}px`,
      duration: `${(Math.random() * 4 + 5).toFixed(1)}s`,
      delay: `${(Math.random() * 8).toFixed(1)}s`,
      opacity: (Math.random() * 0.12 + 0.05).toFixed(3),
    }));
    setLines(generated);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {lines.map((line) => (
        <div
          key={line.id}
          style={{
            position: 'absolute',
            top: '-60px',
            left: line.left,
            width: '1px',
            height: line.height,
            background: `linear-gradient(to bottom, transparent 0%, var(--accent-color) 80%, rgba(255,255,255,0.8) 100%)`,
            opacity: line.opacity,
            borderRadius: '9999px',
            animation: `faintRainDrop ${line.duration} linear infinite`,
            animationDelay: line.delay
          }}
        />
      ))}

      <style>{`
        @keyframes faintRainDrop {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          20% {
            opacity: 0.15;
          }
          80% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(105vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingRainLines;
