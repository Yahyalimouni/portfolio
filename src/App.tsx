import './App.css'
import './index.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Profiles from './components/sections/Profiles'
import About from './components/sections/About'

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
        {/* <div className='w-full h-1 bg-gradient- rounded-full'></div> */}
        <About/>
      </main>
    </>
  )
}

export default App
