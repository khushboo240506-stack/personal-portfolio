function Home() {
  return (
    <section id="home">

      <p className="intro">Hello, I'm</p>

      <h1>Khushboo</h1>

      <h2>BCA Student | Aspiring Software Developer</h2>

      <p className="description">
        I am a motivated BCA student passionate about technology,
        software development, and continuous learning.
        I am currently developing my skills in Python,
        Machine Learning, and Full Stack Web Development.
      </p>

      <div className="home-buttons">

        <a href="#projects">
          <button>View My Projects</button>
        </a>

        <a href="#contact">
          <button className="secondary-button">
            Contact Me
          </button>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resume-button">
            View Resume
          </button>
        </a>
        <a
  href="https://github.com/khushboo240506-stack"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="github-button">
    GitHub
  </button>
</a>
<a
  href="https://www.linkedin.com/in/khushboo-singh-871b86366/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="linkedin-button">
    LinkedIn
  </button>
</a>

      </div>

    </section>
  );
}

export default Home;