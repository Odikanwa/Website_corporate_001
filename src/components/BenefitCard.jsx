import { benefits_aboutus } from "../constants"

const BenefitCard = () => {
  return (
    // <div className="h-auto w-[40vw] bg-red-500 flex gap-10 box-content text-[12px] rounded-2xl">
    <div className="h-auto w-[100%] flex flex-col lg:flex-row flex-wrap gap-[5vh] lg:gap-[2vw] py-[10vh] mr-[5vw] place-self-center justify-center place-items-center items-center">
        {benefits_aboutus.map((benefit) => (
            <div key={benefit.id} className="w-[80vw] lg:w-[30vw] flex flex-row text-left px-[4vw] lg:px-[2vw] py-[6vh] gap-3 bg-white border-[1px] justify-center place-content-center shadow-md rounded-[20px]">
                <div className="text-cyan-500">{benefit.icon}</div>
                <div className="flex flex-col">
                    <h1 className="font-medium text-[14px] py-[2vh]">{benefit.title}</h1>
                    <p className="text-[12px]">{benefit.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BenefitCard;