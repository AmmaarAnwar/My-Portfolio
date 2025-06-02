import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Analytics />
      <Footer />
    </>
  );
}

export default App