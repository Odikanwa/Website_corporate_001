import { hardware_photo } from "../assets";

const Hardware = () => {
  return (
    <div className="h-[100vh] w-[100vw]  bg-[#F8F8FF] text-black px-[10vw] py-[10vh]">
        <h1 className="font-bold text-[35px] py-[1%]">Hardware Marketplace</h1>
        <img src={hardware_photo} alt="herosection image" className="h-[80%] w-[100%] object-cover rounded-[50px]"/>
        <div
        className={`relative m-0 w-[100%] h-[90%] mt-[-174%] lg:mt-[-38%] inset-0  text-center max-w-7xl flex items-start z-10`}
      >

        <div className='bg-[rgba(20,52,114,0.8)] h-[100%]  w-[100%] px-5 py-5 text-white rounded-[50px] absolute'>
        <div className='flex flex-col justify-center content-center h-[100%] w-[100%] px-5 py-5 rounded-lg text-white'>
          <h1 className="font-black text-[white] lg:text-[45px] sm:text-[35px] xs:text-[30px] text-[40px] lg:leading-[45px] text-center mt-2">
          Coming <span className='text-[#0ef]'>Soon.</span>
          </h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hardware