import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { DropdownContext } from "../stateMgt/context"
import { useState } from "react"

const RootLayout = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  return (
    <div className="overflow-x-hidden">
    <DropdownContext.Provider value={{dropdownOpen, setDropdownOpen}}></DropdownContext.Provider>
    <header>
      <Navbar/>
    </header>
    
    <main>
      <Outlet/>
    </main>

    <footer>
      <Footer/>
    </footer>
    <DropdownContext.Provider/>
    </div>
  )
}

export default RootLayout