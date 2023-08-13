import { useContext, useEffect, useState } from "react"
import { services } from "../constants"
import { DropdownContext } from "../stateMgt/context"
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  const { dropdownOpen } = useContext(DropdownContext);
  const [hidden, setHidden] = useState("")
  useEffect(() => {
    dropdownOpen ? setHidden("flex") : setHidden("hidden");
  }, [dropdownOpen])
  
  return (
    <div>
        <ul className={`h-auto right-0 mr-6 w-[20vw] list-none hidden lg:${hidden} flex-col py-[8px] text-xs text-center bg-white text-black rounded-2xl form-shadow fixed z-20`}>
            {services.map((service) => (
                <li key={service.id} className="py-[5px] cursor-pointer hover:text-[#0ef] hover:font-bold hover:underline hover:underline-offset-8">
                    <NavLink to={`/${service.id}`}>{service.title}</NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dropdown