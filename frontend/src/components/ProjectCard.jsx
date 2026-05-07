import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card glass-card">
      <img src={project.image} alt={project.title} />
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <a className="button" href={project.githubLink} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a className="button" href={project.liveDemo} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
