import { Link } from "react-router-dom";
import { surveillance_photo } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const Surveillance = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh] text-[14px] py-[3vh]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[10%] lg:py-[3%]">
        Surveillance <span className="text-[#14adb8]">Systems.</span>
      </h1>
      <div className="flex flex-col lg:flex-row content-between justify-center ">
        <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[5%] lg:py-0 flex text-center justify-center place-items-start">
          <img
            src={surveillance_photo}
            alt="network photo"
            height={450}
            width={550}
            className="object-contain rounded-[200px]"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] lg:pl-[8%]">
          <p>
            Step into a world where safety and security are paramount. Our
            surveillance systems offer state-of-the-art solutions designed to
            protect, monitor, and secure your premises with cutting-edge
            technology. From comprehensive video surveillance to intelligent
            analytics, our platform is your gateway to a safer, more secure
            environment. Whether you are a homeowner, business owner, or
            organization, our advanced surveillance systems redefine how you
            safeguard your assets and ensure peace of mind.
          </p>
          <Link to="surveillance" onClick={() => GoToTop()}>
            <RoundedButton>Learn more</RoundedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
