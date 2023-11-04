import { logo} from "../assets";
import { Link } from "react-router-dom";
import {BsMeta, BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { styles } from "../styles";

const Footer = () => {
  return (
    <div className="h-auto lg:h-[60vh] w-[100vw] flex flex-col content-center justify-center place-items-center text-white bg-[#10295B] px-[10vw] pb-[4vh] text-[14px]">
        <div className="h-auto w-[100%] flex flex-row flex-wrap pt-[5%]">
            <div className="flex flex-col w-[50%] lg:w-[33%]">
                <img src={logo} alt="logo" color="red" width={125} height={95} className=" object-contain mt-0 pt-0" />
                <h1 className="pt-[10px] font-bold">Oreegi Technologies Limited</h1>
                <h1 className="pt-[3px] pb-[20px] text-[14px]">8 Adesa Coker Street, Ikeja, Lagos</h1>
                <Link to="/about"><h3 className="py-[5px] cursor-pointer text-[14px]">About us</h3></Link>
                <Link to="/about"><h3 className="py-[5px] text-[14px]">Why us</h3></Link>
            </div>
            <div className="w-[50%] lg:w-[33%] flex flex-col text-[14px]">
                <h1 className="font-bold text-lg py-[10px]">Services</h1>
                <Link to="/microsoft365" className="py-[5px] cursor-pointer">Microsoft 365</Link>
                <Link to="/domainhosting" className="py-[5px] cursor-pointer">Domain Hosting</Link>
                <Link to="/dynamics365" className="py-[5px] cursor-pointer">Dynamics 365</Link>
                <Link to="/websitedev" className="py-[5px] cursor-pointer">Website templates</Link>
                <Link to="/surveillance" className="py-[5px] cursor-pointer">Surveillance systems</Link>
                <Link to="/managedwifi" className="py-[5px] cursor-pointer">Managed Wifi</Link>
                <Link className="py-[5px] cursor-pointer">Hardware Marketplace</Link>
            </div>
            <div className="w-[50%] lg:w-[33%]">
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