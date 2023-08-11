import { microsoft_365 } from "../constants";
import { m365 } from "../assets";

const Microsoft365 = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#2257bf] text-white text-[15px]">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[25px] lg:text-[30px] py-[10%] lg:py-[5%]">
          Microsoft 365
        </h1>
        <div className="flex flex-col lg:flex-row content-between justify-center ">
          <div className="w-[100%] lg:w-[50%] lg:pr-[12%] py-[10%] lg:py-0 flex text-center justify-center place-items-start">
            <img
              src={m365}
              alt="network photo"
              height={250}
              width={350}
              className="object-contain rounded-[200px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] lg:pl-[8%] lg:mr-[5%]">
            <p className="pb-[2vh]">
              Microsoft 365, a comprehensive suite of productivity tools and
              cloud-based services developed by Microsoft Corporation, is
              designed to empower individuals, teams, and businesses to achieve
              their goals with enhanced efficiency and collaboration. Launched
              in April 2020, Microsoft 365 represents a transformative shift in
              how organizations approach their work, enabling seamless
              communication, streamlined workflows, and secure data management.
            </p>
            <p>
              Microsoft 365 is part of the Microsoft Intelligent Cloud segment,
              a division dedicated to providing cutting-edge cloud solutions and
              services.
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[2vh]">KEY BENEFITS</h1>
        <div className="w-[100%] lg:w-[60%] pb-[3vh]">
          <p className="pb-[1vh]">
            <em className="font-bold">Enhanced Collaboration:</em> Microsoft 365
            fosters teamwork and communication through real-time collaboration
            features, enabling teams to work together regardless of their
            location.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Flexibility and Mobility:</em> With
            cloud-based services, users can access their work and collaborate
            from any device with internet connectivity.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Productivity Boost:</em> Integrated
            applications, templates, and intelligent features help streamline
            tasks and improve overall efficiency.
          </p>

          <p className="pb-[1vh]">
            <em className="font-bold">Data Security:</em> Microsoft 365 offers
            robust security features to protect data, ensuring compliance with
            industry regulations and standards.
          </p>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <h1 className="font-bold text-[20px] py-[4vh] px-7">KEY OFFERINGS</h1>
        <div className="flex flex-col lg:flex-row flex-wrap content-between w-[100%]">
          {microsoft_365.map((items) => (
            <div key={items.id} className="basis-1/3 px-7 mb-[40px]">
              <h1 className="mb-[5px]">{items.name}</h1>
              <div>
                {items.apps.map((subItems) => (
                  <>
                    <img
                      key={subItems.id}
                      src={subItems.icon}
                      alt="Microsoft Image"
                      className="w-[60px] h-[60px] inline pr-[13px] object-contain"
                    />
                    {/* <p className="text-sm">{subItems.title}</p> */}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Microsoft365;
