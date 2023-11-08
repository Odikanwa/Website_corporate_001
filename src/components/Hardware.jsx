const Hardware = () => {
  return (
    <div className="h-[100vh] w-[100vw]  bg-[#F8F8FF] text-black px-[10vw] pt-[5vh] pb-[10vh] border-t-[3px] z-100">
      <h1 className="font-bold text-[20px] lg:text-[30px] pb-[5%]">Hardware <span className="text-[#14adb8]">Market</span>place<span className="text-[#14adb8]">.</span></h1>

      <div className="bg-[url(assets/hardware.png)] z-20 h-[90%] w-[100%] bg-opacity-50 object-contain rounded-3xl">
        <div className='flex flex-col justify-center content-center h-[100%] w-[100%] px-5 py-5 bg-[rgba(20,52,114,0.8)] rounded-3xl'>
        <h1 className="font-black text-[white] lg:text-[45px] sm:text-[35px] xs:text-[30px] text-[40px] lg:leading-[45px] text-center mt-2">
          Coming <span className='text-[#0ef]'>Soon.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
