import { BsFillClockFill, BsFillRocketTakeoffFill, BsFillSignpostFill } from "react-icons/bs";
import { FaRecycle, FaHandshake} from "react-icons/fa";
import RoundedButton from "./RoundedButton";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-[100vw] h-auto bg-[#F8F8FF] text-black px-[10vw] py-[5vh]">
      <h1 className="font-bold text-[30px] lg:text-[35px] pt-[5%] pb-[3%]">
        About Oreegi
      </h1>
      <div className="w-[100%] flex flex-col lg:flex-row content-between">
        <div className="basis-1/2 pr-[10%] pb-[4%] lg:pb-0">
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
          <p>
            Oreegi serves as a centralized destination that addresses a wide
            spectrum of technological requirements. From hardware and software
            solutions to technical support, and beyond, this hub becomes a
            versatile repository of resources tailored to meet the evolving
            demands of the digital age. This approach eliminates the need for
            individuals or businesses to navigate multiple sources, reducing
            complexity and saving valuable time and effort.
          </p>
          <h1 className="font-bold text-[20px] py-[2vh]">
            KEY BENEFITS &gt; &gt;
          </h1>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-row py-[1%]">
            <BsFillClockFill className="h-[70px] w-[70px] text-cyan-500 pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Time & Resource Efficiency:</em> Save
              valuable time and resources by accessing a diverse range of
              technology solutions without the need to search or negotiate with
              multiple vendors.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <FaRecycle className="h-[70px] w-[70px] text-cyan-500 pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Holistic Approach:</em> Achieve a
              comprehensive view of your technology landscape, fostering better
              decision-making, integration, and optimization.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <BsFillSignpostFill className="h-[70px] w-[70px] text-cyan-500 pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Expert Guidance:</em> Benefit from the
              expertise of professionals who can offer tailored recommendations,
              insights, and best practices across a spectrum of technology
              domains.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <BsFillRocketTakeoffFill className="h-[70px] w-[70px] text-cyan-500 pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Scalability & Adaptability:</em> As
              technology needs evolve, &quot;Oreegi&quot; can adapt and provide
              solutions that align with changing requirements.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <FaHandshake className="h-[70px] w-[70px] text-cyan-500 pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Collaborative Partnership:</em> Forge a
              collaborative partnership with technology experts who are invested
              in your success and growth..
            </p>
          </div>
          <RoundedButton>
            <Link to="/about">Learn more</Link>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default About;
