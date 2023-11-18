import { useContext, useEffect, useState, useRef } from "react"
import { services } from "../constants"
import { DropdownContext } from "../contexts/DropdownContext"
import { NavLink } from "react-router-dom";
import GoToTop from "./GoToTop";

const Dropdown = () => {

  let dropdownRef = useRef();
  const { dropdownOpen, setDropdownOpen } = useContext(DropdownContext);
  const [hidden, setHidden] = useState("")
  useEffect(() => {

    const handleDropdown = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDropdown);
    dropdownOpen ? setHidden("flex") : setHidden("hidden");

    return () => {
      document.removeEventListener("mousedown", handleDropdown);
    }
  }, [dropdownOpen, setDropdownOpen])

  
  return (
    <div ref={dropdownRef}>
        <ul className={`h-auto right-0 mr-6 w-[20vw] list-none hidden md:${hidden} flex-col py-[8px] text-xs text-center bg-white text-black rounded-2xl form-shadow fixed z-20`}>
            {services.map((service) => (
                <li key={service.id} className="py-[5px] cursor-pointer hover:text-[#0ef] hover:font-bold hover:underline hover:underline-offset-8">
                    <NavLink to={`/${service.id}`} onClick={() => GoToTop()}>{service.title}</NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dropdown