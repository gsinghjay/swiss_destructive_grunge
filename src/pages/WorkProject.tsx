import { useParams, Link, Navigate } from 'react-router-dom'
import projects from '../data/projects.json'

export default function WorkProject() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  return (
    <article className="project">
      <header className="project-header">
        <h1 className="project-title-main" style={{ transform: 'rotate(-3deg)' }}>
          {project.title}
        </h1>
        <div className="featured-image torn halftone">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-description-block">
          <p>{project.description}</p>
        </div>
      </header>
      <div className="project-content">
        <div className="content-wrapper">
          {project.content.split('\n\n').map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </div>
      </div>
      <footer className="project-footer">
        <Link to="/work" className="back-link">← BACK TO WORK</Link>
      </footer>
    </article>
  )
}
