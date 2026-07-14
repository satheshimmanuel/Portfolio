import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink, Code2 } from 'lucide-react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Flatten the projects data so that each website becomes its own individual card
  const flattenedProjects = [];
  projectsData.forEach(project => {
    if (project.websites && project.websites.length > 0) {
      project.websites.forEach(site => {
        flattenedProjects.push({
          ...project,
          id: `${project.id}-${site.title.toLowerCase().replace(/\s+/g, '-')}`,
          displayTitle: `${project.title} - ${site.title}`,
          displayImage: site.image,
          url: site.url
        });
      });
    } else {
      flattenedProjects.push({
        ...project,
        displayTitle: project.title,
        displayImage: project.mainImage,
        url: '#'
      });
    }
  });

  const categories = ['All', ...new Set(flattenedProjects.map(p => p.category).filter(Boolean))];

  const filteredProjects = activeCategory === 'All'
    ? flattenedProjects
    : flattenedProjects.filter(p => p.category === activeCategory);

  return (
    <section className="container section" style={{ position: 'relative' }}>
      {/* Background Image */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay)', pointerEvents: 'none' }} />

      <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Selected Work</h2>
        <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore some of my recent freelance and corporate projects, ranging from custom ERPs to interactive web applications.
        </p>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              border: activeCategory === category ? '1px solid var(--accent-color)' : '1px solid rgba(255,255,255,0.1)',
              background: activeCategory === category ? 'rgba(var(--accent-color-rgb, 168, 85, 247), 0.15)' : 'rgba(255,255,255,0.03)',
              color: activeCategory === category ? 'var(--accent-color)' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: activeCategory === category ? '0 0 20px -5px var(--accent-color)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (activeCategory !== category) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== category) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <motion.div layout className="projects-grid" style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            key={project.id}
            className="project-card"
            style={{ 
              perspective: '1500px',
              backgroundColor: 'transparent',
              position: 'relative',
              cursor: 'pointer',
            }}
          >
            <div 
              className="project-card-inner" 
              onClick={() => setSelectedProject(project)}
            >
              {/* Front Face */}
              <div className="glass project-card-front" style={{ border: '1px solid var(--border-color)' }}>
                <img 
                  src={project.displayImage} 
                  alt={project.displayTitle} 
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} 
                  className="project-img" 
                />
              </div>
              
              {/* Back Face */}
              <div className="glass project-card-back" style={{ 
                border: '1px solid var(--accent-color)', 
                background: 'linear-gradient(135deg, rgba(15,15,15,0.95) 0%, rgba(5,5,5,0.95) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>{project.displayTitle}</h3>
                <p style={{ color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{project.category}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: 'var(--text-secondary)' }}>
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: 'var(--text-secondary)' }}>
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {project.url && project.url !== '#' ? (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.url, '_blank');
                    }}
                    className="view-details-btn"
                    style={{ padding: '0.85rem 2rem', fontSize: '0.9rem' }}
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight size={18} className="btn-icon" />
                  </button>
                ) : (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="view-details-btn"
                    style={{ padding: '0.85rem 2rem', fontSize: '0.9rem' }}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={18} className="btn-icon" />
                  </button>
                )}
                
                <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Click card for full details
                </p>
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
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
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
                width: '95vw',
                maxHeight: '95vh',
                overflowY: 'auto',
                borderRadius: '24px',
                position: 'relative',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-secondary)',
                  padding: '0.75rem',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              
              <div className="modal-img-container" style={{ position: 'relative', height: '30vh', minHeight: '220px', backgroundColor: '#000', overflow: 'hidden', flexShrink: 0 }}>
                <img 
                  src={selectedProject.displayImage} 
                  alt={selectedProject.displayTitle} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', inset: 0, opacity: 0.85 }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 80%)', zIndex: 1, pointerEvents: 'none' }} />
              </div>
              
              <motion.div 
                className="modal-content-container" 
                style={{ padding: '0 4rem 4rem', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', width: '100%' }}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <h3 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                    {selectedProject.displayTitle}
                  </h3>
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>
                    {selectedProject.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          width: 100%;
          align-items: start;
        }

        .project-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }

        .project-card:hover .project-card-inner {
          transform: rotateY(180deg);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.8);
        }

        .project-card-front {
          position: relative;
          width: 100%;
          height: auto;
          display: flex;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          overflow: hidden;
        }

        .project-card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          overflow: hidden;
          transform: rotateY(180deg);
        }

        .view-details-btn {
          padding: 1rem 2.25rem;
          border-radius: 3rem;
          background: linear-gradient(135deg, var(--accent-color), #a855f7);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 0 0 rgba(255,255,255,0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .view-details-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: all 0.6s ease;
        }

        .view-details-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 25px rgba(0,0,0,0.4), 0 0 20px var(--accent-color);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .view-details-btn:hover::before {
          left: 100%;
        }

        .view-details-btn .btn-icon {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .view-details-btn:hover .btn-icon {
          transform: translate(4px, -4px) scale(1.1);
        }

        .project-modal-content {
          max-width: 900px !important;
          margin: 0 auto;
        }
        
        .premium-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 30px -10px var(--accent-color);
          filter: brightness(1.1);
        }
        
        .tech-tag:hover {
          background-color: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.2) !important;
          color: white !important;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .projects-grid { grid-template-columns: 1fr; }
          .modal-img-container {
            min-height: 250px !important;
            height: 35vh !important;
          }
          .modal-content-container {
            padding: 0 2rem 3rem !important;
          }
          .premium-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

