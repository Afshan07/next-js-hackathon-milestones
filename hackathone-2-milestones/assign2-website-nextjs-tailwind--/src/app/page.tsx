import React from 'react'
import Hero from './components/hero'
import About from './about/page'
import Services from './services/page'
import Contact from './contact/page'

const Home = () => {
  return (
    <div>
      
      <Hero />
      <About />
      <Services />
      <Contact />
      
    </div>
  )
}

export default Home;