import { Link } from "react-router-dom";
import { website_photo } from "../assets";
import RoundedButton from "./RoundedButton";

const Websites = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#2257bf] text-white px-[10vw] pb-[10vh] text-[15px] py-[3vh]">
      <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
        Custom Websites & Templates
      </h1>
      <div className="flex flex-col lg:flex-row content-between justify-center ">
        <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
          <img
            src={website_photo}
            alt="network photo"
            height={450}
            width={550}
            className="object-contain rounded-[200px]"
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
          <RoundedButton>
            <Link to="/websitedev">Learn more</Link>
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default Websites;
