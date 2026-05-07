import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const roles = [ 'Full Stack Developer', 'React Enthusiast'];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const word = roles[index];
    const typer = setInterval(() => {
      setText(word.slice(0, charIndex + 1));
      charIndex += 1;
      if (charIndex > word.length) {
        clearInterval(typer);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 120);
    return () => clearInterval(typer);
  }, [index]);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="profile-badge">Hello, I am</p>
          <h1 className="hero-title">Supriya Pradhan</h1>
          <h2 className="hero-subtitle">{text}</h2>
          <p className="hero-copy">
            I build polished web experiences with React, Node, and MongoDB. I love crafting clean interfaces, modern developer tools, and learning new technologies every day.
          </p>
          <div className="hero-actions">
            <a className="button" href="resume.png" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <div className="social-links">
              <a href="https://github.com/supriyapradhan315-rgb" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/supriya-pradhan-3bb78b3b7" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="glass-card profile-card">
          <img src="image2.jpg" alt="Profile" />
          <div>
            <h3> CS Student </h3>
            <p>Building user-friendly web apps with modern UI and backend APIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
