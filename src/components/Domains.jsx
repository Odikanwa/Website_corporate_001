import { Link } from "react-router-dom";
import { domains_photo } from "../assets";
import RoundedButton from "./RoundedButton";

const Domains = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh] text-[15px] py-[3vh]">
      <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
        Domain Name & Hosting
      </h1>
      <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#F8F8FF] text-black">
        <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
          <p className="mb-[2vh]">
            Welcome to the world of seamless digital presence and reliable
            online infrastructure. We are a leading provider of domain name and
            hosting solutions, offering businesses, individuals, and
            organizations the tools they need to establish a strong online
            identity and maintain a robust web presence. Our comprehensive range
            of services ensures that your digital journey is smooth, secure, and
            optimized for success.
          </p>
          <p>
            We are committed to offering user-friendly, innovative, and
            value-driven solutions to help our clients thrive in the digital
            age.
          </p>
          <RoundedButton>
            <Link to="/domainhosting">Learn more</Link>
          </RoundedButton>
        </div>
        <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
          <img
            src={domains_photo}
            alt="domains photo"
            height={350}
            width={450}
            className="object-contain rounded-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Domains;
