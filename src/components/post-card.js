import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderTop: '4px solid var(--purple)',
    padding: '1.5rem',
    transition: 'transform 0.2s, box-shadow 0.2s',
  }}
  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(107,63,160,0.12)'; }}
  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
    {tags && tags[0] && (
      <span style={{ background: 'var(--lavender)', color: 'var(--purple-dark)', fontSize: '0.7rem', fontWeight: 700, padding: '0.15rem 0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'inline-block', marginBottom: '0.6rem' }}>
        {tags[0]}
      </span>
    )}
    <h2 style={{ fontFamily: "'Lora', serif", fontSize: '1.15rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--text)', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--purple)'}
        onMouseLeave={e => e.target.style.color = 'var(--text)'}>
        {title}
      </Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '0.9rem' }}>{excerpt}</p>}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <time style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{date}</time>
      <Link to={`/blog${slug}`} style={{ color: 'var(--purple)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}>Czytaj →</Link>
    </div>
  </article>
);

export default PostCard;
