import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug'
import blogPosts from './data/blogPosts.jsx';
import '../css/Post.css';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  const [markdownContent, setMarkdownContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (post && typeof post.content === 'function') {
      setIsLoading(true);
      setError(null);
      post.content()
        .then(module => {
          setMarkdownContent(module.default);
          setIsLoading(false);
        })
        .catch(err => {
          console.error('Failed to load blog post content:', err);
          setError('Failed to load content');
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      if (post && !post.content) {
        setMarkdownContent('');
      }
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <div className="Post-header">
          Post Not Found
        </div>
        <div className="Post-content">
          <p>The blog post you're looking for doesn't exist.</p>
          <p><Link to="/blog">← Back to Blog</Link></p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Post-header">
        <div style={{ fontSize: '36px' }}>{post.title}</div>
        <p>{post.date}</p>
      </div>
      <div className="Post-content">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <ReactMarkdown rehypePlugins={[rehypeSlug]}>
            {markdownContent}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default BlogPostDetail;