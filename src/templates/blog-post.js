import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Małopolska" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 4rem', maxWidth: '860px' }}>
        <Link to="/blog" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1.5rem' }}>← Powrót do listy</Link>
        <header style={{ marginBottom: '2.5rem' }}>
          {tags && tags.map(t => (
            <span key={t} style={{ display: 'inline-block', background: 'var(--lavender)', color: 'var(--purple-dark)', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '3px', marginRight: '0.4rem', textTransform: 'uppercase' }}>{t}</span>
          ))}
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(1.7rem, 4vw, 2.6rem)', margin: '0.75rem 0 0.5rem', lineHeight: 1.2 }}>{title}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.5rem' }}>{date} · {author}</p>
          {description && (
            <p style={{ fontSize: '1.05rem', color: 'var(--purple)', fontStyle: 'italic', borderLeft: '4px solid var(--purple)', paddingLeft: '1rem', marginTop: '0.75rem' }}>{description}</p>
          )}
        </header>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
