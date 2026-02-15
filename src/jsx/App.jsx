import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Resume from './Resume';
import Projects from './Projects';
import Books from './Books';
import Blog from './Blog';
import BlogPostDetail from './BlogPostDetail';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
        <Routes>
          {/* Routes with sidebar */}
          <Route path="/" element={
            <div className="Page">
              <Layout>
                <Home />
              </Layout>
            </div>
          } />
          <Route path="/projects" element={
            <div className="Page">
              <Layout>
                <Projects />
              </Layout>
            </div>
          } />
          <Route path="/books" element={
            <div className="Page">
              <Layout>
                <Books />
              </Layout>
            </div>
          } />
          <Route path="/resume" element={
            <div className="Page">
              <Layout>
                <Resume />
              </Layout>
            </div>
          } />
          
          {/* Routes without sidebar */}
          <Route path="/blog" element={
            <div className="Page">
              <Layout>
                <Blog />
              </Layout>
            </div>
          } />
          <Route path="/blog/:slug" element={
            <div className="Post-wrapper">
            <Layout showSidebar={false}>
              <BlogPostDetail />
            </Layout>
            </div>
          } />
          <Route path="/gallery" element={
            <div className="Gallery-page">
              <Gallery />
            </div>
          } />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  )
}

export default App
