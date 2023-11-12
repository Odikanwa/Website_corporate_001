import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import RoundedButton from "../components/RoundedButton";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { AiFillWechat } from "react-icons/ai";
import emailjs from "@emailjs/browser";

// SERVICE ID
// TEMPLATE ID
// PUBLIC KEY

const schema = yup
  .object({
    company_name: yup.string().max(100).required(),
    company_address: yup.string().max(100).required(),
    user_email: yup.string().email().required(),
    user_number: yup.string().max(16).required(),
    service_type: yup.string().required(),
    message: yup.string().max(300).required(),
  })
  .required();

const ContactUs = () => {
  // const [data, setData] = useState("");
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = () => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_fzsjbbc",
        "template_dwxsz1c",
        form.current,
        "6sEnbw6wCMpCWHANw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          notify();
          clearForm();
        },
        (error) => {
          console.log(error.text);
          console.log("message failed");
        }
      );
  };

  const clearForm = () => {
    document.getElementById("company_name").value = " ";
    document.getElementById("company_address").value = " ";
    document.getElementById("user_email").value = " ";
    document.getElementById("user_number").value = " ";
    document.getElementById("service_type").value = " ";
    document.getElementById("message").value = " ";
  };

  const notify = () => toast("Hi there! Your mail has been sent.");

  return (
    <div className="h-auto w-[100vw]  text-[15px]">
      <div className="bg-[url(assets/about_oreegi.jpg)] flex flex-col">
        <div className="place-self-center w-[80vw] bg-[#10295B] opacity-70 h-auto mt-[10vh] mb-[13vh] py-[3vh] rounded-[50px]">
          <h1 className="text-center font-bold text-[28px] opacity-100">
            Get in Touch
          </h1>
          <p className="text-center text-[18px] opacity-100">
            Want to get in touch? We&apos;d love to hear from you. Here is how
            you can reach us.
          </p>
        </div>
      </div>

      <ToastContainer />

      <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] flex flex-col lg:flex-row justify-center gap-[8vw] pb-[10vh]">
        <div
          className={`h-auto w-[90vw] lg:w-[30vw] flex flex-col gap-[5vh] justify-center place-content-center text-center mt-[-10vh]`}
        >
          <div className="w-full flex flex-row justify-center place-content-center gap-[10%] align-middle ml-[5vw] border-[2px] py-[5vh] px-[3vw] rounded-[15px] bg-white box-shadow2 shadow-lg">
            <div className="justify-center place-content-center align-middle">
              <BsFillTelephoneOutboundFill className="justify-center place-content-center align-middle p-[8px] text-[45px] text-orange-500 border-[2px] border-orange-500 rounded-[200px]" />
            </div>
            <div className="text-black justify-center place-content-center align-middle text-center">
              <h1 className="text-center">For General Enquiries</h1>
              {/* <h1 className="font-bold text-[20px]">Reach us at</h1> */}
              <h1 className="font-bold">operations@oreegi.com</h1>
            </div>
          </div>

          <div className="w-full flex flex-row justify-center place-content-center ml-[5vw] gap-[10%] align-middle border-[2px] py-[5vh] px-[3vw] rounded-[15px] bg-white box-shadow2 shadow-lg">
            <div className="justify-center place-content-center align-middle">
              <BiSupport className="justify-center place-content-center align-middle p-[8px] text-[45px] text-orange-500 border-[2px] border-orange-500 rounded-[200px]" />
            </div>
            <div className="text-black justify-center place-content-center align-middle text-center">
              <h1 className="text-center">Have a complaint?</h1>
              {/* <h1 className="font-bold text-[20px]">+234 800 000 0000</h1> */}
              <h1 className="font-bold">support@oreegi.com</h1>
            </div>
          </div>
        </div>

        <div
          className={`h-auto w-[90vw] lg:w-[30vw] ml-[5vw] bg-white border-[2px] flex flex-col py-[5vh] px-[5vw] lg:px-[3vw] justify-center place-content-center text-center mt-[10vh] lg:mt-[-10vh] rounded-[15px] box-shadow2 shadow-lg`}
        >
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            {/* <Header /> */}
            <AiFillWechat className="justify-center place-content-center align-middle p-[8px] text-[45px] text-orange-500 border-[2px] border-orange-500 rounded-[50px] ml-[30%]" />
            <h1 className="text-black text-center pb-[2vh]">
              Or send us a message . . .
            </h1>
            <input
              {...register("company_name")}
              type="text"
              id="company_name"
              name="company_name"
              placeholder="Company Name"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.company_name?.message}</p>
            <input
              {...register("company_address")}
              id="company_address"
              type="text"
              name="company_address"
              placeholder="Company Address"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.company_address?.message}</p>
            <input
              {...register("user_email")}
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Work Email"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.user_email?.message}</p>
            <input
              {...register("user_number")}
              id="user_number"
              type="text"
              name="user_number"
              placeholder="Phone Number"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.user_number?.message}</p>
            <select
              {...register("service_type")}
              id="service_type"
              name="service_type"
              className={`w-full h-auto pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            >
              <option value="placeholder">Service Type</option>
              <option value="Microsoft 365">Microsoft 365</option>
              <option value="Dynamics 365">Dynamics 365</option>
              <option value="Domain Name & Hosting">
                Domain Name & Hosting
              </option>
              <option value="Custom Websites">Custom Websites</option>
              <option value="Lan Design & Implementation">
                Lan Design & Implementation
              </option>
              <option value="Surveillance Sytems">Surveillance Sytems</option>
              <option value="Managed Wifi">Managed Wifi</option>
            </select>
            <p className="text-red-500">{errors.service_type?.message}</p>
            <textarea
              {...register("message")}
              id="message"
              name="message"
              placeholder="Your request"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[10px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.message?.message}</p>
            <input
              type="submit"
              value="Send"
              className=" text-[#000] text-md font-bold w-[37vw] lg:w-[150px] p-[10px] text-center justify-center rounded-[100px] mt-5 cursor-pointer border-white bg-white border-[2px] hover:bg-[#0ef] hover:shadow-[#0ef] shadow-lg drop-shadow-lg"
            />
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
