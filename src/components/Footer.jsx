import { logo} from "../assets";
import { Link } from "react-router-dom";
import {BsMeta, BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { styles } from "../styles";

const Footer = () => {
  return (
    <div className="h-auto lg:h-[65vh] w-[100vw] flex flex-col content-center justify-center place-items-center text-white bg-[#2257bf] px-[10vw] py-[3vh] text-[15px]">
        <div className="h-auto w-[100%] flex flex-row flex-wrap pt-[5%]">
            <div className="flex flex-col w-[50%] lg:w-[33%]">
                <img src={logo} alt="logo" color="red" width={125} height={95} className=" object-contain mt-0 pt-0" />
                <h1 className="pt-[10px] pb-[20px] font-bold">Oreegi Technologies Limited</h1>
                <Link to="/about"><h3 className="py-[5px] cursor-pointer">About us</h3></Link>
                <Link to="/about"><h3 className="py-[5px]">Why us</h3></Link>
            </div>
            <div className="w-[50%] lg:w-[33%] flex flex-col">
                <h1 className="font-bold text-lg py-[10px]">Services</h1>
                <Link to="/microsoft365" className="py-[5px] cursor-pointer">Microsoft 365</Link>
                <Link to="/domainhosting" className="py-[5px] cursor-pointer">Domain Hosting</Link>
                <Link to="/websitedev" className="py-[5px] cursor-pointer">Website templates</Link>
                <Link to="/surveillance" className="py-[5px] cursor-pointer">Surveillance systems</Link>
                <Link className="py-[5px] cursor-pointer">Hardware Marketplace</Link>
            </div>
            <div className="w-[50%] lg:w-[33%]">
            <Link to="/contactus" className="py-[5px] cursor-pointer"><h1 className="font-bold text-lg">Contact us</h1></Link>
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