import { Link } from "react-router-dom";
import { wifi } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const ManagedWifi = () => {
  return (
    <div className="h-auto w-[100vw] bg-[#10295B] text-white px-[10vw] pb-[10vh] text-[14px] py-[2vh]">
      <h1 className="font-bold text-[20px] lg:text-[25px] py-[5%] lg:py-[3%]">
        Managed Wifi
      </h1>
      <div className="flex flex-col-reverse lg:flex-row content-between justify-center text-white">
        <div className="w-[100%] lg:w-[50%] lg:pr-[8%]">
          <p>
            Unlock Seamless Connectivity with Managed WiFi Solutions! Elevate
            your network experience with our expertly designed and meticulously
            maintained WiFi services. Say goodbye to dead zones and slow
            connections, and hello to hassle-free, lightning-fast internet. Let
            us handle the tech, so you can focus on what you do best. Stay
            connected, stay productive, stay ahead with Managed WiFi!
          </p>
          <p>
          Empower your business with reliable, scalable, and hassle-free Managed WiFi today. 
          </p>

          <Link to="/managedwifi" onClick={() => GoToTop()}>
            <RoundedButton>Learn more</RoundedButton>
          </Link>
        </div>
        <div className="w-[100%] lg:w-[50%] lg:ml-[8%] pr-[1%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
          <img
            src={wifi}
            alt="network photo"
            height={350}
            width={450}
            className="object-contain rounded-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagedWifi;
