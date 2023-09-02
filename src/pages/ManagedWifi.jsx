import { wifi2 } from "../assets";

const ManagedWifiPage = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white text-[14px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Managed Wifi
        </h1>
        <div className="flex flex-col-reverse lg:flex-row content-between justify-center bg-[#2257bf]] text-white">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%]">
            <p className="pb-[2vh]">
              Unlock Seamless Connectivity with Managed WiFi Solutions! Elevate
              your network experience with our expertly designed and
              meticulously maintained WiFi services. Say goodbye to dead zones
              and slow connections, and hello to hassle-free, lightning-fast
              internet. Let us handle the tech, so you can focus on what you do
              best. Stay connected, stay productive, stay ahead with Managed
              WiFi!
            </p>
            <p>
              Empower your business with reliable, scalable, and hassle-free
              Managed WiFi today.
            </p>
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[5%] pt-[9%] lg:pt-[0px] pb-[10%] lg:pb-0 flex text-center justify-center place-items-center rounded-[500px]">
            <img
              src={wifi2}
              alt="domains photo"
              height={350}
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
            <em className="font-bold">Managed Wifi Service:</em> Oreegi offers
            comprehensive managed Wi-Fi services that are tailored to the unique
            needs of businesses across various industries. From initial network
            design and installation to ongoing monitoring and support, we ensure
            seamless connectivity.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Secure Networks:</em> Security is
            paramount in the digital age. Oreegi employs advanced encryption
            protocols, firewalls, and intrusion detection systems to safeguard
            networks against cyber threats and unauthorized access.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Scalability:</em> Our Managed Wi-Fi
            Solutions are designed to grow with your business. Whether
            you&apos;re a small startup or a large enterprise, we can scale your
            network to accommodate your expanding requirements.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Guest Wifi Services:</em>Enhance the
            customer experience by offering secure and high-speed guest Wi-Fi
            services. ConnectWave helps businesses set up and manage guest
            networks for retail, hospitality, and public spaces.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Custom Solutions:</em> We understand that
            every business is unique. ConnectWave offers customized Wi-Fi
            solutions, tailored to specific industry requirements and
            objectives.
          </p>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-5vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR SERVICES</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[2vh]">
            <em className="font-bold">Expertise:</em> Our team of certified professionals brings extensive experience in wireless technology, ensuring the deployment and management of top-tier Wi-Fi networks.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Reliability:</em> We guarantee high network uptime, reducing downtime and improving productivity for your organization.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Security:</em> Protecting your data is our priority. We implement robust security measures to safeguard your network and sensitive information.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Scalability:</em>As your business grows, your Wi-Fi network can grow with it. Our scalable solutions adapt to your changing needs.
          </p>

          <p className="pb-[2vh]">
            <em className="font-bold">Custom-focused Solutions:</em> At Oreegi, customer satisfaction is paramount. We work closely with our clients to understand their needs and provide responsive, personalized support.
        </p>
        </div>
      </div>
    </div>
  );
};

export default ManagedWifiPage;
