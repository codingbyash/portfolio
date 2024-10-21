// src/components/BlogList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal'; // Import the modal component

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null); // Store the blog ID to delete

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

  const handleDelete = (id) => {
    setBlogToDelete(id); // Set the blog ID to delete
    setModalOpen(true); // Open the modal
  };

  const confirmDelete = async () => {
    if (blogToDelete) {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${blogToDelete}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove the deleted blog from the state
          setBlogs(blogs.filter(blog => blog._id !== blogToDelete));
          setModalOpen(false); // Close the modal
        } else {
          throw new Error('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

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
            <Link to={`/edit-blog/${blog._id}`} className="btn-secondary">Edit</Link> {/* Edit button */}
            <button onClick={() => handleDelete(blog._id)} className="btn-danger">Delete</button> {/* Delete button */}
          </div>
        ))}
      </div>
      <ConfirmModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default BlogList;
