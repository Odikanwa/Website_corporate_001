import { microsoft_365 } from "../constants";
import { m365 } from "../assets";

const Microsoft365 = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#2257bf] text-white">
      <div className="px-[10vw] pb-[10vh] pt-[10vh]">
        <h1 className="font-bold text-[30px] lg:text-[35px] py-[10%] lg:py-[5%]">
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
          <div className="w-[100%] lg:w-[50%] lg:pl-[12%] lg:mr-[5%]">
            <p className="pb-[2vh]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
        <p className="w-[100%] lg:w-[60%] pb-[3vh]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="w-[100%] lg:w-[60%] pb-[3vh]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="h-auto w-[100vw] bg-[#F8F8FF] text-black px-[10vw] pt-[10vh]">
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
