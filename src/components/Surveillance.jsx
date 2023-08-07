import { Link } from "react-router-dom";
import { surveillance_photo } from "../assets";
import RoundedButton from "./RoundedButton";

const Surveillance = () => {
  return (
    <div className="h-auto lg:h-[80vh] w-[100vw] bg-[#2257bf] text-white px-[10vw] pb-[10vh]">
    <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">Surveillance Systems</h1>
    <div className="flex flex-col lg:flex-row content-between justify-center ">
    <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
      <img src={surveillance_photo} alt="network photo" height={450} width={550} className="object-contain rounded-[200px]"/>
    </div>
    <div className="w-[100%] lg:w-[50%] lg:pl-[12%]">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <RoundedButton><Link to='surveillance'>Learn more</Link></RoundedButton>
  </div>
  </div>
  </div>
  )
}

export default Surveillance