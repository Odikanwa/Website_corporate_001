import { microsoft_365 } from "../constants"
import RoundedButton from "./RoundedButton"
const Microsoft = () => {
  return (
    <div className="w-[100vw] h-auto lg:h-auto bg-[#2257bf] text-white px-[10vw] pb-[5vh]">
      <h1 className="font-bold text-[25px] lg:text-[30px] text-center pt-[3vh] lg:text-right text-white">Our Services...</h1>
      <h1 className="font-bold text-[30px] lg:text-[35px] py-[4%]">Microsoft 365</h1>
      <div className="lg:pr-[35%] pb-[4%] lg:pb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap content-between w-[100%] mt-[3vw]">
        {microsoft_365.map((items) => (
          <div key={items.id} className="basis-1/3 px-7 mb-[45px]">
            <h1 className="mb-[5px]">{items.name}</h1>
            <div>
              {items.apps.map((subItems) => (
                <>
                <img key={subItems.id} src={subItems.icon} alt="Microsoft Word Image" className="w-[70px] h-[70px] inline pr-[13px] object-contain"/>
                {/* <p className="text-sm">{subItems.title}</p> */}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <RoundedButton>Learn more</RoundedButton>
    </div>
  )
}

export default Microsoft