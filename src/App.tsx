import './App.css'
import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Profiles from './components/sections/Profiles'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

function App() {
  return (
    <>
      {/* Glow Bull*/}
      <div className="glow-bull"></div>
      
      <Navbar/>

      <main>
        {/* Hero Section */}
        <Hero/>
        <Profiles/>
        <About/>
        <Projects/>
        <Skills/>
      </main>
    </>
  )
}

export default App
