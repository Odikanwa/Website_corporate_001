import { microsoft_365 } from "../constants";
import { m365 } from "../assets";
import { benefits_microsoft365 } from "../constants";
import { NavLink } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";


const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[2vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_microsoft365.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[30%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center border-white bg-[#10295B] text-white box-border box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
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

const Microsoft365 = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#F8F8FF]  text-white text-[14px]">
      <div className="w-[100%] h-[35vh] bg-[url(assets/about_oreegi.jpg)] py-[5vh] flex flex-col ">
        <h1 className="w-[50%] place-self-center text-center font-bold text-[25px] lg:text-[30px] mt-[3%] py-[10%] lg:py-[2%]  bg-[#10295B] opacity-70 rounded-[50px]">
          Microsoft Applications
        </h1>
      </div>

      <div className="px-[10vw] bg-[#F8F8FF] text-black py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[5%] lg:py-[2%]">
          Microsoft <span className="text-[#14adb8]">365.</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center ">
        <div className="w-[100%] lg:w-[50%] lg:mr-[10%]">
            <p className="pb-[2vh] text-left">
            Microsoft 365, formerly known as Office 365, is a broad suite
          of cloud-based productivity and collaboration tools offered by
          Microsoft. It is designed to empower individuals, businesses, and
          organizations by providing a wide range of applications and services
          that enhance productivity, streamline communication, and facilitate
          teamwork. Microsoft 365 includes popular software applications such as
          Word, Excel, PowerPoint, and Outlook, which are used for word
          processing, spreadsheet management, presentation creation, and email
          communication. In addition to these core applications, Microsoft 365
          offers cloud storage through OneDrive, collaboration tool like Teams,
          and various other services for data security, business intelligence,
          and more.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] pb-5 lg:py-0 flex text-center justify-center place-items-start">
            
            <img
              src={m365}
              alt="network photo"
              height={320}
              width={320}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

     

      <h1 className={`font-bold text-[30px] text-center my-0 lg:my-[5vh] px-[10vw] text-black`}>
        What We <span className="text-[#14adb8]">Offer You.</span>
      </h1>

      <div className="h-auto w-[98vw] lg:ml-[0.8vw] flex bg-[#F8F8FF] text-black pt-[8vh] lg:pt-[2vw] pb-[3vh]">
        <div className="w-[90%] lg:w-[100%] flex flex-col lg:flex-row flex-wrap justify-center gap-[2vw] content-center">
          {microsoft_365.map((items) => (
            <div
              key={items.id}
              className="w-[85%] lg:w-[25%] px-7 ml-[10vw] lg:ml-0 py-5 mb-[40px] border-[2px] border-white bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
            >
              <h1 className="mb-[2%] font-medium text-[14px] text-center">
                {items.name}
              </h1>
              <div className="flex flex-row flex-wrap gap-1  justify-center">
                {items.apps.map((subItems) => (
                  <div key={subItems.id} className="flex flex-col">
                    <img
                      src={subItems.icon}
                      alt="Microsoft Image"
                      className="w-[50px] h-[60px] inline pr-[13px] object-contain"
                    />
                    <p className="text-[10px] inline">{subItems.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className={`font-bold text-[30px] text-center my-0 mb-[5vh] lg:my-[5vh] px-[10vw] text-black`}>
        Why You <span className="text-[#14adb8]">Need It.</span>
      </h1>

      <div className="h-auto w-[98vw] text-black ml-[0.8vw]">
        <BenefitCard />
      </div>

      <div className="flex items-center place-content-center pb-[5vh]">
        <NavLink to="/contact" className="place-self-center">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Microsoft365;
