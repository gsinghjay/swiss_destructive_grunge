import { Link } from 'react-router-dom'
import posts from '../data/posts.json'
import projects from '../data/projects.json'

export default function Home() {
  const featuredPosts = posts.slice(0, 3)
  const featuredProjects = projects.slice(0, 3)

  return (
    <>
      <div className="hero">
        <div className="hero-layer-1">
          <h1 className="hero-title glitch" data-text="BREAK">BREAK</h1>
        </div>
        <div className="hero-layer-2">
          <h1 className="hero-title" style={{ color: 'var(--neon-pink)' }}>THE</h1>
        </div>
        <div className="hero-layer-3">
          <h1 className="hero-title glitch" data-text="GRID">GRID</h1>
        </div>
        <div className="hero-noise"></div>
        <div className="hero-stripe"></div>
      </div>

      <section className="learning-banner">
        <div className="banner-content torn" style={{ transform: 'rotate(-3deg)' }}>
          <h2 className="banner-label">THIS IS A LEARNING PROJECT</h2>
          <p className="banner-text">
            Built using AI collaboration. A student rebellion against perfection.
          </p>
          <Link to="/learning" className="banner-link">SEE HOW IT WAS MADE →</Link>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-content">
          <div className="manifesto-block" style={{ transform: 'rotate(-2deg)' }}>
            <h2>REJECT PERFECTION</h2>
            <p>Swiss Design had its moment. Clean lines, perfect grids, corporate soullessness. We choose CHAOS.</p>
          </div>
          <div className="manifesto-block" style={{ transform: 'rotate(3deg)', marginLeft: '-40px' }}>
            <h2 style={{ color: 'var(--neon-pink)' }}>EMBRACE UGLY</h2>
            <p>Beauty in imperfection. Rough edges. Degraded textures. Raw emotion over information.</p>
          </div>
          <div className="manifesto-block" style={{ transform: 'rotate(-1deg)', marginLeft: '40px' }}>
            <h2 style={{ color: 'var(--neon-green)' }}>CONTROLLED CHAOS</h2>
            <p>This isn't accidental mess. Every broken rule is intentional. Every clash is deliberate.</p>
          </div>
        </div>
      </section>

      <section className="featured-posts">
        <div className="section-header" style={{ transform: 'rotate(-3deg)' }}>
          <h2 className="section-title torn">LATEST THOUGHTS</h2>
          <div className="title-stripe"></div>
        </div>
        <div className="posts-chaos">
          {featuredPosts.map((post) => (
            <article key={post.id} className="post-card distressed halftone" style={{ transform: `rotate(${post.rotation}deg)` }}>
              <div className="post-image">
                <img src={post.featured_image} alt={post.title} />
              </div>
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="post-link">READ MORE →</Link>
              </div>
              <div className="card-noise"></div>
            </article>
          ))}
        </div>
        <div className="view-all" style={{ transform: 'rotate(2deg)' }}>
          <Link to="/blog" className="view-all-link">VIEW ALL POSTS →</Link>
        </div>
      </section>

      <section className="featured-work">
        <div className="section-header" style={{ transform: 'rotate(2deg)' }}>
          <h2 className="section-title torn" style={{ color: 'var(--neon-pink)' }}>RECENT WORK</h2>
          <div className="title-stripe" style={{ background: 'var(--neon-pink)' }}></div>
        </div>
        <div className="work-chaos">
          {featuredProjects.map((project) => (
            <article key={project.id} className="work-card distressed" style={{ transform: `rotate(${project.rotation}deg)` }}>
              <div className="work-image halftone">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="work-content">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-description">{project.description}</p>
                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/work/${project.slug}`} className="work-link">VIEW PROJECT →</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="view-all" style={{ transform: 'rotate(-2deg)' }}>
          <Link to="/work" className="view-all-link">VIEW ALL WORK →</Link>
        </div>
      </section>
    </>
  )
}
