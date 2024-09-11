import React from 'react'
import Hero from "../components/Hero.jsx"
import About from '../components/About.jsx'
import JoinWhatsapp from '../components/Buttons/JoinWhatsapp.jsx';

const Homepage = () => {
  return (
    <>
        <Hero />
        <About />
        <JoinWhatsapp link1 = "https://www.youtube.com/watch?v=k85mRPqvMbE" link2="https://www.youtube.com/watch?v=astISOttCQ0" />
    </>
  )
}

export default Homepage