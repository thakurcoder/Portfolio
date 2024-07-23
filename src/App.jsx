import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HeroComponent from './components/HeroComponent'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
 

  return (
   <div className='font-serif text-neutral-200 antialiased selection:bg-cyan-50 selection:text-emerald-400'>
    <div className="fixed top-0 -z-10 h-screen w-screen">

    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">


    </div>

    </div>
    <Navbar />
    <Hero />
    <About />
    <Technologies />
    <Project />
    <Contact />
  
   </div>
  )
}

export default App
