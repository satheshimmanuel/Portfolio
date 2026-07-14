import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, RefreshCw, BarChart, Code, Server, ServerCog, Film, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { title: 'E-Commerce Platforms', desc: 'Scalable, high-conversion online stores with secure payment integration.', icon: <Briefcase size={32} /> },
    { title: 'CRM & Data Management', desc: 'Custom CRM solutions to manage customer interactions and streamline data workflows.', icon: <BarChart size={32} /> },
    { title: 'Quotation Generators', desc: 'Dynamic, automated quotation systems tailored for B2B client proposals.', icon: <RefreshCw size={32} /> },
    { title: 'Billing Solutions', desc: 'Secure and efficient billing and invoicing systems designed for complex business logic.', icon: <Server size={32} /> },
    { title: 'ERP Systems', desc: 'Custom enterprise software for workflow automation and resource planning.', icon: <ServerCog size={32} /> },
    { title: 'Web Applications', desc: 'Lightning-fast, SEO-optimized web apps using modern frameworks.', icon: <Code size={32} /> },
    { title: 'Private Theatre Website', desc: 'Bespoke web platforms for private theatres, focusing on booking and premium user experiences.', icon: <Film size={32} /> },
    { title: 'School Website', desc: 'Custom web solutions tailored for school website, focusing on modern design, performance, and seamless functionality.', icon: <Globe size={32} /> }
  ];

  return (
    <section className="container section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image */}
      <div 
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: -1, 
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 'var(--bg-image-opacity)',
          pointerEvents: 'none'
        }} 
      />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay)', pointerEvents: 'none' }} />

      <div style={{ marginBottom: '5rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Comprehensive <span className="text-accent">Services</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass service-card"
            style={{ 
              padding: '4rem 2rem 2.5rem', 
              borderRadius: '1.5rem', 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            {/* Ribbon / Tab */}
            <div 
              className="service-ribbon"
              style={{ 
                position: 'absolute', 
                top: '0', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-color)',
                padding: '1.25rem', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-color)',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                minWidth: '80px',
                minHeight: '80px'
              }}
            >
              {service.icon}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
            
            <p className="text-secondary" style={{ lineHeight: 1.7, fontSize: '1rem', marginBottom: '2rem' }}>{service.desc}</p>
            
            {/* Arrow Button */}
            <div 
              className="service-btn"
              style={{
                marginTop: 'auto',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <ArrowRight size={20} />
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .service-card { transition: all 0.3s ease; }
        .service-card:hover { border-color: var(--accent-color); transform: translateY(-5px); }
        .service-ribbon { transition: all 0.3s ease; z-index: 10; }
      `}</style>
    </section>
  );
};

export default Services;
