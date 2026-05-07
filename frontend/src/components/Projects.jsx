import ProjectCard from './ProjectCard';

export default function Projects({ projects, loading }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected projects built with modern stacks, showing responsive UI, backend integration, and deployment-ready architecture.
          </p>
        </div>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project._id || project.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
