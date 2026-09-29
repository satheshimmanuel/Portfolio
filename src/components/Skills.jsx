import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layout, Server, Database, Wrench, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostman, SiVite, SiBootstrap, SiMui, SiRedux } from 'react-icons/si';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend & UI Architecture',
    subtitle: 'Creating lightning-fast, reactive, and fluid user interfaces with strict component modularity.',
    icon: <Layout size={20} />,
    skills: [
      { name: 'React 19 / 18', level: 'Core Mastery', percent: 95, icon: <FaReact />, tag: 'Frontend' },
      { name: 'TypeScript', level: 'Advanced', percent: 88, icon: <SiTypescript />, tag: 'Language' },
      { name: 'JavaScript (ES6+)', level: 'Deep Fluency', percent: 95, icon: <FaJs />, tag: 'Language' },
      { name: 'State Architecture', level: 'Context / Redux', percent: 90, icon: <SiRedux />, tag: 'State' },
      { name: 'Framer Motion', level: 'Kinetic Physics', percent: 92, icon: <Sparkles />, tag: 'Animation' },
      { name: 'HTML5 & Semantic SEO', level: 'Standards', percent: 98, icon: <FaHtml5 />, tag: 'Markup' },
      { name: 'Modern CSS3 & Vanilla', level: 'Design Systems', percent: 94, icon: <FaCss3Alt />, tag: 'Styling' },
      { name: 'Material UI / Bootstrap', level: 'Component Kits', percent: 90, icon: <SiMui />, tag: 'UI Kits' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & High-Throughput APIs',
    subtitle: 'Building resilient server-side architectures, RESTful services, and automated business workflows.',
    icon: <Server size={20} />,
    skills: [
      { name: 'Node.js Engine', level: 'Production Core', percent: 92, icon: <FaNodeJs />, tag: 'Runtime' },
      { name: 'Express.js Framework', level: 'REST APIs', percent: 92, icon: <SiExpress />, tag: 'Framework' },
      { name: 'RBAC & Auth Systems', level: 'JWT / Session', percent: 88, icon: <CheckCircle2 />, tag: 'Security' },
      { name: 'PDF-Lib Generation', level: 'Automated Quotes', percent: 94, icon: <Terminal />, tag: 'Automation' },
      { name: 'RESTful API Design', level: 'OpenAPI Spec', percent: 92, icon: <Sparkles />, tag: 'Architecture' },
      { name: 'Python Scripts', level: 'Utilities', percent: 75, icon: <FaPython />, tag: 'Scripting' }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Schema Design',
    subtitle: 'Designing normalized schemas, query aggregations, and high-integrity transactional databases.',
    icon: <Database size={20} />,
    skills: [
      { name: 'MongoDB', level: 'Pipelines & Aggregations', percent: 92, icon: <SiMongodb />, tag: 'NoSQL' },
      { name: 'Mongoose ODM', level: 'Schema & Middleware', percent: 92, icon: <SiMongodb />, tag: 'Data Modeling' },
      { name: 'MySQL Relational DB', level: 'Joins & Foreign Keys', percent: 85, icon: <SiMysql />, tag: 'SQL' },
      { name: 'ACID Transactions', level: 'Atomic Operations', percent: 88, icon: <CheckCircle2 />, tag: 'Data Integrity' }
    ]
  },
  {
    id: 'tooling',
    title: 'Tooling, Testing & DevOps',
    subtitle: 'Streamlining CI/CD workflows, source control, API testing, and modern build tooling.',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git & Version Control', level: 'Git Flow / Branching', percent: 94, icon: <FaGitAlt />, tag: 'VCS' },
      { name: 'GitHub Enterprise', level: 'PRs & Code Review', percent: 92, icon: <FaGithub />, tag: 'Collaboration' },
      { name: 'Postman Suite', level: 'API Testing & Mocks', percent: 90, icon: <SiPostman />, tag: 'Testing' },
      { name: 'Vite & Bundlers', level: 'HMR & Build Opts', percent: 92, icon: <SiVite />, tag: 'Build Engine' }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const selectedCategory = skillCategories.find(c => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="section container">
      
      {/* Tunis Section Header */}
      <div className="tunis-section-title-wrap">
        <div className="tunis-watermark">ABILITIES</div>
        <h2 className="tunis-title-foreground">
          MY <span>SKILLS</span>
        </h2>
      </div>

      {/* Category Tab Switcher with Spring Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}
      >
        {skillCategories.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(cat.id)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.65rem 1.25rem',
                borderRadius: '9999px',
                background: isActive ? 'var(--accent-gradient)' : 'var(--bg-card)',
                border: isActive ? '1px solid transparent' : '1px solid var(--border-color)',
                color: isActive ? '#14171C' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 8px 20px -5px rgba(var(--accent-color-rgb), 0.4)' : 'none'
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.title.split('&')[0].trim()}</span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Active Category Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bento-card"
          style={{ padding: '2rem' }}
        >
          {/* Header Info */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                {selectedCategory.title}
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', maxWidth: '650px' }}>
                {selectedCategory.subtitle}
              </p>
            </div>
            <div style={{ padding: '0.4rem 0.9rem', borderRadius: '9999px', background: 'var(--accent-soft)', border: '1px solid var(--border-highlight)', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.8rem' }}>
              {selectedCategory.skills.length} Core Competencies
            </div>
          </div>

          {/* Skills Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {selectedCategory.skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '1.25rem',
                  borderRadius: '1.25rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '0.75rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--accent-color)', flexShrink: 0 }}>
                    {skill.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {skill.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                        {skill.level}
                      </span>
                      <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', background: 'var(--bg-card)', padding: '0.1rem 0.4rem', borderRadius: '0.3rem', border: '1px solid var(--border-color)' }}>
                        {skill.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Animated Progress Meter */}
                <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--bg-secondary)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percent}%` }}
                    transition={{ duration: 0.8, delay: 0.1 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: '100%',
                      background: 'var(--accent-gradient)',
                      borderRadius: '9999px'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
};

export default Skills;

