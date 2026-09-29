import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Cpu, FileCode2, Code2, Rocket, Award, User, MapPin, Phone, Mail, GraduationCap, Languages, CheckCircle2 } from 'lucide-react';

const About = () => {
  const [activeCodeTab, setActiveCodeTab] = useState('developer');

  const personalInfo = [
    { label: 'First Name', value: 'Sathesh', icon: <User size={15} /> },
    { label: 'Last Name', value: 'Immanuel', icon: <User size={15} /> },
    { label: 'Age', value: '24 Years', icon: <Award size={15} /> },
    { label: 'Nationality', value: 'Indian', icon: <MapPin size={15} /> },
    { label: 'Freelance', value: 'Available', highlight: true, icon: <CheckCircle2 size={15} /> },
    { label: 'Address', value: 'Chennai, India', icon: <MapPin size={15} /> },
    { label: 'Phone', value: '+91 97894 13580', icon: <Phone size={15} /> },
    { label: 'Email', value: 'satheshimmanuel@gmail.com', icon: <Mail size={15} /> },
    { label: 'Degree', value: 'B.E. Mechanical (8.1)', icon: <GraduationCap size={15} /> },
    { label: 'Languages', value: 'English, Tamil', icon: <Languages size={15} /> },
  ];

  const stats = [
    { value: '2.5+', label: 'YEARS OF', sub: 'EXPERIENCE' },
    { value: '10+', label: 'COMPLETED', sub: 'PROJECTS' },
    { value: '02', label: 'COMPANIES', sub: 'WORKED' },
    { value: '8.1', label: 'ENGINEERING', sub: 'CGPA' },
  ];

  const highlights = [
    {
      icon: <Code2 size={24} color="var(--accent-color)" />,
      title: 'Full-Stack Engineering',
      description: 'Architecting scalable web applications with React 19, Node.js, Express, MongoDB, and MySQL.'
    },
    {
      icon: <Rocket size={24} color="var(--accent-color)" />,
      title: 'Enterprise ERP & CRM',
      description: 'Designing high-volume business workflows, automated quotation pipelines, and RBAC portals.'
    },
    {
      icon: <Award size={24} color="var(--accent-color)" />,
      title: '2.5+ Years Production',
      description: 'Delivering robust, real-world software across product companies and enterprise clients.'
    }
  ];

  const codeTabs = [
    { id: 'developer', name: 'developer.ts' },
    { id: 'stack', name: 'stack.config' },
    { id: 'mission', name: 'philosophy.md' }
  ];

  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        {/* Tunis Section Title with Big Watermark */}
        <div className="tunis-section-title-wrap">
          <div className="tunis-watermark">RESUME</div>
          <h2 className="tunis-title-foreground">
            ABOUT <span>ME</span>
          </h2>
        </div>

        {/* 2-Column Tunis Resume Layout with Elevated Cards */}
        <div className="about-tunis-grid">
          {/* Left Column: Personal Infos Enclosed in a Clean Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="about-personal-card"
          >
            <div className="about-card-header">
              <div className="about-title-row">
                <span className="about-accent-bar" />
                <h3 className="about-subheading">PERSONAL INFOS</h3>
              </div>
              <span className="about-role-pill">Full Stack Engineer</span>
            </div>

            <div className="about-info-grid">
              {personalInfo.map((item, idx) => (
                <div key={idx} className="about-info-tile">
                  <div className="about-tile-icon">{item.icon}</div>
                  <div className="about-tile-content">
                    <span className="about-tile-label">{item.label}</span>
                    <span className={`about-tile-val ${item.highlight ? 'text-accent highlight-val' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-card-footer">
              <a
                href="/sathesh@immanuel.pdf"
                download="Sathesh_Immanuel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tunis"
              >
                <span>DOWNLOAD CV</span>
                <div className="btn-icon-circle">
                  <Download size={18} />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 4 Stat Boxes (2x2 Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="about-stats-grid"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -6, boxShadow: '0 16px 35px -10px rgba(0, 0, 0, 0.6)' }}
                className="about-stat-box"
              >
                <div className="about-stat-number">{stat.value}</div>
                <div className="about-stat-text">
                  <span>{stat.label}</span>
                  <strong>{stat.sub}</strong>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Middle Highlights & Interactive Terminal */}
        <div className="about-bottom-grid">
          {/* Highlights */}
          <div className="about-highlights-list">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bento-card highlight-card"
              >
                <div className="highlight-icon-box">
                  {item.icon}
                </div>
                <div>
                  <h4 className="highlight-title">
                    {item.title}
                  </h4>
                  <p className="highlight-desc">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Developer Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-terminal-wrap"
          >
            <div className="glass terminal-card">
              {/* Terminal Title Bar */}
              <div className="terminal-topbar">
                <div className="terminal-dots">
                  <span style={{ backgroundColor: '#EF4444' }} />
                  <span style={{ backgroundColor: '#F59E0B' }} />
                  <span style={{ backgroundColor: '#10B981' }} />
                </div>

                {/* Tabs */}
                <div className="terminal-tabs">
                  {codeTabs.map((tab) => {
                    const isActive = activeCodeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveCodeTab(tab.id)}
                        className={`terminal-tab-btn ${isActive ? 'active' : ''}`}
                      >
                        <FileCode2 size={12} />
                        {tab.name}
                      </button>
                    );
                  })}
                </div>

                <Cpu size={16} color="var(--accent-color)" />
              </div>

              {/* Code Snippet */}
              <div className="terminal-content">
                <AnimatePresence mode="wait">
                  {activeCodeTab === 'developer' && (
                    <motion.div
                      key="developer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="code-kw">const</span> <span className="code-var">engineer</span> = &#123;<br />
                      &nbsp;&nbsp;name: <span className="code-str">"Sathesh Immanuel"</span>,<br />
                      &nbsp;&nbsp;role: <span className="code-str">"Full Stack Engineer"</span>,<br />
                      &nbsp;&nbsp;experience: <span className="code-str">"2.5+ Years"</span>,<br />
                      &nbsp;&nbsp;location: <span className="code-str">"Chennai, India"</span>,<br />
                      &nbsp;&nbsp;education: <span className="code-muted">"B.E. Mech (8.1 CGPA)"</span>,<br />
                      &nbsp;&nbsp;status: <span className="code-success">"Ready for high-impact work"</span><br />
                      &#125;;
                    </motion.div>
                  )}

                  {activeCodeTab === 'stack' && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="code-kw">export const</span> <span className="code-var">coreArchitecture</span> = &#123;<br />
                      &nbsp;&nbsp;frontend: [<span className="code-str">"React 19"</span>, <span className="code-str">"TypeScript"</span>, <span className="code-str">"Framer Motion"</span>],<br />
                      &nbsp;&nbsp;backend: [<span className="code-str">"Node.js"</span>, <span className="code-str">"Express"</span>, <span className="code-str">"REST APIs"</span>],<br />
                      &nbsp;&nbsp;database: [<span className="code-str">"MongoDB"</span>, <span className="code-str">"MySQL"</span>, <span className="code-str">"Mongoose"</span>],<br />
                      &nbsp;&nbsp;specialties: [<span className="code-str">"PDF-Lib"</span>, <span className="code-str">"RBAC"</span>, <span className="code-str">"ERP Automation"</span>]<br />
                      &#125;;
                    </motion.div>
                  )}

                  {activeCodeTab === 'mission' && (
                    <motion.div
                      key="mission"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="code-muted"># Engineering Philosophy</span><br />
                      <span className="code-kw">1. Precision Over Hype:</span> Clean architecture.<br />
                      <span className="code-kw">2. User-Centric:</span> Accessible, 60fps UIs.<br />
                      <span className="code-kw">3. Resilient Systems:</span> Secure auth & DBs.<br />
                      <span className="code-kw">4. Fast Delivery:</span> Production reliability.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-tunis-grid {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 2.25rem;
          align-items: stretch;
        }

        .about-personal-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.5rem;
          padding: 2.25rem;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.45);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        .about-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.75rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.25rem;
        }

        .about-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .about-accent-bar {
          width: 4px;
          height: 24px;
          background: var(--accent-color);
          border-radius: 4px;
        }

        .about-subheading {
          font-size: 1.35rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--text-primary);
          letter-spacing: 0.04em;
          margin: 0;
        }

        .about-role-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          background: var(--accent-soft);
          color: var(--accent-color);
          border: 1px solid var(--border-highlight);
        }

        .about-info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 1.25rem;
          margin-bottom: 2rem;
        }

        .about-info-tile {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem 0.9rem;
          border-radius: 12px;
          background: var(--bg-tertiary);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.25s ease;
        }

        .about-info-tile:hover {
          border-color: var(--border-highlight);
          background: var(--bg-card-hover);
        }

        .about-tile-icon {
          color: var(--accent-color);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .about-tile-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .about-tile-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .about-tile-val {
          font-size: 0.88rem;
          color: var(--text-primary);
          font-weight: 700;
          word-break: break-word;
          line-height: 1.3;
        }

        .about-tile-val.highlight-val {
          color: var(--accent-color);
        }

        .about-card-footer {
          display: flex;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .about-stats-grid {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          justify-content: space-between;
        }

        .about-stat-box {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          padding: 1.35rem 1.65rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.45);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          z-index: 2;
        }

        .about-stat-box:hover {
          border-color: var(--border-highlight);
        }

        .about-stat-number {
          font-size: clamp(2rem, 2.5vw, 2.6rem);
          font-weight: 900;
          color: var(--accent-color);
          line-height: 1;
          min-width: 85px;
        }

        .about-stat-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          padding-left: 1.5rem;
          position: relative;
        }

        .about-stat-text::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 16px;
          height: 2px;
          background-color: var(--accent-color);
          border-radius: 2px;
        }

        .about-stat-text strong {
          color: var(--text-primary);
          font-weight: 800;
        }

        .about-bottom-grid {
          margin-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .about-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .highlight-card {
          padding: 1.35rem 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          background: var(--bg-card);
          border-radius: 1.25rem;
          border: 1px solid var(--border-color);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }

        .highlight-icon-box {
          padding: 0.75rem;
          border-radius: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .highlight-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .highlight-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .about-terminal-wrap {
          width: 100%;
          display: flex;
        }

        .terminal-card {
          width: 100%;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.5);
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
        }

        .terminal-topbar {
          padding: 0.75rem 1.25rem;
          background-color: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .terminal-dots {
          display: flex;
          gap: 0.35rem;
          align-items: center;
        }

        .terminal-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .terminal-tabs {
          display: flex;
          gap: 0.35rem;
        }

        .terminal-tab-btn {
          padding: 0.25rem 0.7rem;
          border-radius: 0.4rem;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-muted);
          font-size: 0.75rem;
          font-weight: 500;
          font-family: var(--font-mono);
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .terminal-tab-btn.active {
          background: var(--bg-card);
          border-color: var(--border-color);
          color: var(--accent-color);
          font-weight: 700;
        }

        .terminal-content {
          padding: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.83rem;
          line-height: 1.75;
          color: var(--text-primary);
          background-color: var(--bg-secondary);
          flex: 1;
          min-height: 220px;
          overflow-x: auto;
        }

        .code-kw {
          color: var(--accent-color);
          font-weight: 600;
        }

        .code-var {
          color: var(--text-primary);
          font-weight: 600;
        }

        .code-str {
          color: #FCD34D;
        }

        .code-muted {
          color: var(--text-muted);
        }

        .code-success {
          color: #10B981;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .about-tunis-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .about-personal-card {
            padding: 1.5rem;
          }
          .about-info-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
