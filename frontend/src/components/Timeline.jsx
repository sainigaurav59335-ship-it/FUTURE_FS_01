import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      role: 'Full-Stack Web Developer',
      company: 'Launchpad Agency',
      period: '2024 - 2025',
      bullets: [
        'Successfully launched 12 bespoke SaaS landing pages and interactive client products.',
        'Configured automated CI/CD pipelines via Github Actions, reducing deployment errors by 80%.',
        'Built full-stack contact engines with automatic email notifications and storage logs (similar to this app).'
      ]
    }
  ];

  const educationData = [
    {
      role: 'Master of Science in Computer Science',
      company: 'Stanford University',
      period: '2017 - 2019',
      bullets: [
        'Specialization in Software Systems and Human-Computer Interaction.',
        'Graduate Research assistant on spatial 3D user-interface systems.'
      ]
    },
    {
      role: 'Bachelor of Science in Computer Science',
      company: 'University of California, Berkeley',
      period: '2013 - 2017',
      bullets: [
        'Graduated with honors (Magna Cum Laude).',
        'Core curriculum in Data Structures, Algorithms, Database Systems, and Software Engineering.'
      ]
    }
  ];

  const items = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section id="timeline">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'hsl(var(--color-primary-hsl))',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '8px'
          }}>
            My History
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Experience & Education</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Tabs Switcher */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '50px'
          }}
        >
          <button
            onClick={() => setActiveTab('experience')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              border: activeTab === 'experience' ? '1px solid hsl(var(--color-primary-hsl))' : '1px solid var(--border-color)',
              background: activeTab === 'experience' ? 'hsla(var(--color-primary-hsl), 0.1)' : 'var(--bg-card)',
              color: activeTab === 'experience' ? 'hsl(var(--color-primary-hsl))' : 'var(--text-muted)'
            }}
          >
            <Briefcase size={18} /> Professional Experience
          </button>

          <button
            onClick={() => setActiveTab('education')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              border: activeTab === 'education' ? '1px solid hsl(var(--color-primary-hsl))' : '1px solid var(--border-color)',
              background: activeTab === 'education' ? 'hsla(var(--color-primary-hsl), 0.1)' : 'var(--bg-card)',
              color: activeTab === 'education' ? 'hsl(var(--color-primary-hsl))' : 'var(--text-muted)'
            }}
          >
            <GraduationCap size={18} /> Education
          </button>
        </div>

        {/* Timeline Path */}
        <div className="timeline">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
            >
              <div 
                className="glass-card timeline-content"
                style={{
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  borderRadius: '16px'
                }}
              >
                {/* Date/Period */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'hsl(var(--color-primary-hsl))',
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-color)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '14px'
                }}>
                  <Calendar size={12} /> {item.period}
                </div>

                {/* Job Title / Degree */}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '4px' }}>
                  {item.role}
                </h3>
                
                {/* Company / University */}
                <h4 style={{ 
                  fontSize: '0.95rem', 
                  fontWeight: 600, 
                  color: 'hsl(var(--color-secondary-hsl))',
                  marginBottom: '16px'
                }}>
                  {item.company}
                </h4>

                {/* Bullet details */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.bullets.map((bullet, bIdx) => (
                    <li 
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '8px',
                        fontSize: '0.88rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.4
                      }}
                    >
                      <ChevronRight size={14} style={{ color: 'hsl(var(--color-primary-hsl))', marginTop: '3px', flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
