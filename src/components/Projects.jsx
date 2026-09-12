import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, LayoutDashboard, GitBranch, FileText, Headphones, Tv } from 'lucide-react';
import projectsData from '../data/projects.json';

const getDotColor = (techName) => {
  const lower = techName.toLowerCase();
  if (lower.includes('react')) return '#3b82f6';
  if (lower.includes('node') || lower.includes('express')) return '#10b981';
  if (lower.includes('mongo') || lower.includes('database')) return '#22c55e';
  if (lower.includes('pdf')) return '#ef4444';
  if (lower.includes('chart')) return '#a855f7';
  return 'var(--accent-color)';
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Use main projects grouped together (not flattened into separate cards)
  const categories = ['All', ...new Set(projectsData.map(p => p.category).filter(Boolean))];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const badgeGradients = [
    'linear-gradient(135deg, #a855f7, #6366f1)',
    'linear-gradient(135deg, #22c55e, #10b981)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #3b82f6, #06b6d4)',
    'linear-gradient(135deg, #ec4899, #d946ef)',
  ];

  const badgeIcons = [
    <LayoutDashboard size={20} color="white" />,
    <GitBranch size={20} color="white" />,
    <FileText size={20} color="white" />,
    <Headphones size={20} color="white" />,
    <Tv size={20} color="white" />,
  ];

  return (
    <section className="container section" style={{ position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay)', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Explore some of my recent freelance and corporate projects, ranging from custom ERPs to interactive web applications.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: activeCategory === category ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
              background: activeCategory === category ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
              color: activeCategory === category ? 'var(--accent-color)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: activeCategory === category ? '0 0 20px -5px var(--accent-color)' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <motion.div layout className="projects-grid" style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const gradient = badgeGradients[index % badgeGradients.length];
            const icon = badgeIcons[index % badgeIcons.length];

            return (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                key={project.id}
                className="new-project-card"
                onClick={() => setSelectedProject(project)}
              >
                {/* Header Row: Icon Badge + Category Tag */}
                <div className="card-top-header">
                  <motion.div 
                    className="card-icon-badge" 
                    style={{ background: gradient }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {icon}
                  </motion.div>
                  <span className="card-category-tag">{project.category}</span>
                </div>

                {/* Content Area */}
                <div className="card-content-body">
                  <h3 className="card-title" title={project.title}>{project.title}</h3>
                  <p className="card-description">{project.description}</p>

                  {/* Sub-panels badge (e.g., User & Admin grouped) */}
                  {project.websites && project.websites.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      {project.websites.map((site, sIdx) => (
                        <span key={sIdx} style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.6rem', borderRadius: '0.5rem', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--accent-color)' }}>
                          {site.title}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Horizontal Line with Colored Dots */}
                  <div className="card-tech-list">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="tech-item">
                        <span className="tech-dot" style={{ backgroundColor: getDotColor(tech) }} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="card-footer">
                  <span className="view-details-text">View Project & Panels</span>
                  <motion.div 
                    className="arrow-circle-btn"
                    whileHover={{ scale: 1.1, x: 3 }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
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
              backgroundColor: 'rgba(0,0,0,0.65)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="project-modal-content"
              style={{
                width: '90vw',
                maxWidth: '1100px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '24px',
                position: 'relative',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
                padding: '3rem 2.5rem 2.5rem 2.5rem',
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--bg-secondary)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              
              <div className="modal-full-layout" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <span className="card-category-tag" style={{ alignSelf: 'flex-start' }}>
                  {selectedProject.category}
                </span>

                <h2 className="text-gradient" style={{ fontSize: '2.25rem', fontWeight: 800, lineHeight: 1.2 }}>
                  {selectedProject.title}
                </h2>

                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  {selectedProject.description}
                </p>

                {/* Languages & Tech Stack */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                    Languages & Technologies
                  </h4>
                  <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                    {selectedProject.techStack?.map((tech, i) => (
                      <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '0.875rem', fontWeight: 500 }}>
                        <span className="tech-dot" style={{ backgroundColor: getDotColor(tech) }} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Websites / Panels (Grouped User Website & Admin Dashboard Buttons) */}
                {selectedProject.websites && selectedProject.websites.length > 0 && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                      Project Panels & Live Demos
                    </h4>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {selectedProject.websites.map((site, sIdx) => (
                        <a key={sIdx} href={site.url.startsWith('http') ? site.url : `https://${site.url}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <motion.button 
                            whileHover={{ scale: 1.04 }} 
                            whileTap={{ scale: 0.98 }}
                            className="bg-accent" 
                            style={{ padding: '0.85rem 1.75rem', borderRadius: '2rem', color: 'white', border: 'none', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem', boxShadow: '0 6px 15px -4px var(--accent-color)' }}
                          >
                            {site.title} <ExternalLink size={16} />
                          </motion.button>
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
          gap: 2rem;
          width: 100%;
          align-items: stretch;
        }

        .new-project-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          padding: 1.5rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .new-project-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 14px 40px -10px rgba(139, 92, 246, 0.25), 0 0 0 1px var(--accent-color);
        }

        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .card-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-category-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-color);
          background-color: var(--bg-tertiary);
          padding: 0.4rem 0.85rem;
          border-radius: 1rem;
          border: 1px solid var(--border-color);
        }

        .card-content-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }

        .card-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-roles-list {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .role-pill {
          font-size: 0.75rem;
          color: var(--text-secondary);
          background-color: var(--bg-tertiary);
          padding: 0.25rem 0.65rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
        }

        .card-tech-list {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .tech-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .tech-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .view-details-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        .new-project-card:hover .view-details-text {
          color: var(--accent-color);
        }

        .arrow-circle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.3s ease;
          background-color: var(--bg-tertiary);
        }

        .new-project-card:hover .arrow-circle-btn {
          background-color: var(--accent-color);
          color: #ffffff;
          border-color: var(--accent-color);
        }

        /* MODAL SPLIT LAYOUT & LAPTOP MOCKUP */
        .modal-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
          width: 100%;
        }

        .modal-left-col {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .modal-right-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .laptop-mockup-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .laptop-screen {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #0f1117;
          border-radius: 14px 14px 0 0;
          border: 8px solid #1e202a;
          border-bottom: none;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .laptop-camera {
          position: absolute;
          top: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background: #050508;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 10;
        }

        .laptop-display {
          width: 100%;
          height: 100%;
          background: #000;
          overflow-y: auto;
          position: relative;
        }

        .laptop-display::-webkit-scrollbar {
          width: 4px;
        }
        .laptop-display::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }

        .laptop-screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .laptop-base {
          position: relative;
          width: 108%;
          height: 12px;
          background: linear-gradient(180deg, #d1d5db 0%, #9ca3af 100%);
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        [data-theme='dark'] .laptop-base,
        [data-theme='midnight'] .laptop-base,
        [data-theme='dim'] .laptop-base {
          background: linear-gradient(180deg, #374151 0%, #1f2937 100%);
        }

        .laptop-notch {
          width: 44px;
          height: 4px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 0 0 4px 4px;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .modal-split-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .project-modal-content {
            padding: 2rem 1.5rem !important;
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

