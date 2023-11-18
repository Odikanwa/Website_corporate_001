import { Link } from "react-router-dom";
import { bg } from "../assets";
import RoundedButton from "./RoundedButton";
import GoToTop from "./GoToTop";

const HeroSection = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex content-center place-content-center justify-center">
      <img
        src={bg}
        alt="herosection image"
        className="h-[100%] w-[100%] object-cover opacity-50"
      />

      {/* <div className="hidden lg:flex m-0 absolute inset-0 top-[9%] left-[70%] text-center max-w-7xl items-start z-10">
        <Dropdown/>
        </div> */}
      <div
        className={`w-[100vw] h-auto m-0 absolute place-self-center left-[2%] text-center max-w-full lg:max-w-7xl flex flex-col justify-center items-center z-10`}
      >
        {/* <div className='bg-[rgba(17,14,51,0.5)] w-[40vw] px-5 py-5 rounded-lg text-white'> */}
        <div className="flex flex-col justify-center place-content-center content-center w-[80vw] lg:w-[100%] px-5 rounded-lg text-white">
          <h1 className="font-poppins font-bold text-[white] text-center text-[35px] lg:text-[45px] lg:leading-[50px] mt-2 contrast-100 -z-10">
            Your One-stop <span className="text-[#0ef]">IT Hub.</span>
          </h1>
          <h5 className="font-poppins w-[100%] font-medium text-[white] text-center text-[18px] lg:text-[20px] lg:leading-[25px] mt-[2vh] px-[5%] lg:px-[15%] animate-slideRight-animation delay-500 z-11">
            Create a single and reliable point for your business&apos;s technology purchases, deployment and support.
          </h5>
          <div className="place-self-center">
          <Link to="/contact" onClick={() => GoToTop()}>
            <RoundedButton>Talk to us</RoundedButton>
          </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
