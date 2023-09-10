import { NavLink } from "react-router-dom";
import { surveillance_photo } from "../assets";
import {
  benefits_surveillance,
  benefits_surveillance_chooseUs,
} from "../constants";
import RoundedButton from "../components/RoundedButton";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_surveillance.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[25%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center border-[2px] border-white bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
        >
          <div className="text-cyan-500">{benefit.icon}</div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[14px] py-[2vh]">
              {benefit.title}
            </h1>
            <p className="text-[12px]">{benefit.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const BenefitCard_ChooseUs = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_surveillance_chooseUs.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[25%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center border-[2px] border-white bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
        >
          <div className="text-cyan-500">{benefit.icon}</div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[14px] py-[2vh]">
              {benefit.title}
            </h1>
            <p className="text-[12px]">{benefit.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Surveillance = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF]  text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh] bg-[#2257bf]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[3%]">
          Surveillance Systems
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center items-center">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={surveillance_photo}
              alt="network photo"
              height={380}
              width={430}
              className="object-contain rounded-[200px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <p className="font-medium text-[20px]">
              Step into a world of state-of-the-art surveillance solutions designed to
              protect, monitor, and secure your premises with cutting-edge
              technology.
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black">
        What&apos;s the Service About?
      </h1>

      <div className="place-content-center place-items-center justify-center border-b-[3px] bg-[url('../src/assets/bg3.jpg')] border-x-slate-100 rounded-[30px] bg-white text-black mx-[3vw] lg:mx-[20vw] py-[5vh] border-white border-[2px] drop-shadow-md shadow-md">
        <p className="px-[10vw] lg:px-[5vw] text-left border-l-[5px] border-l-cyan-500">
          Surveillance systems are sophisticated setups incorporating cameras,
          sensors, and data processing tools to observe and document activities
          in specific locations or on individuals. Employed in diverse settings
          such as security, law enforcement, and business operations,
          surveillance systems enhance safety, monitor assets, and aid in
          decision-making by providing real-time and recorded visual and audio
          information. They play a crucial role in deterring and investigating
          incidents, as well as in optimizing operational efficiency and safety
          measures.
        </p>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        What We Offer You
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-lg border-white rounded-[100px] ml-[0.8vw]">
        <BenefitCard />
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        Why Choose Us
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-lg border-white rounded-[100px] ml-[0.8vw]">
        <BenefitCard_ChooseUs />
      </div>

      <div className="flex items-center place-content-center pb-[5vw]">
        <NavLink to="/contact" className="place-self-center">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Surveillance;
