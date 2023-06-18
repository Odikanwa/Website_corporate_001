import {BsShieldFillPlus} from 'react-icons/bs'
BsShieldFillPlus
const WhyOreegi = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#F8F8FF] text-black px-[10vw] py-[5vh]'>
       <h1 className="mb-[3vh]">Why Oreegi.</h1>
       <div className="w-[100%] h-[100%] flex flex-row content-between">
        <div className="basis-1/2 pr-[19%]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className="basis-1/2">
            <div className='flex flex-row'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='flex flex-row'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='flex flex-row'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='flex flex-row'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default WhyOreegi