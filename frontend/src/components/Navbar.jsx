import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'Admin', href: '/admin' },
];

export default function Navbar() {
  const [active, setActive] = useState('#home');
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <a className="brand" href="/">
          CS Portfolio
        </a>
        <div className="nav-links">
          {links.map((link) =>
            link.href.startsWith('#') ? (
              <a key={link.href} href={link.href} className={active === link.href ? 'active' : ''}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} className={location.pathname === link.href ? 'active' : ''}>
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
