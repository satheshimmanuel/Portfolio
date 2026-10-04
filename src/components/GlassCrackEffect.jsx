import React, { useEffect, useRef } from 'react';

// Web Audio API Synthesizer for Glass / Wall Shatter Sound
const playCrackSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;

    // 1. High frequency white noise shatter burst
    const bufferSize = ctx.sampleRate * 0.12; // 120ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2500, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);

    // 2. Low impact thud (wall break hit)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.08);

    oscGain.gain.setValueAtTime(0.4, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {
    // Silent fallback
  }
};

// Generate main radial jagged crack branches
const generateBranches = (cx, cy) => {
  const branchCount = Math.floor(Math.random() * 4) + 10; // 10 to 13 branches
  const branches = [];

  for (let i = 0; i < branchCount; i++) {
    const baseAngle = (i / branchCount) * Math.PI * 2 + (Math.random() * 0.35 - 0.17);
    const length = Math.random() * 110 + 90; // 90px to 200px length
    const points = [{ x: cx, y: cy }];

    let currX = cx;
    let currY = cy;
    let currAngle = baseAngle;
    const segments = Math.floor(Math.random() * 3) + 4;
    const segLen = length / segments;

    for (let s = 0; s < segments; s++) {
      currAngle += (Math.random() - 0.5) * 0.5;
      currX += Math.cos(currAngle) * segLen;
      currY += Math.sin(currAngle) * segLen;
      points.push({ x: currX, y: currY });

      // Sub-branch (side fracture)
      if (Math.random() > 0.4 && s > 0 && s < segments - 1) {
        const subAngle = currAngle + (Math.random() > 0.5 ? 1 : -1) * (0.6 + Math.random() * 0.5);
        const subLen = segLen * (Math.random() * 1.3 + 0.7);
        const subPoints = [{ x: currX, y: currY }];
        let subX = currX;
        let subY = currY;

        for (let ss = 0; ss < 3; ss++) {
          const a = subAngle + (Math.random() - 0.5) * 0.35;
          subX += Math.cos(a) * (subLen / 3);
          subY += Math.sin(a) * (subLen / 3);
          subPoints.push({ x: subX, y: subY });
        }
        branches.push({ points: subPoints, isSub: true });
      }
    }
    branches.push({ points, isSub: false });
  }

  return branches;
};

// Generate spiderweb concentric fracture rings
const generateWebRings = (cx, cy, branches) => {
  const rings = [];
  const ringRadii = [30, 65, 110, 160];

  ringRadii.forEach(r => {
    const points = [];
    const mainBranches = branches.filter(b => !b.isSub);

    mainBranches.forEach(b => {
      let closestPt = null;
      let minDiff = Infinity;
      b.points.forEach(pt => {
        const dist = Math.hypot(pt.x - cx, pt.y - cy);
        const diff = Math.abs(dist - r);
        if (diff < minDiff) {
          minDiff = diff;
          closestPt = pt;
        }
      });
      if (closestPt && minDiff < 40) {
        points.push({
          x: closestPt.x + (Math.random() - 0.5) * 8,
          y: closestPt.y + (Math.random() - 0.5) * 8
        });
      }
    });

    if (points.length >= 3) {
      rings.push(points);
    }
  });

  return rings;
};

// Generate flying glass shards & debris
const generateShards = (cx, cy) => {
  const shardCount = Math.floor(Math.random() * 15) + 25; // 25 to 40 shards
  const shards = [];

  for (let i = 0; i < shardCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 7 + 3;
    const size = Math.random() * 12 + 5;

    const vertices = [];
    const vertCount = Math.random() > 0.4 ? 3 : 4;
    for (let v = 0; v < vertCount; v++) {
      const vAngle = (v / vertCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const vDist = size * (Math.random() * 0.5 + 0.65);
      vertices.push({
        x: Math.cos(vAngle) * vDist,
        y: Math.sin(vAngle) * vDist
      });
    }

    shards.push({
      x: cx + Math.cos(angle) * 10,
      y: cy + Math.sin(angle) * 10,
      vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 3,
      vy: Math.sin(angle) * speed - (Math.random() * 3 + 1.5),
      gravity: Math.random() * 0.2 + 0.12,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.3,
      vertices,
      isGold: Math.random() > 0.4
    });
  }

  return shards;
};

const GlassCrackEffect = () => {
  const canvasRef = useRef(null);
  const cracksRef = useRef([]);

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

    // Global Click Handler
    const handleClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Play audio synth
      playCrackSound();

      // Screen impact shake effect
      document.body.classList.remove('screen-shake-anim');
      void document.body.offsetWidth; // trigger reflow
      document.body.classList.add('screen-shake-anim');
      setTimeout(() => {
        document.body.classList.remove('screen-shake-anim');
      }, 200);

      const branches = generateBranches(x, y);
      const webRings = generateWebRings(x, y, branches);
      const shards = generateShards(x, y);

      cracksRef.current.push({
        id: Date.now() + Math.random(),
        x,
        y,
        startTime: performance.now(),
        duration: 2200, // 2.2 seconds total animation duration
        branches,
        webRings,
        shards
      });
    };

    window.addEventListener('click', handleClick);

    // Animation Loop
    let animId;
    const render = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const activeCracks = [];

      cracksRef.current.forEach((crack) => {
        const elapsed = now - crack.startTime;
        const progress = Math.min(elapsed / crack.duration, 1);

        if (progress >= 1) return; // Expired -> fully healed back to normal

        activeCracks.push(crack);

        // Opacity phases:
        // 0 to 0.55: 1.0 (fully visible)
        // 0.55 to 1.0: Fades smoothly to 0 (heal / repair)
        let crackOpacity = 1;
        if (progress > 0.55) {
          crackOpacity = 1 - (progress - 0.55) / 0.45;
        }

        ctx.save();

        // 1. Shockwave Expanding Ring (first 0.25s)
        if (progress < 0.25) {
          const swProgress = progress / 0.25;
          const radius = swProgress * 110;
          const swOpacity = (1 - swProgress) * crackOpacity;

          ctx.beginPath();
          ctx.arc(crack.x, crack.y, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 180, 0, ${swOpacity * 0.9})`;
          ctx.lineWidth = 4;
          ctx.stroke();

          // Flash center glow
          const grad = ctx.createRadialGradient(crack.x, crack.y, 0, crack.x, crack.y, radius * 0.8);
          grad.addColorStop(0, `rgba(255, 255, 255, ${swOpacity})`);
          grad.addColorStop(0.4, `rgba(255, 180, 0, ${swOpacity * 0.6})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(crack.x, crack.y, radius * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Center Impact Hole / Impact Shatter Core
        const coreRadius = Math.min(18, progress * 80);
        ctx.beginPath();
        ctx.arc(crack.x, crack.y, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 15, 15, ${crackOpacity * 0.85})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255, 255, 255, ${crackOpacity * 0.95})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // 3. Draw Radial Branches (Thick dark background stroke + bright glowing inner stroke)
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        crack.branches.forEach((b) => {
          if (b.points.length < 2) return;

          // Dark shadow outline (creates 3D broken depth into screen)
          ctx.beginPath();
          ctx.moveTo(b.points[0].x, b.points[0].y);
          for (let p = 1; p < b.points.length; p++) {
            ctx.lineTo(b.points[p].x, b.points[p].y);
          }
          ctx.strokeStyle = `rgba(0, 0, 0, ${crackOpacity * 0.85})`;
          ctx.lineWidth = b.isSub ? 3.5 : 5.5;
          ctx.stroke();

          // Bright glowing crack core stroke
          ctx.beginPath();
          ctx.moveTo(b.points[0].x, b.points[0].y);
          for (let p = 1; p < b.points.length; p++) {
            ctx.lineTo(b.points[p].x, b.points[p].y);
          }
          ctx.strokeStyle = b.isSub
            ? `rgba(255, 255, 255, ${crackOpacity * 0.9})`
            : `rgba(255, 210, 110, ${crackOpacity * 0.98})`;
          ctx.lineWidth = b.isSub ? 1.5 : 2.8;
          ctx.shadowColor = 'rgba(255, 180, 0, 0.8)';
          ctx.shadowBlur = b.isSub ? 3 : 8;
          ctx.stroke();
          ctx.shadowBlur = 0;
        });

        // 4. Draw Spiderweb Concentric Fracture Rings
        crack.webRings.forEach((ringPoints) => {
          if (ringPoints.length < 2) return;

          // Dark shadow
          ctx.beginPath();
          ctx.moveTo(ringPoints[0].x, ringPoints[0].y);
          for (let p = 1; p < ringPoints.length; p++) {
            ctx.lineTo(ringPoints[p].x, ringPoints[p].y);
          }
          ctx.strokeStyle = `rgba(0, 0, 0, ${crackOpacity * 0.7})`;
          ctx.lineWidth = 3;
          ctx.stroke();

          // White inner line
          ctx.beginPath();
          ctx.moveTo(ringPoints[0].x, ringPoints[0].y);
          for (let p = 1; p < ringPoints.length; p++) {
            ctx.lineTo(ringPoints[p].x, ringPoints[p].y);
          }
          ctx.strokeStyle = `rgba(255, 255, 255, ${crackOpacity * 0.85})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        });

        // 5. Draw Flying Glass Shard Particles
        crack.shards.forEach((shard) => {
          shard.x += shard.vx;
          shard.y += shard.vy;
          shard.vy += shard.gravity;
          shard.rotation += shard.vRot;

          const shardOpacity = Math.max(0, (1 - progress * 1.1) * crackOpacity);
          if (shardOpacity <= 0) return;

          ctx.save();
          ctx.translate(shard.x, shard.y);
          ctx.rotate(shard.rotation);

          ctx.beginPath();
          ctx.moveTo(shard.vertices[0].x, shard.vertices[0].y);
          for (let v = 1; v < shard.vertices.length; v++) {
            ctx.lineTo(shard.vertices[v].x, shard.vertices[v].y);
          }
          ctx.closePath();

          ctx.fillStyle = shard.isGold
            ? `rgba(255, 180, 0, ${shardOpacity * 0.65})`
            : `rgba(255, 255, 255, ${shardOpacity * 0.7})`;
          ctx.fill();

          ctx.strokeStyle = `rgba(255, 255, 255, ${shardOpacity * 0.95})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.restore();
        });

        ctx.restore();
      });

      cracksRef.current = activeCracks;
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
    <>
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
      <style>{`
        @keyframes screenShakeAnim {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-4px, 3px) rotate(-0.4deg); }
          40% { transform: translate(4px, -3px) rotate(0.4deg); }
          60% { transform: translate(-3px, 1px); }
          80% { transform: translate(2px, -1px); }
          100% { transform: translate(0, 0); }
        }
        .screen-shake-anim {
          animation: screenShakeAnim 0.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) !important;
        }
      `}</style>
    </>
  );
};

export default GlassCrackEffect;
