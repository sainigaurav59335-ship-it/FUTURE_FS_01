import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" style={{ background: 'var(--bg-card)', transition: 'background-color 0.4s ease', position: 'relative' }}>
      <div className="orb orb-1 animate-pulse-glow" style={{ top: '20%', left: '10%' }} />
      <div className="orb orb-2 animate-float" style={{ bottom: '10%', right: '10%' }} />
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            My Resume
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Resume</h2>
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
            maxWidth: '600px',
            width: '100%',
            padding: '50px 30px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, hsla(var(--color-primary-hsl), 0.1), hsla(var(--color-secondary-hsl), 0.1))',
            border: '1px solid hsla(var(--color-primary-hsl), 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            boxShadow: '0 0 30px hsla(var(--color-primary-hsl), 0.15)'
          }}>
            <FileText size={36} style={{ color: 'hsl(var(--color-primary-hsl))' }} />
          </div>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px' }}>
            Download My Resume
          </h3>
          
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '40px', maxWidth: '400px' }}>
            Get a comprehensive overview of my technical skills, experience, education, and detailed project history.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="/Gaurav_Saini_Resume.pdf" 
              download="Gaurav_Saini_Resume.pdf"
              className="btn btn-primary"
              style={{ textDecoration: 'none' }}
            >
              Download Resume <Download size={18} />
            </a>
            
            <a 
              href="/Gaurav_Saini_Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              View Resume <Eye size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
