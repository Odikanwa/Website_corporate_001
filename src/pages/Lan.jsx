import { NavLink } from "react-router-dom";
import { network_photo } from "../assets";
import { benefits_lan, benefits_lan_chooseUS } from "../constants";
import RoundedButton from "../components/RoundedButton";
import { styles } from "../styles";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_lan.map((benefit) => (
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
      {benefits_lan_chooseUS.map((benefit) => (
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

const Lan = () => {
  return (
    <div className="h-auto lg:auto w-[100vw] bg-[#F8F8FF] text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] bg-[#2257bf] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Network Design & Implementation
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center  bg-[#2257bf] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="font-medium text-[20px]">
              Explore the realm of next-generation connectivity and network
              solutions with our specialized network design and implementation
              services. 
            </p>
          </div>

          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
            <img
              src={network_photo}
              alt="network photo"
              height={450}
              width={500}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

      <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
        What&apos;s the Service About?
      </h1>

      <div className="place-content-center place-items-center justify-center border-b-[3px] bg-[url('../src/assets/bg3.jpg')] border-x-slate-100 rounded-[30px] bg-white text-black mx-[3vw] lg:mx-[20vw] py-[5vh] border-white border-[2px] drop-shadow-md shadow-md">
        <p className="px-[10vw] lg:px-[5vw] text-left border-l-[5px] border-l-cyan-500">
          Network design and implementation is the cornerstone of modern
          connectivity. It&apos;s the art and science of crafting robust, efficient,
          and secure communication infrastructures. We create efficient, secure,
          and scalable communication infrastructures for businesses and
          organizations. This generally requires the meticulous planning,
          configuration, and deployment of hardware, software, and protocols to
          facilitate seamless data exchange. With a deep understanding of
          networking principles, we work to optimize network performance,
          ensuring high availability and minimal downtime.
        </p>
      </div>

      <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
        What We Offer You
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-lg border-white rounded-[100px] ml-[0.8vw]">
        <BenefitCard />
      </div>

      <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
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

export default Lan;
