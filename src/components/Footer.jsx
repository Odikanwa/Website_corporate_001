import { logo} from "../assets";
const Footer = () => {
  return (
    <div className="h-[50vh] w-[100vw] flex flex-col content-center justify-center place-items-center text-white bg-[#09071f] px-[10vw]">
        <div className="h-auto w-[100%] flex flex-row">
            <div className="flex flex-col w-[33%]">
                <img src={logo} alt="logo" width={125} height={95} className=" object-contain mt-0 pt-0" />
                <h1>Oreegi Technologies Limited</h1>
                <h3>About us</h3>
                <h3>Why us</h3>
            </div>
            <div className="w-[33%]">
                <h1>Services</h1>
                <h1>Microsoft 365</h1>
                <h1>LAN networks</h1>
                <h1>Surveillance systems</h1>
                <h1>Hardware Marketplace</h1>
                <h1></h1>
            </div>
            <div className="w-[33%]">
                <h1>Contact us</h1>
                <h3>+234 000 000 0000</h3>
                <h1>Enquiries</h1>
                <h3>operations@oreegi.com</h3>
            </div>
        </div>
        <div className="h-auto w-[100%] flex flex-row mt-[5%]">
            <p className="text-center inline-block"> Copyright, Oreegi 2023. All rights reserved</p>
            <div></div>
        </div>
    </div>
  )
}

export default Footer