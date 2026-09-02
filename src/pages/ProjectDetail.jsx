import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
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

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectsData.find(p => p.id === id);
    setProject(found);
  }, [id]);

  if (!project) return <div className="container section" style={{ textAlign: 'center', paddingTop: '10rem' }}>Project not found.</div>;

  return (
    <div className="container section" style={{ paddingBottom: '5rem' }}>
      <Link to="/projects" className="text-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem', textDecoration: 'none', fontWeight: 600 }}>
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Left Column: Laptop Mockup */}
        <div>
          <div className="laptop-mockup-wrapper">
            <div className="laptop-screen">
              <div className="laptop-camera" />
              <div className="laptop-display">
                <img src={project.mainImage} alt={project.title} className="laptop-screen-img" />
              </div>
            </div>
            <div className="laptop-base">
              <div className="laptop-notch" />
            </div>
          </div>
        </div>

        {/* Right Column: Content & Languages */}
        <div>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem', border: '1px solid var(--border-color)' }}>
            {project.category}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            {project.title}
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {project.description}
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>Languages & Frameworks</h3>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {project.techStack.map((tech, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '2rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  <span className="tech-dot" style={{ backgroundColor: getDotColor(tech), width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block' }} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <button className="bg-accent" style={{ padding: '0.9rem 2.25rem', borderRadius: '3rem', color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px -5px var(--accent-color)' }}>
              <ExternalLink size={20} /> Live Preview
            </button>
            <button style={{ padding: '0.9rem 2.25rem', borderRadius: '3rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <FaGithub size={20} /> View Source
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
