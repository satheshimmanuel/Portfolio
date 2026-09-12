import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 size={24} className="text-accent" />,
      title: 'Full-Stack Expertise',
      description: 'Building end-to-end applications with React, Node.js, Express, MongoDB, and MySQL.'
    },
    {
      icon: <Rocket size={24} className="text-accent" />,
      title: 'Scalable Solutions',
      description: 'Designing high-performance ERPs, CRMs, and custom web applications for enterprises.'
    },
    {
      icon: <Award size={24} className="text-accent" />,
      title: '2.5+ Years Experience',
      description: 'Delivering robust production applications across multiple industries and freelance projects.'
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '2.5+' },
    { label: 'Companies Worked', value: '2' },
    { label: 'Projects Delivered', value: '10+' },
    { label: 'Engineering CGPA', value: '8.1' }
  ];

  return (
    <section className="container section" style={{ position: 'relative', minHeight: 'calc(100vh - 70px)', display: 'flex', alignItems: 'center', padding: '6rem 0' }}>
      
      {/* Subtle Background Pattern */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'radial-gradient(var(--border-color) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2, pointerEvents: 'none' }} />

      <div style={{ width: '100%', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Top Header & Intro */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: '2rem', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <Terminal size={18} className="text-accent" />
              <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>About Me</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
              Passionate Developer <br />
              <span className="text-gradient">Crafting Modern Web Products.</span>
            </h2>
            
            <p className="text-secondary" style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Graduated with a Mechanical Engineering degree (8.1 CGPA) in 2023, I pivoted into software engineering through rigorous training and hands-on production experience. Over the last 2.5 years, I have architected and deployed scalable MERN stack web platforms, ERP software, and CRM tools for businesses.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} className="text-accent" /> Clean Code Standards
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} className="text-accent" /> Responsive & Mobile-First
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} className="text-accent" /> API & Database Design
              </div>
            </div>
          </motion.div>

          {/* Code Window / Terminal Card Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div className="glass" style={{ width: '100%', maxWidth: '480px', borderRadius: '1.5rem', border: '1px solid var(--border-color)', overflow: 'hidden', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)' }}>
              {/* Terminal Title Bar */}
              <div style={{ padding: '0.85rem 1.25rem', backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'monospace' }}>developer-profile.json</span>
                <Cpu size={16} className="text-accent" />
              </div>

              {/* Code Snippet Box */}
              <div style={{ padding: '1.75rem', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-primary)', backgroundColor: 'var(--bg-secondary)', overflowX: 'auto' }}>
                <span style={{ color: 'var(--accent-color)' }}>const</span> <span style={{ color: '#ec4899' }}>developer</span> = &#123;<br />
                &nbsp;&nbsp;name: <span style={{ color: '#10b981' }}>"Sathesh Immanuel"</span>,<br />
                &nbsp;&nbsp;role: <span style={{ color: '#10b981' }}>"MERN Stack Developer"</span>,<br />
                &nbsp;&nbsp;experience: <span style={{ color: '#f59e0b' }}>"2.5+ Years"</span>,<br />
                &nbsp;&nbsp;location: <span style={{ color: '#10b981' }}>"Chennai, India"</span>,<br />
                &nbsp;&nbsp;passions: [<span style={{ color: '#10b981' }}>"Web Architecture"</span>, <span style={{ color: '#10b981' }}>"UI/UX"</span>, <span style={{ color: '#10b981' }}>"ERP Systems"</span>],<br />
                &nbsp;&nbsp;availability: <span style={{ color: '#3b82f6' }}>true</span><br />
                &#125;;
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Feature Highlights Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass"
              style={{
                padding: '2rem',
                borderRadius: '1.5rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ padding: '0.75rem', width: 'fit-content', borderRadius: '1rem', backgroundColor: 'var(--bg-tertiary)' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</h3>
              <p className="text-secondary" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem' }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -4 }}
              className="glass" 
              style={{ padding: '1.75rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', textAlign: 'center' }}
            >
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '0.25rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
