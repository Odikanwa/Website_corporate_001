import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import RoundedButton from "../components/RoundedButton";
import { BsPerson } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { redirect } from "react-router-dom";

// SERVICE ID
// TEMPLATE ID
// PUBLIC KEY

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().max(16).required(),
  })
  .required();

const Portal = () => {
  // const [data, setData] = useState("");
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const goToPortal = () => {
    // e.preventDefault();
    // Use axios to fetch data from db
    // Use Tanstack to persist cache and server state
    // Use context & Reducer to persist client state
      // .then(
      //   (result) => {
      //     console.log(result.text);
      //     console.log("Login successful");
      //     notify();
      //     clearForm();
      //   },
      //   (error) => {
      //     console.log(error.text);
      //     console.log("Login failed");
      //   }
      // );
      redirect("/portal");
      console.log("unavailable now")
  };

  const clearForm = () => {
    document.getElementById("email").value = " ";
    document.getElementById("password").value = " ";
  };

  const notify = () => toast("Hi there! Login Successful!.");

  return (
    <div className="h-auto w-[100vw]  text-[15px]">
      <div className="bg-[url(assets/about_oreegi.jpg)] flex flex-col">
        <div className="place-self-center w-[80vw] bg-[#10295B] opacity-70 h-auto mt-[10vh] mb-[13vh] py-[3vh] rounded-[50px]">
          <h1 className="text-center font-bold text-[28px] opacity-100">
            Management Portal
          </h1>
          <p className="text-center text-[18px] opacity-100">
            Welcome to your client portal.
          </p>
        </div>
      </div>

      <ToastContainer />

      <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] flex flex-col lg:flex-row justify-center gap-[8vw] pb-[10vh]">

        <div
          className={`h-auto w-[90vw] md:w-[70vw] lg:w-[35vw] md:ml-[-5vw] lg:ml-[5vw] bg-white border-[2px] flex flex-col place-self-center py-[5vh] px-[5vw] md:px-[10vw] lg:px-[5vw] justify-center place-content-center text-center mt-[5vh] lg:mt-[-10vh] rounded-[15px] box-shadow2 shadow-lg`}
        >
          <form ref={form} onSubmit={handleSubmit(goToPortal)}>
            {/* <Header /> */}
            <h1 className="font-bold text-black text-[25px] text-center pb-[2vh]">
              SIGN <span className="text-[#14adb8]">IN</span>
            </h1>
            <input
              {...register("email")}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <input
              {...register("password")}
              id="password"
              type="text"
              name="password"
              placeholder="Password"
              className={`w-full pl-[6vw] lg:pl-[2vw] py-[10px] mb-[2vh] rounded-[40px] text-black border-[1px] shadow-lg bg-white form-shadow`}
            />
            <p className="text-red-500">{errors.password?.message}</p>
            <input
              type="submit"
              value="Continue"
              className=" text-[#000] text-md font-bold w-[37vw] lg:w-[150px] p-[10px] text-center justify-center rounded-[100px] mt-5 cursor-pointer border-white bg-white border-[2px] hover:bg-[#0ef] hover:shadow-[#0ef] shadow-lg drop-shadow-lg"
            />
            <div className="font-medium text-black pt-[3vh]">
            <p className="text-[#14adb8]">Forgot Password?</p>
            <p className="py-[1vh] font-bold">OR</p>
            <p>Don't have an Account? <span className="text-[#14adb8]">Register</span></p>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Portal;
