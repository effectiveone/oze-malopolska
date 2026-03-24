import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--purple-dark)', color: 'var(--lavender)', padding: '2.5rem 0 1.5rem', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Lora', serif", color: 'var(--lavender)', marginBottom: '0.75rem', fontSize: '1.1rem', borderBottom: 'none' }}>OZE Małopolska</h3>
          <p style={{ fontSize: '0.88rem', color: 'rgba(232,213,245,0.7)', lineHeight: 1.7 }}>
            Portal o odnawialnych źródłach energii w Krakowie i Małopolsce.
          </p>
        </div>
        <div>
          <h4 style={{ color: 'var(--purple-light)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Nawigacja</h4>
          <Link to="/" style={{ display: 'block', color: 'rgba(232,213,245,0.7)', fontSize: '0.88rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'rgba(232,213,245,0.7)', fontSize: '0.88rem', textDecoration: 'none' }}>Blog</Link>
        </div>
        <div>
          <h4 style={{ color: 'var(--purple-light)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Partner</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--lavender)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(232,213,245,0.2)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(232,213,245,0.4)' }}>© {year} OZE Małopolska</p>
      </div>
    </footer>
  );
};

export default Footer;
