import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', 'Enterprise', 'E-Commerce', 'Education', 'Freelance'];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <section className="container section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image (Fixed for Parallax effect) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay)', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Selected Work</h2>
        <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore some of my recent freelance and corporate projects, ranging from custom ERPs to interactive web applications.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: `1px solid ${filter === cat ? 'var(--accent-color)' : 'var(--border-color)'}`,
              backgroundColor: filter === cat ? 'var(--accent-color)' : 'var(--glass-bg)',
              color: filter === cat ? 'white' : 'var(--text-secondary)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Regular Uniform Grid Layout */}
      <motion.div layout className="regular-grid">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }} 
              transition={{ duration: 0.4 }} 
              key={project.id}
              className="bento-item"
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="glass project-card" 
                style={{ 
                  borderRadius: '1.5rem', 
                  overflow: 'hidden', 
                  cursor: 'pointer', 
                  border: '1px solid var(--border-color)', 
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  height: '100%',
                  aspectRatio: '16/9'
                }}
              >
                <img src={project.mainImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="project-img" />
                
                {/* Hover Overlay */}
                <div className="project-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  padding: '2rem'
                }}>
                  <div style={{ transform: 'translateY(20px)', transition: 'transform 0.4s ease' }} className="project-overlay-content">
                    <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem' }}>
                      {project.title}
                    </h3>
                    <div style={{ color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
              backgroundColor: 'rgba(0,0,0,0.8)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass project-modal-content"
              style={{
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '2rem',
                position: 'relative',
                backgroundColor: 'var(--bg-primary)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                display: 'grid',
                gap: '0'
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <X size={24} />
              </button>
              
              <div style={{ width: '100%', height: '100%', minHeight: '300px', position: 'relative' }}>
                <img 
                  src={selectedProject.mainImage} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} 
                />
              </div>
              
              <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '1rem', alignSelf: 'flex-start' }}>
                  {selectedProject.category}
                </div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  {selectedProject.title}
                </h3>
                
                <p className="text-secondary" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {selectedProject.description}
                </p>
                
                <div style={{ marginTop: 'auto' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Tech Stack Used</h4>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} style={{ fontSize: '0.875rem', padding: '0.5rem 1rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '2rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* Regular Uniform Grid Layout */
        .regular-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
        }

        .project-title {
          font-size: 1.25rem !important;
        }

        /* Card Hover Effects */
        .project-card:hover { transform: translateY(-5px); border-color: var(--accent-color) !important; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5); }
        .project-card:hover .project-img { transform: scale(1.1); }
        .project-card:hover .project-overlay { opacity: 1; }
        .project-card:hover .project-overlay-content { transform: translateY(0) !important; }

        .project-modal-content {
          grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 1200px) {
          .regular-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .regular-grid { grid-template-columns: 1fr; }
          .project-modal-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
