import {BsShieldFillPlus} from 'react-icons/bs'
import RoundedButton from './RoundedButton';

const About = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#F8F8FF] text-black px-[10vw] py-[5vh]'>
       <h1 className="font-bold text-[30px] lg:text-[35px] pt-[5%] pb-[3%]">About Oreegi</h1>
       <div className="w-[100%] flex flex-col lg:flex-row content-between">
        <div className="basis-1/2 pr-[19%] pb-[4%] lg:pb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className="basis-1/2">
            <div className='flex flex-row py-[1%]'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='flex flex-row py-[1%]'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='flex flex-row py-[1%]'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className='flex flex-row py-[1%]'>
                <BsShieldFillPlus className='h-[40px] w-[40px] text-green-500 pr-[10px]'/> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <RoundedButton>Learn more</RoundedButton>
        </div>
       </div>
    </div>
  )
}

export default About;