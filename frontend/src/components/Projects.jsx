import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={`/projects/${project._id}`} className="btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
