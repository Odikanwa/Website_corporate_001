import { website_photo } from "../assets";

const WebsiteDev = () => {
  return (
    <div className="h-auto lg:h-auto w-[100vw] bg-[#2257bf] text-white">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">
          Custom Websites & Templates
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={website_photo}
              alt="network photo"
              height={450}
              width={550}
              className="object-contain rounded-[200px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[8%]">
            <p className="mb-[2vh]">
              Let&apos;s walk you through a world of creativity, design, and
              seamless online experiences. We specialize in providing
              cutting-edge website templates that empower individuals,
              businesses, and organizations to create stunning, functional, and
              responsive websites without the need for extensive coding or
              design skills. Our diverse collection of templates caters to a
              wide range of industries and purposes, ensuring that your digital
              vision comes to life effortlessly.
            </p>
            <p>
              Whether you&apos;re a small business owner, a creative
              professional, or an entrepreneur, our templates offer a gateway to
              a captivating and immersive digital journey.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">OUR BENEFITS</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[1vh]">
            <em className="font-bold">Responsive Design:</em> Our templates are
            meticulously crafted to ensure seamless responsiveness across all
            devices, from desktops to smartphones and tablets. Your website will
            look stunning and function flawlessly on any screen size.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Style Varieties:</em> Choose from a wide
            array of styles, from minimalist and modern to bold and artistic.
            Our templates cater to diverse industries, including business,
            e-commerce, portfolio, blog, and more.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Customization:</em> Each template is fully
            customizable, allowing you to personalize colors, fonts, layouts,
            and content to align with your brand and vision. No coding expertise
            required.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">User-Friendly:</em> Our templates are
            designed with user experience in mind. Intuitive interfaces make it
            easy to modify and update your website, giving you full control over
            your online presence.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Compatibility:</em> Our templates are
            designed to seamlessly integrate with popular website builders and
            content management systems, ensuring a smooth and hassle-free setup
            process.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Support & Updates:</em> Enjoy access to
            our dedicated support team and stay up-to-date with regular template
            updates, ensuring that your website remains current and functional.
          </p>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[5vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">WHY CHOOSE US</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[1vh]">
            <em className="font-bold">Time Saving:</em> Skip the lengthy design and development process. Our templates provide a ready-made foundation, allowing you to launch your website quickly and efficiently.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Professional Aesthetics:</em> Benefit from the expertise of our design professionals, who create visually appealing and aesthetically pleasing templates that make your website stand out.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Affordability:</em> Save on design and development costs with our cost-effective templates, which offer exceptional value for their quality and features.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Future-Proof:</em> Regular updates and compatibility ensure that your website remains functional and engaging as web design trends evolve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDev;
