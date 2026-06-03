import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import projectsData from '../data/projects.json';

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
      <Link to="/projects" className="text-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', textDecoration: 'none', fontWeight: 600 }}>
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '2rem', backgroundColor: 'var(--bg-secondary)', color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem' }}>
          {project.category}
        </div>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--text-primary)' }}>
          {project.title}
        </h1>
        <p className="text-secondary" style={{ fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '800px' }}>
          {project.description}
        </p>
      </div>

      <div style={{ borderRadius: '2rem', overflow: 'hidden', border: '1px solid var(--border-color)', marginBottom: '4rem' }}>
        <img src={project.mainImage} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technologies</h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {project.techStack.map((tech, i) => (
              <span key={i} style={{ padding: '0.75rem 1.5rem', backgroundColor: 'var(--glass-bg)', border: '1px solid var(--border-color)', borderRadius: '2rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
            <button className="bg-accent" style={{ padding: '1rem 2rem', borderRadius: '3rem', color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', border: 'none', cursor: 'pointer' }}>
              <ExternalLink size={20} /> Live Preview
            </button>
            <button style={{ padding: '1rem 2rem', borderRadius: '3rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <FaGithub size={20} /> View Source
            </button>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Project Gallery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {project.gallery.map((img, i) => (
              <div key={i} style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '1/1', border: '1px solid var(--border-color)' }}>
                <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Gallery" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
