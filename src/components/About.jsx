import RoundedButton from "./RoundedButton";
import { NavLink } from "react-router-dom";
import GoToTop from "./GoToTop";
import { about_oreegi } from "../assets";

const About = () => {
  return (
    <div className="w-[100vw] h-auto bg-[#F8F8FF] text-black px-[10vw] pt-[5vh] py-[10vh] text-[14px]">
      <h1 className="font-bold text-[20px] lg:text-[25px] pt-[5%] pb-[3%] ">
        About <span className="text-[#14adb8]">Us.</span>
      </h1>
      <div className="w-[100%] flex flex-col-reverse lg:flex-row content-between">
        <div className="basis-1/2 lg:pr-[10%] pb-[4%] lg:pb-0">
          <p className="pb-[2vh]">
            In today&apos;s dynamic and interconnected world, businesses and
            individuals alike rely heavily on technology to drive efficiency,
            innovation, and growth. Amidst this technological revolution,
            &quot;Oreegi&quot; emerges as a powerful solution to cater to
            diverse technological needs under a unified roof. This holistic
            approach redefines how organizations and individuals manage their
            technology requirements, offering a comprehensive and seamless
            experience.
          </p>

          <NavLink to="/about" onClick={() => GoToTop()}>
            <RoundedButton>Learn more</RoundedButton>
          </NavLink>
        </div>

        <div className="basis-1/2 pt-[3%] pb-[6%] lg:py-0 ">
          <img
            src={about_oreegi}
            alt="herosection image"
            className="h-[100%] w-[100%] object-cover rounded-tr-[40px] rounded-br-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
