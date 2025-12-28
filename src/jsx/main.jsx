import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import all CSS files from the css directory
import.meta.glob('../css/*.css', { eager: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

