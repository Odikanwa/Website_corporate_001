import { dynamics } from "../assets";
import { benefits_dynamics365 } from "../constants";
import { NavLink } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";
import DynamicsCards from "../components/DynamicsCard";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_dynamics365.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[30vw] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 bg-white border-[1px] justify-center place-content-center drop-shadow-md shadow-md rounded-[20px]"
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

const Dynamics365 = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw]v bg-[#F8F8FF] text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh] bg-[#2257bf]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:pt-[5%] lg:pb-[5vh]">
          Dynamics 365
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="pb-[2vh] font-medium text-[18px]">
              Unlock the power of seamless digital transformation with
              Microsoft&apos; Dynamics 365 suite. Elevate your business to new
              heights with intelligent, cloud-based solutions for sales,
              customer service, marketing, finance, operations, and more.
            </p>
          </div>
          <div className=" bg-white w-[100%] lg:w-[50%] lg:ml-[5%] pt-[9%] lg:pt-[0px] pb-[10%] mb-[3vh] lg:mb-0 lg:pb-0 flex text-center justify-center place-items-center rounded-[500px]">
            <img
              src={dynamics}
              alt="domains photo"
              height={320}
              width={360}
              className="object-contain rounded-[200px] px-[5vw] lg:px-0"
            />
          </div>
        </div>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black">
        What&apos;s the Service About?
      </h1>

      <div className="place-content-center place-items-center justify-center bg-[url('../src/assets/bg3.jpg')] border-b-[3px] border-x-slate-100 rounded-[30px] bg-white text-black mx-[3vw] lg:mx-[20vw] py-[5vh] border-white border-[2px] drop-shadow-md shadow-md">
        <p className="px-[10vw] lg:px-[5vw] text-left border-l-[5px] border-l-cyan-500">
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

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        Why You Need It
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[#F4F8FD] bg-[url('../src/assets/bg3.jpg')]  border-[3px] drop-shadow-xl border-white rounded-[100px] ml-[0.8vw]">
        <BenefitCard />
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        What We Offer You
      </h1>

      <div className="h-auto w-[95%] ml-[1%] pt-[2vh] pb-[8vh] items-center place-self-center text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] border-white px-[2.5vw] drop-shadow-xl shadow-md rounded-[100px]">
        <DynamicsCards />
      </div>

      <div className="ml-[30%] lg:ml-[45%] pt-[5vh] pb-[10vh]">
        <NavLink to="/contact">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Dynamics365;
