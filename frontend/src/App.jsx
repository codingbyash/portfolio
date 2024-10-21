import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm [Your Name]</h1>
          <p>I'm a Full-Stack Developer specializing in modern web technologies.</p>
          <a href="#projects" className="btn-primary">See My Work</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm passionate about building high-quality web applications. I work with the latest
          technologies like React, Node.js, and MongoDB to create dynamic and responsive websites.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">MongoDB</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A full-stack web app built with MERN stack.</p>
            <a href="/project-1" className="btn-secondary">Learn More</a>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>An interactive portfolio website showcasing my skills.</p>
            <a href="/project-2" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 [Your Name]. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
