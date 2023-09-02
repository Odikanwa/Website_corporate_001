import { useState } from "react";
import { useForm } from "react-hook-form";
import RoundedButton from "../components/RoundedButton";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { AiFillWechat } from 'react-icons/ai';


const ContactUs = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className='h-auto w-[100vw] bg-[#2257bf] text-[15px]'>
      <h1 className="text-center font-bold text-[25px] pt-[20vh]">Get in Touch</h1>
      <p className="text-center pb-[20vh] pt-[5vh]">Want to get in touch? We&apos;d love to hear from you. Here is how you can reach us.</p>

      <div className="h-auto lg:h-[80vh] w-[100vw] bg-[#F8F8FF] flex flex-col lg:flex-row justify-center gap-[8vw] pb-[10vh]">
        <div className={`h-auto w-[90vw] lg:w-[30vw] flex flex-col gap-[5vh] justify-center place-content-center text-center mt-[-10vh]`}>
        
        <div className="w-full flex flex-row justify-center place-content-center gap-[10%] align-middle ml-[5vw] border-[2px] py-[5vh] px-[3vw] rounded-[15px] bg-white box-shadow2 shadow-lg">
          <div className="justify-center place-content-center align-middle">
          <BsFillTelephoneOutboundFill className="justify-center place-content-center align-middle p-[8px] text-[45px] text-orange-500 border-[2px] border-orange-500 rounded-[200px]"/>
          </div>
          <div className="text-black justify-center place-content-center align-middle text-center">
          <h1 className="text-center">For General Enquiries</h1>
          {/* <h1 className="font-bold text-[20px]">Reach us at</h1> */}
          <h1 className="font-bold">operations@oreegi.com</h1>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center place-content-center ml-[5vw] gap-[10%] align-middle border-[2px] py-[5vh] px-[3vw] rounded-[15px] bg-white box-shadow2 shadow-lg">
          <div className="justify-center place-content-center align-middle">
          <BiSupport className="justify-center place-content-center align-middle p-[8px] text-[45px] text-orange-500 border-[2px] border-orange-500 rounded-[200px]"/>
          </div>
          <div className="text-black justify-center place-content-center align-middle text-center">
          <h1 className="text-center">Have a complaint?</h1>
          {/* <h1 className="font-bold text-[20px]">+234 800 000 0000</h1> */}
          <h1 className="font-bold">support@oreegi.com</h1>
          </div>
        </div>

        </div>
      <div className={`h-auto w-[90vw] lg:w-[30vw] ml-[5vw] bg-white border-[2px] flex flex-col py-[10vh] px-[5vw] justify-center place-content-center text-center mt-[10vh] lg:mt-[-10vh] rounded-[15px] box-shadow2 shadow-lg`}>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      {/* <Header /> */}
      <AiFillWechat className="justify-center place-content-center align-middle p-[8px] text-[45px] text-orange-500 border-[2px] border-orange-500 rounded-[50px] ml-[30%]"/>
      <h1 className="text-black text-center pb-[2vh]">Or send us a message . . .</h1>
      <input {...register("firstName")} placeholder="First name"  className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}/>
      <input {...register("lastName")} placeholder="Last name"  className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}/>
      <input {...register("email")} placeholder="Email"  className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}/>
      <textarea {...register("message")} placeholder="Your message" className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[10px] text-black border-[1px] shadow-lg bg-white form-shadow`}/>
      <p>{data}</p>
      {/* <input type="submit" /> */}
      <RoundedButton>Send</RoundedButton>
    </form>
    </div>

    </div>
    </div>
  )
}

export default ContactUs;