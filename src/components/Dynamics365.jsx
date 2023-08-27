import { Link } from "react-router-dom";
import { microsoft_365 } from "../constants";
import { RoundedButton } from "./RoundedButton";
import GoToTop from "./GoToTop";
import DynamicsCard from "./DynamicsCard";

const Dynamics365 = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#F8F8FF] text-black px-[10vw] py-[3vh] text-[14px]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[5%] lg:py-[3%]">
        Dynamics 365
      </h1>
      <div className="lg:pr-[35%] pb-[4%] lg:pb-0">
        <p>
          Microsoft 365, a comprehensive suite of productivity tools and
          cloud-based services developed by Microsoft Corporation. It is designed
          to empower individuals, teams, and businesses to achieve their goals
          with enhanced efficiency and collaboration. Launched in April 2020,
          Microsoft 365 represents a transformative shift in how organizations
          approach their work, enabling seamless communication, streamlined
          workflows, and secure data management.
        </p>
      </div>
      <div className="h-auto w-[100vw]"><DynamicsCard/></div>
      
      
      <Link to="/microsoft365" onClick={() => GoToTop()}>
        <RoundedButton>Learn more</RoundedButton>
      </Link>
    </div>
  );
};

export default Dynamics365;
