import { msp } from "../assets";

const Services = () => {
  return (
    <div className="h-auto lg:h-[30vh] w-[100vw] flex flex-row content-center justify-normal border-[3px]">
      {/* <div className="w-[100%] lg:w-[50%] h-auto flex flex-col content-end justify-center place-items-center lg:pr-[5%] pb-[3vh] bg-[#F8F8FF] shadow-md">
        <h1 className="font-bold py-[5px] text-black">Our Partners</h1>
        <img
          src={msp}
          alt="MSP logo"
          className="w-[250px] lg:w-[250px] h-[120px] lg:h-[130px] text-white object-contain text-center rounded-[60px] lg:rounded-[45px] border-[2px] shadow-md"
        />
      </div> */}

      <div className="flex flex-col h-[100%] w-[100vw] content-center justify-center place-items-center text-center text-[13px]  px-[10%] py-[5%] bg-[#F8F8FF] text-black border-dashed shadow-md">
        <h1 className="font-bold text-[15px] py-[5px] text-black]">
          Our Services
        </h1>
        <h1 className="text-[20px] lg:text-[22px]  py-[0.5vh] lg:pb-[2vh] font-poppins">
          Optimising Your Business with
        </h1>
        <h1 className="font-bold text-[23px] lg:text-[28px] pb-[0.5vh] lg:pb-[2vh] font-poppins">
          Tailored IT <span className="text-[#14adb8]">Solutions!</span>
        </h1>
        <p>
          Empowering businesses with comprehensive IT solutions, streamlining
          operations and boosting efficiency, all under one roof. Unlock the
          full potential of your business through our integrated IT solutions,
          driving optimization and success at every step.
        </p>
      </div>
    </div>
  );
};

export default Services;
