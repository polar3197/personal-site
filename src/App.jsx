import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Gallery from './Gallery';
import Resume from './Resume';
import Projects from './Projects';


function App() {
  // Define menu items as an array of objects
  const menuItems = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'Projects', href: '/projects' },
    { id: 3, label: 'Gallery', href: '/gallery' },
    { id: 4, label: 'Resume', href: '/resume' },
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Site-wrapper">
          <div className="Sidebar">
            <nav className="Sidebar-nav">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="Sidebar-menu-item"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="Page-Content">
            {/* <div className="Header">
                <h3>Charlie Cooper</h3>
            </div>
            <div className="Page-Content-inner">
               */}
              {/* Routes render here inside the main content area */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            {/* </div> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App