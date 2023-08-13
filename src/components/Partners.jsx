import { msp } from "../assets";

const Partners = () => {
  return (
    <div className="h-auto lg:h-[30vh] w-[100vw] flex flex-row content-center justify-normal">
      <div className="w-[100%] lg:w-[50%] h-auto flex flex-col content-end justify-center place-items-center lg:pr-[5%] pb-[3vh] bg-[#F8F8FF] shadow-md">
        <h1 className="font-bold py-[5px] text-black">Our Partners</h1>
        <img
          src={msp}
          alt="MSP logo"
          className="w-[250px] lg:w-[250px] h-[120px] lg:h-[130px] text-white object-contain text-center rounded-[60px] lg:rounded-[45px] border-[2px] shadow-md"
        />
      </div>

      <div className="hidden lg:flex h-[100%] w-[50vw] content-center justify-center place-items-center text-center text-[13px] pl-[5%] pr-[15%] py-[5%] bg-[#F8F8FF] text-black border-dashed border-black shadow-md">
        <p>
          Partnering with Microsoft opens the doors to a world of innovation,
          collaboration, and growth. As a global technology leader, Microsoft
          offers diverse opportunities for organizations to leverage its
          expertise, platforms, and resources to drive mutual success. 
        </p>
      </div>
    </div>
  );
};

export default Partners;
