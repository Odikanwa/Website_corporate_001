import { Link } from "react-router-dom";
import { network_photo } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const Networking = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh] text-[15px] py-[2vh]">
      <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
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
        <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
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
