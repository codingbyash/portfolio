// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      {/* Blog Routes */}
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/edit-blog/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default App;
