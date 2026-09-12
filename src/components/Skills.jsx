import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench, Sparkles } from 'lucide-react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostman, SiVite, SiBootstrap, SiMui } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout size={26} className="text-accent" />,
    skills: [
      { name: 'React.js', icon: <FaReact color="#61dafb" /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs color="#f7df1e" /> },
      { name: 'Typescript', icon: <SiTypescript color="#3178c6" /> },
      { name: 'HTML5', icon: <FaHtml5 color="#e34f26" /> },
      { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
      { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
      { name: 'Material UI', icon: <SiMui color="#007fff" /> }
    ]
  },
  {
    title: 'Backend Development',
    icon: <Code2 size={26} className="text-accent" />,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress color="var(--text-primary)" /> },
      { name: 'RESTful APIs', icon: <Sparkles color="#f59e0b" /> },
      { name: 'Python', icon: <FaPython color="#3776ab" /> }
    ]
  },
  {
    title: 'Database & Storage',
    icon: <Database size={26} className="text-accent" />,
    skills: [
      { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
      { name: 'MySQL', icon: <SiMysql color="#4479a1" /> }
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: <Wrench size={26} className="text-accent" />,
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#f05032" /> },
      { name: 'GitHub', icon: <FaGithub color="var(--text-primary)" /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" /> },
      { name: 'Vite', icon: <SiVite color="#646cff" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container section" style={{ minHeight: 'auto', padding: '6rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.2rem', borderRadius: '2rem', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', marginBottom: '1.25rem' }}>
          <Sparkles size={16} className="text-accent" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-color)' }}>My Tech Stack</span>
        </div>
        <h2 className="section-title">
          Technical <span className="text-gradient">Skills & Tools</span>
        </h2>
        <p className="section-subtitle">
          Extensive tech stack and modern frameworks I use to build scalable web software.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass skill-card-enhanced"
            style={{
              padding: '2.25rem 2rem',
              borderRadius: '1.75rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.85rem', borderRadius: '1rem', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  {category.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>{category.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{category.skills.length} Skills</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.6rem 1.1rem',
                    borderRadius: '2rem',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'default',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  <span style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .skill-card-enhanced {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-card-enhanced:hover {
          border-color: var(--accent-color);
          box-shadow: 0 15px 35px -10px rgba(124, 58, 237, 0.2), 0 0 0 1px var(--accent-color);
        }
      `}</style>
    </section>
  );
};

export default Skills;
