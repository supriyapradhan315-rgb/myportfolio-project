import { useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import api from '../api';
import ProjectForm from './ProjectForm';

export default function AdminDashboard({ token, onLogout, updateProjects }) {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/api/projects');
      setProjects(data);
      updateProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSave = async (projectData) => {
    try {
      if (selectedProject) {
        const { data } = await api.put(`/api/projects/${selectedProject._id}`, projectData, authHeaders);
        setProjects((prev) => prev.map((item) => (item._id === data._id ? data : item)));
        updateProjects((prev) => prev.map((item) => (item._id === data._id ? data : item)));
        setSelectedProject(null);
      } else {
        const { data } = await api.post('/api/projects', projectData, authHeaders);
        setProjects((prev) => [data, ...prev]);
        updateProjects((prev) => [data, ...prev]);
      }
    } catch (error) {
      alert('Unable to save project');
    }
  };

  const handleDelete = async (projectId) => {
    if (!confirm('Delete this project?')) return;
    try {
      await api.delete(`/api/projects/${projectId}`, authHeaders);
      setProjects((prev) => prev.filter((project) => project._id !== projectId));
      updateProjects((prev) => prev.filter((project) => project._id !== projectId));
    } catch (error) {
      alert('Unable to delete project');
    }
  };

  return (
    <section className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="section-header">
        <h2 className="section-title">Admin Dashboard</h2>
        <p className="section-subtitle">Use this page to add, edit, and delete project entries in the portfolio.</p>
      </div>
      <div className="form-actions" style={{ justifyContent: 'space-between' }}>
        <button onClick={onLogout} className="button">
          Logout
        </button>
      </div>
      <div className="grid-2" style={{ gap: '26px', marginTop: '32px' }}>
        <ProjectForm onSave={handleSave} projectToEdit={selectedProject} />
        <div className="glass-card contact-card">
          <h3>Project List</h3>
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <div className="skills-list">
              {projects.map((project) => (
                <div key={project._id} className="skill-row" style={{ padding: '18px', background: 'rgba(255,255,255,0.04)', borderRadius: '20px' }}>
                  <div>
                    <strong>{project.title}</strong>
                    <p style={{ margin: '6px 0 0', color: 'var(--muted)' }}>{project.technologies?.join(', ')}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="button" type="button" onClick={() => setSelectedProject(project)}>
                      <FaEdit />
                    </button>
                    <button className="button" type="button" onClick={() => handleDelete(project._id)}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
