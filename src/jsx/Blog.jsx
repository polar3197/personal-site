// src/pages/Projects.jsx
import { Link } from 'react-router-dom';
import "../css/Page.css"
import "../css/Post.css"
import blogPosts from './data/blogPosts.js';

const BlogPost = ({ title, description, tags, slug }) => {
    return (
        <Link to={`/blog/${slug}`} className="blog-card">
            <div className='Project-list-elem'>
                <div className="Project-content">
                    <div className="Project-title">
                        {title}
                    </div>
                    <div className="Project-description">
                        <p>{description}</p>
                        <br></br>
                        <br></br>
                        <p><b>Topics:</b> {tags.map(tag =>(
                                <i>{tag}, </i>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

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