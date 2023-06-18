import { hero } from "../assets";
import RoundedButton from "./RoundedButton";

const HeroSection = () => {
  return (
    <div className="h-[100vh] w-[100vw] ">
        <img src={hero} alt="herosection image" className="h-[100%] w-[100%] object-cover"/>

        <div
        className={`m-0 absolute inset-0 top-[28%] left-[6%] text-center max-w-7xl flex items-start z-10`}
      >

        {/* <div className='bg-[rgba(17,14,51,0.5)] w-[40vw] px-5 py-5 rounded-lg text-white'> */}
        <div className='flex flex-col justify-center content-center w-[40vw] px-5 py-5 rounded-lg text-white'>
          <h1 className="font-black text-[white] lg:text-[40px] sm:text-[35px] xs:text-[30px] text-[40px] lg:leading-[40px] text-left mt-2 animate-slideRight-animation delay-500 contrast-100">
          Focus on your <span className='text-[#0ef]'>core tasks.</span>
          </h1>
          <h5 className="font-black text-[white] lg:text-[20px] sm:text-[20px] xs:text-[20px] text-[20px] lg:leading-[20px] lg:mt-6 text-left mt-2 animate-slideRight-animation delay-500 z-11">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </h5>
          <RoundedButton/>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default HeroSection