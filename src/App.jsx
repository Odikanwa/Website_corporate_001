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
import { DropdownContext } from './stateMgt/context'
import { useState } from 'react'

function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <BrowserRouter>
    <DropdownContext.Provider value={{dropdownOpen, setDropdownOpen}}>
    <div className='relative font-poppins lg:text-base overflow-x-clip'>
    <div className='h-screen w-full bg-[#09071f] relative z-0'>
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
    </DropdownContext.Provider>
    </BrowserRouter>
  )
}

export default App