import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, GraduationCap, ServerCog, Code2, ArrowUpRight, CheckCircle2, Zap, Layers, ShieldCheck, Database } from 'lucide-react';

const servicesList = [
  {
    num: '01',
    category: 'ENTERPRISE SOLUTIONS',
    title: 'ERP & CRM Systems',
    desc: 'Architecting high-volume enterprise software, business process automation, RBAC portals, and custom form engines built for scalability.',
    icon: <ServerCog size={26} />,
    tags: ['RBAC Security', 'Quotation Engine', 'PDF-Lib Automation', 'Workflows'],
    highlight: true
  },
  {
    num: '02',
    category: 'FULL-STACK DEVELOPMENT',
    title: 'Custom Web Applications',
    desc: 'Engineering lightning-fast, reactive single-page applications and robust RESTful APIs with clean modular architecture and seamless UX.',
    icon: <Code2 size={26} />,
    tags: ['React / Vite', 'Node.js & Express', 'MongoDB & MySQL', 'REST APIs'],
    highlight: false
  },
  {
    num: '03',
    category: 'E-COMMERCE & DIGITAL COMMERCE',
    title: 'E-Commerce Platforms',
    desc: 'Building high-converting online storefronts featuring secure multi-gateway checkout, dynamic cart logic, and comprehensive inventory management.',
    icon: <ShoppingBag size={26} />,
    tags: ['Payment Gateways', 'Cart Logic', 'Admin Analytics', 'Catalog Ops'],
    highlight: false
  },
  {
    num: '04',
    category: 'INSTITUTIONAL PLATFORMS',
    title: 'School & Data Management',
    desc: 'Developing centralized administrative portals to replace manual records with automated student gradebooks, attendance, and reporting.',
    icon: <GraduationCap size={26} />,
    tags: ['Record Automation', 'Student Portals', 'Performance Analytics', 'Reporting'],
    highlight: false
  }
];

const Services = () => {
  return (
    <section id="services" className="section container" style={{ position: 'relative', zIndex: 2 }}>
      {/* Tunis Section Header */}
      <div className="tunis-section-title-wrap">
        <div className="tunis-watermark">SERVICES</div>
        <h2 className="tunis-title-foreground">
          WHAT <span>I DO</span>
        </h2>
      </div>

      {/* Services Modern Bento Grid */}
      <div className="services-bento-grid">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`service-bento-card ${service.highlight ? 'featured' : ''}`}
          >
            {/* Top Bar: Number + Category Tag */}
            <div className="service-card-topbar">
              <span className="service-num">{service.num}</span>
              <span className="service-category-tag">{service.category}</span>
            </div>

            {/* Icon + Title Header */}
            <div className="service-header-row">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>

            {/* Description */}
            <p className="service-desc">{service.desc}</p>

            {/* Deliverables / Capabilities Tags */}
            <div className="service-tags-wrap">
              {service.tags.map((tag, tIdx) => (
                <span key={tIdx} className="service-tech-pill">
                  <CheckCircle2 size={12} className="pill-check" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Action Link */}
            <div className="service-footer-row">
              <a href="#contact" className="service-cta-link">
                <span>Start a Project</span>
                <div className="service-arrow-circle">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .services-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .service-bento-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.5rem;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.45);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-bento-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .service-bento-card:hover {
          border-color: var(--border-highlight);
          box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 180, 0, 0.12);
        }

        .service-bento-card:hover::before {
          opacity: 1;
        }

        .service-card-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .service-num {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--accent-color);
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .service-category-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
        }

        .service-header-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .service-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .service-bento-card:hover .service-icon-wrapper {
          background: var(--accent-soft);
          border-color: var(--border-highlight);
          transform: scale(1.05);
        }

        .service-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.3;
          margin: 0;
        }

        .service-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
          flex-grow: 1;
        }

        .service-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .service-tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.65rem;
          border-radius: 8px;
          background: var(--bg-tertiary);
          border: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .service-tech-pill .pill-check {
          color: var(--accent-color);
        }

        .service-bento-card:hover .service-tech-pill {
          border-color: rgba(255, 180, 0, 0.2);
          color: var(--text-primary);
        }

        .service-footer-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .service-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          transition: all 0.25s ease;
        }

        .service-arrow-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: all 0.25s ease;
        }

        .service-cta-link:hover {
          color: var(--accent-color);
        }

        .service-cta-link:hover .service-arrow-circle {
          background: var(--accent-color);
          color: #111111;
          transform: translate(2px, -2px);
        }

        @media (max-width: 992px) {
          .services-bento-grid {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
        }

        @media (max-width: 600px) {
          .service-bento-card {
            padding: 1.5rem;
          }
          .service-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
