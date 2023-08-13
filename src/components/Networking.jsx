import { Link } from "react-router-dom";
import { network_photo } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const Networking = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh] text-[14px] py-[2vh]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[5%] lg:py-[3%]">
        Network Design & Implementation
      </h1>
      <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#F8F8FF] text-black">
        <div className="w-[100%] lg:w-[50%] lg:pr-[8%]">
          <p>
            Explore the realm of next-generation connectivity and network
            solutions with our specialized network design and implementation
            services. Our platform is your gateway to unlocking the power of
            seamless communication, robust infrastructure, and optimized network
            performance. Whether you are a business seeking to enhance
            operational efficiency or an organization striving for digital
            transformation, our expertise empowers you to create, implement, and
            manage networks that drive success.
          </p>

          <Link to="/lan" onClick={() => GoToTop()}>
            <RoundedButton>Learn more</RoundedButton>
          </Link>
        </div>
        <div className="w-[100%] lg:w-[50%] lg:ml-[5%] pr-[3%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
          <img
            src={network_photo}
            alt="network photo"
            height={450}
            width={550}
            className="object-contain rounded-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Networking;
