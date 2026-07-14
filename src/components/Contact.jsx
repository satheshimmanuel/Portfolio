import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section className="container section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 5rem)', padding: '2rem 1rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Image & Overlay */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 'var(--bg-image-opacity)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: 'var(--bg-overlay)', pointerEvents: 'none' }} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: '1000px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Get In <span className="text-accent">Touch.</span>
          </h2>
          <p className="text-secondary" style={{ fontSize: '1.125rem' }}>
            Have a project in mind? Fill out the form below and I'll get back to you shortly.
          </p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem' }}>
          
          {/* Left Side: Contact Info & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem', color: 'var(--accent-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Email</h3>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>satheshimman17@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem', color: 'var(--accent-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Phone</h3>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>+91 9688202165</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem', color: 'var(--accent-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Location</h3>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Tambaram, Chennai</p>
                </div>
              </div>

            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://www.linkedin.com/in/sathesh-immanuel-0680672b4/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ padding: '1rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', transition: 'all 0.3s' }}>
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/satheshimmanuel" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ padding: '1rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', transition: 'all 0.3s' }}>
                <FaGithub size={24} />
              </a>
              <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ padding: '1rem', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', transition: 'all 0.3s' }}>
                <SiIndeed size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="glass" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)', opacity: 0.1, pointerEvents: 'none' }} />
            
            {isSent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem', textAlign: 'center' }}
              >
                <CheckCircle size={64} style={{ color: 'var(--accent-color)' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>Message Sent!</h3>
                <p className="text-secondary" style={{ fontSize: '1.125rem' }}>Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="input-group">
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Name</label>
                    <input required type="text" placeholder="John Doe" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} />
                  </div>
                  <div className="input-group">
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Email</label>
                    <input required type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} />
                  </div>
                </div>

                <div className="input-group">
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Subject</label>
                  <input required type="text" placeholder="Project Inquiry" style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} />
                </div>

                <div className="input-group">
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Message</label>
                  <textarea required rows="5" placeholder="Tell me about your project..." style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none', resize: 'vertical' }} />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-accent"
                  style={{ padding: '1rem 2rem', borderRadius: '3rem', color: 'white', fontWeight: 700, fontSize: '1.125rem', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem', boxShadow: '0 10px 25px -5px var(--accent-color)' }}
                >
                  Send Message <Send size={20} />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </motion.div>

      <style>{`
        .input-group input:focus, .input-group textarea:focus {
          border-color: var(--accent-color) !important;
          background-color: var(--bg-primary) !important;
        }
        .social-icon:hover {
          background-color: var(--accent-color) !important;
          color: white !important;
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
