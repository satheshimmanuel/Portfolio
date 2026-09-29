import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Sparkles, CheckCircle2, Briefcase } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Ocean Softwares'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="container section" style={{ position: 'relative' }}>
      
      {/* Tunis Section Header */}
      <div className="tunis-section-title-wrap">
        <div className="tunis-watermark">WORKS</div>
        <h2 className="tunis-title-foreground">
          MY <span>PORTFOLIO</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2.75rem', position: 'relative', zIndex: 10 }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <motion.button
              key={category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                background: isActive ? 'var(--accent-gradient)' : 'var(--bg-card)',
                border: isActive ? '1px solid transparent' : '1px solid var(--border-color)',
                color: isActive ? '#14171C' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 6px 18px -4px rgba(var(--accent-color-rgb), 0.4)' : 'none'
              }}
            >
              {category}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="projects-grid" style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              key={project.id}
              className="project-card-item"
              onClick={() => setSelectedProject(project)}
            >
              {/* Header: Category Badge + Status */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="project-category-tag">
                  {project.category}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
                  Live System
                </span>
              </div>

              {/* Project Title */}
              <h3 className="project-card-title">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="project-card-desc">
                {project.description}
              </p>

              {/* Panels Badges */}
              {project.websites && project.websites.length > 0 && (
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
                  {project.websites.map((site, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '0.4rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      ⚡ {site.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Bottom: Tech Stack & Action Footer */}
              <div style={{ marginTop: 'auto' }}>
                {/* Tech Stack List */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                  {project.techStack?.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-tertiary)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '0.35rem',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }} />
                      {tech}
                    </span>
                  ))}
                </div>

        {/* Footer Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--accent-color)' }}>
                    View Details & Panels
                  </span>
                  <div className="project-arrow-btn" aria-hidden="true">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(17, 26, 36, 0.75)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass"
              style={{
                width: '100%',
                maxWidth: '820px',
                maxHeight: '88vh',
                overflowY: 'auto',
                position: 'relative',
                padding: '2rem 1.5rem',
                borderRadius: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                boxShadow: 'var(--card-shadow)'
              }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 20
                }}
              >
                <X size={18} />
              </motion.button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Header */}
                <div>
                  <span className="project-category-tag">
                    {selectedProject.category}
                  </span>

                  <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.65rem', lineHeight: 1.2 }}>
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Project Screenshot / Mockup */}
                {selectedProject.mainImage && (
                  <div
                    style={{
                      borderRadius: '1rem',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      maxHeight: '320px',
                      background: 'var(--bg-primary)'
                    }}
                  >
                    <img
                      src={selectedProject.mainImage}
                      alt={selectedProject.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                )}

                {/* Engineering Overview */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Project Architecture & Impact
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Roles & Technologies */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
                  {selectedProject.roles && (
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                        Engineering Roles
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        {selectedProject.roles.map((r, rIdx) => (
                          <div key={rIdx} style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <CheckCircle2 size={14} className="text-accent" /> {r}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                      Technology Stack
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {selectedProject.techStack?.map((t, tIdx) => (
                        <span key={tIdx} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', background: 'var(--bg-secondary)', padding: '0.2rem 0.55rem', borderRadius: '0.35rem', border: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }} />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Panel Links */}
                {selectedProject.websites && selectedProject.websites.length > 0 && (
                  <div>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.75rem' }}>
                      Deployed Panels & Live Demonstration
                    </h4>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {selectedProject.websites.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.url.startsWith('http') ? site.url : `https://${site.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ textDecoration: 'none', padding: '0.7rem 1.4rem', fontSize: '0.825rem' }}
                        >
                          {site.title} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          width: 100%;
        }

        .project-card-item {
          background-color: var(--bg-card);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          position: relative;
        }

        .project-card-item:hover {
          border-color: var(--border-highlight);
          box-shadow: 0 16px 35px -10px rgba(var(--accent-color-rgb), 0.2);
        }

        .project-category-tag {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-color);
          background-color: var(--accent-soft);
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid var(--border-highlight);
        }

        .project-card-title {
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .project-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.15rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-arrow-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justifyContent: center;
          color: var(--text-primary);
          transition: all 0.25s ease;
          flex-shrink: 0;
          line-height: 0;
          box-sizing: border-box;
        }

        .project-arrow-btn svg {
          display: block;
          flex-shrink: 0;
          margin: auto;
        }

        .project-card-item:hover .project-arrow-btn {
          background-color: var(--accent-color);
          color: #14171C;
          border-color: var(--accent-color);
          transform: translateX(2px);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 680px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .project-card-item {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

