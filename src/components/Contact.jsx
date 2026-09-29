import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="section container" style={{ position: 'relative', zIndex: 2 }}>
      {/* Tunis Section Header */}
      <div className="tunis-section-title-wrap">
        <div className="tunis-watermark">CONTACT</div>
        <h2 className="tunis-title-foreground">
          GET IN <span>TOUCH</span>
        </h2>
      </div>

      <div className="tunis-contact-grid">
        {/* Left Column: Direct Info Card with Solid Dark Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="contact-card contact-left-card"
        >
          <div className="contact-card-header">
            <span className="contact-accent-bar" />
            <h3 className="contact-left-heading">DON'T BE SHY !</h3>
          </div>

          <p className="contact-left-desc">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or high-impact opportunities to build something great together.
          </p>

          <div className="contact-info-items">
            {/* Address Tile */}
            <div className="contact-info-tile">
              <div className="contact-icon-circle">
                <MapPin size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-sub">ADDRESS POINT</span>
                <span className="contact-info-main">Tambaram, Chennai, India</span>
              </div>
            </div>

            {/* Email Tile */}
            <div className="contact-info-tile">
              <div className="contact-icon-circle">
                <Mail size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-sub">MAIL ME</span>
                <a href="mailto:satheshimmanuel@gmail.com" className="contact-info-main contact-link">
                  satheshimmanuel@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Tile */}
            <div className="contact-info-tile">
              <div className="contact-icon-circle">
                <Phone size={20} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-sub">CALL ME</span>
                <a href="tel:+919789413580" className="contact-info-main contact-link">
                  +91 97894 13580
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="contact-social-section">
            <span className="contact-social-label">CONNECT WITH ME</span>
            <div className="contact-social-row">
              <a
                href="https://github.com/satheshimmanvel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sathesh-immanuel-0680672b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="Indeed"
              >
                <SiIndeed size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form Card with Solid Dark Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="contact-card contact-form-card"
        >
          <div className="contact-card-header">
            <MessageSquare size={22} color="var(--accent-color)" />
            <h3 className="contact-left-heading">SEND A MESSAGE</h3>
          </div>

          {isSuccess ? (
            <div className="success-box">
              <div className="success-icon">
                <CheckCircle2 size={36} />
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="tunis-form">
              <div className="form-row-2">
                <input
                  required
                  type="text"
                  placeholder="YOUR NAME"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="tunis-input"
                />
                <input
                  required
                  type="email"
                  placeholder="YOUR EMAIL"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="tunis-input"
                />
              </div>

              <input
                required
                type="text"
                placeholder="YOUR SUBJECT"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="tunis-input"
              />

              <textarea
                required
                rows={5}
                placeholder="YOUR MESSAGE"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="tunis-input tunis-textarea"
              />

              <div style={{ marginTop: '0.5rem' }}>
                <button type="submit" disabled={isSubmitting} className="btn-tunis">
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <div className="btn-icon-circle">
                    <Send size={18} />
                  </div>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .tunis-contact-grid {
          display: grid;
          grid-template-columns: 44% 56%;
          gap: 2.5rem;
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .contact-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.5rem;
          padding: 2.25rem;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.45);
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }

        .contact-left-card {
          justify-content: space-between;
        }

        .contact-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .contact-accent-bar {
          width: 4px;
          height: 24px;
          background: var(--accent-color);
          border-radius: 4px;
        }

        .contact-left-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.04em;
          margin: 0;
          text-transform: uppercase;
        }

        .contact-left-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .contact-info-items {
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          margin-bottom: 2rem;
        }

        .contact-info-tile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          border-radius: 14px;
          background: var(--bg-tertiary);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.25s ease;
        }

        .contact-info-tile:hover {
          border-color: var(--border-highlight);
          background: var(--bg-card-hover);
        }

        .contact-icon-circle {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .contact-info-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .contact-info-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .contact-info-main {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          word-break: break-all;
        }

        .contact-link {
          transition: color 0.2s ease;
        }

        .contact-link:hover {
          color: var(--accent-color);
        }

        .contact-social-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .contact-social-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .contact-social-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .social-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.25s ease;
        }

        .social-icon-btn:hover {
          background-color: var(--accent-color);
          color: #111111;
          border-color: var(--accent-color);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px -4px rgba(255, 180, 0, 0.4);
        }

        .tunis-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .tunis-input {
          width: 100%;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 0.9rem 1.25rem;
          font-size: 0.9rem;
          color: var(--text-primary);
          outline: none;
          font-family: inherit;
          font-weight: 500;
          transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }

        .tunis-input:focus {
          border-color: var(--accent-color);
          background-color: var(--bg-secondary);
          box-shadow: 0 0 15px rgba(255, 180, 0, 0.15);
        }

        .tunis-input::placeholder {
          color: var(--text-muted);
          font-size: 0.8rem;
          letter-spacing: 0.04em;
        }

        .tunis-textarea {
          border-radius: 14px;
          resize: vertical;
          min-height: 140px;
        }

        .success-box {
          text-align: center;
          padding: 3rem 1.5rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-highlight);
          border-radius: 16px;
        }

        .success-icon {
          color: #10B981;
          margin-bottom: 1rem;
        }

        @media (max-width: 992px) {
          .tunis-contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .contact-card {
            padding: 1.5rem;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
