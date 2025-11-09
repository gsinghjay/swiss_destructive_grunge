import { useParams, Link, Navigate } from 'react-router-dom'
import posts from '../data/posts.json'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article className="post">
      <header className="post-header">
        <h1 className="post-title glitch" data-text={post.title}>
          {post.title}
        </h1>
        <div className="featured-image torn halftone">
          <img src={post.featured_image} alt={post.title} />
        </div>
      </header>
      <div className="post-content">
        <div className="content-wrapper">
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('#')) {
              const level = (para.match(/^#+/) || ['#'])[0].length
              const text = para.replace(/^#+\s*/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              return level === 1
                ? <h2 key={i} dangerouslySetInnerHTML={{ __html: text }} />
                : <h3 key={i} dangerouslySetInnerHTML={{ __html: text }} />
            }
            return <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          })}
        </div>
      </div>
      <footer className="post-footer">
        <Link to="/blog" className="back-link">← BACK TO CHAOS</Link>
      </footer>
    </article>
  )
}
