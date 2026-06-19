import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id) => {
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
    <footer 
      style={{
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-base)',
        padding: '60px 24px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px'
        }}
      >
        {/* Brand */}
        <div 
          onClick={handleScrollTop}
          style={{ 
            fontSize: '1.4rem', 
            fontWeight: 800, 
            cursor: 'pointer',
            background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}
        >
          GS.DEV
        </div>

        {/* Navigation Quick Links */}
        <ul 
          style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '24px', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
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
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))';
                e.currentTarget.style.borderColor = 'hsl(var(--color-primary-hsl))';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'var(--border-color)' }} />

        {/* Copyright */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <div>
            © {new Date().getFullYear()} Gaurav Saini. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
            Built with React <Heart size={12} fill="hsl(var(--color-primary-hsl))" color="hsl(var(--color-primary-hsl))" />
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={handleScrollTop}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)) 0%, hsl(var(--color-secondary-hsl)) 100%)',
          color: 'white',
          border: 'none',
          display: showScrollTop ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px hsla(var(--color-primary-hsl), 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 90
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
