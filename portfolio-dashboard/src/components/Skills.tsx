const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];

function Skills() {
  return (
    <div className="card">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;