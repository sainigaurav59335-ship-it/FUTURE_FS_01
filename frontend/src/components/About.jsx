import React from 'react';
import { User, Cpu, Shield, Zap, Heart } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Zap size={24} style={{ color: 'hsl(var(--color-primary-hsl))' }} />,
      title: 'High Performance',
      desc: 'Optimized render cycles, caching, and code bundle minimization for instant load speeds.'
    },
    {
      icon: <Shield size={24} style={{ color: 'hsl(var(--color-secondary-hsl))' }} />,
      title: 'Secure & Reliable',
      desc: 'Robust form validations, rate limiting, and clean security layers standard on all servers.'
    },
    {
      icon: <Cpu size={24} style={{ color: 'hsl(var(--color-accent-hsl))' }} />,
      title: 'Scale Ready',
      desc: 'Modular components, standard API contracts, and structural patterns prepared for growth.'
    }
  ];

  const infoItems = [
    { label: 'Role', value: 'Senior Full-Stack Engineer' },
    { label: 'Location', value: 'San Francisco, CA (Open to Remote)' },
    { label: 'Primary Stack', value: 'React, Node.js, Express, MongoDB' },
    { label: 'Interests', value: 'Generative AI, Web3D, Tech Writing, Chess' }
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-card)', transition: 'background-color 0.4s ease' }}>
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
            Who I Am
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>About Me</h2>
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
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '50px',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left: Graphic and Quick Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div 
              className="glass"
              style={{
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-base)'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <User size={20} style={{ color: 'hsl(var(--color-primary-hsl))' }} /> Quick Bio Details
              </h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {infoItems.map((item, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      borderBottom: '1px solid var(--border-color)',
                      paddingBottom: '12px',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}
                  >
                    <span style={{ fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.label}</span>
                    <span style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '0.9rem', textAlign: 'right' }}>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote block */}
            <div 
              style={{
                borderLeft: '4px solid hsl(var(--color-primary-hsl))',
                paddingLeft: '20px',
                fontStyle: 'italic',
                color: 'var(--text-muted)'
              }}
            >
              "The best way to predict the future is to invent it. I spend my time coding clean systems and designing experiences that make people smile."
            </div>
          </div>

          {/* Right: Journey and Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '16px', fontWeight: 700 }}>
                Crafting robust applications with premium design aesthetics.
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '16px', fontSize: '1rem' }}>
                I am a passionate software engineer with a background in design. Over the past 5 years, I've worked with startups and enterprises to launch highly interactive applications. I specialize in the JavaScript ecosystem, focusing on React on the frontend and Node/Express on the backend.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                I believe coding is an art form. Writing clean, maintainable, and self-documenting code is just as important as producing a premium UI. I am constantly learning new technologies (such as Web3D and serverless backends) to solve complex user challenges.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Core Values
              </h4>
              <div style={{ display: 'grid', gap: '20px' }}>
                {pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '20px',
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'start',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{
                      background: 'var(--bg-base)',
                      border: '1px solid var(--border-color)',
                      padding: '12px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '6px' }}>{pillar.title}</h5>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
