import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import Gallery from './Gallery';
import Resume from './Resume';
import Projects from './Projects';
import Books from './Books';
import Blog from './Blog';
import BlogPostDetail from './BlogPostDetail';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Routes with sidebar */}
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          {/* <Route path="/projects" element={
            <Layout>
              <Projects />
            </Layout>
          } /> */}
          <Route path="/books" element={
            <Layout>
              <Books />
            </Layout>
          } />
          <Route path="/resume" element={
            <Layout>
              <Resume />
            </Layout>
          } />
          
          {/* Routes without sidebar */}
          {/* <Route path="/blog" element={
            <Layout>
              <Blog />
            </Layout>
          } />
          <Route path="/blog/:slug" element={
            <Layout showSidebar={false}>
              <BlogPostDetail />
            </Layout>
          } /> */}
          {/* <Route path="/gallery" element={
            <Layout showSidebar={false}>
              <Gallery />
            </Layout>
          } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App