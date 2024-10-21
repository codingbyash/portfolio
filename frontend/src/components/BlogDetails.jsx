// src/components/BlogDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <p>{error}</p>;

  if (!blog) return <p>Loading...</p>; // Show loading state

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      {/* You can add more details or styles as needed */}
    </div>
  );
};

export default BlogDetails;
