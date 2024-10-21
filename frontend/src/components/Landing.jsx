import React from 'react';
import "../styles/landing.css";
import { Link } from "react-router-dom";


function Landing() {
  return (
    <div className="Landing">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm Ashish</h1>
          <p>I'm a Full-Stack Developer specializing in modern web technologies.</p>
          <Link to="/projects" className="btn-primary">See My Work</Link>
        </div>
      </header>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm passionate about building high-quality web Landinglications. I work with the latest
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
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A full-stack web Landing built with MERN stack.</p>
            <a href="/project-1" className="btn-secondary">Learn More</a>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>An interactive portfolio website showcasing my skills.</p>
            <a href="/project-2" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

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

export default Landing;
