import { StrictMode } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Basic from "./layouts/Basic.jsx";
import HomePage from "./pages/Homepage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignUpPage from "./pages/SignUpPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import Connect from "./pages/Connect.jsx"
import JoinWhatsapp from "./components/Buttons/JoinWhatsapp.jsx";

const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<Basic />}>
      <Route index element={<HomePage />} />
      <Route path='/connect' element={ <Connect /> } /> 
      <Route path='/signup' element={ <SignUpPage /> } /> 
      <Route path="/events" element={<EventsPage />} />
    </Route>
  ) 
)

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="391503520977-j03sl4e4qvbpsifhaagmmq435urc0mb7.apps.googleusercontent.com">
    <StrictMode>      
      <RouterProvider router={router} />
    </StrictMode>
  </GoogleOAuthProvider>
);
