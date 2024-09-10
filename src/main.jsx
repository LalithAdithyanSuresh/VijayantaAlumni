import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Basic from './layouts/Basic.jsx';
import Navbar from './components/Navbar.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google"

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='391503520977-j03sl4e4qvbpsifhaagmmq435urc0mb7.apps.googleusercontent.com'>
    <StrictMode>
      <Basic />
    </StrictMode>
  </GoogleOAuthProvider> 
)
