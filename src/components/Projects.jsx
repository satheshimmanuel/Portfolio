import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
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
              <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div 
                  className="glass project-card" 
                  style={{ 
                    borderRadius: '1.5rem', 
                    overflow: 'hidden', 
                    cursor: 'pointer', 
                    border: '1px solid var(--border-color)', 
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.3s ease, transform 0.3s ease' 
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden', width: '100%', aspectRatio: '16/9' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--accent-color)', opacity: 0.1, zIndex: 1 }} className="img-overlay" />
                    <img src={project.mainImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="project-img" />
                    <div className="arrow-icon" style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '0.5rem', borderRadius: '50%', color: 'var(--text-primary)', zIndex: 2 }}>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="project-content" style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-color)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.category}</div>
                    <h3 className="project-title" style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '1rem', color: 'var(--text-secondary)' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

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
        .project-card:hover { transform: translateY(-5px); border-color: var(--accent-color) !important; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2); }
        .project-card:hover .project-img { transform: scale(1.05); }
        .project-card:hover .arrow-icon { background-color: var(--accent-color) !important; color: white !important; transform: rotate(45deg); }
        .arrow-icon { transition: all 0.3s ease; }

        @media (max-width: 1200px) {
          .regular-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .regular-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
