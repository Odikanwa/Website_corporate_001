const Hardware = () => {
  return (
    <div className="h-[100vh] w-[100vw]  bg-[#F8F8FF] text-black px-[10vw] py-[10vh] z-100">
      <h1 className="font-bold text-[35px] py-[1%]">Hardware Marketplace</h1>

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
