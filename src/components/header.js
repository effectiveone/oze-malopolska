import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = ({ siteName }) => (
  <header style={{
    background: 'var(--purple-dark)',
    borderBottom: '4px solid var(--purple-light)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.5rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <span style={{ fontSize: '1.6rem' }}>🔮</span>
        <div>
          <span style={{ display: 'block', fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>
            {siteName || 'OZE Małopolska'}
          </span>
          <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--lavender)', letterSpacing: '0.04em' }}>
            Czysta energia dla Małopolski
          </span>
        </div>
      </Link>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--lavender)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>Główna</Link>
        <Link to="/blog" style={{ color: 'var(--lavender)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>Blog</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--purple-light)', color: '#fff', padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>
          Audyt →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
