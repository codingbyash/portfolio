import React, { useState, useEffect } from 'react';
import "../styles/landing.css";
import { Link } from "react-router-dom";
import Chatbot from './Chatbot/Chatbot';
import { motion } from 'framer-motion';

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
        console.error('Fetch error:', error);
      }
    };

    fetchProjects();
  }, []);

  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <div className="Landing">
    <header className="hero-section">
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1>Hello, I'm Ashish</h1>
        <p>I'm a Full-Stack Developer specializing in modern web technologies.</p>
        <Link to="/projects" className="btn-primary">See My Work</Link>
        <Link to="/blogs" className="btn-primary">Visit My Blog</Link>
      </motion.div>
    </header>

    <section id="about" className="about-section">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm passionate about building high-quality web applications. I work with the latest
        technologies like React, Node.js, and MongoDB to create dynamic and responsive websites.
      </motion.p>
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
            <motion.div
              className="project-card"
              key={project._id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn-secondary">Learn More</a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="App">
        <h1>Welcome to My Portfolio</h1>
        <Chatbot />
      </section>
      <footer className="footer">
        <p>© 2024 Ashish. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Landing;
