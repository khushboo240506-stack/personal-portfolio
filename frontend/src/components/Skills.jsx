function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js", "Express.js"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL"],
    },
    {
      title: "Machine Learning",
      skills: ["Python", "Machine Learning", "Data Analysis", "Neural Networks"],
    },
    {
      title: "Tools & Soft Skills",
      skills: ["Git", "GitHub", "Problem Solving", "Communication", "Teamwork"],
    },
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>

      <p className="skills-intro">
        Technologies and skills I am currently developing through projects,
        coursework, and practical learning.
      </p>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;