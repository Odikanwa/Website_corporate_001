import { network_photo } from "../assets";
const Networking = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-row content-center justify-center bg-[#F8F8FF] text-black px-[10vw] py-[10vh]">
      <div className="w-[50%] pr-[12%]">
        <h1>Network Design & Implementation</h1>
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
    <div className="w-[50%] pl-[5%]">
      <img src={network_photo} alt="network photo" height={450} width={550} className="object-contain rounded-[200px]"/>
    </div>
    </div>
  )
}

export default Networking