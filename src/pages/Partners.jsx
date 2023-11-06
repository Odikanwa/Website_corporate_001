import CurrentPartners from "../components/Partners";
import { capsl, pau } from "../assets";

const Partners = () => {
  return (
    <div className="h-auto lg:auto w-[100vw]  text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh] bg-[url(assets/about_oreegi.jpg)]">
        <h1 className="text-center font-bold text-[25px] lg:text-[30px] py-[5%] lg:py-[2%] bg-[#10295B] opacity-70 rounded-[50px]">
          Notable Partners & Clientelle
        </h1>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black pt-[5vh]">
        <h1
          className={`font-bold text-[30px] mt-0 mb-[5vh] lg:my-[5vh] text-black text-center`}
        >
          Who We <span className="text-[#14adb8]">Work With.</span>
        </h1>
        <div className="w-[100vw] border-t-[2px] drop-shadow-lg">
          <CurrentPartners />
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black pt-[5vh] pb-[10vh]">
        <div className="mt-0 mb-[5vh] lg:my-[5vh]">
        <h1
          className={`font-bold text-[30px] text-center px-[10vw] lg:px-0 text-black`}
        >
          Who We &apos;ve <span className="text-[#14adb8]"> Worked For.</span>
        </h1>
        <p className="text-center">A few of the organisations who trusts our services.</p>
        </div>

          <div className="w-[100%] lg:w-[100%] h-auto flex flex-row content-end justify-center place-items-center gap-10 pb-[3vh] py-[2vh] lg:py-[5vh] bg-[#F8F8FF]">
            
            <img
              src={pau}
              alt="MSP logo"
              className="w-[150px] lg:w-[250px] h-[100px] lg:h-[130px] text-white object-contain text-center rounded-[60px] lg:rounded-[45px] border-[2px] shadow-md"
            />
            <img
              src={capsl}
              alt="MSP logo"
              className="w-[150px] lg:w-[250px] h-[100px] lg:h-[130px] text-white object-contain text-center rounded-[60px] lg:rounded-[45px] border-[2px] shadow-md"
            />
          </div>
        </div>
      </div>
  );
};

export default Partners;
