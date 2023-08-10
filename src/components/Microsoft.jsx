import { Link } from "react-router-dom";
import { microsoft_365 } from "../constants";
import RoundedButton from "./RoundedButton";
const Microsoft = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#2257bf] text-white px-[10vw] pb-[5vh]">
      <h1 className="font-bold text-[25px] lg:text-[30px] text-center pt-[3vh] lg:text-right text-white">
        Our Services...
      </h1>
      <h1 className="font-bold text-[30px] lg:text-[35px] py-[4%]">
        Microsoft 365
      </h1>
      <div className="lg:pr-[35%] pb-[4%] lg:pb-0">
        <p>
          Microsoft 365, a comprehensive suite of productivity tools and
          cloud-based services developed by Microsoft Corporation, is designed
          to empower individuals, teams, and businesses to achieve their goals
          with enhanced efficiency and collaboration. Launched in April 2020,
          Microsoft 365 represents a transformative shift in how organizations
          approach their work, enabling seamless communication, streamlined
          workflows, and secure data management.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap content-between w-[100%] mt-[3vw]">
        {microsoft_365.map((items) => (
          <div key={items.id} className="basis-1/3 px-7 mb-[45px]">
            <h1 className="mb-[5px]">{items.name}</h1>
            <div>
              {items.apps.map((subItems) => (
                <>
                  <img
                    key={subItems.id}
                    src={subItems.icon}
                    alt="Microsoft Word Image"
                    className="w-[70px] h-[70px] inline pr-[13px] object-contain"
                  />
                  {/* <p className="text-sm">{subItems.title}</p> */}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <RoundedButton>
        <Link to="/microsoft365">Learn more</Link>
      </RoundedButton>
    </div>
  );
};

export default Microsoft;
