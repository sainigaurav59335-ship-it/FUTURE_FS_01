import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-base)', transition: 'background-color 0.4s ease' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            Academic Background
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Education</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        <div 
          className="glass-card"
          style={{
            maxWidth: '700px',
            width: '100%',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative Background Glow */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(135deg, hsla(var(--color-primary-hsl), 0.15), hsla(var(--color-secondary-hsl), 0.15))',
            filter: 'blur(40px)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Icon */}
            <div style={{
              background: 'var(--bg-base)',
              border: '1px solid var(--border-color)',
              padding: '16px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px hsla(var(--color-primary-hsl), 0.1)'
            }}>
              <GraduationCap size={32} style={{ color: 'hsl(var(--color-primary-hsl))' }} />
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ 
                display: 'inline-block',
                padding: '6px 16px',
                background: 'hsla(var(--color-primary-hsl), 0.1)',
                border: '1px solid hsla(var(--color-primary-hsl), 0.2)',
                color: 'hsl(var(--color-primary-hsl))',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                2024 – 2028
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
                Bachelor of Technology (B.Tech)
              </h3>
              
              <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 500 }}>
                Computer Science & Engineering
              </div>
              
              <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Greater Noida Institute of Technology
              </div>

              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'var(--bg-base)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                marginBottom: '24px'
              }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>CGPA:</span>
                <span style={{ color: 'hsl(var(--color-primary-hsl))', fontWeight: 700 }}>8.7 / 10.0</span>
              </div>

              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Key Coursework
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    'Data Structures & Algorithms',
                    'Database Management Systems',
                    'Operating Systems',
                    'Software Engineering',
                    'Computer Networks',
                    'Object-Oriented Programming'
                  ].map((course, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        padding: '6px 12px',
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-muted)',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--color-primary-hsl))';
                        e.currentTarget.style.color = 'var(--text-main)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                        e.currentTarget.style.color = 'var(--text-muted)';
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
