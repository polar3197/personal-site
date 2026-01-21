// src/pages/Projects.jsx
import { Link } from 'react-router-dom';
import "../css/Page.css";
import "../css/Post.css";
import blogPosts from './data/blogPosts.jsx';

const BlogPost = ({ title, description, tags, slug }) => (
    <Link to={`/blog/${slug}`} className="blog-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="blog-card-tags"># {tags.join(', ')}</p>
    </Link>
);

const Blog = () => {
    const posts = blogPosts;

    return (
        <>
        <div className="Header">
            Documenting fun tech challenges
        </div>
        <div className="Page-Content-inner">
            <div className='Project-list'>
                {posts.map(post => (
                    <BlogPost
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        tags={post.tags}
                        slug={post.slug}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Blog;