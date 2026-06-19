import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'full-stack', 'frontend', 'ui/ux'];

  const projects = [
    {
      id: 1,
      title: 'Lazarev Frontend Clone',
      category: 'frontend',
      tags: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Recreated a visually rich, animated frontend project with smooth scroll animations and interactive UI elements.',
      detailedDesc: 'Focused on pixel-perfect responsive layout and CSS transitions.',
      challenge: 'Replicating complex scroll animations and layouts from the original site.',
      solution: 'Used advanced CSS and JavaScript event listeners for scroll effects.',
      image: '/project-lazarev.png',
      demoLink: 'https://lazarev-peach.vercel.app',
      githubLink: 'https://github.com/sainigaurav59335-ship-it/lazarev'
    },
    {
      id: 2,
      title: 'Veloze Shoe Store UI',
      category: 'ui/ux',
      tags: ['HTML', 'CSS', 'JavaScript'],
      desc: 'A modern, minimalist e-commerce shoe store interface with clean typography and layout.',
      detailedDesc: 'Built to demonstrate clean UI/UX principles, featuring a modern product showcase and a responsive layout.',
      challenge: 'Designing a clean and modern aesthetic that looks premium.',
      solution: 'Used minimalist design principles and typography-focused layouts.',
      image: '/project-webproject1.png',
      demoLink: 'https://webproject1-peach.vercel.app',
      githubLink: 'https://github.com/sainigaurav59335-ship-it/webproject1'
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" style={{ background: 'var(--bg-card)', transition: 'background-color 0.4s ease' }}>
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
            Selected Works
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Projects Portfolio</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Category Filters */}
        <div className="filters-container">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              style={{ textTransform: 'capitalize' }}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}
          className="projects-grid"
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              style={{ cursor: 'pointer' }}
              className="project-card"
            >
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="project-image"
                onError={(e) => {
                  // Fallback if unsplash images are slow
                  e.target.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="project-overlay">
                <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  {proj.tags.slice(0, 3).map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        background: 'rgba(255,255,255,0.15)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'white',
                        borderRadius: '20px',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'white', fontWeight: 700, marginBottom: '6px' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', marginBottom: '12px' }}>
                  {proj.desc}
                </p>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--color-primary-hsl))', textDecoration: 'underline' }}>
                  View Project Details
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(5, 6, 12, 0.85)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="glass"
              style={{
                width: '100%',
                maxWidth: '680px',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--bg-base)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={18} />
              </button>

              {/* Banner Image */}
              <div style={{ width: '100%', height: '220px', position: 'relative' }}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--bg-card) 0%, rgba(0,0,0,0) 100%)'
                }} />
              </div>

              {/* Modal Body */}
              <div style={{ padding: '30px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--color-primary-hsl))', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {selectedProject.category.replace('-', ' ')}
                </span>
                
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px', marginBottom: '16px' }}>
                  {selectedProject.title}
                </h3>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {selectedProject.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        padding: '4px 12px',
                        background: 'var(--bg-base)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-muted)',
                        borderRadius: '20px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '250px', overflowY: 'auto', paddingRight: '8px', marginBottom: '24px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    {selectedProject.detailedDesc}
                  </p>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>The Challenge:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px' }}>The Solution:</strong>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1, textDecoration: 'none' }}
                  >
                    Launch App <ExternalLink size={18} />
                  </a>
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, textDecoration: 'none' }}
                  >
                    View Source <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @media (max-width: 576px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
