import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, ShoppingBag, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'static',
    name: 'Static Website',
    tagline: 'Fast, modern landing page & portfolio',
    priceInr: '₹3,000',
    priceUsd: '$49',
    startsFrom: true,
    delivery: '3 - 5 Days Delivery',
    icon: <Globe size={26} />,
    popular: false,
    features: [
      '1 - 5 Custom Responsive Pages',
      'Ultra-Fast Loading (< 1s speed)',
      'Contact Form with Email Alerts',
      'WhatsApp Quick Chat Button',
      'SEO & Social Share Meta Tags',
      'Free Hosting & SSL Deployment',
      '1 Month Free Support'
    ]
  },
  {
    id: 'admin-panel',
    name: 'Website + Admin Panel',
    tagline: 'Dynamic CMS with full content control',
    priceInr: '₹18,999',
    priceUsd: '$349',
    delivery: '7 - 12 Days Delivery',
    icon: <ShieldCheck size={26} />,
    popular: true,
    badge: 'POPULAR',
    features: [
      'Everything in Static Plan',
      'Custom Secure Admin Dashboard',
      'Add/Edit Services, Blogs & Content',
      'Cloud Media Uploads (Cloudinary)',
      'Database & Lead Management',
      'Export Inquiries to Excel/CSV',
      '2 Months Free Support & Training'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Web App',
    tagline: 'Online store, payments & custom portals',
    priceInr: '₹34,999',
    priceUsd: '$699',
    delivery: '14 - 20 Days Delivery',
    icon: <ShoppingBag size={26} />,
    popular: false,
    badge: 'ADVANCED',
    features: [
      'Everything in Admin Panel',
      'Product Catalog, Cart & Checkout',
      'Payment Gateway (Razorpay/Stripe)',
      'Customer Accounts & Order Tracking',
      'Automated Invoices & Email Receipts',
      'Discount Coupons & Stock Alerts',
      '3 Months Free Support & Maintenance'
    ]
  }
];

const Pricing = () => {
  const [currency, setCurrency] = useState('inr'); // 'inr' | 'usd'

  const handleSelect = (planName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const subjectInput = document.querySelector('input[name="subject"], input[placeholder*="Subject"], input[id*="subject"]');
        if (subjectInput) {
          subjectInput.value = `Inquiry for ${planName}`;
          subjectInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 400);
    }
  };

  return (
    <section id="pricing" className="section container" style={{ position: 'relative', zIndex: 2 }}>
      {/* Tunis Section Header */}
      <div className="tunis-section-title-wrap">
        <div className="tunis-watermark">PRICING</div>
        <h2 className="tunis-title-foreground">
          MY <span>PRICING</span>
        </h2>
      </div>

      {/* Currency Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <div className="currency-pill-wrap">
          <button
            type="button"
            className={`currency-pill-btn ${currency === 'inr' ? 'active' : ''}`}
            onClick={() => setCurrency('inr')}
          >
            ₹ INR
          </button>
          <button
            type="button"
            className={`currency-pill-btn ${currency === 'usd' ? 'active' : ''}`}
            onClick={() => setCurrency('usd')}
          >
            $ USD
          </button>
        </div>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="pricing-3cards-grid">
        {plans.map((plan, index) => {
          const price = currency === 'inr' ? plan.priceInr : plan.priceUsd;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`pricing-card-compact ${plan.popular ? 'featured' : ''}`}
            >
              {plan.popular && (
                <div className="pricing-badge-popular">
                  <Sparkles size={12} />
                  <span>{plan.badge}</span>
                </div>
              )}

              {/* Icon & Title */}
              <div className="pricing-head">
                <div className="pricing-icon-bubble">
                  {plan.icon}
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-sub">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="pricing-price-wrap">
                {plan.startsFrom && <div className="pricing-starts-label">Starts from</div>}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span className="pricing-cost">{price}</span>
                  <span className="pricing-duration">/ project</span>
                </div>
              </div>
              <div className="pricing-delivery-tag">{plan.delivery}</div>

              {/* Feature List */}
              <div className="pricing-features">
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} className="pricing-feature-line">
                    <CheckCircle2 size={16} className="feature-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => handleSelect(plan.name)}
                className={`pricing-btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                <span>Choose Plan</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Scoped CSS with Theme Variables */}
      <style>{`
        .currency-pill-wrap {
          display: inline-flex;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 9999px;
          padding: 4px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .currency-pill-btn {
          padding: 0.45rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 9999px;
          color: var(--text-secondary);
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .currency-pill-btn.active {
          background-color: var(--accent-color);
          color: #111111;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .pricing-3cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        @media (max-width: 992px) {
          .pricing-3cards-grid {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
          }
        }

        .pricing-card-compact {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .pricing-card-compact:hover {
          border-color: var(--border-highlight);
          box-shadow: 0 16px 35px -10px rgba(0, 0, 0, 0.35);
        }

        .pricing-card-compact.featured {
          border-color: var(--accent-color);
          background: linear-gradient(180deg, var(--bg-card) 0%, rgba(255, 180, 0, 0.05) 100%);
          box-shadow: 0 10px 30px -10px var(--accent-glow);
        }

        .pricing-badge-popular {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-color);
          color: #111111;
          padding: 0.3rem 0.95rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .pricing-head {
          margin-bottom: 1.25rem;
        }

        .pricing-icon-bubble {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          margin-bottom: 1rem;
        }

        .pricing-card-compact.featured .pricing-icon-bubble {
          background: var(--accent-soft);
          border-color: var(--accent-color);
        }

        .pricing-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .pricing-sub {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
          min-height: 2.4rem;
        }

        .pricing-price-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.2rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .pricing-starts-label {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .pricing-cost {
          font-size: 2.25rem;
          font-weight: 900;
          color: var(--accent-color);
          font-family: var(--font-sans);
          letter-spacing: -0.02em;
        }

        .pricing-duration {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .pricing-delivery-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-top: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 2rem;
          flex: 1;
        }

        .pricing-feature-line {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .feature-check {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pricing-btn {
          width: 100%;
          padding: 0.85rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
