import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Download, Sparkles, Code2, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '2rem 1rem 3rem',
        overflow: 'hidden'
      }}
    >
      {/* Tunis Diagonal Yellow Background Shape */}
      <div className="tunis-diagonal-bg" />

      <div
        className="container hero-container"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1280px',
          minHeight: '80vh'
        }}
      >
        <div className="hero-tunis-grid">
          {/* Left Column: Portrait Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-wrapper"
          >
            <div className="hero-image-card">
              <img
                src="/images/image copy 5.png"
                alt="Sathesh Immanuel - Full Stack Developer"
                className="hero-profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/profile.png';
                }}
              />
              <div className="hero-img-overlay" />
            </div>
          </motion.div>

          {/* Right Column: Hero Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text-content"
          >
            {/* Yellow Dash + Name */}
            <div className="hero-name-badge">
              <span className="hero-dash">—</span>
              <span className="hero-name-text">I'M SATHESH IMMANUEL.</span>
            </div>

            {/* Main Role Title */}
            <h1 className="hero-role-title">
              <Typewriter
                words={[
                  'FULL STACK DEVELOPER',
                  'MERN STACK ENGINEER',
                  'ERP & CRM ARCHITECT',
                  'UI/UX ENTHUSIAST'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={75}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </h1>

            {/* Description Paragraph */}
            <p className="hero-bio-paragraph">
              I'm a full-stack engineer and enterprise system architect focused on crafting clean, high-performance, and user-friendly digital experiences. Passionate about engineering scalable software that solves complex business problems.
            </p>

            {/* Status Pills */}
            <div className="hero-tags-row">
              <div className="hero-status-tag">
                <span className="hero-status-dot" />
                <span>Available for Full-time & Freelance</span>
              </div>
              <div className="hero-stat-badge">
                <Code2 size={15} color="var(--accent-color)" />
                <span>2.5+ Yrs Exp</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions-row">
              <a href="#about" className="btn-tunis">
                <span>MORE ABOUT ME</span>
                <div className="btn-icon-circle">
                  <ArrowRight size={18} />
                </div>
              </a>

              <a
                href="/images/sathesh@immanuel.pdf"
                download="Sathesh_Immanuel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tunis"
              >
                <span>DOWNLOAD CV</span>
                <div className="btn-icon-circle">
                  <Download size={18} />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-tunis-grid {
          display: grid;
          grid-template-columns: 42% 58%;
          gap: 3.5rem;
          align-items: center;
          width: 100%;
          max-width: 1260px;
          margin: 0 auto;
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-image-card {
          width: 100%;
          max-width: 400px;
          height: 520px;
          border-radius: 30px;
          background: #111111;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justifyContent: center;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .hero-image-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 180, 0, 0.2);
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 40%);
          pointer-events: none;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-name-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .hero-dash {
          color: var(--accent-color);
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1;
        }

        .hero-name-text {
          font-size: clamp(1.4rem, 2.5vw, 2.2rem);
          font-weight: 900;
          color: var(--accent-color);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .hero-role-title {
          font-size: clamp(1.85rem, 3.5vw, 3rem);
          font-weight: 900;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          min-height: 1.2em;
        }

        .hero-bio-paragraph {
          font-size: clamp(0.95rem, 1.15vw, 1.05rem);
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 580px;
          margin-bottom: 1.5rem;
        }

        .hero-tags-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .hero-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .hero-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
        }

        .hero-stat-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        @media (max-width: 992px) {
          .hero-tunis-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
            margin-top: 1rem;
          }

          .hero-text-content {
            align-items: center;
            text-align: center;
          }

          .hero-name-badge {
            justify-content: center;
          }

          .hero-tags-row {
            justify-content: center;
          }

          .hero-actions-row {
            justify-content: center;
          }

          .hero-image-card {
            max-width: 280px;
            height: 340px;
            border-radius: 24px;
          }
        }

        @media (max-width: 600px) {
          .hero-image-card {
            max-width: 220px;
            height: 270px;
            border-radius: 20px;
          }
          .hero-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .btn-tunis {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;


