import { logo } from "../assets";
import RoundedButton from "../components/RoundedButton";
import BenefitCard from "../components/BenefitCard";
import { NavLink } from "react-router-dom";
import { styles } from "../styles";
import About_Component from "../components/About";

const About = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] text-white text-[14px] pb-[10vh]">
      <div className="h-auto px-[10vw] bg-[url(assets/about_oreegi.jpg)] pb-[10vh] pt-[10vh]">
        
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#10295B] opacity-70 text-white rounded-[50px]">
          
          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
            <img
              src={logo}
              alt="domains photo"
              height={420}
              width={450}
              className="object-contain rounded-[200px]"
            />
          </div>
            <p className="font-poppins hidden lg:block font-bold text-[35px] place-self-end">
              ...your one-stop IT hub.
            </p>
        </div>
      </div>

<div className="mb-[-5vh]"><About_Component/></div>
      

      <div className="w-[100%] h-auto flex flex-col lg:flex-col bg-[#F8F8FF] text-black pb-[10vh]">
        <div className=" ">
        <div className="pb-[4%] lg:pb-0">
        <h1 className={`font-bold text-[30px] text-center mt-0 mb-[5vh] lg:my-[5vh] px-[10vw] text-black`}>
            What We <span className="text-[#14adb8]">Do.</span>
          </h1>
          {/* <div className="place-content-center place-items-center justify-center bg-[url('../src/assets/bg1.jpg')] border-x-slate-100 rounded-[30px] bg-white py-[5vh] text-black mx-[3vw] lg:mx-[5vw] border-[2px] drop-shadow-md shadow-md"> */}
            <p className="px-[10vw] lg:px-[15vw] text-left">
              Oreegi serves as a centralized destination that addresses a wide
              spectrum of technological requirements. From hardware and software
              solutions to technical support, and beyond, this hub becomes a
              versatile repository of resources tailored to meet the evolving
              demands of the digital age. This approach eliminates the need for
              individuals or businesses to navigate multiple sources, reducing
              complexity and saving valuable time and effort.
            </p>
          {/* </div> */}

          <h1 className={`font-bold text-[30px] text-center my-[5vh] px-[10vw] text-black`}>
            What We <span className="text-[#14adb8]">Stand For.</span>
          </h1>
          </div>

          <div className="w-[90vw] lg:w-[85vw] flex flex-col lg:flex-row justify-center ml-[5vw] gap-[8%] pt-[5vh] bg-[url('../src/assets/bg1.jpg')] border-[3px] border-white drop-shadow-md shadow-lg rounded-[100px]">
            <div className="w-[80vw] lg:w-[35vw] flex flex-col py-[10vh] px-[3vw] bg-white border-[1px] justify-center place-items-center place-self-start box-shadow2 drop-shadow-lg shadow-lg rounded-[30px]">
              <h1 className="font-bold text-[20px]">
                Our <span className="text-[#14adb8]">Vision</span>
              </h1>
              <div className="w-[50%] bg-[#14adb8] h-[2px]"></div>
              <h1 className="place-self-center text-center pt-[6vh]">
                Our vision is to pioneer the future of IT and technology
                solutions by becoming the unrivaled one-stop partner for
                businesses worldwide.
              </h1>
              <div className="w-[5%] bg-[#14adb8] h-[2px] mt-10"></div>
            </div>

            <div className="w-[80vw] lg:w-[35vw] flex flex-col py-[10vh] px-[3vw] my-[5vh] bg-white border-[1px] justify-center place-items-center place-self-end box-shadow2 drop-shadow-lg shadow-lg rounded-[30px] ">
              <h1 className="font-bold text-[20px] ]">
                Our <span className="text-[#14adb8]">Mission</span>
              </h1>
              <div className="w-[50%] bg-[#14adb8] h-[2px]"></div>
              <h1 className="place-self-center text-center pt-[6vh]">
                Oreegi empowers businesses through comprehensive IT and
                technology solutions that enhance their operations, drive
                growth, and ensure technological excellence.{" "}
              </h1>
              <div className="w-[5%] bg-[#14adb8] h-[2px] mt-10"></div>
            </div>
          </div>

          <h1 className={`font-bold text-[30px] text-center mt-[10vh] px-[10vw] text-black mb-[-5vh]`}>
            What&apos;s in <span className="text-[#14adb8]">For You?</span>
          </h1>
        </div>
      </div>

      <div className="h-auto w-[98vw] text-black ml-[0.8vw]">
        <BenefitCard />
      </div>

      <div className="ml-[30%] lg:ml-[45%] mt-[5vw]">
        <NavLink to="/contact">
        <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
