import { useEffect, useState, type ReactNode } from 'react'
import { ArrowDownToLine, ArrowUpRight, Menu, X } from 'lucide-react'

const resumeUrl = '/resume/Aazam_Resume.pdf'

const profileLinks = {
  email: 'mailto:amameaazam@gmail.com',
  phone: 'tel:+917479582872',
  github: 'https://github.com/aazam-create',
  linkedin: 'https://www.linkedin.com/in/amame-aazam/',
  leetcode: 'https://leetcode.com/u/Aazam07/',
}

const navigation = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Achievements', 'achievements'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
] as const

const projects = [
  {
    title: 'ClassMark',
    subtitle: 'Role-based classroom management app',
    description:
      'A student and faculty app with Firebase authentication, Firestore profiles, and role-based screen routing.',
    technologies: ['React Native', 'JavaScript', 'Firebase Auth', 'Firestore'],
    href: 'https://github.com/aazam-create/Class-Mark',
    flowLabel: 'ClassMark account and role flow',
    steps: [
      { title: 'Firebase Auth', detail: 'Sign up / sign in' },
      { title: 'Firestore', detail: '/users/{uid} profile' },
      { title: 'Role route', detail: 'Student or faculty' },
    ],
    details: [
      'Signup creates a Firebase account and stores a student profile in Firestore. Login checks that profile and accepts student or faculty roles before routing.',
      'Attendance currently loads sample students and simulates submission; it is not persisted. A production version would need a real data source and authorized attendance writes.',
    ],
  },
  {
    title: 'SmartRail — IRCTC 2.0',
    subtitle: 'Travel booking interface prototype',
    description:
      'A React and TypeScript travel interface with an open dashboard and sign-in-gated routes for its booking and travel features.',
    technologies: ['React', 'TypeScript', 'Vite', 'Firebase'],
    href: 'https://github.com/aazam-create/IRCTC',
    liveHref: 'https://irctc-2-0-g.vercel.app/',
    flowLabel: 'SmartRail application route flow',
    steps: [
      { title: 'React app shell', detail: 'Dashboard and navigation' },
      { title: 'Auth state', detail: 'Public / protected routes' },
      { title: 'Travel pages', detail: 'Booking, metro, planner' },
    ],
    details: [
      'The app separates its public landing page from authenticated travel pages, with shared auth, booking, and profile providers around the route tree.',
      'The live link is a product UI demo, not an official IRCTC service. Real ticket inventory, PNR status, and payments are not represented as verified integrations.',
    ],
  },
]

const certificates = [
  {
    title: 'Decode Java + DSA 1.0',
    issuer: 'Physics Wallah',
    detail: 'Completed 22 August 2026',
    href: '/certificates/java-dsa.pdf',
    downloadName: 'Decode-Java-DSA-1.0.pdf',
  },
  {
    title: 'Delta — Full Stack Web Development',
    issuer: 'Apna College',
    detail: '',
    href: '/certificates/full-stack.pdf',
    downloadName: 'Delta-Full-Stack-Web-Development.pdf',
  },
]

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={14} />
    </a>
  )
}

function ProjectFlow({
  label,
  steps,
}: {
  label: string
  steps: { title: string; detail: string }[]
}) {
  return (
    <div className="project-flow" role="group" aria-label={label}>
      <p className="flow-caption">HOW IT FITS TOGETHER</p>
      <ol>
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="flow-step-number">0{index + 1}</span>
            <strong>{step.title}</strong>
            <span>{step.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting)
        if (active) setActiveSection(active.target.id)
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => sectionObserver.observe(section))

    return () => {
      observer.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>Amame Aazam<span>.</span></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav id="site-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
            {navigation.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Resume <ArrowUpRight size={13} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="intro">Hello, I&apos;m</p>
            <h1>Amame<br />Aazam<span>.</span></h1>
            <h2>Full-Stack Developer (MERN)<br className="desktop-break" /> | Java &amp; DSA | AI/ML</h2>
            <p className="hero-description">I build practical full-stack applications, solve complex problems with Java and DSA, and explore AI-driven development.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View Projects <ArrowUpRight size={15} /></a>
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-links">
              <ExternalLink href={profileLinks.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profileLinks.github}>GitHub</ExternalLink>
              <ExternalLink href={profileLinks.leetcode}>LeetCode</ExternalLink>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <picture>
              <source srcSet="/images/aazam-profile.webp" type="image/webp" />
              <img
                className="hero-photo"
                src="/images/aazam-profile.png"
                alt="Amame Aazam in a dark blazer and white shirt"
                width="1254"
                height="1254"
                fetchPriority="high"
              />
            </picture>
            <div className="hero-photo-caption">
              <span>Amame Aazam</span>
              <span>Full-Stack Developer</span>
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-wrap narrow-section reveal">
            <p className="section-index">01 — ABOUT</p>
            <h2 className="section-title">About Me</h2>
            <p className="about-copy">I am a full-stack software developer proficient in the MERN stack (MongoDB, Express.js, React, Node.js) with a strong background in system design and AI-driven development. My solid Java skills and deep knowledge of data structure algorithms (DSA) have helped me build multiple impactful projects end-to-end. I excel at solving complex problems and delivering measurable results quickly.</p>
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-wrap reveal">
            <p className="section-index">02 — WHAT I WORK WITH</p>
            <h2 className="section-title">Technical Skills</h2>
            <dl className="skills-list">
              <div><dt>Programming Languages</dt><dd>Java, JavaScript</dd></div>
              <div><dt>Problem Solving</dt><dd>Data Structures &amp; Algorithms in Java · 300+ LeetCode problems solved</dd></div>
              <div><dt>Frontend</dt><dd>HTML5, CSS3, JavaScript, React.js</dd></div>
              <div><dt>Backend</dt><dd>Node.js, Express.js, REST APIs, API integration, authentication, CRUD operations</dd></div>
              <div><dt>Databases</dt><dd>MongoDB, SQL, database design</dd></div>
              <div><dt>Core Concepts</dt><dd>OOP, DBMS, Operating Systems, Computer Networks, system design</dd></div>
              <div><dt>Tools &amp; Technologies</dt><dd>Git, GitHub, VS Code, Postman, Firebase, AI fundamentals</dd></div>
            </dl>
            <p className="interest-note">Currently interested in AI/ML and AI-driven development.</p>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-wrap reveal">
            <p className="section-index">03 — SELECTED WORK</p>
            <h2 className="section-title">Selected Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project" key={project.title}>
                  <ProjectFlow label={project.flowLabel} steps={project.steps} />
                  <div className="project-info">
                    <p className="project-kicker">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="technology-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <div className="project-links">
                      <ExternalLink href={project.href} className="source-link">View Source</ExternalLink>
                      {project.liveHref && (
                        <ExternalLink href={project.liveHref} className="source-link">Live Demo</ExternalLink>
                      )}
                    </div>
                    <details className="project-details">
                      <summary>Technical notes</summary>
                      <ul>
                        {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            <a className="more-github" href={profileLinks.github} target="_blank" rel="noreferrer">Explore More on GitHub <ArrowUpRight size={15} /></a>
            <p className="repo-note">DSA-Practice and Mess repositories are available on my GitHub profile.</p>
          </div>
        </section>

        <section className="content-section" id="achievements">
          <div className="section-wrap reveal">
            <p className="section-index">04 — RECOGNITION</p>
            <h2 className="section-title">Achievements</h2>
            <ul className="achievement-list">
              <li>
                <span>INNOVERTEX 2025</span>
                <strong>1st Position</strong>
                <p>Recognized for a full-stack application with real-time functionality and a modern UI.</p>
              </li>
              <li>
                <span>National hackathons</span>
                <strong>7× Finalist</strong>
                <p>Qualified as a finalist by building software solutions and presenting technical ideas.</p>
              </li>
              <li>
                <span>Recognition</span>
                <strong>Best Speaker Award</strong>
                <p>Awarded for presentation, communication, and technical explanation skills.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="content-section education-section" id="education">
          <div className="section-wrap reveal">
            <p className="section-index">05 — ACADEMICS</p>
            <h2 className="section-title">Education</h2>
            <ol className="education-list">
              <li><span>2020</span><div><h3>Class 10th</h3><p>Grade A</p></div></li>
              <li><span>2022</span><div><h3>Class 12th</h3><p>Grade A</p></div></li>
              <li><span>2023–2027</span><div><h3>B.Tech, Computer Science &amp; Engineering</h3><p>I.K. Gujral Punjab Technical University (IKGPTU)</p><p>Current CGPA: 7.50 / 10 · Expected graduation: 2027</p></div></li>
            </ol>
          </div>
        </section>

        <section className="content-section certifications-section" id="certifications">
          <div className="section-wrap reveal">
            <p className="section-index">06 — COURSEWORK</p>
            <h2 className="section-title">Certifications</h2>
            <ul className="certificate-list">
              {certificates.map((certificate) => (
                <li key={certificate.href}>
                  <div><h3>{certificate.title}</h3><p>{certificate.issuer}{certificate.detail && ` · ${certificate.detail}`}</p></div>
                  <div className="certificate-actions">
                    <a href={certificate.href} target="_blank" rel="noreferrer">View Certificate <ArrowUpRight size={14} /></a>
                    <a href={certificate.href} download={certificate.downloadName} aria-label={`Download ${certificate.title}`}><ArrowDownToLine size={16} /></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="content-section resume-section" id="resume">
          <div className="section-wrap resume-inner reveal">
            <div>
              <p className="section-index">07 — A CLOSER LOOK</p>
              <h2 className="section-title">My Resume</h2>
              <p className="resume-description">Explore my skills, projects, education, achievements, and certifications in one place.</p>
            </div>
            <div className="resume-actions">
              <a className="button button-primary" href={resumeUrl} target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={15} /></a>
              <a className="button button-secondary" href={resumeUrl} download="Aazam_Resume.pdf">Download Resume <ArrowDownToLine size={15} /></a>
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="section-wrap contact-inner reveal">
            <div>
              <p className="section-index">08 — GET IN TOUCH</p>
              <h2 className="section-title">Let&apos;s Connect</h2>
              <p className="contact-copy">Open to connecting about software development, technical opportunities, and interesting projects.</p>
            </div>
            <div className="contact-links">
              <a href={profileLinks.email}>Email <span>amameaazam@gmail.com</span><ArrowUpRight size={15} /></a>
              <a href={profileLinks.phone}>Phone <span>+91 74795 82872</span><ArrowUpRight size={15} /></a>
              <ExternalLink href={profileLinks.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profileLinks.github}>GitHub</ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner"><a className="brand" href="#home">Amame Aazam<span>.</span></a><p>© 2026 Amame Aazam</p></div>
      </footer>
    </>
  )
}

export default App
