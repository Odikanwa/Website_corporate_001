import { msp } from "../assets";

const Partners = () => {
  return (
    <div className="h-auto lg:auto w-[100vw] bg-[#2257bf] text-white">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
      <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">Microsoft (CSP)</h1>
      <div className="flex flex-col-reverse lg:flex-row content-between justify-center  bg-[#2257bf] text-white">
      <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div> 

    <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
      <img src={msp} alt="network photo" height={350} width={420} className="object-contain rounded-[200px]"/>
    </div>
    </div>
    </div>

    <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] py-[10vh]">
    <p className="w-[100%] lg:w-[60%] pb-[3vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className="w-[100%] lg:w-[60%] pb-[3vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    </div>
  )
}

export default Partners