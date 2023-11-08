import { logo} from "../assets";
import { Link } from "react-router-dom";
import {BsMeta, BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { styles } from "../styles";

const Footer = () => {
  return (
    <div className="h-auto lg:h-[60vh] w-[100vw] flex flex-col content-center justify-center place-items-center font-light text-white bg-[#10295B] opacity-90 px-[10vw] pb-[4vh] text-sm">
        <div className="h-auto w-[100%] flex flex-row flex-wrap justify-between pt-[5%]">
            <div className="flex flex-col ">
                <img src={logo} alt="logo" color="red" width={125} height={95} className=" object-contain mt-0 pt-0" />
                <h1 className="pt-[10px] font-bold">Oreegi Technologies Limited</h1>
                <h1 className="pt-[3px] pb-[20px] text-[14px]">8 Adesa Coker Street, Ikeja, Lagos</h1>
                <Link to="/about"><h3 className="py-[5px] cursor-pointer text-[14px] hover:text-[#0ef] hover:underline hover:underline-offset-8">About us</h3></Link>
                <Link to="/about"><h3 className="py-[5px] text-[14px] hover:text-[#0ef] hover:underline hover:underline-offset-8">Why us</h3></Link>
            </div>
            <div className=" flex flex-col">
                <h1 className="font-bold text-lg py-[10px]">Services</h1>
                <Link to="/microsoft365" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8 ">Microsoft 365</Link>
                <Link to="/domainhosting" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8">Domain Hosting</Link>
                <Link to="/dynamics365" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8">Dynamics 365</Link>
                <Link to="/websitedev" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8">Website templates</Link>
                <Link to="/surveillance" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8">Surveillance systems</Link>
                <Link to="/managedwifi" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8">Managed Wifi</Link>
                <Link className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8">Hardware Marketplace</Link>
            </div>

            <div className=" flex flex-col">
                <h1 className="font-bold text-lg py-[10px]">Useful Links</h1>
                <Link to="/contact" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8 ">Partner with us</Link>
                <Link to="/contact" className="py-[5px] cursor-pointer hover:text-[#0ef] hover:underline hover:underline-offset-8 ">Careers</Link>
            </div>

            <div className="">
            <Link to="/contactus" className="py-[5px] cursor-pointer"><h1 className="font-bold text-lg">Contact us</h1></Link>
            <p className="py-[5px]">support@oreegi.com</p>
                <h1 className="font-bold text-lg pt-[5%]">Enquiries</h1>
                <p className="py-[5px]">operations@oreegi.com</p>
            </div>
        </div>
        <div className="h-auto w-[100%] flex flex-col lg:flex-row mt-[2%] justify-between place-items-center">
            <div className="text-center inline-block py-[4%] lg:py-0">
                <p> &copy; Oreegi, 2023. All rights reserved.</p>
            </div>
            
            <div className="flex flex-row gap-10 justify-center place-items-center">
                <BsMeta className={`${styles.socialMediaIcons}`}/>
                <BsTwitter className={`${styles.socialMediaIcons}`}/>
                <BsInstagram className={`${styles.socialMediaIcons}`}/>
                <FaLinkedinIn className={`${styles.socialMediaIcons}`}/>
            </div>
        </div>
    </div>
  )
}

export default Footer