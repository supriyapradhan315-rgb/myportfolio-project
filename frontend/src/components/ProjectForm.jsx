import { useState, useEffect } from 'react';

const initialState = {
  title: '',
  description: '',
  technologies: '',
  image: '',
  githubLink: '',
  liveDemo: '',
};

export default function ProjectForm({ onSave, projectToEdit }) {
  const [project, setProject] = useState(initialState);

  useEffect(() => {
    if (projectToEdit) {
      setProject({
        ...projectToEdit,
        technologies: projectToEdit.technologies?.join(', ') || '',
      });
    }
  }, [projectToEdit]);

  const handleChange = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title: project.title,
      description: project.description,
      technologies: project.technologies.split(',').map((item) => item.trim()),
      image: project.image,
      githubLink: project.githubLink,
      liveDemo: project.liveDemo,
    };
    onSave(payload);
    setProject(initialState);
  };

  return (
    <div className="glass-card contact-card">
      <h3>{projectToEdit ? 'Edit Project' : 'Add New Project'}</h3>
      <form className="input-group" onSubmit={handleSubmit}>
        <label htmlFor="title">Project Title</label>
        <input id="title" name="title" value={project.title} onChange={handleChange} required />
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="4" value={project.description} onChange={handleChange} required />
        <label htmlFor="technologies">Technologies (comma separated)</label>
        <input id="technologies" name="technologies" value={project.technologies} onChange={handleChange} required />
        <label htmlFor="image">Image URL</label>
        <input id="image" name="image" value={project.image} onChange={handleChange} />
        <label htmlFor="githubLink">GitHub Link</label>
        <input id="githubLink" name="githubLink" value={project.githubLink} onChange={handleChange} />
        <label htmlFor="liveDemo">Live Demo Link</label>
        <input id="liveDemo" name="liveDemo" value={project.liveDemo} onChange={handleChange} />
        <div className="form-actions">
          <button type="submit" className="button">
            {projectToEdit ? 'Update Project' : 'Add Project'}
          </button>
        </div>
      </form>
    </div>
  );
}
