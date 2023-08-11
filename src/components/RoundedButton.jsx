// eslint-disable-next-line react/prop-types, no-unused-vars
const RoundedButton = ({children, value}) => {
  return (
    <div className='bg-white text-[#000] text-md font-bold w-[37vw] lg:w-[150px] p-[10px] text-center justify-center rounded-[100px] mt-11 cursor-pointer border-[2px] hover:bg-[#0ef] hover:shadow-[#0ef] shadow-md'>
        {children}
    </div>
  )
}

export default RoundedButton