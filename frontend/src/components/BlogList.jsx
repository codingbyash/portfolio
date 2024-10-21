// src/components/BlogList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      <Link to="/add-blog" className="btn-primary">Add Blog</Link>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 100)}...</p> {/* Preview content */}
            <Link to={`/blogs/${blog._id}`} className="btn-secondary">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
