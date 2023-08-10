import { logo } from "../assets";
import { BsFillClockFill, BsFillRocketTakeoffFill, BsFillSignpostFill } from "react-icons/bs";
import { FaRecycle, FaHandshake} from "react-icons/fa";

const About = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">
          About Oreegi
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
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

      <div className="w-[100%] h-auto flex flex-col lg:flex-row content-between bg-[#F8F8FF] text-black px-[10vw] py-[10vh]">
        <div className="basis-1/2 pr-[10%] pb-[4%] lg:pb-0">
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
          <div className="flex flex-row py-[1%]">
            <BsFillRocketTakeoffFill className="lg:h-[70px] h-[120px] lg:w-[70px] w-[120px] text-cyan-500 pr-[4vw] lg:pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Scalability & Adaptability:</em> As
              technology needs evolve, &quot;Oreegi&quot; can adapt and provide
              solutions that align with changing requirements.
            </p>
          </div>
          <div className="flex flex-row py-[1%]">
            <FaHandshake className="lg:h-[70px] h-[120px] lg:w-[70px] w-[120px] text-cyan-500 pr-[4vw] lg:pr-[1vw]" />
            <p className="pb-[1vh]">
              <em className="font-bold">Collaborative Partnership:</em> Forge a
              collaborative partnership with technology experts who are invested
              in your success and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About