import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    name: 'MITRE ATT&CK Command Generator',
    type: 'AI + Security',
    description:
      'Built an LLM-powered pipeline with Qwen2.5-7B-Instruct to synthesize Linux shell commands mapped to MITRE ATT&CK techniques, with syntax validation and dataset export.',
    year: 'DEC 2025',
    link: 'https://github.com/Inkyuuu/MITRE-ATTACK-CMD-GEN',
  },
  {
    name: 'NoteFlow',
    type: 'Full-Stack Web App',
    description:
      'Collaborated on a React note-taking app with responsive UI components, AI-powered features, authentication flows, and sharing/settings modals.',
    year: 'JAN-MAR 2025',
    link: 'https://cse115a-noteflow.github.io/noteflow/',
  },
]

const jobs = [
  {
    title: 'Academic Tutor',
    company: 'Beginning Programming in Python: CSE 20, UC Santa Cruz',
    description:
      'Hosted weekly tutoring sessions for a class of 80 students over 10 weeks, teaching basic programming principles such as debugging logic and program design in Python.',
    year: 'SEP 2025 - PRESENT',
  },
    {
    title: 'Academic Tutor',
    company: 'Programming Abstractions: Python: CSE 30, UC Santa Cruz',
    description:
      'Supported a class of ∼200 students with weekly tutoring sessions over 10 weeks to assist in developing their understanding of data structures, recursion, and object-oriented programming.',
    year: 'JAN 2025 - JUN 2025',
  },
    {
    title: 'Academic Tutor',
    company: 'Machine Learning Basics: Data Analysis and Empirical Methods: CSE 40, UC Santa Cruz',
    description:
      'Provided debugging assistance and program design help as a tutor for a class of ∼100 students over 10 weeks in the form of weekly tutoring sessions. Also explained machine learning basics including basic probability and linear algebra as well as empirical analysis, evaluation, critique and reproducibility.',
    year: 'SEP 2025 - DEC 2025',
  },
]

const skills = ['Python', 'Java', 'C/C++', 'React', 'TypeScript', 'PostgreSQL']

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      setScrollProgress(Math.min(progress, 1))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const textElements = document.querySelectorAll<HTMLElement>('.text-reveal')

    let animationFrame = 0

    const updateTextVisibility = () => {
      const navOffset =
        document.querySelector<HTMLElement>('.site-nav')?.offsetHeight ?? 0
      const visibleTop = navOffset + 12
      const visibleBottom = window.innerHeight - 12

      textElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const visibleHeight =
          Math.min(rect.bottom, visibleBottom) - Math.max(rect.top, visibleTop)
        const visibleRatio = Math.max(
          0,
          Math.min(visibleHeight / rect.height, 1),
        )
        const shouldUsePartialTrigger = element.dataset.trigger === 'partial'
        const isFullyVisible =
          rect.top >= visibleTop && rect.bottom <= visibleBottom
        const isReadyToAnimate = shouldUsePartialTrigger
          ? visibleRatio >= 0.25
          : isFullyVisible
        const isFullyOffscreen =
          rect.bottom < visibleTop || rect.top > visibleBottom

        if (isReadyToAnimate) {
          element.classList.add('is-visible')
        } else if (isFullyOffscreen) {
          element.classList.remove('is-visible')
        }
      })
    }

    const requestVisibilityUpdate = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(updateTextVisibility)
    }

    updateTextVisibility()
    window.addEventListener('scroll', requestVisibilityUpdate, { passive: true })
    window.addEventListener('resize', requestVisibilityUpdate)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestVisibilityUpdate)
      window.removeEventListener('resize', requestVisibilityUpdate)
    }
  }, [])

  return (
    <main className="site-shell">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Go to top">
          AZ
        </a>
        <div className="nav-links">
          <a href="#work">work</a>
          <a href="#about">about</a>
          <a
            href="https://drive.google.com/file/d/18OHbIn1-gvYUAzkPbqCP7jJ1QdYN-BUi/view?usp=sharing"
            aria-label="Open resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <section className="hero-section reveal" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Computer science student and aspiring software engineer</p>
          <h1 className="text-reveal text-zoom" data-trigger="partial">Building anything</h1>
          <p className="hero-text">
            printf("Hello, World!");
          </p>
          <p className="hero-text">
             I'm Amy Zeng, a computer science student at UC Santa Cruz.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              View work
            </a>
            <a
              className="secondary-link"
              href="https://drive.google.com/file/d/18OHbIn1-gvYUAzkPbqCP7jJ1QdYN-BUi/view?usp=sharing"
              aria-label="Open resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Abstract personal portrait">
          <div className="portrait-card">
            <div className="portrait-grid">
              <label title="Senso-ji, Tokyo, Japan"> <img src="image0.jpg" alt="Portfolio image" /></label>
              <label title="Ginza, Tokyo, Japan"> <img src="image1.jpg" alt="Portfolio image" /> </label>
              <label title="Big Sur, California, US"> <img src="image2.jpg" alt="Portfolio image" /> </label>
              <label title="Anhui, China"> <img src="image3.jpg" alt="Portfolio image" /> </label>
            </div>
            <div className="portrait-mark">AZ</div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </div>
      </section>

      <section className="section intro reveal" aria-label="Profile summary">
        <div className="intro-copy">
          <h2 className="text-reveal text-zoom" data-trigger="partial">
            Currently finishing my B.S. in Computer Science and continuing into an
            M.S.
          </h2>
        </div>

        <div className="job-panel" aria-label="Job experience">
          <div className="job-header">
            <p className="eyebrow">Experience</p>
          </div>
          <div className="project-list">
            {jobs.map((job) => (
              <article className="project-card job-card reveal" key={`${job.company}-${job.title}`}>
                <div>
                  <span className="project-type">{job.title}</span>
                  <h3>{job.company}</h3>
                </div>
                <p>{job.description}</p>
                <span className="project-year">{job.year}</span>
              </article>
            ))}
          </div>
          <div>
            <p className="eyebrow">Skills</p>
            <div className="skill-row" aria-label="Skills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2 className="text-reveal text-zoom">Projects shaped by teamwork and innovation.</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.name}
              style={{ animationDelay: `${index * 90}ms` }}
              onClick={() => window.open(project.link, '_blank')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(project.link, '_blank')
                }
              }}
            >
              <div>
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <span className="project-year">{project.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section reveal" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="text-reveal text-zoom">Chronic software niche explorer&mdash; no such thing as staying in one lane ;)</h2>
        </div>
        <div>
          <p>
            My background combines machine learning, cybersecurity, and distributed computing.
            I've also dabbled in parallel programming and databases. I enjoy working in a variety of software niches, and I'm open to learning whatever new skills may be needed to build my next idea.
      
          </p>
          <p>
            In my free time, I enjoy playing video games, building and tweaking mechanical keyboards, and traveling. 
          </p>
          <p className="about-subtext">
            Passionate about education and mentoring.
          </p>
        </div>
      </section>

      <section className="social-section reveal" aria-label="Social links">
        <p className="eyebrow">Find me online</p>
        <div className="social-links">
          <a className="social-icon" href="https://github.com/Inkyuuu" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49v-1.74c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04A9.38 9.38 0 0 1 12 7.12c.85 0 1.7.12 2.5.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9v2.64c0 .27.18.58.69.49A10.18 10.18 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a className="social-icon" href="https://www.linkedin.com/in/amy-zeng-95200b358/" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M5.32 8.92H2.48v12.1h2.84V8.92ZM3.9 3.3a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Zm15.08 5.34c-1.55 0-2.62.72-3.2 1.54V8.92h-2.83v12.1h2.83v-6.35c0-1.94.88-3.1 2.45-3.1 1.43 0 2.12 1.04 2.12 2.8v6.65h2.84v-7.06c0-3.36-1.66-5.32-4.21-5.32ZM10.1 8.92H7.26v12.1h2.84V8.92Z" />
            </svg>
          </a>
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <p className="eyebrow">Open to internships, research, and collaborations</p>
        <h2 className="text-reveal text-zoom">Interested in working with me? </h2>
        <a className="primary-link" href="mailto:amy.zeng.dev@gmail.com">
          CONTACT ME
        </a>
      </section>
    </main>
  )
}

export default App
