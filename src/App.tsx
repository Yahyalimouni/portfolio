import './App.css'
import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Profiles from './components/sections/Profiles'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      {/* Glow Bull*/}
      <div className="glow-bull"></div>
      <a className='fixed right-5 top-1/2 -translate-y-1/2 z-100
                    bg-gradient-to-br from-pr-d from-50% to-pr
                    p-2 rounded-2xl rounded-br-none 
                    animate-little-bounce 
                    hover:scale-[1.1] duration-300 cursor-pointer
                    shadow-[0_0_10px_rgba(66,88,99,1)]
                    text-3xl text-pr-sml'
            aria-label='Contact Via WhatsApp'
            href="http://wa.me/34604131790"
      >
        <FaWhatsapp />
      </a>
      
      <Navbar/>

      <main>
        {/* Hero Section */}
        <Hero/>
        <Profiles/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </>
  )
}

export default App
