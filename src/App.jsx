// import { useState } from 'react'
// import './App.css'
// import Hero from './components/Hero'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import WhyOreegi from './components/WhyOreegi'
// import About from './components/About'
import Partners from './components/Partners'
import Microsoft from './components/Microsoft'
import Domains from './components/Domains'
import Websites from './components/WebsiteDev'
import Networking from './components/Networking'
import Surveillance from './components/Surveillance'
import Hardware from './components/Hardware'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <div className='overflow-x-hidden font-poppins'>
    <div className='h-screen w-full bg-[#09071f] relative z-0 overflow-x-hidden '>
      <Navbar/>
    <HeroSection/>
    </div>
    {/* <About/> */}
    <Partners/>
    <WhyOreegi/>
    <Microsoft/>
    <Domains/>
    <Websites/>
    <Networking/>
    <Surveillance/>
    <Hardware/>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App