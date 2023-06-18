import { msp } from "../assets";

const Partners = () => {
  return (
    <div className="h-[30vh] w-[100vw] flex flex-row content-center justify-normal">
    <div className="w-[50vw] h-[100%] flex flex-col content-end justify-center place-items-end p-[20px] pr-[5%] bg-[#130f45]">
      <h1>Our Partners</h1>
      <img src={msp} alt="MSP logo" className="w-[250px] h-[150px] text-white object-contain text-center bg-[#09071f] rounded-lg"/>
    </div>

    <div className="h-[100%] w-[50vw] flex content-center justify-center place-items-center text-center pl-[5%] pr-[15%] py-[5%] bg-[#130f45] border-l-4 border-black">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
  )
}

export default Partners