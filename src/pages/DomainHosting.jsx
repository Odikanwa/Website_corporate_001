import { domains_photo } from "../assets";

const DomainHosting = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">
          Domain Name & Hosting
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="pb-[2vh]">
              Welcome to the world of seamless digital presence and reliable
              online infrastructure. We are a leading provider of domain name
              and hosting solutions, offering businesses, individuals, and
              organizations the tools they need to establish a strong online
              identity and maintain a robust web presence. Our comprehensive
              range of services ensures that your digital journey is smooth,
              secure, and optimized for success.
            </p>
            <p>
              Oreegi empowers individuals and businesses to succeed online by
              providing them with the essential building blocks of a successful
              digital strategy.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
            <img
              src={domains_photo}
              alt="domains photo"
              height={450}
              width={500}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR SERVICES</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
        <p className="pb-[2vh]"><em className="font-bold">Domain Name Registration:</em> Choose from a diverse selection of domain extensions and secure a unique web address that reflects your brand identity. Our user-friendly domain search and registration process makes it easy to find and register the perfect domain for your website.</p>

        <p className="pb-[2vh]"><em className="font-bold">Web Hosting:</em> Our hosting solutions cater to websites of all sizes, from personal blogs to e-commerce platforms and corporate websites. We offer a variety of hosting options, including shared hosting, VPS hosting, dedicated servers, and cloud hosting, ensuring that your website performs optimally and reliably.</p>

        <p className="pb-[2vh]"><em className="font-bold">SSL Certificates:</em> Enhance the security and credibility of your website with our SSL certificates. Protect sensitive data, boost search engine rankings, and build trust with your visitors through encrypted connections.</p>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[5vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">WHY CHOOSE US</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
        <p className="pb-[2vh]"><em className="font-bold">Reliable Infrastructure:</em> Our servers ensure high uptime, fast loading speeds, and seamless performance for your website.</p>

        <p className="pb-[2vh]"><em className="font-bold">Expert Support:</em> Our dedicated support team is available 24/7 to assist you with any technical issues, inquiries, or guidance you may need.</p>

        <p className="pb-[2vh]"><em className="font-bold">Scalability:</em> As your website grows, our hosting solutions can scale to accommodate increased traffic and resource demands.</p>
        <p className="pb-[2vh]"><em className="font-bold">User-Friendly Interfaces:</em> Our intuitive control panels and interfaces make it easy for users of all levels to manage their domains and hosting services efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default DomainHosting;
