import { domains_photo } from "../assets";
import {
  benefits_domainhosting,
  benefits_domainhosting_ChooseUs,
} from "../constants";
import { NavLink } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";
import { styles } from "../styles";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_domainhosting.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[25%] flex flex-col text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
        >
          <div className="text-cyan-500 place-self-center">{benefit.icon}</div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[14px] text-center py-[2vh]">
              {benefit.title}
            </h1>
            <p className="text-[12px] text-center">{benefit.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const BenefitCard_ChooseUs = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_domainhosting_ChooseUs.map((benefit) => (
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

const DomainHosting = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] text-white text-[14px]">
      <div className="w-[100%] h-[35vh] bg-[url(assets/about_oreegi.jpg)] py-[5vh] flex flex-col ">
        <h1 className="w-[50%] place-self-center text-center font-bold text-[25px] lg:text-[30px] mt-[3%] py-[10%] lg:py-[2%]  bg-[#10295B] opacity-70 rounded-[50px]">
          Domain Name & Hosting
        </h1>
      </div>

      <div className="px-[10vw] bg-[#F8F8FF] text-black py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[5%] lg:py-[2%]">
          Domain Name <span className="text-[#14adb8]">& Hosting.</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:mr-[10%]">
            <p className="pb-[2vh] text-left">
              Domain hosting is the digital real estate where your website finds
              its home. It&apos;s akin to the plot of land where you build your
              online presence. This service provides the necessary space and
              infrastructure to store your website&apos;s files, making it
              accessible to users worldwide. With domain hosting, your site
              enjoys 24/7 availability, ensuring visitors can reach you at any
              time. It offers security measures like SSL certificates to
              safeguard data and boost trust. Additionally, domain hosting
              provides email services, enabling you to communicate
              professionally. It&apos;s the cornerstone of your online identity,
              ensuring your website runs smoothly and serves its purpose
              seamlessly.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] pb-5 lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={domains_photo}
              alt="network photo"
              height={450}
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

      <div className="ml-[30%] lg:ml-[45%] pb-[5vh]">
        <NavLink to="/contact">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default DomainHosting;
