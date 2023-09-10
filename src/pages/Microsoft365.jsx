import { microsoft_365 } from "../constants";
import { m365 } from "../assets";
import { benefits_microsoft365 } from "../constants";
import { NavLink } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_microsoft365.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[30%] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 justify-center place-content-center border-[2px] border-white bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
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

const Microsoft365 = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#F8F8FF]  text-white text-[14px]">
      <div className="px-[10vw] bg-[#2257bf] py-[5vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Microsoft 365
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={m365}
              alt="network photo"
              height={280}
              width={280}
              className="object-contain rounded-[200px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[8%] lg:mr-[10%]">
            <p className="pb-[2vh] font-medium text-[20px] text-left pt-[6%]">
              Empower your business to achieve more with enhanced efficiency and collaboration - enabling seamless
              communication, streamlined workflows, and secure data management.
            </p>
          </div>
        </div>
      </div>

      
      <h1 className="font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black">
        What&apos;s the Service About?
      </h1>

      <div className="place-content-center place-items-center justify-center border-b-[3px] bg-[url('../src/assets/bg3.jpg')] border-x-slate-100 rounded-[30px] bg-white text-black mx-[3vw] lg:mx-[20vw] py-[5vh] border-white border-[2px] drop-shadow-md shadow-md">
        <p className="px-[10vw] lg:px-[5vw] text-left border-l-[5px] border-l-cyan-500">
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

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        Why You Need It
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-lg border-white rounded-[100px] ml-[0.8vw]">
        <BenefitCard />
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        What We Offer You
      </h1>

      <div className="h-auto w-[98vw] lg:ml-[0.8vw] flex bg-[#F8F8FF] text-black pt-[8vh] lg:pt-[5vw] pb-[3vh] bg-[url('../src/assets/bg3.jpg')] border-[3px] border-white drop-shadow-xl rounded-[100px]">
        <div className="w-[90%] lg:w-[100%] flex flex-col lg:flex-row flex-wrap justify-center gap-[2vw] content-center">
          {microsoft_365.map((items) => (
            <div
              key={items.id}
              className="w-[85%] lg:w-[25%] px-7 ml-[10vw] lg:ml-0 py-5 mb-[40px] border-[2px] border-white bg-white box-content box-shadow2 drop-shadow-lg  shadow-xl rounded-[20px]"
            >
              <h1 className="mb-[7%] font-medium text-[14px] text-center">
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

      <div className="flex items-center place-content-center pb-[5vw]">
        <NavLink to="/contact" className="place-self-center">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default Microsoft365;
