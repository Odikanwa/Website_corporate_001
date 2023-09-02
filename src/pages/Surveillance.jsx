import { surveillance_photo } from "../assets";

const Surveillance = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Surveillance Systems
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={surveillance_photo}
              alt="network photo"
              height={450}
              width={550}
              className="object-contain rounded-[200px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[12%]">
            <p>
              Step into a world where safety and security are paramount. Our
              surveillance systems offer state-of-the-art solutions designed to
              protect, monitor, and secure your premises with cutting-edge
              technology. From comprehensive video surveillance to intelligent
              analytics, our platform is your gateway to a safer, more secure
              environment. Whether you are a homeowner, business owner, or
              organization, our advanced surveillance systems redefine how you
              safeguard your assets and ensure peace of mind.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR SERVICES</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Video Surveillance: </em> Our range of
            high-definition cameras captures every detail with exceptional
            clarity, ensuring your property is under constant watch. Monitor
            live feeds and access recorded footage from anywhere, anytime.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Remote Monitoring:</em> Stay connected to
            your surveillance system even when you are away. Our remote
            monitoring solutions enable real-time access to camera feeds and
            alerts on your preferred devices.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Intelligent Analytics:</em> Elevate your
            security with smart surveillance. Our systems offer advanced
            analytics, including facial recognition, motion detection, and
            object tracking, enhancing your ability to identify and respond to
            potential threats.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Customised Solutions:</em> We understand
            that each environment is unique. Our experts collaborate with you to
            design tailored surveillance systems that cater to your specific
            security needs and preferences.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Integration:</em> Seamlessly integrate
            your surveillance system with other security solutions, access
            control systems, and automation technologies to create a
            comprehensive security ecosystem.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Support & Maintenance:</em> Our dedicated
            support team ensures your surveillance system remains operational at
            all times. From troubleshooting to routine maintenance, we are here
            to keep your security intact.
          </p>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] py-[5vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">WHY CHOOSE US</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Expertise: </em> Our team comprises
            skilled professionals with a deep understanding of surveillance
            technology, ensuring effective and reliable system design and
            implementation.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Cutting-Edge Technology:</em> We stay
            up-to-date with the latest advancements in surveillance systems,
            ensuring you benefit from state-of-the-art features and
            capabilities.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Customization:</em> Your security needs
            are unique. Our solutions are tailored to your requirements,
            ensuring optimal coverage and protection.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Ease of Use:</em> Our user-friendly
            interfaces make it simple to monitor and manage your surveillance
            system, putting control at your fingertips.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Client-Centric Approach:</em> We
            prioritize your satisfaction and security. Our solutions are built
            to empower you with comprehensive security measures and unparalleled
            peace of mind.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Client-Centric Approach:</em> We
            prioritize client satisfaction, aiming to build long-lasting
            partnerships based on trust, communication, and results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
