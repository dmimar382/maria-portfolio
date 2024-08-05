import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 'post1', title: 'Test Post' },
 
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="section-heading text-center">
        <h2>Posts</h2>
      </div>
      <div className="blog-section">
        <div className="blog-content">
          <ul className="blog-list">
            {posts.map((post) => (
              <li key={post.id} className="blog-card">
                <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blog;
