import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Blog" description="Wszystkie artykuły o OZE w Małopolsce" siteName="OZE Małopolska" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 3rem' }}>
        <h1 style={{ fontFamily: "'Lora', serif", fontSize: '2.2rem', color: 'var(--purple-dark)', borderBottom: '3px solid var(--lavender)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
          Archiwum artykułów
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{posts.length} artykułów o OZE w Małopolsce</p>
        {posts.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {posts.map(post => (
              <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem 0' }}>Artykuły pojawią się wkrótce.</p>
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

export default BlogPage;
