import { logo } from "../assets";
import RoundedButton from "../components/RoundedButton";
import BenefitCard from "../components/BenefitCard";
import { NavLink } from "react-router-dom";
import { styles } from "../styles";

const About = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] text-white text-[14px] pb-[10vh]">
      <div className="px-[10vw] bg-[#2257bf] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          About Oreegi
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#2257bf] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] ">
            <p>
              In today&apos;s dynamic and interconnected world, businesses and
              individuals alike rely heavily on technology to drive efficiency,
              innovation, and growth. Amidst this technological revolution,
              &quot;Oreegi&quot; emerges as a powerful solution to cater to
              diverse technological needs under a unified roof. This holistic
              approach redefines how organizations and individuals manage their
              technology requirements, offering a comprehensive and seamless
              experience.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
            <img
              src={logo}
              alt="domains photo"
              height={420}
              width={450}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="w-[100%] h-auto flex flex-col lg:flex-col bg-[#F8F8FF] text-black pb-[10vh]">
        <div className="px-[10vw] ">
        <div className="pb-[4%] lg:pb-0">
        <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
            What We Do
          </h1>
          <div className="place-content-center place-items-center justify-center bg-[url('../src/assets/bg3.jpg')] border-x-slate-100 rounded-[30px] bg-white py-[5vh] text-black mx-[3vw] lg:mx-[5vw] border-[2px] drop-shadow-md shadow-md">
            <p className="px-[10vw] lg:px-[15vw] text-left border-l-[5px] border-l-cyan-500">
              Oreegi serves as a centralized destination that addresses a wide
              spectrum of technological requirements. From hardware and software
              solutions to technical support, and beyond, this hub becomes a
              versatile repository of resources tailored to meet the evolving
              demands of the digital age. This approach eliminates the need for
              individuals or businesses to navigate multiple sources, reducing
              complexity and saving valuable time and effort.
            </p>
          </div>

          <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
            What We Stand For
          </h1>
          </div>

          <div className="w-[85vw] flex flex-col lg:flex-row justify-center gap-[8%] py-[5vh] bg-[url('../src/assets/bg3.jpg')] border-[3px] border-white drop-shadow-md shadow-lg rounded-[100px]">
            <div className="w-[80vw] lg:w-[35vw] flex flex-col py-[10vh] px-[3vw] bg-white border-[1px] justify-center place-items-center place-self-start box-shadow2 drop-shadow-lg shadow-lg rounded-[30px] ">
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

          <h1 className={`font-medium text-[30px] text-center mt-[15vh] mb-[10vh] px-[10vw] text-black ${styles.textGradient}`}>
            What&apos;s in For You?
          </h1>
        </div>
      </div>

      <div className="h-auto w-[98vw] text-black bg-[#F4F8FD] bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-md border-white rounded-[100px] ml-[0.8vw]">
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
