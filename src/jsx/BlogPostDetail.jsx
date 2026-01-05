import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './data/blogPosts';
import '../css/Post.css';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

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
      {/* <p><Link to="/blog">← Back to Blog</Link></p> */}
      <div className="Post-header">
        <div style={{ fontSize: '36px' }}>{post.title}</div>
        <p>{post.date}</p>
      </div>
      <div className="Post-content">
        {post.content.split('\n\n').map((paragraph, index) => (
          <>
          <p key={index}>{paragraph}</p>
          <br></br>
          </>
        ))}
      </div>
    </>
  );
};

export default BlogPostDetail;

