import { Link } from "react-router-dom";
import { website_photo } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const WebsiteDev = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh] text-[14px] py-[3vh]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[10%] lg:py-[3%]">
        Custom Websites & Templates
      </h1>
      <div className="flex flex-col lg:flex-row content-between justify-center ">
        <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
          <img
            src={website_photo}
            alt="network photo"
            height={450}
            width={550}
            className="object-contain rounded-[200px] border-[2px] shadow-md"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] lg:pl-[8%]">
          <p className="mb-[2vh]">
            Let&apos;s walk you through a world of creativity, design, and
            seamless online experiences. We specialize in providing cutting-edge
            website templates that empower individuals, businesses, and
            organizations to create stunning, functional, and responsive
            websites without the need for extensive coding or design skills. Our
            diverse collection of templates caters to a wide range of industries
            and purposes, ensuring that your digital vision comes to life
            effortlessly.
          </p>
          <p>
            Whether you&apos;re a small business owner, a creative professional,
            or an entrepreneur, our templates offer a gateway to a captivating
            and immersive digital journey.
          </p>
            <Link to="/websitedev" onClick={() => GoToTop()}><RoundedButton>Learn more</RoundedButton></Link>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDev;
