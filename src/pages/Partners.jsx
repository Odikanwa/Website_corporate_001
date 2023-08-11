import { msp } from "../assets";

const Partners = () => {
  return (
    <div className="h-auto lg:auto w-[100vw] bg-[#2257bf] text-white text-[15px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Microsoft (CSP)
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center  bg-[#2257bf] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p>
              With a profound commitment to driving digital transformation, we
              have forged a dynamic partnership with Microsoft, a global
              technology leader. Leveraging our collective expertise, we create
              tailored Microsoft 365 solutions that amplify business operations,
              enhance collaboration, and elevate success to unprecedented
              heights. Our mission is to unlock the full spectrum of Microsoft
              365 capabilities, ensuring our clients harness every tool to its
              utmost potential.
            </p>
          </div>

          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
            <img
              src={msp}
              alt="network photo"
              height={350}
              width={420}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR PARNERSHIP OFFERINGS</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Strategic Implementation: </em> Our team of skilled professionals designs and implements Microsoft 365 solutions aligned with your unique business objectives. From initial setup to comprehensive migration, we ensure a seamless transition to the Microsoft 365 ecosystem.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Customised Solutions:</em> Recognizing that every business is distinct, we craft tailor-made Microsoft 365 configurations that optimize productivity and align with your workflows.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Collaboration Excellence:</em> Microsoft Teams, SharePoint, and other collaboration tools are our playground. We create virtual spaces where teams connect, ideate, and execute seamlessly, regardless of their physical locations.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Data Security & Compliance:</em>  Upholding the highest standards of data protection, we integrate robust security measures and compliance protocols into your Microsoft 365 environment.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Training & Adoption:</em>  Empower your workforce with comprehensive training and adoption strategies, ensuring they harness the full power of Microsoft 365&apos;s features.
          </p>
        </div>  
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[5vh] pb-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR SERVICES</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Microsoft-Certified Expertise: </em> Our team boasts Microsoft-certified professionals who possess an in-depth understanding of Microsoft 365&apos;s intricate ecosystem.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Tailored Approach:</em> We don&apos;t believe in one-size-fits-all. Our solutions are meticulously tailored to your business&apos;s unique needs, fostering maximum efficiency.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Reliability:</em> Our solutions are built for stability and high availability, ensuring uninterrupted communication and connectivity.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Result-Driven:</em> Our track record speaks volumes. We measure our success by your success; tangible improvements in productivity, collaboration, and growth.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">End-to-End Support:</em> From inception to implementation and beyond, our support is unwavering. We&apos;re your partners every step of the way.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Innovation at Heart:</em> We are continuously exploring and integrating the latest Microsoft 365 innovations to keep you at the forefront of technology trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
