import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import WorkIndex from './pages/WorkIndex'
import WorkProject from './pages/WorkProject'
import Learning from './pages/Learning'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="work" element={<WorkIndex />} />
        <Route path="work/:slug" element={<WorkProject />} />
        <Route path="learning" element={<Learning />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
