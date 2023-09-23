import { NavLink } from "react-router-dom";
import { website_photo, web1, web2, webMobile } from "../assets";
import { benefits_website, benefits_website_chooseUs } from "../constants";
import RoundedButton from "../components/RoundedButton";
import { styles } from "../styles";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_website.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[100%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[2vh] gap-3 justify-center place-content-center border-[2px] border-white bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
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
      {benefits_website_chooseUs.map((benefit) => (
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

const WebsiteDev = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white text-[14px]">
      <div className="px-[10vw] py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Custom Websites & Templates
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={website_photo}
              alt="website photo"
              height={450}
              width={550}
              className="object-contain rounded-[200px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[8%]">
            <p className="font-medium text-[20px]">
              Let&apos;s walk you through a world of creativity, design, and
              seamless online experiences by creating stunning, functional, and
              responsive websites for you without the need for extensive coding or
              design skills. 
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto w-[100vw] flex flex-col justify-center bg-[#F8F8FF] text-black">
       
        <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
          Want a Custom Website?
        </h1>
        <div className="w-[95vw] lg:w-[75vw] flex justify-center ml-[2vw] lg:ml-0 px-[2vw] lg:px-0 place-self-center rounded-t-[40px] bg-red-500 drop-shadow-lg shadow-lg">
          <img
            src={window.innerWidth < 600 ? webMobile : web2}
            alt="Custom Website image"
            className="object-contain lg:object-cover w-[100vw] lg:w-[70vw] h-[70vh] lg:h-[70vh] border-[2px] rounded-t-[40px] bg-white drop-shadow-lg shadow-md"
          />
        </div>
        <div className="px-[10vw]">

        <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
          What We Offer You
        </h1>        

        <div className="flex flex-row justify-center place-content-center">
          <div className="h-auto basis-1/2 ml-[5vw] lg:ml-0 mr-[5vw] text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-lg border-white rounded-[100px]">
            <BenefitCard />
          </div>
          <div className={` ${window.innerWidth < 600 ? "hidden" : "basis-1/2  ml-[5vw]"} `}>
            <img
              src={web1}
              alt="website sample"
              className="h-full w-[40vw] object-contain rounded-[50px]"
            />
          </div>
        </div>

        <h1 className={`font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black ${styles.textGradient}`}>
          Why Choose Us?
        </h1>
        </div>

        <div className="h-auto w-[98vw] text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-lg border-white rounded-[100px] ml-[0.8vw]">
          <BenefitCard_ChooseUs />
        </div>

        <div className="flex items-center place-content-center pb-[5vw]">
          <NavLink to="/contact" className="place-self-center">
            <RoundedButton>Talk to us</RoundedButton>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDev;
