import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav className="main-nav">
        <div className="nav-chaos">
          <Link to="/" className="nav-link" style={{ transform: 'rotate(-3deg)' }}>HOME</Link>
          <Link to="/blog" className="nav-link" style={{ transform: 'rotate(2deg)' }}>BLOG</Link>
          <Link to="/work" className="nav-link" style={{ transform: 'rotate(-1deg)' }}>WORK</Link>
          <Link to="/learning" className="nav-link nav-highlight" style={{ transform: 'rotate(4deg)' }}>LEARNING</Link>
          <Link to="/about" className="nav-link" style={{ transform: 'rotate(3deg)' }}>ABOUT</Link>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <p style={{ transform: 'rotate(-2deg)' }}>NO GRID. NO RULES. NO PERFECTION.</p>
          <p style={{ transform: 'rotate(1deg)' }}>© 2025 DECONSTRUCTED</p>
        </div>
      </footer>
    </>
  )
}
