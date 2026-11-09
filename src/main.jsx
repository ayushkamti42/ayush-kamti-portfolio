import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  {
    number: '01',
    title: 'Project One',
    description: 'Add a short explanation of a website or app you have built. Mention the problem it solves and what you learned.',
    stack: 'React · JavaScript · CSS',
    link: '#'
  },
  {
    number: '02',
    title: 'Project Two',
    description: 'Show another project here. A small but finished project is better than listing something you have not built yet.',
    stack: 'HTML · CSS · JavaScript',
    link: '#'
  },
  {
    number: '03',
    title: 'Coming Soon',
    description: 'Use this space for your next project. Replace this card once you have something ready to share.',
    stack: 'Learning in progress',
    link: '#'
  }
];

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home">AK<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">STUDENT DEVELOPER · INDIA</p>
            <h1>Hi, I'm <span>Ayush Kamti.</span><br />I build for the web.</h1>
            <p className="intro">
              I'm a student learning web development and building my skills in
              JavaScript, React and the MERN stack. I enjoy turning ideas into
              simple, useful digital experiences.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">View my work <span>↗</span></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <p className="availability"><i></i> Open to learning, collaboration and beginner opportunities</p>
          </div>
          <div className="hero-card" aria-label="Developer introduction card">
            <div className="card-top"><span>PROFILE / 2026</span><span>✳</span></div>
            <div className="avatar">AK</div>
            <p className="card-name">Ayush Kamti</p>
            <p className="card-role">Aspiring Full-Stack Developer</p>
            <div className="card-line"></div>
            <div className="card-bottom"><span>CURIOUS BY NATURE</span><span>BUILDING EVERY DAY ↗</span></div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div>
            <h2>Learning today.<br /><span>Building tomorrow.</span></h2>
            <p>
              I'm currently developing my foundation in programming and
              frontend development. I'm learning React and exploring how
              modern websites and applications are built. My goal is to keep
              practising, create real projects and grow into a skilled
              full-stack developer.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-label">02 / SKILLS</div>
          <div className="section-content">
            <h2>Tools I'm learning</h2>
            <p className="muted">Edit this list so it only includes technologies you can genuinely use.</p>
            <div className="skills">
              {['HTML', 'CSS', 'JavaScript', 'React.js', 'Git & GitHub', 'Node.js — learning', 'Express.js — learning', 'MongoDB — learning'].map(skill =>
                <span className="skill" key={skill}>{skill}<b>↗</b></span>
              )}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-label">03 / PROJECTS</div>
          <div className="section-content">
            <h2>Selected work</h2>
            <p className="muted">Replace these sample cards with your real projects and working links.</p>
            <div className="projects">
              {projects.map(project => (
                <article className="project" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="stack">{project.stack}</span>
                  </div>
                  <a href={project.link} aria-label={`Open ${project.title}`}>↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">04 / CONTACT</p>
          <h2>Have an idea?<br /><span>Let's connect.</span></h2>
          <p className="muted">Add your professional email below so people can contact you.</p>
          <a className="button primary" href="mailto:your.email@example.com">your.email@example.com ↗</a>
          <div className="socials">
            <a href="https://github.com/ayushkamti42" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Ayush Kamti</span><span>Designed & built with React</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
