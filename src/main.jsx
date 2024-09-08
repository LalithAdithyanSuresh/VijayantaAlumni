import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
  </StrictMode>,
)
