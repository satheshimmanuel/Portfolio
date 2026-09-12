import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, GraduationCap, ServerCog, Code2, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    { 
      title: 'E-Commerce Platforms', 
      desc: 'Scalable, high-conversion online stores with secure payment gateway integration, cart logic, and admin management.', 
      icon: <ShoppingBag size={32} /> 
    },
    { 
      title: 'School Data Management', 
      desc: 'Comprehensive school web systems to manage student records, marks, attendance, and administrative tasks efficiently.', 
      icon: <GraduationCap size={32} /> 
    },
    { 
      title: 'ERP & CRM Systems', 
      desc: 'Custom enterprise software and CRM solutions for workflow automation, customer tracking, and business resource planning.', 
      icon: <ServerCog size={32} /> 
    },
    { 
      title: 'Web Applications', 
      desc: 'Lightning-fast, modern, and SEO-optimized full-stack web applications tailored to business requirements.', 
      icon: <Code2 size={32} /> 
    }
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

      <div style={{ marginBottom: '4rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h2 className="section-title">
          Comprehensive <span className="text-accent">Services</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
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
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="service-ribbon"
              style={{ 
                position: 'absolute', 
                top: '0', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--bg-secondary)', 
                border: '1.5px solid var(--border-color)',
                padding: '1.25rem', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-color)',
                boxShadow: 'var(--card-shadow)',
                minWidth: '80px',
                minHeight: '80px'
              }}
            >
              {service.icon}
            </motion.div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
            
            <p className="text-secondary" style={{ lineHeight: 1.7, fontSize: '1rem', marginBottom: '2rem' }}>{service.desc}</p>
            
            {/* Arrow Button */}
            <motion.div 
              whileHover={{ x: 5, backgroundColor: 'var(--accent-color)', color: '#ffffff' }}
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
            </motion.div>
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
