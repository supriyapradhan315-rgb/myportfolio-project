import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import api from '../api';
import toast from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error('Please complete all fields');
    }
    setSending(true);
    try {
      await api.post('/api/contacts', formData);
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      }
      toast.success('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="glass-card contact-card">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Send a message for internships, collaborations, or project inquiries. Your message is saved securely.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="input-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Your message" />
            <div className="form-actions">
              <button type="submit" className="button" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        <div className="contact-info glass-card">
          <div className="info-block">
            <h3>Contact Info</h3>
            <p>Email: supriyapradhan315@gmail.com</p>
            <p>Location: Bhubaneswar, India</p>
          </div>
          <div className="info-block">
            <h3>Why Connect?</h3>
            <p>
              I’m open to internships, mentorship, and remote work. Let’s work on meaningful products together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
