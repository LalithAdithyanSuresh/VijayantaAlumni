import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com'>
    <StrictMode>
      <Navbar></Navbar>
    </StrictMode>
  </GoogleOAuthProvider>
)
