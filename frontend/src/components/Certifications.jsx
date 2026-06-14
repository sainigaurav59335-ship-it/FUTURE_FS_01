import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Issued Dec 2024',
      id: 'AWS-ASA-99812',
      verifyUrl: 'https://aws.amazon.com/verification'
    },
    {
      title: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: 'Issued Aug 2024',
      id: 'MDB-CD-88231',
      verifyUrl: 'https://mongodb.com/academy'
    },
    {
      title: 'Meta Advanced React Professional Certificate',
      issuer: 'Meta (via Coursera)',
      date: 'Issued Mar 2024',
      id: 'META-RX-77291',
      verifyUrl: 'https://coursera.org/verify'
    },
    {
      title: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      date: 'Issued Jan 2024',
      id: 'SCRUM-PSM1-2291',
      verifyUrl: 'https://scrum.org/credentials'
    }
  ];

  return (
    <section id="certifications" style={{ background: 'var(--bg-card)', transition: 'background-color 0.4s ease' }}>
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
            Accomplishments
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Certifications</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Certifications Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}
        >
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                padding: '24px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Glowing Corner Badge Accent */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
                opacity: 0.15,
                borderRadius: '50%',
                filter: 'blur(8px)'
              }} />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-color)',
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={22} style={{ color: 'hsl(var(--color-secondary-hsl))' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flexGrow: 1, marginBottom: '20px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {cert.issuer}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {cert.date}
                </span>
                <span style={{ 
                  fontSize: '0.78rem', 
                  fontFamily: 'monospace', 
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '8px'
                }}>
                  <ShieldCheck size={12} style={{ color: 'hsl(var(--color-accent-hsl))' }} /> ID: {cert.id}
                </span>
              </div>

              <a 
                href={cert.verifyUrl} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'hsl(var(--color-primary-hsl))',
                  textDecoration: 'none',
                  marginTop: 'auto'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-secondary-hsl))'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))'}
              >
                Verify Credential <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
