import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }
    
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setStatusMessage('');

    try {
      // Send form submission to backend Express endpoint
      const response = await fetch('https://future-fs-01-9lkl.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Message sent successfully! I will respond shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Trigger Canvas Confetti celebration
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#2196F3', '#10B981']
        });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Submit Error:', err);
      setStatus('error');
      setStatusMessage('Connection failed. Please ensure the backend is running.');
    }
  };

  return (
    <section id="contact">
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
            Collaborate
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Get In Touch</h2>
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
            gridTemplateColumns: '0.8fr 1.2fr',
            gap: '40px',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
              Let's talk about your project
            </h3>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
              I am available for freelance contracts, full-time engineering placements, or consulting. Drop me a line, and let's turn your vision into a premium digital product.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'sainigaurav59335@gmail.com', link: 'mailto:sainigaurav59335@gmail.com' },
                { icon: <Phone size={20} />, label: 'Phone', value: '+91 95990 XXXXX', link: 'tel:+9195990XXXXX' },
                { icon: <MapPin size={20} />, label: 'Location', value: 'Gurugram, India', link: null }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    borderRadius: '12px'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '8px',
                    background: 'var(--bg-base)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'hsl(var(--color-primary-hsl))',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      {item.label}
                    </span>
                    {item.link ? (
                      <a href={item.link} style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div 
            className="glass"
            style={{
              padding: '30px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} noValidate>
              
              {/* Form Status Notifications */}
              {status === 'success' && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid hsl(var(--color-accent-hsl))',
                  borderRadius: '10px',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <CheckCircle2 size={18} style={{ color: 'hsl(var(--color-accent-hsl))', flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid #ef4444',
                  borderRadius: '10px',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <AlertCircle size={18} style={{ color: '#ef4444', flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Name & Email Group */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '20px' 
                }}
                className="form-row"
              >
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-base)',
                      border: errors.name ? '1px solid #ef4444' : '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'hsl(var(--color-primary-hsl))'}
                    onBlur={(e) => e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border-color)'}
                    placeholder="John Doe"
                  />
                  {errors.name && <span style={{ fontSize: '0.78rem', color: '#ef4444', display: 'block', marginTop: '4px' }}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'var(--bg-base)',
                      border: errors.email ? '1px solid #ef4444' : '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'hsl(var(--color-primary-hsl))'}
                    onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border-color)'}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span style={{ fontSize: '0.78rem', color: '#ef4444', display: 'block', marginTop: '4px' }}>{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-base)',
                    border: errors.subject ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(var(--color-primary-hsl))'}
                  onBlur={(e) => e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border-color)'}
                  placeholder="Project Proposal"
                />
                {errors.subject && <span style={{ fontSize: '0.78rem', color: '#ef4444', display: 'block', marginTop: '4px' }}>{errors.subject}</span>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-base)',
                    border: errors.message ? '1px solid #ef4444' : '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    resize: 'vertical',
                    lineHeight: '1.5',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'hsl(var(--color-primary-hsl))'}
                  onBlur={(e) => e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border-color)'}
                  placeholder="Tell me about your project scope, timeline, and goals..."
                />
                {errors.message && <span style={{ fontSize: '0.78rem', color: '#ef4444', display: 'block', marginTop: '4px' }}>{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  height: '48px',
                  borderRadius: '8px',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'submitting' ? (
                  <>
                    Sending Message... <Loader2 className="animate-spin-slow" size={18} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
