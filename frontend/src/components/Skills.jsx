const skills = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 92 },
  { name: 'React.js', value: 88 },
  { name: 'Node.js', value: 82 },
  { name: 'Express.js', value: 80 },
  { name: 'MongoDB', value: 78 },
  { name: 'Python', value: 74 },
  { name: 'Java', value: 70 },
];

export default function Skills() {
  return (
    <section className="glass-card" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            A mix of frontend, backend, and database skills used to build real-world projects.
          </p>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-row">
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
