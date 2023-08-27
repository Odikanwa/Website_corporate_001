import { Link } from "react-router-dom";
import { hero } from "../assets";
import { RoundedButton } from "./RoundedButton";
// import Dropdown from "./Dropdown";
import GoToTop from "./GoToTop";

const HeroSection = () => {

  return (
    <div className="h-[100vh] w-[100vw] ">
        <img src={hero} alt="herosection image" className="h-[100%] w-[100%] object-cover"/>

        {/* <div className="hidden lg:flex m-0 absolute inset-0 top-[9%] left-[70%] text-center max-w-7xl items-start z-10">
        <Dropdown/>
        </div> */}
        <div
        className={`m-0 absolute top-[20%] lg:top-[28%] left-[2%] text-center max-w-full lg:max-w-7xl flex items-start z-10`}
      >

        {/* <div className='bg-[rgba(17,14,51,0.5)] w-[40vw] px-5 py-5 rounded-lg text-white'> */}
        <div className='flex flex-col justify-center content-center w-[80vw] lg:w-[40vw] px-5 py-5 rounded-lg text-white'>
          <h1 className="font-poppins font-bold text-[white] text-[30px] lg:text-[40px] lg:leading-[40px] text-left mt-2 contrast-100 -z-10">
          Your One-stop <span className='text-[#0ef]'>IT Hub.</span>
          </h1>
          <h5 className="font-poppins w-[50vw] lg:w-[40vw] text-[white] text-[16px] lg:leading-[20px]  lg:mt-6 text-left mt-[2vh] animate-slideRight-animation delay-500 z-11">
          In a world where bits and bytes shape business successes, we stand as your unwavering partner. Our mission is to empower you to achieve more, dream bigger, and seamlessly navigate the ever-evolving landscape of technology. 
          </h5>
          <Link to="/contact" onClick={() => GoToTop()}><RoundedButton>Contact us</RoundedButton></Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default HeroSection