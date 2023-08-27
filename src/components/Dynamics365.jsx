import { Link } from "react-router-dom";
import { RoundedButton } from "./RoundedButton";
import GoToTop from "./GoToTop";
import DynamicsCards from "./DynamicsCard";

const Dynamics365 = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#F8F8FF] text-black px-[10vw] py-[3vh] text-[14px]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[5%] lg:py-[3%]">
        Dynamics 365
      </h1>
      <div className="lg:pr-[35%] pb-[4%] lg:pb-0">
        <p>
          Microsoft Dynamics 365 is a broad suite of integrated business
          applications that combines customer relationship management (CRM) and
          enterprise resource planning (ERP) functionalities. It empowers
          organizations to streamline processes, enhance customer engagement,
          and make data-driven decisions across sales, marketing, customer
          service, finance, and other key business areas. Built on the Microsoft
          Cloud, Dynamics 365 offers scalability, customization, and advanced
          analytics for improving overall operational efficiency.
        </p>
      </div>
      <div className="h-auto w-[100vw] mr-[10vw]">
        <DynamicsCards />
      </div>

      <Link to="/microsoft365" onClick={() => GoToTop()}>
        <RoundedButton>Learn more</RoundedButton>
      </Link>
    </div>
  );
};

export default Dynamics365;
