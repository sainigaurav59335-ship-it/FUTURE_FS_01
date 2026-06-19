import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const words = ['Full Stack Developer', 'React.js Developer', 'Cloud Enthusiast', 'Tech Innovator'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Auto-typing effect logic
  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      {/* Decorative Orbs */}
      <div className="orb orb-1 animate-pulse-glow" />
      <div className="orb orb-2 animate-float" />

      <div className="container" style={{ width: '100%' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Main Info */}
          <div style={{ zIndex: 10 }}>
            <span 
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'hsl(var(--color-primary-hsl))',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px'
              }}
            >
              Available for Freelance & Full-time Roles
            </span>
            
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                fontFamily: 'var(--font-heading)',
                marginBottom: '20px'
              }}
            >
              Hi, I'm <span style={{
                background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Gaurav Saini</span>
              <br />
              <span className="typing-wrapper" style={{ fontSize: '0.85em', fontWeight: 600 }}>
                a <span style={{ color: 'hsl(var(--color-secondary-hsl))', marginLeft: '8px' }}>{currentText}</span>
                <span className="typing-cursor" />
              </span>
            </h1>

            <p 
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                color: 'var(--text-muted)',
                marginBottom: '32px',
                maxWidth: '600px'
              }}
            >
              I engineer premium full-stack software solutions and design highly interactive digital interfaces. Fusing robust backend engineering with pixel-perfect responsive layouts to deliver exceptional user experiences.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                onClick={() => handleScrollTo('contact')}
                className="btn btn-primary"
              >
                Hire Me <Send size={18} />
              </button>
              
              <button 
                onClick={() => handleScrollTo('projects')}
                className="btn btn-secondary"
              >
                View My Work <ArrowRight size={18} />
              </button>
            </div>

            {/* Social Grid */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Follow me:
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: <GithubIcon />, url: 'https://github.com/sainigaurav59335-ship-it' },
                  { icon: <LinkedinIcon />, url: 'https://www.linkedin.com/in/gaurav-saini-2278bb336/' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))';
                      e.currentTarget.style.borderColor = 'hsl(var(--color-primary-hsl))';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px hsla(var(--color-primary-hsl), 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Stat Profile Card */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              position: 'relative',
              zIndex: 10
            }}
            className="hero-image-wrapper"
          >
            <div 
              className="glass"
              style={{
                width: '100%',
                maxWidth: '380px',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-lg)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              {/* Profile Avatar Glow */}
              <div 
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '30px',
                  position: 'relative'
                }}
              >
                <img 
                  src="/profile.png"
                  alt="Gaurav Saini"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 0 30px hsla(var(--color-primary-hsl), 0.5), 0 0 60px hsla(var(--color-primary-hsl), 0.2)',
                    border: '3px solid hsl(var(--color-primary-hsl))'
                  }}
                />
              </div>

              {/* Stat Rows */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { value: '2+', label: 'Projects Completed' },
                  { value: '2+', label: 'Certifications' },
                  { value: '10+', label: 'GitHub Contributions' },
                  { value: '300+', label: 'Problems Solved' }
                ].map((stat, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'var(--bg-base)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      padding: '16px 12px',
                      textAlign: 'center',
                      transition: 'border-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(var(--color-primary-hsl))'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <div style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 800, 
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-heading)',
                      background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {stat.label}
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
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
            text-align: center !important;
          }
          .hero-grid div {
            align-items: center !important;
            justify-content: center !important;
          }
          .hero-grid p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-grid div div {
            justify-content: center !important;
          }
          .hero-image-wrapper {
            order: -1 !important;
          }
        }
      `}</style>
    </section>
  );
}
