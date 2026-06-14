import React from 'react';
import { Layout, Database, Wrench, CircleCheck } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} style={{ color: 'hsl(var(--color-primary-hsl))' }} />,
      skills: [
        { name: 'React.js / Next.js', level: 90 },
        { name: 'JavaScript (ES6+) / TypeScript', level: 88 },
        { name: 'HTML5 & CSS3 (Flexbox/Grid)', level: 95 },
        { name: 'Responsive UI/UX Layouts', level: 92 },
        { name: 'Tailwind CSS / CSS Variables', level: 85 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: <Database size={20} style={{ color: 'hsl(var(--color-secondary-hsl))' }} />,
      skills: [
        { name: 'Node.js & Express.js', level: 88 },
        { name: 'RESTful API Engineering', level: 92 },
        { name: 'MongoDB / Mongoose ORM', level: 85 },
        { name: 'SQL (PostgreSQL/MySQL)', level: 80 },
        { name: 'System Security & CORS', level: 82 }
      ]
    },
    {
      title: 'DevOps & Tooling',
      icon: <Wrench size={20} style={{ color: 'hsl(var(--color-accent-hsl))' }} />,
      skills: [
        { name: 'Git & Github Workflows', level: 90 },
        { name: 'Docker Containers', level: 75 },
        { name: 'AWS Cloud Services', level: 70 },
        { name: 'Vite / Webpack / NPM', level: 88 },
        { name: 'Figma UI design tools', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="orb orb-3 animate-pulse-glow" />
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'hsl(var(--color-primary-hsl))',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '8px'
          }}>
            Technical Strengths
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>My Skills</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '30px',
            alignItems: 'start'
          }}
        >
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass"
              style={{
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-md)',
                height: '100%'
              }}
            >
              {/* Category Header */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '16px'
                }}
              >
                <div style={{
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-color)',
                  padding: '10px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills Progress Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div 
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px'
                      }}
                    >
                      <span style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: 600, 
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <CircleCheck size={14} style={{ color: 'hsl(var(--color-primary-hsl))' }} />
                        {skill.name}
                      </span>
                      <span style={{ 
                        fontSize: '0.85rem', 
                        fontWeight: 700, 
                        color: 'hsl(var(--color-secondary-hsl))' 
                      }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div 
                      style={{
                        height: '8px',
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <div 
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
                          borderRadius: '4px',
                          boxShadow: '0 0 8px hsla(var(--color-primary-hsl), 0.4)',
                          animation: 'draw-progress 1.5s cubic-bezier(0.1, 1, 0.1, 1) forwards'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
