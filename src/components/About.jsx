import { BsFillClockFill, BsFillSignpostFill } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { RoundedButton } from "./RoundedButton";
import { NavLink } from "react-router-dom";
import GoToTop from "./GoToTop";

const About = () => {
  return (
    <div className="w-[100vw] h-auto bg-[#F8F8FF] text-black px-[10vw] pt-[5vh] py-[10vh] text-[14px]">
      <h1 className="font-bold text-[20px] lg:text-[25px] pt-[5%] pb-[3%]">
        About Oreegi
      </h1>
      <div className="w-[100%] flex flex-col lg:flex-row content-between">
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
          <h1 className="font-bold text-[16px] ">
            KEY BENEFITS &gt; &gt;
          </h1>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row py-[0.5%]">
            <BsFillClockFill className="lg:h-[70px] h-[120px] lg:w-[70px] w-[120px] text-cyan-500 pr-[4vw] lg:pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Time & Resource Efficiency:</em> Save
              valuable time and resources by accessing a diverse range of
              technology solutions without the need to search or negotiate with
              multiple vendors.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <FaRecycle className="lg:h-[70px] h-[120px] lg:w-[70px] w-[120px] text-cyan-500 pr-[4vw] lg:pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Holistic Approach:</em> Achieve a
              comprehensive view of your technology landscape, fostering better
              decision-making, integration, and optimization.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <BsFillSignpostFill className="lg:h-[70px] h-[120px] lg:w-[70px] w-[120px] text-cyan-500 pr-[4vw] lg:pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Expert Guidance:</em> Benefit from the
              expertise of professionals who can offer tailored recommendations,
              insights, and best practices across a spectrum of technology
              domains.
            </p>
          </div>
          <NavLink to="/about" onClick={() => GoToTop()}><RoundedButton>Learn more</RoundedButton></NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
