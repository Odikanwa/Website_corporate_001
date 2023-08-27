import { dynamics_module } from "../constants";
import { SmallRoundedButton } from "./RoundedButton";


const DynamicsCard = () => {
  return (
    <div>
        {
            dynamics_module.map((module) => (
                <div key={module.id} className="h-auto w-[20vw] mb-[2vh]  inline-block flex-wrap text-xs py-[5vh] px-[3vw] mr-[2vw] box-shadow2 shadow-lg box-content justify-center place-content-center place-items-center text-center border-white">
                    <img
                    src={module.icon}
                    alt="Dynamics 365 Icon"
                    className="w-[50px] h-[50px] inline  object-contain pb-[2vh]"
                  />
                  <h1 className="font-bold pb-[3vh]">{module.title}</h1>
                  <p>{module.short_desc}</p>
                  <div className="w-[100%] ml-[30%]"><SmallRoundedButton>Learn More</SmallRoundedButton></div>
                  
                </div>
                
            ))
        }
    </div>
  )
}

export default DynamicsCard