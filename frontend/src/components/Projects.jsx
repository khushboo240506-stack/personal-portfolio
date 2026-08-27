function Projects() {
  const projects = [
    {
      title: "EduPredict",
      subtitle: "Student Performance Analysis & Prediction",
      description:
        "A machine learning project focused on analyzing student performance and predicting academic outcomes using data-driven techniques.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
    },
    {
      title: "Neural Network Framework",
      subtitle: "Machine Learning Project",
      description:
        "A project focused on understanding and implementing the basic concepts and working principles of neural networks for machine learning applications.",
      tech: ["Python", "Machine Learning", "Neural Networks"],
    },
    {
      title: "Fire Detector Using Arduino UNO",
      subtitle: "IoT-Based Safety System",
      description:
        "An IoT-based project designed to detect fire using sensors connected with an Arduino UNO and provide an alert when fire is detected.",
      tech: ["Arduino UNO", "IoT", "Sensors"],
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <p className="projects-intro">
        Here are some of the projects I have worked on while developing
        my programming, machine learning, and IoT skills.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <h4>{project.subtitle}</h4>

            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((technology, techIndex) => (
                <span key={techIndex}>{technology}</span>
              ))}
            </div>

            <button
              onClick={() =>
                alert(
                  `${project.title}\n\nThis project will be connected to GitHub soon.`
                )
              }
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;