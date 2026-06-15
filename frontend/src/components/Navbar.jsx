import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  // Track scroll position for header styling, progress bar, and active section
  useEffect(() => {
    const handleScroll = () => {
      // 1. Header Scrolled state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Scroll Progress Percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // 3. Highlight Active Section
      const scrollPosition = window.scrollY + 150; // offset
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      }}
      className={scrolled ? 'glass-navbar' : ''}
    >
      {/* Scroll Progress Bar */}
      <div 
        style={{
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 101,
          transition: 'width 0.1s ease-out'
        }}
      />

      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            cursor: 'pointer',
            fontFamily: 'var(--font-heading)',
            background: 'linear-gradient(135deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.5px'
          }}
        >
          GS.DEV
        </div>

        {/* Desktop Nav Items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <ul 
            style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '24px', 
              alignItems: 'center' 
            }}
            className="desktop-menu"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    color: activeSection === link.id ? 'hsl(var(--color-primary-hsl))' : 'var(--text-muted)',
                    transition: 'color 0.3s ease, transform 0.2s ease',
                    position: 'relative',
                    padding: '6px 0'
                  }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'hsl(var(--color-primary-hsl))',
                        borderRadius: '2px',
                        boxShadow: '0 0 6px hsl(var(--color-primary-hsl))'
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 72px)',
          background: 'var(--bg-base)',
          zIndex: 99,
          display: isMobileOpen ? 'block' : 'none',
          padding: '24px',
          borderTop: '1px solid var(--border-color)',
          transition: 'all 0.3s ease-in-out',
          overflowY: 'auto'
        }}
      >
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none' }}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: activeSection === link.id ? 'hsl(var(--color-primary-hsl))' : 'var(--text-main)',
                  width: '100%',
                  textAlign: 'left',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* CSS Helper inside JS to handle responsive visibility without tailwind */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
