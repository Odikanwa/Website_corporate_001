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
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw]  mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_website_chooseUs.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[25%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center text-white bg-[#10295B] box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
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

const WebsiteDev = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white text-[14px]">
      <div className="w-[100%] h-[35vh] bg-[url(assets/about_oreegi.jpg)] py-[5vh] flex flex-col ">
        <h1 className="w-[50%] place-self-center text-center font-bold text-[25px] lg:text-[30px] mt-[3%] py-[10%] lg:py-[2%]  bg-[#10295B] opacity-70 rounded-[50px]">
        Custom Websites & Templates
        </h1>
      </div>

      <div className="px-[10vw] bg-[#F8F8FF] text-black py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[5%] lg:py-[2%]">
          Custom Sites <span className="text-[#14adb8]">& Templates.</span>
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center ">
        <div className="w-[100%] lg:w-[50%] lg:mr-[10%]">
            <p className="pb-[2vh] text-left">
            Let&apos;s walk you through a world of creativity, design, and
              seamless online experiences by creating stunning, functional, and
              responsive websites for you without the need for extensive coding or
              design skills. <br/>
              <br/>Tell your unique story unapologetically through your website, reinforce your
              brand effortlessy and leave your visitors with a net positive experiance always.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] lg:py-0 flex text-center justify-center place-items-start">
            
            <img
              src={website_photo}
              alt="network photo"
              height={450}
              width={500}
              className="object-contain rounded-r-[200px] shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="h-auto w-[100vw] flex flex-col justify-center bg-[#F8F8FF] text-black">
       
      <h1 className={`font-bold text-[30px] text-center my-[5vh] px-[10vw] text-black`}>
        Want a Custom <span className="text-[#14adb8]">Website?</span>
      </h1>
        <div className="w-[95vw] lg:w-[75vw] flex justify-center ml-[2vw] lg:ml-0 px-[2vw] lg:px-0 place-self-center rounded-t-[40px] bg-red-500 drop-shadow-lg shadow-lg">
          <img
            src={window.innerWidth < 600 ? webMobile : web2}
            alt="Custom Website image"
            className="object-contain lg:object-cover w-[100vw] lg:w-[70vw] h-[70vh] lg:h-[70vh] border-[2px] rounded-t-[40px] bg-white drop-shadow-lg shadow-md"
          />
        </div>
        <div className="px-[10vw]">

        <h1 className={`font-bold text-[30px] text-center mt-[10vh] mb-[5vh] px-[10vw] text-black`}>
        What we <span className="text-[#14adb8]">Offer You.</span>
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

        <h1 className={`font-bold text-[30px] text-center mt-[10vh] mb-[5vh] px-[10vw] text-black`}>
        Why <span className="text-[#14adb8]">Choose Us?</span>
      </h1>
        </div>

        <div className="h-auto w-[98vw] text-black ml-[0.8vw]">
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
