import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';

const Post = () => {
  const [content, setContent] = useState('');
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    import(`../posts/${postId}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((text) => setContent(text))
      })
      .catch(() => navigate('/404'));
  }, [postId, navigate]);

  return (
    <section className="blog">
      <div className="blog-section">
        <div className="blog-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Post;
