import React, { useState, useEffect } from 'react';
import "../styles/landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Fetch error:', error); // Log any fetch errors
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="Landing">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm Ashish</h1>
          <p>I'm a Full-Stack Developer specializing in modern web technologies.</p>
          <Link to="/projects" className="btn-primary">See My Work</Link>
          <Link to="/blogs" className="btn-primary">Visit My Blog</Link> {/* Added Blog Link */}
        </div>
      </header>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm passionate about building high-quality web applications. I work with the latest
          technologies like React, Node.js, and MongoDB to create dynamic and responsive websites.
        </p>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">MongoDB</div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn-secondary">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Ashish. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
