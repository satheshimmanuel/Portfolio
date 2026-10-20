import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Pricing from '../components/Pricing';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'relative', zIndex: 10, minHeight: '100vh', paddingTop: '2rem', paddingBottom: '6rem' }}
    >
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <Link 
            to="/" 
            className="pricing-back-link"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              textDecoration: 'none', 
              fontWeight: 700,
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              transition: 'all 0.25s ease'
            }}
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <Sparkles size={16} />
            <span>Official 2026 Rate Card</span>
          </div>
        </div>
      </div>

      <Pricing isStandalone={true} />

      <style>{`
        .pricing-back-link:hover {
          color: var(--accent-color) !important;
          border-color: var(--accent-color) !important;
          transform: translateX(-3px);
        }
      `}</style>
    </motion.div>
  );
};

export default PricingPage;
