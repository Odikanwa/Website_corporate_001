import { dynamics } from "../assets";
import { benefits_dynamics365 } from "../constants";
import { NavLink } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";
import DynamicsCards from "../components/DynamicsCard";
// import { styles } from "../styles";

const BenefitCard = () => {
  return (
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[2vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_dynamics365.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[30vw] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 text-white border-[1px] justify-center place-content-center bg-[#10295B] drop-shadow-md shadow-md rounded-[20px]"
        >
          <div className="text-white">{benefit.icon}</div>
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

const Dynamics365 = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw]v bg-[#F8F8FF] text-white text-[14px]">
      <div className="w-[100%] h-[35vh] bg-[url(assets/about_oreegi.jpg)] py-[5vh] flex flex-col ">
        <h1 className="w-[50%] place-self-center text-center font-bold text-[25px] lg:text-[30px] mt-[3%] py-[10%] lg:py-[2%]  bg-[#10295B] opacity-70 rounded-[50px]">
          Dynamics Applications
        </h1>
      </div>
      
      <div className="px-[10vw] bg-[#F8F8FF] text-black py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[5%] lg:py-[2%]">
          Dynamics <span className="text-[#14adb8]">365.</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center ">
        <div className="w-[100%] lg:w-[50%] lg:mr-[10%]">
            <p className="pb-[2vh] text-left">
            Dynamics 365 is a comprehensive cloud-based platform developed by
          Microsoft, designed to streamline and optimize various aspects of
          business operations. It integrates a suite of interconnected
          applications and services, offering solutions for customer
          relationship management (CRM) and enterprise resource planning (ERP)
          needs. Dynamics 365 enables organizations to manage customer
          interactions, sales, marketing, and service efficiently through its
          CRM capabilities. Additionally, it supports the automation of
          financial, supply chain, and human resources processes with its ERP
          functionalities.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] pb-5 lg:py-0 flex text-center justify-center place-items-start">
            
            <img
              src={dynamics}
              alt="network photo"
              height={320}
              width={320}
              className="object-contain rounded-[200px] shadow-md"
            />
          </div>
        </div>
      </div>


    

      <h1 className={`font-bold text-[30px] text-center mt-0 my-[3vh] lg:my-[3vh] px-[10vw] text-black`}>
        What We <span className="text-[#14adb8]">Offer You.</span>
      </h1>

      <div className="h-auto w-[95%] ml-[1%] pt-[2vh] pb-[8vh] items-center place-self-center text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] border-white px-[2.5vw] drop-shadow-xl shadow-md rounded-[100px]">
        <DynamicsCards />
      </div>
      
      <h1 className={`font-bold text-[30px] text-center mt-[8vh] mb-[2vh] px-[10vw] text-black`}>
        Why You <span className="text-[#14adb8]">Need It.</span>
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[#F4F8FD] ml-[0.8vw]">
        <BenefitCard />
      </div>

      <div className="ml-[30%] lg:ml-[45%] pt-0 pb-[5vh]">
        <NavLink to="/contact">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Dynamics365;
