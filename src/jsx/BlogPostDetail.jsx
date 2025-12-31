import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './data/blogPosts';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className='Page'>
        <div className="Header">
          Post Not Found
        </div>
        <div className="Page-Content-inner">
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='Page'>
      hello
    </div>
  );
};

export default BlogPostDetail;

