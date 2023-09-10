import { NavLink } from "react-router-dom";
import { wifi2 } from "../assets";
import {
  benefits_managedWifi,
  benefits_managedWifi_chooseUs,
} from "../constants";
import RoundedButton from "../components/RoundedButton";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_managedWifi.map((benefit) => (
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
      {benefits_managedWifi_chooseUs.map((benefit) => (
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

const ManagedWifiPage = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] text-white text-[14px]">
      <div className="px-[10vw] pb-[5vh] pt-[8vh] bg-[#2257bf]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[7%] lg:py-[3%]">
          Managed Wifi
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center items-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="pb-[2vh] font-medium text-[20px]">
              Unlock Seamless Connectivity with Managed WiFi Solutions! Elevate
              your network experience with our expertly designed and
              meticulously maintained WiFi services.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center rounded-[500px]">
            <img
              src={wifi2}
              alt="domains photo"
              height={350}
              width={500}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black">
        What&apos;s the Service About?
      </h1>

      <div className="place-content-center place-items-center justify-center border-b-[3px] bg-[url('../src/assets/bg3.jpg')] border-x-slate-100 rounded-[30px] bg-white text-black mx-[3vw] lg:mx-[20vw] py-[5vh] border-white border-[2px] drop-shadow-md shadow-md">
        <p className="px-[10vw] lg:px-[5vw] text-left border-l-[5px] border-l-cyan-500">
          Oreegi takes responsibility for the setup, maintenance, and
          optimization of your wireless network. We offer businesses and
          individuals several benefits, such as enhanced security through
          regular updates and monitoring, improved performance with optimized
          configurations, and simplified troubleshooting with expert support.
          Managed Wi-Fi solutions can be customized to meet specific needs,
          ensuring seamless connectivity for users and devices. Overall, managed
          Wi-Fi eliminates the burden of network management, ensuring a
          reliable, efficient, and secure wireless experience.
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

export default ManagedWifiPage;
