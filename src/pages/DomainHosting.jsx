import { domains_photo } from "../assets";
import { benefits_domainhosting } from "../constants";
import { NavLink } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
      {benefits_domainhosting.map((benefit) => (
        <div
          key={benefit.id}
          className="w-[80vw] lg:w-[30vw] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 bg-white border-[1px] justify-center place-content-center shadow-md rounded-[20px]"
        >
          <div className="text-cyan-500">{benefit.icon}</div>
          <div className="flex flex-col">
            <h1 className="font-medium text-[14px] py-[2vh]">
              {benefit.title}
            </h1>
            <p className="text-[12px]">{benefit.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const DomainHosting = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#F8F8FF] text-white text-[14px]">
      <div className="px-[10vw] py-[8vh] bg-[#2257bf]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:pt-[5%] lg:pb-0">
          Domain Name & Hosting
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between items-center justify-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="pb-[2vh] font-medium text-[20px]">
              Establish a strong online presence with our seamless digital solutions, including domain names and
              hosting services; ensuring security
              and success on your digital strategy.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center items-center justify-center place-items-center">
            <img
              src={domains_photo}
              alt="domains photo"
              height={350}
              width={400}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black">
        What&apos;s the Service About?
      </h1>

      <div className="place-content-center place-items-center justify-center border-b-[3px] border-x-slate-100 rounded-[30px] bg-white bg-[url('../src/assets/bg3.jpg')] border-white border-[2px] drop-shadow-md shadow-md text-black mx-[3vw] lg:mx-[20vw] py-[5vh]">
        <p className="px-[10vw] lg:px-[5vw] text-left border-l-[5px] border-l-cyan-500">
          Domain hosting is the digital real estate where your website finds its
          home. It&apos;s akin to the plot of land where you build your online
          presence. This service provides the necessary space and infrastructure
          to store your website&apos;s files, making it accessible to users
          worldwide. With domain hosting, your site enjoys 24/7 availability,
          ensuring visitors can reach you at any time. It offers security
          measures like SSL certificates to safeguard data and boost trust.
          Additionally, domain hosting provides email services, enabling you to
          communicate professionally. It&apos;s the cornerstone of your online
          identity, ensuring your website runs smoothly and serves its purpose
          seamlessly.
        </p>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] px-[10vw] text-black">
        What We Offer You
      </h1>

      <div className="h-auto w-[100vw]  text-black px-[10vw] py-[10vh] bg-[#F4F8FD] border-white border-[3px]">
        {/* <h1 className="font-bold text-[20px] py-[2vh]">OUR SERVICES</h1> */}
        <div className="w-[100%] flex flex-col gap-[8vh] pb-[3vh] box-border">
          <div className="w-[100%] lg:w-[70%] flex flex-col place-self-start">
            <div className="w-[70px] h-[70px] flex bg-[#14adb8] mb-[3vh] text-white rounded-full justify-center place-content-center">
              <p className="text-center font-bold text-[30px] py-[15px]">1</p>
            </div>

            <div className="flex flex-col lg:flex-row place-self-start gap-7 py-[10vh] items-center border-[1px] bg-white bg-[url('../src/assets/bg3.jpg')] drop-shadow-lg shadow-md rounded-[20px]">
              <h1 className="font-medium text-[30px]  px-[5%]">
                <span className="text-[#14adb8]">Domain</span> Name Registration
              </h1>
              <p className="border-l-[3px] border-l-cyan-500 px-[5%]">
                {" "}
                Choose from a diverse selection of domain extensions and secure
                a unique web address that reflects your brand identity. Our
                user-friendly domain search and registration process makes it
                easy to find and register the perfect domain for your website.
              </p>
            </div>
          </div>

          <div className="w-[100%] lg:w-[70%] flex flex-col place-self-center">
            <div className="w-[70px] h-[70px] flex bg-[#14adb8] mb-[3vh] text-white rounded-full justify-center place-content-center">
              <p className="text-center font-bold text-[30px] py-[15px]">2</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-7 py-[8vh] items-center border-[1px] bg-white bg-[url('../src/assets/bg3.jpg')] drop-shadow-lg shadow-md rounded-[20px]">
              <h1 className="font-medium text-[30px] px-[5%]">
                <span className="text-[#14adb8]">Web</span> Hosting
              </h1>
              <p className="border-l-[3px] border-l-cyan-500 px-[5%]">
                {" "}
                Our hosting solutions cater to websites of all sizes, from
                personal blogs to e-commerce platforms and corporate websites.
                We offer a variety of hosting options, including shared hosting,
                VPS hosting, dedicated servers, and cloud hosting, ensuring that
                your website performs optimally and reliably.
              </p>
            </div>
          </div>

          <div className="w-[100%] lg:w-[70px] flex flex-col place-self-end">
            <div className="w-[70px] h-[70px] flex bg-[#14adb8] mb-[3vh] text-white rounded-full justify-center place-content-center">
              <p className="text-center font-bold text-[30px] py-[15px]">3</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-7 py-[8vh] items-center border-[1px] bg-white bg-[url('../src/assets/bg3.jpg')] drop-shadow-lg shadow-md rounded-[20px]">
              <h1 className="font-medium text-[30px]  px-[5%]">
                <span className="text-[#14adb8]">SSL</span> Certificate
              </h1>
              <p className="border-l-[3px] border-l-cyan-500 px-[5%]">
                Ensure secure data transmission between your user&apos;s browser
                and the website server, safeguarding sensitive information like
                passwords and credit card details. Boost website trustworthiness
                by displaying a padlock icon and &quot;https://&quot; in the
                URL, assuring visitors of data protection. Additionally, search
                engines favor SSL-secured sites, improving SEO rankings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="font-medium text-[30px] text-center my-[15vh] text-black">
        Why Choose Us
      </h1>

      <div className="h-auto w-[98vw] text-black bg-[#F4F8FD] bg-[url('../src/assets/bg3.jpg')] border-[3px] drop-shadow-xl shadow-md border-white rounded-[100px] ml-[0.8vw]">
        <BenefitCard />
      </div>

      <div className="ml-[30%] lg:ml-[45%] pb-[5vw]">
        <NavLink to="/contact">
          <RoundedButton>Talk to us</RoundedButton>
        </NavLink>
      </div>
    </div>
  );
};

export default DomainHosting;
