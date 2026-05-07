import { useState } from 'react';
import api from '../api';

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: 'admin', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/login', credentials);
      onLogin(data.token);
    } catch (error) {
      alert('Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="glass-card" id="admin-login" style={{ margin: '80px auto', maxWidth: '540px' }}>
      <div className="container">
        <h2 className="section-title">Admin Login</h2>
        <p className="section-subtitle">Use your admin credentials to manage project content in the portfolio.</p>
        <form className="input-group" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" value={credentials.username} onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={credentials.password} onChange={handleChange} />
          <div className="form-actions">
            <button className="button" type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
