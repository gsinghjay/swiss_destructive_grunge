import { Link } from 'react-router-dom'
import projects from '../data/projects.json'

export default function WorkIndex() {
  return (
    <div className="work-page">
      <div className="work-header">
        <h1 className="page-title glitch" data-text="WORK" style={{ transform: 'rotate(-4deg)' }}>
          WORK
        </h1>
      </div>
      <div className="work-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card distressed" style={{ transform: `rotate(${project.rotation}deg)` }}>
            <div className="project-image halftone">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <Link to={`/work/${project.slug}`} className="project-link">VIEW PROJECT →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
