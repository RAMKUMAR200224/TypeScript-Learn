const projects = [
  "Portfolio Website",
  "Todo App",
  "Weather App",
];

function Projects() {
  return (
    <div className="card">
      <h2>Projects</h2>

      <ul>
        {projects.map((project) => (
          <li key={project}>
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;