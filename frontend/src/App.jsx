import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import api from './api';
import { sampleProjects } from './data/projects';

function App() {
  const [projects, setProjects] = useState(sampleProjects);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('portfolioToken') || '');
  const location = useLocation();

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('/api/projects');
        setProjects(data.length ? data : sampleProjects);
      } catch (error) {
        console.log(error);
        setProjects(sampleProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleLogin = (tokenValue) => {
    localStorage.setItem('portfolioToken', tokenValue);
    setToken(tokenValue);
    toast.success('Admin login successful');
  };

  const handleLogout = () => {
    localStorage.removeItem('portfolioToken');
    setToken('');
    toast.success('Logged out successfully');
  };

  return (
    <div className="app-shell">
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects projects={projects} loading={loading} />
              <Contact />
              <Footer />
              <ScrollToTop />
            </main>
          }
        />
        <Route
          path="/admin"
          element={
            token ? (
              <AdminDashboard token={token} onLogout={handleLogout} updateProjects={setProjects} />
            ) : (
              <AdminLogin onLogin={handleLogin} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
