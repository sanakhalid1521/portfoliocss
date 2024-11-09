import React from 'react'
import Navbar from './componenets/navbar'
import Hero from './componenets/hero'
import Skill from './componenets/skill'
import About from './componenets/about'
import Service from './componenets/services'
import Footer from './componenets/footer'
import Contact from './componenets/contact'
import Projects from './componenets/projects'

function Home() {
  return (
    <div>

      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home