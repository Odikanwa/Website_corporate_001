import { network_photo } from "../assets";

const Lan = () => {
  return (
    <div className="h-auto lg:auto w-[100vw] bg-[#2257bf] text-white">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">
          Network Design & Implementation
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center  bg-[#2257bf] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p>
              Explore the realm of next-generation connectivity and network
              solutions with our specialized network design and implementation
              services. Our platform is your gateway to unlocking the power of
              seamless communication, robust infrastructure, and optimized
              network performance. Whether you&apos;re a business seeking to
              enhance operational efficiency or an organization striving for
              digital transformation, our expertise empowers you to create,
              implement, and manage networks that drive success.
            </p>
          </div>

          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center">
            <img
              src={network_photo}
              alt="network photo"
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
          <p className="pb-[2vh]">
            <em className="font-bold">Network Design: </em> Our team of
            experienced network architects crafts comprehensive network designs
            tailored to your specific needs. We analyze your requirements, plan
            efficient architectures, and create blueprints that optimize
            performance, scalability, and security.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Network Implementation:</em> From
            conception to realization, we transform network designs into
            tangible, functional solutions. Our implementation process is
            meticulous, ensuring seamless deployment of hardware, software, and
            configurations to bring your network vision to life.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Network Optimization:</em> Streamline and
            enhance your existing network infrastructure with our optimization
            services. We fine-tune configurations, analyze traffic patterns, and
            identify bottlenecks to maximize efficiency and reliability..
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Wireless Solutions:</em> Wireless
            Solutions: Create seamless wireless environments with our advanced
            Wi-Fi and wireless networking solutions. From office spaces to large
            campuses, our wireless designs ensure reliable coverage and
            high-speed connectivity.
          </p>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[5vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR SERVICES</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Expertise: </em> Our team comprises skilled professionals with extensive experience in network design, communication, and cybersecurity.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Customization:</em> We understand that each organization has unique needs. Our solutions are tailored to align with your business goals and requirements.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Reliability:</em> Our solutions are built for stability and high availability, ensuring uninterrupted communication and connectivity.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Scalability:</em> Whether you are a small startup or a large enterprise, our solutions can scale to accommodate your growth and evolving needs.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Innovation:</em> Stay ahead of technological advancements with our commitment to innovation, ensuring your network remains future-proof.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Client-Centric Approach:</em> We prioritize client satisfaction, aiming to build long-lasting partnerships based on trust, communication, and results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lan;
