// src/pages/Projects.jsx
import React from 'react';
// import "../css/ 
import muniMapImage from '../../assets/imgs/muni-map.png';

const BlogPost = ({ title, description, tags }) => {
    return (
        <div className='Project-list-elem'>
            <div className="Project-content">
                <div className="Project-title">
                    {title}
                </div>
                <div className="Project-description">
                    <p>{description}</p>
                    <p><b>Topics:</b> {tags.map(tag =>(
                            <i>{tag}, </i>
                        ))}
                    </p>
                </div>
            </div>
            
        </div>
    );
};

function BlogPostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span>{post.date}</span>
    </Link>
  );
}

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Speeding up UI <-> FastAPI <-> OpenAI round trip time',
            description: 'My experience tweaking OpenAI SDK usage to get faster response time in MUNI Map.',
            tags: ['prompt-engineering','fastapi','openai'],
        },
    ];

    return (
        <div className='Page'>
            <div className="Header">
                Documented tech challenges
            </div>
            <div className="Page-Content-inner">
                <div className='Project-list'>
                    {posts.map(post => (
                        <BlogPost
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            tags={post.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;