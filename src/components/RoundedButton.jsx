/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
const RoundedButton = ({children, value}) => {
  return (
    <div className='bg-white text-[#000] text-md font-bold w-[37vw] lg:w-[150px] p-[10px] text-center justify-center rounded-[100px] mt-11 cursor-pointer border-white border-[2px] hover:bg-[#0ef] hover:shadow-[#0ef] shadow-lg drop-shadow-lg'>
        {children}
    </div>
  )
}

export const SmallRoundedButton = ({children}) => {
  return (
    <div className='bg-white  text-[#000] text-xs w-[37vw] lg:w-[100px] py-[7px] px-[10px] rounded-[100px] mt-11 cursor-pointer border-[1px] hover:bg-[#0ef] hover:shadow-[#0ef] shadow-md place-content-center place-items-center justify-center text-center'>
        {children}
    </div>
  )
}


export default RoundedButton;