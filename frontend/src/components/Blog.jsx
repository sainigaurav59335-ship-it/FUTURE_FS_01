import React from 'react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Mastering CSS Variables & HSL Colors',
      category: 'Web Design',
      date: 'June 10, 2026',
      readTime: '5 min read',
      desc: 'Discover how combining CSS Custom Properties with HSL declarations allows building ultra-flexible dark/light themes and glowing effects.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'REST APIs vs Next.js Server Actions',
      category: 'Software Architecture',
      date: 'May 28, 2026',
      readTime: '8 min read',
      desc: 'Evaluate speed advantages, security practices, and structural trade-offs of Next.js 15 server actions compared to Express routes.',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ea29?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      title: 'Engineering Accessible (WCAG 2.2) Web Forms',
      category: 'Accessibility',
      date: 'April 14, 2026',
      readTime: '6 min read',
      desc: 'A checklist for styling input labels, error states, and live success alerts to be fully readable by standard screen readers.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="blog" style={{ background: 'var(--bg-card)', transition: 'background-color 0.4s ease' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '55px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'hsl(var(--color-primary-hsl))',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '8px'
          }}>
            Technical Articles
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Latest Insights</h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'linear-gradient(90deg, hsl(var(--color-primary-hsl)), hsl(var(--color-secondary-hsl)))',
            margin: '12px auto 0',
            borderRadius: '2px'
          }} />
        </div>

        {/* Blog Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {posts.map((post) => (
            <article 
              key={post.id}
              className="glass-card"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--bg-base)'
              }}
            >
              {/* Blog Image */}
              <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1484417894907-623942c8ea29?auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Meta details */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    marginBottom: '14px'
                  }}
                >
                  <span style={{ 
                    color: 'hsl(var(--color-primary-hsl))', 
                    fontWeight: 600, 
                    textTransform: 'uppercase' 
                  }}>
                    {post.category}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '12px' }}>
                  {post.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px', flexGrow: 1 }}>
                  {post.desc}
                </p>

                <a 
                  href={`#blog-detail-${post.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'hsl(var(--color-primary-hsl))',
                    textDecoration: 'none',
                    marginTop: 'auto'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Navigating to blog post ${post.id}`);
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-secondary-hsl))'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-primary-hsl))'}
                >
                  Read Article <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
