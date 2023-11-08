import { NavLink } from "react-router-dom";
import { surveillance_photo } from "../assets";
import {
  benefits_surveillance,
  benefits_surveillance_chooseUs,
} from "../constants";
import RoundedButton from "../components/RoundedButton";
// import { styles } from "../styles";

const BenefitCard = () => {
  return (
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] mr-[5vw] place-self-center justify-center place-items-center items-center">
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
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] mr-[5vw] place-self-center justify-center place-items-center box-border items-center">
    {benefits_surveillance_chooseUs.map((benefit) => (
      <div
        key={benefit.id}
        className="w-[80vw] lg:w-[25%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center text-white bg-[#10295B] box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
      >
        <div className="text-white">{benefit.icon}</div>
        <div className="flex flex-col">
          <h1 className="font-medium text-[14px] py-[2vh]">
            {benefit.title}
          </h1>
          <p className="text-[12px] ">{benefit.desc}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

const Surveillance = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF]  text-white text-[14px]">
      
      <div className="w-[100%] h-[35vh] bg-[url(assets/about_oreegi.jpg)] py-[5vh] flex flex-col ">
        <h1 className="w-[50%] place-self-center text-center font-bold text-[25px] lg:text-[30px] mt-[3%] py-[10%] lg:py-[2%]  bg-[#10295B] opacity-70 rounded-[50px]">
          Surveillance Systems
        </h1>
      </div>

      <div className="px-[10vw] bg-[#F8F8FF] text-black py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[5%] lg:py-[2%]">
          Surveillance <span className="text-[#14adb8]">Systems.</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:mr-[10%]">
            <p className="pb-[2vh] text-left">
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
          <div className="w-[100%] lg:w-[50%] pb-5 lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={surveillance_photo}
              alt="network photo"
              height={400}
              width={400}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

      <h1
        className={`font-bold text-[30px] text-center mt-0 mb-[5vh] lg:my-[5vh] px-[10vw] text-black`}
      >
        What We <span className="text-[#14adb8]">Offer You.</span>
      </h1>

      <div className="h-auto w-[98vw] text-black ml-[0.8vw]">
        <BenefitCard />
      </div>

      <h1
        className={`font-bold text-[30px] text-center mt-[8vh] mb-[5vh] px-[10vw] text-black`}
      >
        Why <span className="text-[#14adb8]">Choose Us.</span>
      </h1>

      <div className="h-auto w-[98vw] text-black ml-[0.8vw]">
        <BenefitCard_ChooseUs />
      </div>

      <div className="flex items-center place-content-center pb-[5vh]">
        <NavLink to="/contact" className="place-self-center">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Surveillance;
