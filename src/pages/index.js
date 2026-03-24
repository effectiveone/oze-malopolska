import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Strona główna" description="Portal OZE Małopolska — energia odnawialna w Krakowie i Małopolsce" siteName="OZE Małopolska" />
      <section style={{ background: 'linear-gradient(135deg, var(--purple-dark) 0%, var(--purple) 100%)', padding: '4rem 0', marginBottom: '3rem' }}>
        <div className="container">
          <span style={{ background: 'var(--lavender)', color: 'var(--purple-dark)', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Portal OZE</span>
          <h1 style={{ fontFamily: "'Lora', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', margin: '0.75rem 0 1rem', lineHeight: 1.2 }}>
            Odnawialne źródła energii<br/>w Małopolsce
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--lavender)', maxWidth: '560px', marginBottom: '1.5rem' }}>
            Fotowoltaika, pompy ciepła, biomasa i polityka energetyczna — wszystko o OZE w Krakowie i regionie.
          </p>
          <Link to="/blog" style={{ background: 'var(--lavender)', color: 'var(--purple-dark)', padding: '0.65rem 1.5rem', fontWeight: 700, borderRadius: '4px', display: 'inline-block', textDecoration: 'none' }}>
            Przeglądaj artykuły →
          </Link>
        </div>
      </section>
      <div className="container" style={{ paddingBottom: '3rem' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontFamily: "'Lora', serif", fontSize: '1.5rem', color: 'var(--purple-dark)', marginBottom: '1.5rem', borderBottom: '2px solid var(--lavender)', paddingBottom: '0.5rem' }}>
              Najnowsze artykuły
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {posts.slice(0, 6).map(post => (
                <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
              ))}
            </div>
            {posts.length > 6 && (
              <div style={{ textAlign: 'center' }}>
                <Link to="/blog" style={{ border: '2px solid var(--purple)', color: 'var(--purple)', padding: '0.6rem 1.5rem', fontWeight: 700, display: 'inline-block', textDecoration: 'none', borderRadius: '4px' }}>
                  Wszystkie artykuły ({posts.length}) →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔮</p>
            <h2 style={{ fontFamily: "'Lora', serif", color: 'var(--purple)' }}>Artykuły wkrótce</h2>
            <p style={{ marginTop: '0.5rem' }}>Przygotowujemy treści o OZE w Małopolsce.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields { slug }
        excerpt(pruneLength: 180)
        frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags }
      }
    }
  }
`;

export default IndexPage;
