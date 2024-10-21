import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/projectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      <h2>Technologies Used:</h2>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      <h2>Features:</h2>
      <ul>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Challenges Faced:</h2>
      <p>{project.challenges}</p>
      <h2>Future Improvements:</h2>
      <p>{project.futureImprovements}</p>
      <h2>User Feedback:</h2>
      <p>{project.feedback}</p>
      <div className="project-links">
        <a href={project.liveLink} className="btn-primary" target="_blank" rel="noopener noreferrer">View Live Demo</a>
        <a href={project.sourceCodeLink} className="btn-secondary" target="_blank" rel="noopener noreferrer">View Source Code</a>
      </div>
    </div>
  );
};

export default ProjectDetail;
