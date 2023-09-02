import { dynamics } from "../assets";

const Dynamics365 = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Dynamics 365
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="pb-[2vh]">
              Unlock the power of seamless digital transformation with
              Microsoft&apos; Dynamics 365 suite. Elevate your business to new
              heights with intelligent, cloud-based solutions for sales,
              customer service, marketing, finance, operations, and more.
              Streamline processes, gain deeper insights, and engage customers
              like never before. Join the future of business with Dynamics 365.
            </p>
            <p>
              Oreegi empowers individuals and businesses to succeed online by
              providing them with the essential building blocks of a successful
              digital strategy.
            </p>
          </div>
          <div className=" bg-white w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center rounded-[500px]">
            <img
              src={dynamics}
              alt="domains photo"
              height={350}
              width={400}
              className="object-contain rounded-[200px]"
            />
          </div>
        </div>
      </div>
      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">Unlock Your Business Potential with Microsoft Dynamics 365</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Elevate your Business:</em> Discover a new realm of possibilities with Dynamics 365. Our cloud-based suite of intelligent business applications seamlessly integrates with your existing systems, providing a 360-degree view of your operations. From sales and marketing to finance and customer service, we&apos;ve got you covered..
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Power of Integration:</em> Experience the power of unified data and processes. Dynamics 365 breaks down silos, connecting every facet of your business. With AI-driven insights and automation, you&apos;ll make smarter decisions, deliver exceptional customer experiences, and stay ahead of the competition.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Tailored Solutions:</em> One size doesn&apos;t fit all. Dynamics 365 is highly customizable, allowing you to build solutions that fit your unique needs. Whether you&apos;re a startup or an enterprise, we offer a scalable platform that grows with you.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Customer-Centric Innovation:</em> We&apos;re committed to innovation that puts your customers first. Dynamics 365 evolves with the changing landscape, ensuring you&apos;re always equipped to deliver what your customers demand.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Tailored Solutions:</em> One size doesn&apos;t fit all. Dynamics 365 is highly customizable, allowing you to build solutions that fit your unique needs. Whether you&apos;re a startup or an enterprise, we offer a scalable platform that grows with you.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Your Success is our Success:</em> We&apos;re more than just a software provider; we&aops;re your partner in growth. Our dedicated support and a global network of experts are here to help you succeed every step of the way.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Dynamics365;
