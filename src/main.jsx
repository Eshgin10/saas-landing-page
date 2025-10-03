import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Disable copy/cut/paste and context menu globally
window.addEventListener('copy', (e) => { e.preventDefault(); })
window.addEventListener('cut', (e) => { e.preventDefault(); })
window.addEventListener('paste', (e) => { e.preventDefault(); })
window.addEventListener('contextmenu', (e) => { e.preventDefault(); })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
