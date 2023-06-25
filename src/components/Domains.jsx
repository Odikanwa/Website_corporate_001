import { domains_photo } from "../assets";
const Domains = () => {
  return (
    <div className="h-auto lg:h-[80vh] w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pb-[10vh]">
      <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">Domain Purchase & Hosting</h1>
      <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#F8F8FF] text-black">
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
      <img src={domains_photo} alt="domains photo" height={350} width={450} className="object-contain rounded-[200px]"/>
    </div>
    </div>
    </div>
  )
}

export default Domains;