import { logo} from "../assets";
import {BsMeta, BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="h-auto lg:h-[60vh] w-[100vw] flex flex-col content-center justify-center place-items-center text-white bg-[#2257bf] px-[10vw] py-[5%]">
        <div className="h-auto w-[100%] flex flex-row flex-wrap pt-[5%]">
            <div className="flex flex-col w-[50%] lg:w-[33%]">
                <img src={logo} alt="logo" color="red" width={125} height={95} className=" object-contain mt-0 pt-0" />
                <h1 className="pt-[10px] pb-[20px] font-bold">Oreegi Technologies Limited</h1>
                <h3 className="py-[5px]">About us</h3>
                <h3 className="py-[5px]">Why us</h3>
            </div>
            <div className="w-[50%] lg:w-[33%]">
                <h1 className="font-bold text-lg py-[10px]">Services</h1>
                <p className="py-[5px]">Microsoft 365</p>
                <p className="py-[5px]">Domain Hosting</p>
                <p className="py-[5px]">Website templates</p>
                <p className="py-[5px]">LAN networks</p>
                <p className="py-[5px]">Surveillance systems</p>
                <p className="py-[5px]">Hardware Marketplace</p>
            </div>
            <div className="w-[50%] lg:w-[33%]">
                <h1 className="font-bold text-lg">Contact us</h1>
                <p className="py-[5px]">+234 000 000 0000</p>
                <h1 className="font-bold text-lg pt-[5%]">Enquiries</h1>
                <p className="py-[5px]">operations@oreegi.com</p>
            </div>
        </div>
        <div className="h-auto w-[100%] flex flex-col lg:flex-row mt-[5%] justify-between place-items-center">
            <div className="text-center inline-block py-[4%] lg:py-0">
                <p> &copy; Oreegi, 2023. All rights reserved.</p>
            </div>
            
            <div className="flex flex-row gap-10 justify-center place-items-center">
                <BsMeta className="h-[40px] w-[40px] px-[8px] text-center rounded-[500px] border-white border-[3px]"/>
                <BsTwitter className="h-[40px] w-[40px] px-[8px] text-center rounded-[500px] border-white border-[3px] "/>
                <BsInstagram className="h-[40px] w-[40px] px-[8px] text-center rounded-[500px] border-white border-[3px] "/>
                <FaLinkedinIn className="h-[40px] w-[40px] px-[8px] text-center rounded-[500px] border-white border-[3px] "/>
            </div>
        </div>
    </div>
  )
}

export default Footer