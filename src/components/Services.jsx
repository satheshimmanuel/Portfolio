import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, RefreshCw, BarChart, Code, Server, ServerCog } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { title: 'ERP Systems', desc: 'Custom enterprise software for construction, inventory, and HR.', icon: <Briefcase size={32} /> },
    { title: 'Workflow Automation', desc: 'Connecting disconnected APIs to reduce manual data entry by 80%.', icon: <RefreshCw size={32} /> },
    { title: 'Data Dashboards', desc: 'Real-time analytics and complex chart visualizations.', icon: <BarChart size={32} /> },
    { title: 'E-Commerce Platforms', desc: 'High-conversion stores optimized for spices, clothing, and retail.', icon: <Code size={32} /> },
    { title: 'Static Sites & Portfolios', desc: 'Lightning-fast, SEO-optimized landing pages and personal portfolios.', icon: <Code size={32} /> },
    { title: 'RESTful APIs', desc: 'Secure, versioned APIs with complex MongoDB aggregations.', icon: <Server size={32} /> },
    { title: 'Cloud Administration', desc: 'AWS EC2 setups, Nginx reverse proxies, and PM2 deployments.', icon: <ServerCog size={32} /> }
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
            className="glass"
            style={{ padding: '3rem 2.5rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ marginBottom: '2rem', color: 'var(--text-primary)', transition: 'all 0.3s', display: 'inline-flex', padding: '1rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '1rem', alignSelf: 'flex-start' }} className="service-icon">
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
            <p className="text-secondary" style={{ lineHeight: 1.7, fontSize: '1rem' }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .glass:hover .service-icon { color: white !important; background-color: var(--accent-color) !important; transform: scale(1.1); }
        .glass:hover { border-color: var(--accent-color); transform: translateY(-5px); }
        .glass { transition: all 0.3s ease; }
      `}</style>
    </section>
  );
};

export default Services;
