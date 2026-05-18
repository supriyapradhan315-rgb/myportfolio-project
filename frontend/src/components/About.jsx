export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I am a Computer Science student passionate about building full stack applications with great user experiences and solid backend architecture.
          </p>
        </div>
        <div className="about-grid">
          <div className="glass-card profile-summary">
            <div className="info-block">
              <h3>Career Objective</h3>
              <p>
                To contribute to a growth-driven engineering team by building scalable web applications and learning production-ready backend development.
              </p>
            </div>
            <div className="info-block">
              <h3>Education</h3>
              <p>Btech Computer Science (3rd year)</p>
              <p>Gandhi Engineering college</p>
            </div>
          </div>
          <div className="glass-card info-block">
            <h3>Introduction</h3>
            <p>
              I enjoy translating complex problems into clean digital experiences. My current focus is on React frontends, Node.js APIs, and MongoDB integrations.
            </p>
            <div className="info-block">
              <h3>Current Focus</h3>
              <ul>
                <li>Frontend development with React</li>
                <li>RESTful APIs and Express</li>
                <li>Cloud deployment and database design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
