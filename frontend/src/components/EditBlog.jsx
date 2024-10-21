
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: '', content: '', author: '' });
  const history = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/${id}`);
      const data = await response.json();
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

    if (response.ok) {
      history.push('/'); // Redirect to the blog list after successful update
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Blog</h1>
      <label>Title</label>
      <input
        type="text"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        required
      />
      <label>Content</label>
      <textarea
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        required
      ></textarea>
      <label>Author</label>
      <input
        type="text"
        value={blog.author}
        onChange={(e) => setBlog({ ...blog, author: e.target.value })}
      />
      <button type="submit">Update Blog</button>
    </form>
  );
};

export default EditBlog;
