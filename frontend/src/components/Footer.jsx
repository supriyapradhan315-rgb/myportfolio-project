export default function Footer() {
  return (
    <footer className="footer glass-card">
      <div className="container">
        <p>Built with React, Node.js, Express, and MongoDB.</p>
        <p>© {new Date().getFullYear()} Final Year CS Student Portfolio</p>
      </div>
    </footer>
  );
}
