import React from 'react';
import { Trophy, GitBranch, Code, PenTool } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: '10+ GitHub Contributions',
      subtitle: 'Open Source Advocate',
      icon: <GitBranch size={24} style={{ color: 'hsl(var(--color-secondary-hsl))' }} />,
      desc: 'Consistently contributed to open-source projects throughout 2026 with 10+ commits.'
    },
    {
      title: 'LeetCode Top 5%',
      subtitle: 'Competitive Programming',
      icon: <Code size={24} style={{ color: 'hsl(var(--color-accent-hsl))' }} />,
      desc: 'Solved 300+ algorithmic problems, achieving a top 5% global ranking.'
    }
  ];

  return (
    <section id="achievements" style={{ background: 'var(--bg-base)', transition: 'background-color 0.4s ease' }}>
      <div className="container">
        {/* Header */}
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
            Recognition
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Achievements</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Achievements Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}
        >
          {achievements.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '30px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Decorative Corner Glow */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
                opacity: 0.1,
                borderRadius: '50%',
                filter: 'blur(15px)'
              }} />

              <div style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--border-color)',
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '4px' }}>
                {item.title}
              </h3>
              
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 600, 
                color: 'hsl(var(--color-primary-hsl))',
                marginBottom: '16px'
              }}>
                {item.subtitle}
              </span>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
