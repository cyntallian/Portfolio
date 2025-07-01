"use client"
import "./App.css"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! I'll get back to you soon.")
    e.target.reset()
  }

  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <div className="logo">John Mark L. Fernando</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm John Mark L. Fernando</h1>
          <p>Full Stack Developer & UI/UX Designer</p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="/profile.jpg" alt="John Mark L. Fernando Profile" className="profile-img" />
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with over 2 years of experience creating digital solutions that make
              a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies or enjoying a good cup of coffee while
              reading about tech.
            </p>
            <p>I believe in writing clean, maintainable code and crafting great user experiences.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <SkillCard
            icon="💻"
            title="Frontend Development"
            skills="React, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Sass"
          />
          <SkillCard icon="⚙️" title="Backend Development" skills="Node.js, Python, Express.js, Django, REST APIs" />
          <SkillCard icon="🗄️" title="Database & Cloud" skills="MongoDB, PostgreSQL, MySQL, AWS" />
          <SkillCard
            icon="🎨"
            title="UI/UX Design"
            skills="Figma, Adobe XD, Photoshop, Responsive Design, Prototyping"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects and Achievements</h2>
        <div className="projects-grid">
          <ProjectCard
            title="UrbanHive"
            image="/urbanhive.jpeg?height=200&width=400"
            description="A full-stack tenant and rent management solution built with Html, Node.js, and PostgreSQL."
          />
          <ProjectCard
            title="MRSP Competition"
            image="/MRSP.jpeg?height=200&width=400"
            description="Competition in AI in Robotics held at FEU Tech winning 2nd runner-up"
          />
          <ProjectCard
            title="Partyrock LogoCraft App Creation"
            image="/partyrock.jpeg?height=200&width=400"
            description="A logo maker application that allows download having no watermarks"
          />
          <ProjectCard
            title="Into the Clouds, The Future of Computing Seminar"
            image="/cloudquest.png?height=200&width=400"
            description="AWS Cloud Quest game having tasks related to cloud computing"
          />
          <ProjectCard
            title="Quote Generator"
            image="/quote.png?height=200&width=400"
            description="A simple quote generator webiste that allows copying and sharing of quote"
          />
          <ProjectCard
            title="Brigada Eskwela"
            image="/brigada.jpg?height=200&width=400"
            description="Brigada Eskwela held at V Mapa High School."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always open to new opportunities and exciting projects. Reach out!</p>
            <div className="contact-item">
              <span>📧</span>
              <span>jm.fernando0013@gmail.com</span>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <span>+63 976-559-4034</span>
            </div>
            <div className="contact-item">
              <span>📍</span>
              <span>Makati City, Metro Manila</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
  <div className="social-links">
    <a href="https://www.facebook.com/jm.fernando.75" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
    <a href="https://github.com/cyntallian" target="_blank" rel="noopener noreferrer">
      <FaGithub size={24} />
    </a>
    <a href="https://www.linkedin.com/in/jm-fernando-8b3984155/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
  </div>
  <p>&copy; 2025 John Mark L. Fernando. All Rights Reserved.</p>
</footer>
    </div>
  )
}

// SkillCard Component
const SkillCard = ({ icon, title, skills }) => (
  <div className="skill-card">
    <div className="skill-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{skills}</p>
  </div>
)

// ProjectCard Component
const ProjectCard = ({ title, image, description, demoLink, githubLink }) => (
  <div className="project-card">
    <img src={image || "/placeholder.svg"} alt={title} className="project-img" />
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
)

export default App
