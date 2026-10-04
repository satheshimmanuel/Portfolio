import React, { useEffect, useRef } from 'react';

// Web Audio API Synthesizer for Festive Firecracker Sounds
const playGoldenCrackerSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;

    // 1. Rocket whistle / swoosh
    const swoosh = ctx.createOscillator();
    const swooshGain = ctx.createGain();
    swoosh.type = 'sine';
    swoosh.frequency.setValueAtTime(500, now);
    swoosh.frequency.exponentialRampToValueAtTime(2400, now + 0.1);

    swooshGain.gain.setValueAtTime(0.2, now);
    swooshGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

    swoosh.connect(swooshGain);
    swooshGain.connect(ctx.destination);
    swoosh.start(now);
    swoosh.stop(now + 0.12);

    // 2. Main explosion thud
    const boom = ctx.createOscillator();
    const boomGain = ctx.createGain();
    boom.type = 'triangle';
    boom.frequency.setValueAtTime(180, now + 0.08);
    boom.frequency.exponentialRampToValueAtTime(30, now + 0.22);

    boomGain.gain.setValueAtTime(0.55, now + 0.08);
    boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.23);

    boom.connect(boomGain);
    boomGain.connect(ctx.destination);
    boom.start(now + 0.08);
    boom.stop(now + 0.24);

    // 3. Crisp crackling bijili pops
    const popCount = 8;
    for (let p = 0; p < popCount; p++) {
      const delay = 0.1 + Math.random() * 0.2;
      const bufferSize = ctx.sampleRate * 0.035;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 2200 + Math.random() * 2500;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.035);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now + delay);
    }
  } catch (e) {
    // Silent fallback
  }
};

const GOLDEN_PALETTE = [
  '#FFB400', // Tunis Gold
  '#FFD700', // Bright Fire Gold
  '#FFAA00', // Warm Amber
  '#FFF2A3', // Luminous Light Gold
  '#FFFFFF'  // Pure Diamond Flash
];

const FirecrackersEffect = () => {
  const canvasRef = useRef(null);
  const crackerBurstsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Global Click Handler - Pure Firecracker Burst
    const handleClick = (e) => {
      const cx = e.clientX;
      const cy = e.clientY;

      playGoldenCrackerSound();

      // Generate 80 to 120 long golden cracker sparkler particles
      const particleCount = Math.floor(Math.random() * 40) + 80;
      const sparks = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 3; // Long spread speed
        const color = GOLDEN_PALETTE[Math.floor(Math.random() * GOLDEN_PALETTE.length)];

        sparks.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (Math.random() * 2.5), // lift
          gravity: 0.12 + Math.random() * 0.08,
          friction: 0.962,
          size: Math.random() * 4 + 1.8,
          color,
          trail: [],
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01,
          twinkleRate: Math.random() * 0.35 + 0.65
        });
      }

      // Generate 10 soft smoke clouds
      const smokeClouds = [];
      for (let s = 0; s < 10; s++) {
        smokeClouds.push({
          x: cx + (Math.random() - 0.5) * 20,
          y: cy + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 1.2 - 0.4,
          radius: Math.random() * 15 + 10,
          maxRadius: Math.random() * 40 + 25,
          alpha: 0.35,
          decay: 0.008 + Math.random() * 0.005
        });
      }

      crackerBurstsRef.current.push({
        id: Date.now() + Math.random(),
        cx,
        cy,
        startTime: performance.now(),
        sparks,
        smokeClouds
      });
    };

    window.addEventListener('click', handleClick);

    // Render Loop
    let animId;
    const render = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const activeBursts = [];

      crackerBurstsRef.current.forEach((burst) => {
        const elapsed = now - burst.startTime;
        let hasAliveSparks = false;

        // 1. Luminous Central Gold Flash (first 200ms)
        if (elapsed < 200) {
          const flashProgress = elapsed / 200;
          const flashRadius = flashProgress * 85;
          const flashOpacity = 1 - flashProgress;

          const grad = ctx.createRadialGradient(burst.cx, burst.cy, 0, burst.cx, burst.cy, flashRadius);
          grad.addColorStop(0, `rgba(255, 255, 255, ${flashOpacity})`);
          grad.addColorStop(0.35, `rgba(255, 215, 0, ${flashOpacity * 0.85})`);
          grad.addColorStop(0.7, `rgba(255, 180, 0, ${flashOpacity * 0.4})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(burst.cx, burst.cy, flashRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Render Soft Smoke Clouds
        burst.smokeClouds.forEach((smoke) => {
          if (smoke.alpha <= 0) return;

          smoke.x += smoke.vx;
          smoke.y += smoke.vy;
          smoke.radius = Math.min(smoke.maxRadius, smoke.radius + 0.4);
          smoke.alpha -= smoke.decay;

          const currentAlpha = Math.max(0, smoke.alpha);
          if (currentAlpha <= 0) return;

          ctx.save();
          const smokeGrad = ctx.createRadialGradient(smoke.x, smoke.y, 0, smoke.x, smoke.y, smoke.radius);
          smokeGrad.addColorStop(0, `rgba(255, 215, 120, ${currentAlpha * 0.2})`);
          smokeGrad.addColorStop(0.6, `rgba(220, 180, 100, ${currentAlpha * 0.1})`);
          smokeGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = smokeGrad;
          ctx.beginPath();
          ctx.arc(smoke.x, smoke.y, smoke.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // 3. Render Long Golden Spark Particles & Trails
        burst.sparks.forEach((p) => {
          if (p.alpha <= 0) return;

          hasAliveSparks = true;

          // Save trail point for sparkler tail
          p.trail.push({ x: p.x, y: p.y });
          if (p.trail.length > 10) p.trail.shift();

          // Physics update
          p.vx *= p.friction;
          p.vy *= p.friction;
          p.vy += p.gravity;

          p.x += p.vx;
          p.y += p.vy;

          p.alpha -= p.decay;

          const flicker = Math.random() > 0.25 ? 1 : p.twinkleRate;
          const currentAlpha = Math.max(0, p.alpha * flicker);

          ctx.save();

          // Long Sparkler Tail Line
          if (p.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let t = 1; t < p.trail.length; t++) {
              ctx.lineTo(p.trail[t].x, p.trail[t].y);
            }
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = currentAlpha * 0.6;
            ctx.lineWidth = p.size * 0.75;
            ctx.stroke();
          }

          // Glowing Golden Sparkle Core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.shadowColor = '#FFB400';
          ctx.shadowBlur = 10;
          ctx.fill();

          ctx.restore();
        });

        if (hasAliveSparks || elapsed < 1200) {
          activeBursts.push(burst);
        }
      });

      crackerBurstsRef.current = activeBursts;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999999,
        display: 'block'
      }}
    />
  );
};

export default FirecrackersEffect;
