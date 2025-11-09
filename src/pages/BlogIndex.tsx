import { Link } from 'react-router-dom'
import posts from '../data/posts.json'

export default function BlogIndex() {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1 className="page-title glitch" data-text="BLOG" style={{ transform: 'rotate(-5deg)' }}>
          BLOG
        </h1>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card distressed halftone" style={{ transform: `rotate(${post.rotation}deg)` }}>
            <div className="card-image">
              <img src={post.featured_image} alt={post.title} />
            </div>
            <div className="card-content">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="card-link">READ →</Link>
            </div>
            <div className="card-noise"></div>
          </article>
        ))}
      </div>
    </div>
  )
}
