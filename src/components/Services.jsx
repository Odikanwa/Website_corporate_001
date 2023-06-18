import { microsoft_365 } from "../constants"
const Services = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#09071f] text-white px-[10vw] py-[5vh]">
      <h1 className="mb-[3vh]">Our Services</h1>
      <h2 className="mb-[3vh]">Microsoft 365</h2>
      <div className="pr-[35%]">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className="flex flex-row flex-wrap content-between w-[100%] mt-[3vw]">
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
    </div>
  )
}

export default Services